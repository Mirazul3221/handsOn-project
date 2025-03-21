import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='flex justify-between items-center py-2'>
      <div className="logo md:text-4xl font-semibold text-green-500">
        <a href="/events">HandsOn</a>
      </div>
      <div className="profile w-fit relative">
        <img
          className='md:w-16 md:h-16 w-12 h-12 rounded-full cursor-pointer'
          src={user?.profilePicture}
          alt="profile"
          onClick={toggleMenu}
        />
        {menuVisible && (
          <div className="absolute w-fit z-50">
            <div className='bg-gray-100 px-2 rounded-md'>
              <a href="/profile">Profile</a>
            </div>
            <p
              onClick={handleLogout}
              className='bg-rose-100 cursor-pointer px-2 rounded-md'
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
