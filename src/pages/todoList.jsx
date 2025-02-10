import { useState } from "react";
import { motion } from "framer-motion";

export default function TodoListApp() {
  const [tasks, setTasks] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  });
  const [newTask, setNewTask] = useState("");
  const [mood, setMood] = useState("");
  const [sleepHours, setSleepHours] = useState(0);
  const [steps, setSteps] = useState("");
  const [waterCups, setWaterCups] = useState(0);
  const [activities, setActivities] = useState([]);

  const addTask = (day) => {
    if (newTask.trim() !== "") {
      setTasks({ ...tasks, [day]: [...tasks[day], { text: newTask, completed: false }] });
      setNewTask("");
    }
  };

  const toggleTask = (day, index) => {
    const updatedTasks = { ...tasks };
    updatedTasks[day][index].completed = !updatedTasks[day][index].completed;
    setTasks(updatedTasks);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-100 p-6 flex flex-col items-center"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center text-gray-800"
      >
        🌟 Daily Tracker 🌟
      </motion.h1>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-xl"
      >
        {/* Mood Selector */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-50 p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-2 text-lg">🌈 Mood:</label>
          <select
            className="w-full p-2 border rounded"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">Select Mood</option>
            <option value="Happy">😊 Happy</option>
            <option value="Sad">😢 Sad</option>
            <option value="Sleepy">😴 Sleepy</option>
            <option value="Neutral">😐 Neutral</option>
          </select>
        </motion.div>

        {/* Sleep Hours */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-yellow-50 p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-2 text-lg">💤 Hours of Sleep:</label>
          <div className="flex gap-2">
            {[...Array(8)].map((_, i) => (
              <motion.button
                whileTap={{ scale: 0.8 }}
                key={i}
                className={`p-3 rounded-full text-lg ${sleepHours > i ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => setSleepHours(i + 1)}
              >
                🌙
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Steps Taken */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-green-50 p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-2 text-lg">🚶 Steps Taken:</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </motion.div>

        {/* Water Intake */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-50 p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-2 text-lg">💧 Water Intake (cups):</label>
          <div className="flex gap-2">
            {[...Array(8)].map((_, i) => (
              <motion.button
                whileTap={{ scale: 0.8 }}
                key={i}
                className={`p-3 rounded-full text-lg ${waterCups > i ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => setWaterCups(i + 1)}
              >
                💧
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Task Tracker */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800">📅 Task Tracker</h2>
        {Object.keys(tasks).map((day) => (
          <motion.div key={day} whileHover={{ scale: 1.02 }} className="bg-gray-50 p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-lg font-semibold text-gray-700">{day}</h3>
            <div className="flex mb-2">
              <input
                type="text"
                placeholder={`Add a new task for ${day}...`}
                className="w-full p-2 border rounded"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => addTask(day)}
              >
                ➕
              </motion.button>
            </div>
            <ul>
              {tasks[day].map((task, index) => (
                <motion.li key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-between p-2 border-b items-center">
                  <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : "text-gray-800"} text-lg`}>
                    {task.text}
                  </span>
                  <motion.button whileTap={{ scale: 0.9 }} className={`px-3 py-1 text-white rounded ${task.completed ? "bg-green-500" : "bg-red-500"}`} onClick={() => toggleTask(day, index)}>
                    {task.completed ? "✔" : "❌"}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
