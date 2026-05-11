import { useState, useEffect, useRef } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy, writeBatch } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../hooks/useAuth';
import type { StudentProfile } from '../hooks/useAuth';
import * as XLSX from 'xlsx';
import { 
    Users, Plus, Trash2, Edit3, Save, X, LogOut, 
    Search, ChevronDown, ChevronUp, AlertCircle, CheckCircle2,
    Shield, Download, Upload, FileSpreadsheet, Eye
} from 'lucide-react';

interface StudentForm {
    nombre: string;
    apellido: string;
    dni: string;
    acompanante: string;
    institucion: string;
    curso: string;
}

const EMPTY_FORM: StudentForm = {
    nombre: '', apellido: '', dni: '', acompanante: '', institucion: '', curso: ''
};

interface ImportRow { nombre: string; apellido: string; dni: string; acompanante: string; institucion: string; curso: string; }

export function AdminPanel() {
    const { signOut, adminUser } = useAuth();
    const [students, setStudents] = useState<StudentProfile[]>([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState<StudentForm>(EMPTY_FORM);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [search, setSearch] = useState('');
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
    const [sortAsc, setSortAsc] = useState(true);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [importRows, setImportRows] = useState<ImportRow[] | null>(null);
    const [importing, setImporting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    const fetchStudents = async () => {
        try {
            const q = query(collection(db, 'alumnos'), orderBy('apellido'));
            const snap = await getDocs(q);
            setStudents(snap.docs.map(d => ({ id: d.id, ...d.data() }) as StudentProfile));
        } catch {
            showToast('Error al cargar alumnos', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchStudents(); }, []);

    const handleSave = async () => {
        if (!form.nombre || !form.apellido || !form.dni) {
            showToast('Nombre, apellido y DNI son obligatorios', 'error');
            return;
        }
        setSaving(true);
        try {
            if (editingId) {
                await updateDoc(doc(db, 'alumnos', editingId), { ...form });
                showToast('Alumno actualizado correctamente');
            } else {
                await addDoc(collection(db, 'alumnos'), { ...form });
                showToast('Alumno agregado correctamente');
            }
            setForm(EMPTY_FORM);
            setEditingId(null);
            setShowForm(false);
            fetchStudents();
        } catch {
            showToast('Error al guardar', 'error');
        } finally {
            setSaving(false);
        }
    };

    const handleEdit = (student: StudentProfile) => {
        setForm({
            nombre: student.nombre,
            apellido: student.apellido,
            dni: student.dni,
            acompanante: student.acompanante,
            institucion: student.institucion,
            curso: student.curso || ''
        });
        setEditingId(student.id);
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        setDeletingId(id);
        try {
            await deleteDoc(doc(db, 'alumnos', id));
            showToast('Alumno eliminado');
            fetchStudents();
        } catch {
            showToast('Error al eliminar', 'error');
        } finally {
            setDeletingId(null);
        }
    };

    const handleCancel = () => {
        setForm(EMPTY_FORM);
        setEditingId(null);
        setShowForm(false);
    };

    const filtered = students
        .filter(s => {
            const q = search.toLowerCase();
            return (
                s.nombre?.toLowerCase().includes(q) ||
                s.apellido?.toLowerCase().includes(q) ||
                s.dni?.includes(q) ||
                s.institucion?.toLowerCase().includes(q)
            );
        })
        .sort((a, b) => {
            const comp = (a.apellido + a.nombre).localeCompare(b.apellido + b.nombre);
            return sortAsc ? comp : -comp;
        });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            const data = ev.target?.result;
            const wb = XLSX.read(data, { type: 'binary' });
            const ws = wb.Sheets[wb.SheetNames[0]];
            const rows: Record<string, string>[] = XLSX.utils.sheet_to_json(ws, { defval: '' });

            const cleanDNI = (d: string) => String(d).replace(/\./g, '').replace(/,/g, '').trim();

            // Detect acompañante from the secondary table at the bottom
            let acompananteNombre = '';
            const acompRow = rows.find(r => {
                const val = String(r['ACOMPAÑANTE'] || r['Acompañante'] || r['acompanante'] || '').trim();
                return val && val !== 'ACOMPAÑANTE' && val !== 'Acompañante';
            });
            if (acompRow) {
                const raw = String(acompRow['ACOMPAÑANTE'] || acompRow['Acompañante'] || acompRow['acompanante'] || '').trim();
                if (raw.includes(',')) {
                    const [ap, nm] = raw.split(',');
                    acompananteNombre = `${nm.trim()} ${ap.trim()}`;
                } else {
                    acompananteNombre = raw;
                }
            }

            // Parse student rows from ESTUDIANTE column
            const mapped: ImportRow[] = rows
                .filter(r => {
                    const est = String(r['ESTUDIANTE'] || r['Estudiante'] || r['nombre'] || r['Nombre'] || '').trim();
                    const dniRaw = cleanDNI(String(r['DNI'] || r['dni'] || ''));
                    return est && est !== 'ESTUDIANTE' && est !== 'Estudiante' && dniRaw.length >= 7;
                })
                .map(r => {
                    const fullName = String(r['ESTUDIANTE'] || r['Estudiante'] || '').trim();
                    let apellido = '';
                    let nombre = '';
                    if (fullName.includes(',')) {
                        const [ap, nm] = fullName.split(',');
                        apellido = ap.trim();
                        nombre = nm.trim();
                    } else if (fullName) {
                        const parts = fullName.split(' ');
                        apellido = parts[0];
                        nombre = parts.slice(1).join(' ');
                    } else {
                        apellido = String(r['apellido'] || r['Apellido'] || r['APELLIDO'] || '').trim();
                        nombre = String(r['nombre'] || r['Nombre'] || r['NOMBRE'] || '').trim();
                    }
                    return {
                        nombre,
                        apellido,
                        dni: cleanDNI(String(r['DNI'] || r['dni'] || '')),
                        acompanante: acompananteNombre || String(r['acompanante'] || r['Acompañante'] || '').trim(),
                        institucion: 'Instituto Educativo Modelo',
                        curso: String(r['curso'] || r['Curso'] || r['CURSO'] || '').trim(),
                    };
                })
                .filter(r => r.nombre && r.apellido && r.dni);

            setImportRows(mapped);
        };
        reader.readAsBinaryString(file);

        e.target.value = '';
    };

    const handleImportConfirm = async () => {
        if (!importRows || importRows.length === 0) return;
        setImporting(true);
        try {
            const batch = writeBatch(db);
            importRows.forEach(row => {
                const ref = doc(collection(db, 'alumnos'));
                batch.set(ref, row);
            });
            await batch.commit();
            showToast(`${importRows.length} alumnos importados correctamente`);
            setImportRows(null);
            fetchStudents();
        } catch {
            showToast('Error al importar', 'error');
        } finally {
            setImporting(false);
        }
    };

    const exportCSV = () => {
        const header = 'Apellido,Nombre,DNI,Acompañante,Institución,Curso';
        const rows = students.map(s =>
            `"${s.apellido}","${s.nombre}","${s.dni}","${s.acompanante}","${s.institucion}","${s.curso || ''}"`
        );
        const blob = new Blob([header + '\n' + rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'alumnos-vinculacion.csv';
        a.click();
    };

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            {/* Toast */}
            {toast && (
                <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-xl text-sm font-bold animate-in slide-in-from-right duration-300 ${
                    toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}>
                    {toast.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    {toast.msg}
                </div>
            )}

            {/* Header */}
            <header className="bg-brand-navy/95 border-b border-white/10 px-4 py-4 sticky top-0 z-40 backdrop-blur-md">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-brand-yellow/20 p-2 rounded-lg">
                            <Shield className="w-5 h-5 text-brand-yellow" />
                        </div>
                        <div>
                            <h1 className="font-bold text-white text-sm uppercase tracking-widest">Panel de Administración</h1>
                            <p className="text-gray-500 text-xs">{adminUser?.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={signOut}
                        className="flex items-center gap-2 text-xs text-gray-400 hover:text-brand-red transition-colors font-bold uppercase tracking-widest border border-white/10 px-3 py-2 rounded-lg hover:border-brand-red/50"
                    >
                        <LogOut className="w-3.5 h-3.5" /> Salir
                    </button>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-brand-yellow">{students.length}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Alumnos Cargados</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-green-400">
                            {new Set(students.map(s => s.institucion)).size}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Instituciones</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center col-span-2 sm:col-span-1">
                        <div className="text-3xl font-bold text-blue-400">
                            {new Set(students.map(s => s.acompanante).filter(Boolean)).size}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Acompañantes</div>
                    </div>
                </div>

                {/* Form Toggle */}
                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => { setShowForm(!showForm); if (showForm) handleCancel(); }}
                        className="flex items-center gap-2 bg-brand-yellow text-brand-navy font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg hover:bg-yellow-400 transition-all text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        {showForm && !editingId ? 'Cancelar' : 'Agregar Alumno'}
                    </button>
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all text-sm"
                    >
                        <FileSpreadsheet className="w-4 h-4" /> Importar Excel
                    </button>
                    <button
                        onClick={exportCSV}
                        className="flex items-center gap-2 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all text-sm"
                    >
                        <Download className="w-4 h-4" /> Exportar CSV
                    </button>
                    <input ref={fileInputRef} type="file" accept=".xlsx,.xls,.csv" className="hidden" onChange={handleFileChange} />
                </div>

                {/* Import Preview */}
                {importRows && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 animate-in fade-in duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-green-400 uppercase tracking-widest text-sm flex items-center gap-2">
                                <Eye className="w-4 h-4" /> Vista previa — {importRows.length} alumnos encontrados
                            </h3>
                            <button onClick={() => setImportRows(null)} className="text-gray-500 hover:text-white"><X className="w-4 h-4" /></button>
                        </div>
                        <div className="max-h-48 overflow-y-auto space-y-1 mb-4">
                            {importRows.map((r, i) => (
                                <div key={i} className="text-xs text-gray-300 bg-white/5 px-3 py-2 rounded flex gap-4">
                                    <span className="font-bold text-white">{r.apellido}, {r.nombre}</span>
                                    <span className="text-gray-500">DNI: {r.dni}</span>
                                    {r.acompanante && <span className="text-gray-500">Acomp: {r.acompanante}</span>}
                                    {r.institucion && <span className="text-gray-500">{r.institucion}</span>}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleImportConfirm}
                                disabled={importing}
                                className="flex items-center gap-2 bg-green-500 text-white font-bold uppercase tracking-widest px-5 py-2.5 rounded-lg hover:bg-green-600 transition-all text-sm disabled:opacity-50"
                            >
                                <Upload className="w-4 h-4" />
                                {importing ? 'Importando...' : `Confirmar e importar ${importRows.length} alumnos`}
                            </button>
                            <button onClick={() => setImportRows(null)} className="border border-white/10 text-gray-400 hover:text-white px-4 py-2.5 rounded-lg text-sm">Cancelar</button>
                        </div>
                    </div>
                )}

                {/* Form */}
                {showForm && (
                    <div className="bg-white/5 border border-brand-yellow/30 rounded-xl p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                        <h2 className="text-lg font-bold uppercase tracking-widest text-brand-yellow mb-5 flex items-center gap-2">
                            {editingId ? <Edit3 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            {editingId ? 'Editar Alumno' : 'Nuevo Alumno'}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { key: 'nombre', label: 'Nombre *', placeholder: 'Juan' },
                                { key: 'apellido', label: 'Apellido *', placeholder: 'Pérez' },
                                { key: 'dni', label: 'DNI *', placeholder: '40123456', type: 'number' },
                                { key: 'acompanante', label: 'Acompañante', placeholder: 'Prof. García' },
                                { key: 'institucion', label: 'Institución', placeholder: 'Escuela N°15' },
                                { key: 'curso', label: 'Curso', placeholder: '5to A' },
                            ].map(field => (
                                <div key={field.key}>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type || 'text'}
                                        value={form[field.key as keyof StudentForm]}
                                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                                        placeholder={field.placeholder}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all text-sm"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-5">
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className="flex items-center gap-2 bg-brand-yellow text-brand-navy font-bold uppercase tracking-widest px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-all text-sm disabled:opacity-50"
                            >
                                <Save className="w-4 h-4" />
                                {saving ? 'Guardando...' : 'Guardar'}
                            </button>
                            <button
                                onClick={handleCancel}
                                className="flex items-center gap-2 border border-white/10 text-gray-400 hover:text-white px-5 py-2.5 rounded-lg transition-all text-sm"
                            >
                                <X className="w-4 h-4" /> Cancelar
                            </button>
                        </div>
                    </div>
                )}

                {/* Search & List */}
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest">
                            <Users className="w-4 h-4 text-brand-yellow" />
                            Alumnos ({filtered.length})
                        </div>
                        <div className="relative w-full sm:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Buscar..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-yellow transition-all"
                            />
                        </div>
                        <button
                            onClick={() => setSortAsc(!sortAsc)}
                            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                        >
                            A-Z {sortAsc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                    </div>

                    {loading ? (
                        <div className="p-12 text-center text-gray-500 animate-pulse">Cargando alumnos...</div>
                    ) : filtered.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            {students.length === 0 ? 'No hay alumnos cargados todavía.' : 'Sin resultados para tu búsqueda.'}
                        </div>
                    ) : (
                        <div className="divide-y divide-white/5">
                            {filtered.map(student => (
                                <div key={student.id} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 flex items-center justify-center flex-shrink-0">
                                        <span className="text-brand-yellow font-bold text-sm">
                                            {student.apellido?.[0]}{student.nombre?.[0]}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-bold text-white text-sm">
                                            {student.apellido}, {student.nombre}
                                        </div>
                                        <div className="text-xs text-gray-500 flex flex-wrap gap-x-3 mt-0.5">
                                            <span>DNI: {student.dni}</span>
                                            {student.institucion && <span>{student.institucion}</span>}
                                            {student.acompanante && <span>Acomp: {student.acompanante}</span>}
                                            {student.curso && <span>Curso: {student.curso}</span>}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => handleEdit(student)}
                                            className="p-1.5 text-gray-400 hover:text-brand-yellow transition-colors"
                                            title="Editar"
                                        >
                                            <Edit3 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (confirm(`¿Eliminar a ${student.nombre} ${student.apellido}?`)) {
                                                    handleDelete(student.id);
                                                }
                                            }}
                                            disabled={deletingId === student.id}
                                            className="p-1.5 text-gray-400 hover:text-brand-red transition-colors disabled:opacity-50"
                                            title="Eliminar"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
