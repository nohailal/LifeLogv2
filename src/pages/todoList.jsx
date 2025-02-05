import { useState } from 'react';
import { motion } from 'framer-motion';
import AnalyticsDashboard from '../components/ToDo/AnalyticsDashboard';
import HistoryCalendar from '../components/ToDo/HistoryCalendar';
import BiomechanicsWidget from '../components/ToDo/BiomechanicsWidget';
import VoiceInput from '../components/ToDo/VoiceInput';
import useTrackerHistory from '../hooks/useTrackerHistory';

export default function TodoListApp() {
  const { history, saveDailyData } = useTrackerHistory();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-rose-50'}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto p-6"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-rose-600">🌹 Rose Life Tracker</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-rose-600 text-white"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnalyticsDashboard history={history} />
            <HistoryCalendar history={history} />
          </div>
          <div className="space-y-8">
            <VoiceInput onVoiceInput={text => console.log('Voice:', text)} />
            <BiomechanicsWidget />
          </div>
        </div>
      </motion.div>
    </div>
  );
}