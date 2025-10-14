import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, login } from '../services/auth';

const SignupPage = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const getPasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
=======
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const hasSequential = (str) => {
    if (str.length < 3) return false;
    for (let i = 0; i <= str.length - 3; i++) {
      const char1 = str.charCodeAt(i);
      const char2 = str.charCodeAt(i + 1);
      const char3 = str.charCodeAt(i + 2);
      if (char1 + 1 === char2 && char2 + 1 === char3) {
        return true;
      }
      if (char1 - 1 === char2 && char2 - 1 === char3) {
        return true;
      }
    }
    return false;
  };

  const passwordConditions = {
    length: password.length >= 8,
    number: /[0-9]/.test(password),
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
    noSequential: password.length > 0 && !hasSequential(password) && !/(.)\1{2,}/.test(password),
>>>>>>> 464a639 (style and logic)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    try {
      await signup(name, email, password);
      const { token } = await login(email, password);
=======
    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }
    try {
      await signup(name, `${email}@snu.ac.kr`, password);
      const { token } = await login(`${email}@snu.ac.kr`, password);
>>>>>>> 464a639 (style and logic)
      onLogin(token);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
<<<<<<< HEAD
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
=======
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>회원가입</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
>>>>>>> 464a639 (style and logic)
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
<<<<<<< HEAD
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
=======
          style={{ padding: '0.5rem', width: '100%', boxSizing: 'border-box' }}
        />
        <div style={{ position: 'relative' }}>
>>>>>>> 464a639 (style and logic)
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <div>Password Strength: {getPasswordStrength()}</div>
        <button type="submit">회원가입</button>
=======
            onFocus={() => setPasswordFocused(true)}
            style={{ padding: '0.5rem', width: '100%', boxSizing: 'border-box' }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 0-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
              </svg>
            )}
          </span>
        </div>
        {passwordFocused && (
          <div style={{ fontSize: '0.8rem' }}>
            <p style={{ color: passwordConditions.length ? 'green' : 'red' }}>{passwordConditions.length ? '✓' : '✗'} 비밀번호 8자리 이상(필수)</p>
            <p style={{ color: passwordConditions.number ? 'green' : 'red' }}>{passwordConditions.number ? '✓' : '✗'} 숫자 포함</p>
            <p style={{ color: passwordConditions.upper && passwordConditions.lower ? 'green' : 'red' }}>{passwordConditions.upper && passwordConditions.lower ? '✓' : '✗'} 영문 대소문자 포함</p>
            <p style={{ color: passwordConditions.special ? 'green' : 'red' }}>{passwordConditions.special ? '✓' : '✗'} 특수문자 포함</p>
            <p style={{ color: passwordConditions.noSequential ? 'green' : 'red' }}>{passwordConditions.noSequential ? '✓' : '✗'} 연속된 문자열이나 숫자가 없어야 함</p>
          </div>
        )}
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          style={{ padding: '0.5rem', width: '100%', boxSizing: 'border-box' }}
        />
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '0.5rem', width: '100%', boxSizing: 'border-box', paddingRight: '80px' }}
          />
          <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa' }}>@snu.ac.kr</span>
        </div>
        <button type="submit" style={{ padding: '0.75rem', background: '#3f51b5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>회원가입</button>
>>>>>>> 464a639 (style and logic)
      </form>
    </div>
  );
};

export default SignupPage;