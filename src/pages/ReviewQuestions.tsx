import React from 'react';
import { simulatorQuestions } from '../data/simulatorQuestions';

export const ReviewQuestions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-slate-800">
          Revisión de Preguntas del Simulador ({simulatorQuestions.length})
        </h1>
        
        <div className="space-y-8">
          {simulatorQuestions.map((q, index) => (
            <div key={q.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Pregunta #{q.id} (Índice: {index + 1})
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Tema: {q.tema}
                </span>
              </div>
              
              <h2 className="text-xl font-medium text-slate-900 mb-4">
                {q.question}
              </h2>
              
              {q.image && (
                <div className="mb-4 bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                  <p className="text-sm text-gray-500 mb-2">Imagen asignada: {q.image}</p>
                  <img 
                    src={q.image} 
                    alt={`Imagen para pregunta ${q.id}`}
                    className="max-h-64 object-contain border border-gray-300 bg-white shadow-sm"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=Imagen+No+Encontrada';
                      (e.target as HTMLImageElement).classList.add('border-red-500');
                    }}
                  />
                </div>
              )}

              {!q.image && q.needsImage && (
                <div className="mb-4 bg-red-50 p-4 rounded-lg flex flex-col items-center border border-red-200">
                  <p className="text-sm text-red-600 font-semibold">⚠️ Esta pregunta podría necesitar imagen y no tiene ninguna asignada.</p>
                </div>
              )}

              <div className="space-y-2 mt-4">
                <p className="text-sm font-semibold text-gray-700">Opciones:</p>
                <ul className="space-y-2">
                  {q.options.map((opt, optIdx) => (
                    <li 
                      key={optIdx} 
                      className={`p-3 rounded-lg text-sm ${
                        opt.isCorrect 
                          ? 'bg-green-100 border border-green-300 text-green-800 font-medium' 
                          : 'bg-gray-50 border border-gray-200 text-gray-600'
                      }`}
                    >
                      {opt.isCorrect && <span className="mr-2">✅</span>}
                      {opt.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                <p>Manual: {q.manual}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
