import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import { useAuth } from './hooks/useAuth';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './style.css';
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
