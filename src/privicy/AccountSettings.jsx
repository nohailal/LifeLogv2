import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSettings = () => {
  const navigate = useNavigate();

  // Load settings from localStorage or use default values
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem('accountSettings');
    return savedSettings ? JSON.parse(savedSettings) : {
      password: '',
      phone: '',
      securityCode: '',
      notifications: true,
    };
  });

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('accountSettings', JSON.stringify(settings));
  }, [settings]);

  // Handle account deletion
  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      localStorage.removeItem('user'); // Remove user data
      localStorage.removeItem('accountSettings'); // Remove account settings
      navigate('/'); // Redirect to home page
    }
  };

  return (
    <div className="flex h-screen bg-white-100">
      <div className="flex-1 p-8">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>

          {/* Change Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={settings.password}
              onChange={(e) => setSettings({ ...settings, password: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Change Phone Number */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Change Security Code */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600" htmlFor="securityCode">
              Security Code
            </label>
            <input
              type="text"
              id="securityCode"
              value={settings.securityCode}
              onChange={(e) => setSettings({ ...settings, securityCode: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Notifications Toggle */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="notifications"
              checked={settings.notifications}
              onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="notifications" className="text-sm text-gray-600">
              Enable Notifications
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => localStorage.setItem('accountSettings', JSON.stringify(settings))}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleDeleteAccount}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
