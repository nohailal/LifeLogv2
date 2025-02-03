import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';

const Settings = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profilePicture: null,
    };
  });

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // Handle profile picture change
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePicture: reader.result }); // Save base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen bg-white-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5">
        <div className="flex justify-center mb-6">
          {user.profilePicture ? (
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="text-4xl text-gray-600" />
          )}
        </div>
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <nav className="space-y-4">
          <Link
            to="/settings/profile"
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            <IoSettingsOutline className="mr-2" />
            Profile Settings
          </Link>
          <Link
             to="/AccountSettings"
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            <FaCog className="mr-2" />
            Account Settings
          </Link>
          <Link
            to="/"
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
          <form>
            <div className="space-y-4">
              {/* Profile Picture Upload */}
              <div className="flex items-center space-x-4">
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-4xl text-gray-600" />
                )}
                <label className="text-sm font-medium text-gray-600">
                  Change Profile Picture
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Bio Input */}
              <div>
                <label className="block text-sm font-medium text-gray-600" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={user.bio}
                  onChange={(e) => setUser({ ...user, bio: e.target.value })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => localStorage.setItem('user', JSON.stringify(user))}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
