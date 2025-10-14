import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  const { user, login, logout } = useAuth();

  return (
    <Router>
      <Header user={user} onLogout={logout} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage onLogin={login} />} />
          <Route path="/signup" element={<SignupPage onLogin={login} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;