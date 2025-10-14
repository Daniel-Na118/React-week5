import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
<<<<<<< HEAD
    <header>
      <nav>
        <Link to="/">스누인턴</Link>
        <div>
          {user ? (
            <>
              <span>{user.name}님</span>
              <button onClick={onLogout}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to="/signup">회원가입</Link>
              <Link to="/login">로그인</Link>
=======
    <header style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>스누인턴</Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {user ? (
            <>
              <span>{user.name}님</span>
              <button onClick={onLogout} style={{ background: 'none', border: 'none', color: 'black', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'none' }}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>회원가입</Link>
              <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>로그인</Link>
>>>>>>> 464a639 (style and logic)
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
