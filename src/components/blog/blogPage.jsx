import { useState } from "react";
import { Eye, EyeOff, Home, User, Settings } from "lucide-react";
 
function Card({ children, className }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

function Switch({ checked, onCheckedChange }) {
  // A simple switch example; you might want a more advanced version
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onCheckedChange}
    />
  );
}

function Textarea({ value, onChange, placeholder, className }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default function BlogPage() {
  const [textPosts, setTextPosts] = useState([]);
  const [imagePosts, setImagePosts] = useState([]);
  const [musicPosts, setMusicPosts] = useState([]);
  const [content, setContent] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleTextPost = () => {
    if (!content.trim()) return;
    setTextPosts([{ content, isPrivate }, ...textPosts]);
    setContent("");
  };

  const handleImagePost = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImagePosts([{ image: URL.createObjectURL(file), isPrivate }, ...imagePosts]);
  };

  const handleMusicPost = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setMusicPosts([{ music: URL.createObjectURL(file), isPrivate }, ...musicPosts]);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-purple-700 p-6 space-y-4 h-screen rounded-r-lg shadow-lg">
        <h2 className="text-lg font-bold">Menu</h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 cursor-pointer p-3 bg-purple-600 rounded-md hover:bg-pink-500 transition">
            <Home />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer p-3 bg-purple-600 rounded-md hover:bg-pink-500 transition">
            <User />
            <span>Profile</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer p-3 bg-purple-600 rounded-md hover:bg-pink-500 transition">
            <Settings />
            <span>Settings</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">My Private Blog</h1>

        {/* Text Post Section */}
        <Card className="p-6 space-y-4 bg-white text-black rounded-lg shadow-lg">
          <Textarea
            placeholder="Share your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
          <div className="flex justify-between items-center">
            <Switch
              checked={isPrivate}
              onCheckedChange={() => setIsPrivate(!isPrivate)}
            />
            <Button
              onClick={handleTextPost}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition"
            >
              Post
            </Button>
          </div>
        </Card>

        {/* Image Upload Section */}
        <Card className="p-6 space-y-4 bg-white text-black rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center">Share a Picture</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagePost}
            className="w-full border rounded-lg p-3"
          />
        </Card>

        {/* Music Upload Section */}
        <Card className="p-6 space-y-4 bg-white text-black rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center">Share Music</h2>
          <input
            type="file"
            accept="audio/*"
            onChange={handleMusicPost}
            className="w-full border rounded-lg p-3"
          />
        </Card>

        {/* Posts Display */}
        <div className="space-y-4">
          {textPosts.map((post, index) => (
            <Card
              key={index}
              className="p-4 bg-white text-black shadow-md rounded-lg relative border-2 border-pink-500"
            >
              <p>{post.content}</p>
              <div className="absolute top-2 right-2">
                {post.isPrivate ? (
                  <EyeOff className="text-gray-500" />
                ) : (
                  <Eye className="text-purple-500" />
                )}
              </div>
            </Card>
          ))}

          {imagePosts.map((post, index) => (
            <Card
              key={index}
              className="p-4 bg-white text-black shadow-md rounded-lg relative border-2 border-purple-500"
            >
              <img src={post.image} alt="Uploaded" className="w-full rounded-lg" />
              <div className="absolute top-2 right-2">
                {post.isPrivate ? (
                  <EyeOff className="text-gray-500" />
                ) : (
                  <Eye className="text-purple-500" />
                )}
              </div>
            </Card>
          ))}

          {musicPosts.map((post, index) => (
            <Card
              key={index}
              className="p-4 bg-white text-black shadow-md rounded-lg relative border-2 border-blue-500"
            >
              <audio controls src={post.music} className="w-full" />
              <div className="absolute top-2 right-2">
                {post.isPrivate ? (
                  <EyeOff className="text-gray-500" />
                ) : (
                  <Eye className="text-purple-500" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
