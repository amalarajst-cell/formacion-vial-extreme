import { useState, useEffect } from 'react';
import { MessageSquare, Plus, User, Search, ThumbsUp, MessageCircle } from 'lucide-react';
import { database } from '../lib/firebase';
import { ref, onValue, set } from 'firebase/database';

interface Reply {
    id: string;
    author: string;
    content: string;
    timestamp: string;
}

interface Thread {
    id: string;
    title: string;
    author: string;
    content: string;
    timestamp: string;
    replies: Reply[];
    likes: number;
    category: string;
}

const initialThreads: Thread[] = [
    {
        id: '1',
        title: '¿Dudas sobre la prioridad de paso en rotondas?',
        author: 'María Gómez',
        content: 'Hola a todos, estaba repasando el módulo de prioridades y me surgió una duda. Si estoy por ingresar a una rotonda, ¿siempre tengo que ceder el paso al que ya está circulando por ella?',
        timestamp: 'hace 2 horas',
        replies: [
            {
                id: 'r1',
                author: 'Carlos Instructor',
                content: '¡Hola María! Exactamente. Quien circula por la rotonda tiene prioridad de paso sobre el que intenta ingresar. ¡Excelente pregunta!',
                timestamp: 'hace 1 hora'
            }
        ],
        likes: 5,
        category: 'Prioridades'
    },
    {
        id: '2',
        title: 'Significado de la doble línea amarilla',
        author: 'Juan Pérez',
        content: 'En la autovía noté una doble línea amarilla continua. ¿Puedo cruzarla para sobrepasar si no viene nadie de frente?',
        timestamp: 'hace 5 horas',
        replies: [],
        likes: 2,
        category: 'Señales'
    }
];

export function Forum() {
    const [threads, setThreads] = useState<Thread[]>([]);
    const [authorName, setAuthorName] = useState(() => localStorage.getItem('vial_forum_name') || '');

    useEffect(() => {
        localStorage.setItem('vial_forum_name', authorName);
    }, [authorName]);

    useEffect(() => {
        const threadsRef = ref(database, 'forumThreads');
        const unsubscribe = onValue(threadsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Firebase might omit empty arrays like "replies", so we ensure it's an array
                const parsed = data.map((t: any) => ({
                    ...t,
                    replies: t.replies || []
                }));
                setThreads(parsed);
            } else {
                set(threadsRef, initialThreads);
            }
        });
        
        return () => unsubscribe();
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newCategory, setNewCategory] = useState('General');

    const [expandedThreadId, setExpandedThreadId] = useState<string | null>(null);
    const [replyContent, setReplyContent] = useState('');

    const handleLike = (threadId: string) => {
        const updated = threads.map(t => 
            t.id === threadId ? { ...t, likes: t.likes + 1 } : t
        );
        set(ref(database, 'forumThreads'), updated);
    };

    const handleReply = (e: React.FormEvent, threadId: string) => {
        e.preventDefault();
        if (!replyContent.trim()) return;
        
        const newReply: Reply = {
            id: Date.now().toString(),
            author: authorName.trim() || 'Anónimo',
            content: replyContent,
            timestamp: 'ahora'
        };

        const updated = threads.map(t => 
            t.id === threadId ? { ...t, replies: [...t.replies, newReply] } : t
        );
        set(ref(database, 'forumThreads'), updated);
        setReplyContent('');
    };

    const handleCreateThread = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim() || !newContent.trim()) return;

        const newThread: Thread = {
            id: Date.now().toString(),
            title: newTitle,
            author: authorName.trim() || 'Anónimo',
            content: newContent,
            timestamp: 'hace un momento',
            replies: [],
            likes: 0,
            category: newCategory
        };

        const updated = [newThread, ...threads];
        set(ref(database, 'forumThreads'), updated);

        setIsCreating(false);
        setNewTitle('');
        setNewContent('');
        setNewCategory('General');
    };

    const filteredThreads = threads.filter(t => 
        t.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        t.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-brand-navy pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
                
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <h1 className="font-brand-heading text-4xl sm:text-5xl lg:text-6xl text-white font-bold uppercase italic tracking-tighter">
                        Foro de <span className="text-brand-red">Consultas</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Espacio de debate y resolución de dudas. Preguntá lo que necesites o ayudá a otros alumnos.
                    </p>
                </div>

                {/* User Identification */}
                <div className="bg-brand-dark-grey p-4 rounded-xl border border-brand-red/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-in fade-in">
                    <div className="flex items-center gap-2 text-brand-yellow font-bold whitespace-nowrap">
                        <User className="w-5 h-5" />
                        Tu Nombre:
                    </div>
                    <input 
                        type="text" 
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Ej: Alejandro Malara Instructor" 
                        className="bg-black/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow w-full transition-colors"
                    />
                </div>

                {/* Actions & Search */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-brand-dark-grey p-4 rounded-xl border border-gray-800">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input 
                            type="text" 
                            placeholder="Buscar consultas..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-black/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-brand-yellow transition-colors"
                        />
                    </div>
                    <button 
                        onClick={() => setIsCreating(!isCreating)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors uppercase text-sm tracking-wide"
                    >
                        {isCreating ? 'Cancelar' : (
                            <>
                                <Plus className="w-5 h-5" /> Nueva Consulta
                            </>
                        )}
                    </button>
                </div>

                {/* Create Thread Form */}
                {isCreating && (
                    <div className="bg-brand-dark-grey p-6 rounded-xl border border-brand-red/30 shadow-lg shadow-brand-red/5 animate-in fade-in slide-in-from-top-4">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-brand-yellow" />
                            Escribir nueva consulta
                        </h2>
                        <form onSubmit={handleCreateThread} className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Título</label>
                                <input 
                                    type="text" 
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    placeholder="Ej: Duda sobre señales reglamentarias"
                                    className="w-full bg-black/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow transition-colors"
                                    required
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1/3">
                                    <label className="block text-sm text-gray-400 mb-1">Categoría</label>
                                    <select 
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                        className="w-full bg-black/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow transition-colors"
                                    >
                                        <option>General</option>
                                        <option>Señales</option>
                                        <option>Prioridades</option>
                                        <option>Emergentología</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Mensaje</label>
                                <textarea 
                                    value={newContent}
                                    onChange={(e) => setNewContent(e.target.value)}
                                    placeholder="Detallá tu consulta aquí..."
                                    rows={4}
                                    className="w-full bg-black/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                                    required
                                />
                            </div>
                            <div className="flex justify-end pt-2">
                                <button 
                                    type="submit"
                                    className="bg-brand-yellow text-brand-navy px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors uppercase text-sm tracking-wide"
                                >
                                    Publicar Consulta
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Threads List */}
                <div className="space-y-4">
                    {filteredThreads.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            No se encontraron consultas. ¡Sé el primero en preguntar!
                        </div>
                    ) : (
                        filteredThreads.map(thread => (
                            <div key={thread.id} className="bg-brand-dark-grey p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors group">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold px-2 py-1 rounded bg-brand-navy text-brand-yellow border border-brand-yellow/20">
                                                {thread.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-brand-red transition-colors">
                                            {thread.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4 line-clamp-2">
                                    {thread.content}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-800">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                                                <User className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <span className="text-white">{thread.author}</span>
                                        </div>
                                        <span className="text-gray-600">•</span>
                                        <span>{thread.timestamp}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div 
                                            onClick={() => handleLike(thread.id)}
                                            className="flex items-center gap-1.5 hover:text-brand-yellow cursor-pointer transition-colors"
                                        >
                                            <ThumbsUp className="w-4 h-4" />
                                            <span>{thread.likes}</span>
                                        </div>
                                        <div 
                                            onClick={() => setExpandedThreadId(expandedThreadId === thread.id ? null : thread.id)}
                                            className="flex items-center gap-1.5 hover:text-brand-yellow cursor-pointer transition-colors"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                            <span>{thread.replies.length}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Replies Section */}
                                {expandedThreadId === thread.id ? (
                                    <div className="mt-4 pt-4 border-t border-gray-800/50">
                                        <div className="space-y-4 mb-4">
                                            {thread.replies.map(reply => (
                                                <div key={reply.id} className="pl-4 border-l-2 border-brand-yellow/30">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                                                            <User className="w-3 h-3 text-brand-yellow" />
                                                        </div>
                                                        <span className="text-white text-sm font-bold">{reply.author}</span>
                                                        <span className="text-xs text-gray-500">{reply.timestamp}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-400">{reply.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <form onSubmit={(e) => handleReply(e, thread.id)} className="flex gap-2">
                                            <input 
                                                type="text" 
                                                value={replyContent}
                                                onChange={(e) => setReplyContent(e.target.value)}
                                                placeholder="Escribe una respuesta..." 
                                                className="flex-1 bg-black/50 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-brand-yellow text-sm"
                                            />
                                            <button type="submit" className="bg-brand-yellow text-brand-navy px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-400 transition-colors">
                                                Responder
                                            </button>
                                        </form>
                                    </div>
                                ) : (
                                    thread.replies.length > 0 && (
                                        <div className="mt-4 pt-4 border-t border-gray-800/50 pl-4 border-l-2 border-brand-yellow/30">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                                                    <User className="w-3 h-3 text-brand-yellow" />
                                                </div>
                                                <span className="text-white text-sm font-bold">{thread.replies[0].author}</span>
                                                <span className="text-xs text-gray-500">{thread.replies[0].timestamp}</span>
                                            </div>
                                            <p className="text-sm text-gray-400">{thread.replies[0].content}</p>
                                            {thread.replies.length > 1 ? (
                                                <button 
                                                    onClick={() => setExpandedThreadId(thread.id)}
                                                    className="text-xs text-brand-yellow hover:text-yellow-400 mt-2 font-bold"
                                                >
                                                    Ver {thread.replies.length - 1} respuestas más...
                                                </button>
                                            ) : (
                                                <button 
                                                    onClick={() => setExpandedThreadId(thread.id)}
                                                    className="text-xs text-brand-yellow hover:text-yellow-400 mt-2 font-bold"
                                                >
                                                    Responder
                                                </button>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}
