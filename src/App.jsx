import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CourseDetailPage from './components/CourseDetailPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses/:id" element={<CourseDetailPage />} />
    </Routes>
    </Router>
  );
}

export default App;
