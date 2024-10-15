import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username'); 
    navigate('/'); 
  };

  return (
    <div className="flex min-h-screen bg-gray-300">
    
      <aside className="w-64 bg-gray-200">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">App_name</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">
                Profile
              </Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white">
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

    
      <main className="flex-1 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome, {username}!</h1>
          <p className="mt-4 text-lg text-gray-600">
            You are now logged in.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
