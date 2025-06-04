// 'use client';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';

// const GoogleCallbackPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const url = new URL(window.location.href);
//     const token = url.searchParams.get('token');

//     if (token) {
//       localStorage.setItem('authToken', token);
//       toast.success('Google login successful');
//       router.push('/');
//     } else {
//       toast.error('Google login failed');
//       router.push('/auth/login');
//     }
//   }, []);

//   return <p className="text-center mt-10">Logging you in via Google...</p>;
// };

// export default GoogleCallbackPage;
