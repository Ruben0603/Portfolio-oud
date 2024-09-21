import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout1/Layout';
import Layout2 from './components/Layout/Layout2/Layout2';
import HomePage from './pages/Home/Home';
import WorkPage from './pages/Work/Work';
import ContactPage from './pages/Contact/Contact';
import ExperiencePage from './pages/Experience/Experience';
import NoPage from './pages/NoPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/" element={<Layout2 />}>
          <Route path="/work" element={<WorkPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
