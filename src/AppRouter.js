import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TitelPages from './pages/TitelPages';
import FormPage from './pages/FormPages';

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Article" element={<TitelPages />} /> 
        <Route path="/NewArticle" element={<FormPage />} /> 
    </Routes>
  );
}