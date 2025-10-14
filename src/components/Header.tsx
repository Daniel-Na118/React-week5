import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
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
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
