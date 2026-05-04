import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CandidateViewsPage from './pages/CandidateViewsPage';
import GuidePage from './pages/GuidePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import CandidateViews2022General from './pages/candidate-views/2022GeneralElection';
import CandidateViews2023Primary from './pages/candidate-views/2023Primary';
import CandidateViews2023General from './pages/candidate-views/2023GeneralCandidateViews';
import CandidateViews2024General from './pages/candidate-views/2024General';
import CandidateViews2024Primary from './pages/candidate-views/2024Primary';
import CandidateViews2026General from './pages/candidate-views/2026General';
import CandidateViews2026Primary from './pages/candidate-views/2026Primary';

import Guide2022General from './pages/guide/2022GeneralElection';
import Guide2023Primary from './pages/guide/2023Primary';
import Guide2023General from './pages/guide/2023GeneralGreenVotersGuide';
import Guide2024General from './pages/guide/2024General';
import Guide2024Primary from './pages/guide/2024Primary';
import Guide2026General from './pages/guide/2026General';
import Guide2026Primary from './pages/guide/2026Primary';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/candidate-views" element={<CandidateViews2026Primary />} />
      <Route path="/candidate-views/2022-general-election" element={<CandidateViews2022General />} />
      <Route path="/candidate-views/2023-primary" element={<CandidateViews2023Primary />} />
      <Route path="/candidate-views/2023GeneralCandidateViews" element={<CandidateViews2023General />} />
      <Route path="/candidate-views/2024-general" element={<CandidateViews2024General />} />
      <Route path="/candidate-views/2024-primary" element={<CandidateViews2024Primary />} />
      <Route path="/candidate-views/2026-general" element={<CandidateViews2026General />} />
      <Route path="/candidate-views/2026-primary" element={<CandidateViews2026Primary />} />
      <Route path="/guide" element={<Guide2026Primary />} />
      <Route path="/guide/2022-general-election" element={<Guide2022General />} />
      <Route path="/guide/2023-primary" element={<Guide2023Primary />} />
      <Route path="/guide/2023GeneralGreenVotersGuide" element={<Guide2023General />} />
      <Route path="/guide/2024-general" element={<Guide2024General />} />
      <Route path="/guide/2024-primary" element={<Guide2024Primary />} />
      <Route path="/guide/2026-general" element={<Guide2026General />} />
      <Route path="/guide/2026-primary" element={<Guide2026Primary />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
