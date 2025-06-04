import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const role = queryParams.get('role');

    if (token && role) {
      // ✅ Save token & role to localStorage
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userRole', role);

      // ✅ Redirect to dashboard or homepage
      navigate('/dashboard'); // or whatever route you want
    }
  }, [navigate]);

  return <p>Logging you in...</p>;
};

export default AuthRedirectHandler;
