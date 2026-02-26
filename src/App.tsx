import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { ToastProvider } from './components/ui/Toast';
// Pages will be imported here as they are created
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ToastProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
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
          </Route>
        </Routes>
      </HashRouter>
    </ToastProvider>
  );
}

export default App;
