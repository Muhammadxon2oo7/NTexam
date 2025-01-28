// service/auth/logout.ts

export const handleLogout = async () => {
   
    const response = await fetch('/api/logout', {
      method: 'POST',
    });
  
    if (response.ok) {
     
      window.location.href = '/';
    } else {
      console.error('Logout failed');
    }
  };
  