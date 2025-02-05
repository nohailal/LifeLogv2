import { useState } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">🌟 Daily Tracker 🌟</h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-xl">


        <div className="space-y-6">
          {/* Mood Selector */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
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
          </div>

          {/* Hours of Sleep */}
          <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
            <label className="block font-semibold mb-2 text-lg">💤 Hours of Sleep:</label>
            <div className="flex gap-2">
              {[...Array(8)].map((_, i) => (
                <button
                  key={i}
                  className={`p-3 rounded-full text-lg ${sleepHours > i ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                  onClick={() => setSleepHours(i + 1)}
                >
                  🌙
                </button>
              ))}
            </div>
          </div>

          {/* Steps Taken */}
          <div className="bg-green-50 p-4 rounded-lg shadow-md">
            <label className="block font-semibold mb-2 text-lg">🚶 Steps Taken:</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />
          </div>

          {/* Water Intake */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <label className="block font-semibold mb-2 text-lg">💧 Water Intake (cups):</label>
            <div className="flex gap-2">
              {[...Array(8)].map((_, i) => (
                <button
                  key={i}
                  className={`p-3 rounded-full text-lg ${waterCups > i ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                  onClick={() => setWaterCups(i + 1)}
                >
                  💧
                </button>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="bg-purple-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">🎨 Activities</h2>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter activities (comma separated)"
              value={activities}
              onChange={(e) => setActivities(e.target.value.split(","))}
            />
            <ul className="mt-2">
              {activities.map((activity, index) => (
                <li key={index} className="flex justify-between p-2 border-b">
                  <span>{activity}</span>
                  <input type="checkbox" />
                </li>
              ))}
            </ul>
          </div>
        </div>

              {/* task tracker */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">📅 Task Tracker</h2>
          {Object.keys(tasks).map((day) => (
            <div key={day} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">{day}</h3>
              <div className="flex mb-2">
                <input
                  type="text"
                  placeholder={`Add a new task for ${day}...`}
                  className="w-full p-2 border rounded"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  onClick={() => addTask(day)}
                >
                  ➕
                </button>
              </div>
              <ul>
                {tasks[day].map((task, index) => (
                  <li key={index} className="flex justify-between p-2 border-b items-center">
                    <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : "text-gray-800"} text-lg`}>
                      {task.text}
                    </span>
                    <button
                      className={`px-3 py-1 text-white rounded ${task.completed ? "bg-green-500" : "bg-red-500"}`}
                      onClick={() => toggleTask(day, index)}
                    >
                      {task.completed ? "✔" : "❌"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
