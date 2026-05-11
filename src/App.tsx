// Trigger fresh deploy
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { ToastProvider } from './components/ui/Toast';
import { AuthProvider, useAuthContext } from './context/AuthContext';

// Pages
import { Landing } from './pages/Landing';
import { IntroduccionModule } from './pages/IntroduccionModule';
import { SenalesModule } from './pages/SenalesModule';
import { PrioridadesModule } from './pages/PrioridadesModule';
import { Adventure } from './pages/Adventure';
import { Quiz } from './pages/Quiz';
import { QuizPrioridades } from './pages/QuizPrioridades';
import { Day1Welcome } from './pages/Day1Welcome';
import { Day2Welcome } from './pages/Day2Welcome';
import { EmergentologiaModule } from './pages/EmergentologiaModule';
import { QuizEmergentologia } from './pages/QuizEmergentologia';
import { SeguridadTecnicaModule } from './pages/SeguridadTecnicaModule';
import { VTVSimulador } from './pages/VTVSimulador';
import { AuditoriaVialModule } from './pages/AuditoriaVialModule';
import { EfectoMultiplicadorModule } from './pages/EfectoMultiplicadorModule';
import { Results } from './pages/Results';
import { Forum } from './pages/Forum';
import { LoginPage } from './pages/LoginPage';
import { AdminPanel } from './pages/AdminPanel';

import { forceScrollToTop } from './utils/scroll';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => { forceScrollToTop(); }, [pathname, search]);
  return null;
}

// Route guard: redirect to login if not authenticated
function ProtectedLayout() {
  const { sessionType, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-navy flex items-center justify-center">
        <div className="text-brand-yellow font-bold text-sm uppercase tracking-widest animate-pulse">
          Cargando...
        </div>
      </div>
    );
  }

  if (!sessionType) return <Navigate to="/login" replace />;
  if (sessionType === 'admin') return <Navigate to="/admin" replace />;

  return <Layout />;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminRoute />} />

        {/* Student app — protected */}
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Landing />} />
          <Route path="introduccion" element={<IntroduccionModule />} />
          <Route path="modules" element={<SenalesModule />} />
          <Route path="dia1" element={<Day1Welcome />} />
          <Route path="dia2" element={<Day2Welcome />} />
          <Route path="prioridades" element={<PrioridadesModule />} />
          <Route path="adventure" element={<Adventure />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz-prioridades" element={<QuizPrioridades />} />
          <Route path="emergentologia" element={<EmergentologiaModule />} />
          <Route path="quiz-emergentologia" element={<QuizEmergentologia />} />
          <Route path="vtv" element={<SeguridadTecnicaModule />} />
          <Route path="vtv-simulador" element={<VTVSimulador />} />
          <Route path="auditoria" element={<AuditoriaVialModule />} />
          <Route path="multiplicador" element={<EfectoMultiplicadorModule />} />
          <Route path="results" element={<Results />} />
          <Route path="foro" element={<Forum />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

// Admin-only route
function AdminRoute() {
  const { sessionType, loading } = useAuthContext();
  if (loading) return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center">
      <div className="text-brand-yellow font-bold text-sm uppercase tracking-widest animate-pulse">Cargando...</div>
    </div>
  );
  if (sessionType !== 'admin') return <Navigate to="/login" replace />;
  return <AdminPanel />;
}

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
