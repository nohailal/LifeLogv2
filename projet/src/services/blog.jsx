import React, { useState } from "react";

const BlogPage = () => {

  const [posts] = useState([
    {
      id: 1,
      title: "5 Tips for Staying Productive",
      content:
        "Productivity is key to success. Here are five tips to help you stay productive throughout the day: 1. Set clear goals. 2. Take breaks. 3. Prioritize tasks. 4. Minimize distractions. 5. Reflect and improve daily.",
    },
    {
      id: 2,
      title: "The Benefits of a Healthy Lifestyle",
      content:
        "A healthy lifestyle offers numerous benefits for both body and mind. From better physical health to improved mental clarity, discover why adopting healthy habits is essential.",
    },
    {
      id: 3,
      title: "How to Start Journaling",
      content:
        "Journaling can improve mental clarity and emotional well-being. Learn how to start your journaling practice with these simple tips.",
    },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div style={styles.page}>
   
      <header style={styles.header}>
        <h1 style={styles.siteTitle}>Welcome to Lifelog Blog</h1>
        <p>Your one-stop destination for inspiration and self-improvement.</p>
      </header>

      <main style={styles.mainContent}>
     
        <aside style={styles.sidebar}>
          <h3>Categories</h3>
          <ul style={styles.sidebarList}>
            <li>Productivity</li>
            <li>Health</li>
            <li>Self-Care</li>
            <li>Fitness</li>
          </ul>

          <h3>Popular Posts</h3>
          <ul style={styles.sidebarList}>
            <li>10 Morning Routines for Success</li>
            <li>Understanding Mental Health</li>
            <li>Why Exercise Matters</li>
          </ul>
        </aside>

    
        <section style={styles.blogSection}>
          {selectedPost ? (
            <div style={styles.postDetail}>
              <button
                style={styles.backButton}
                onClick={() => setSelectedPost(null)}
              >
                ← Back to All Posts
              </button>
              <h2 style={styles.postTitle}>{selectedPost.title}</h2>
              <p style={styles.postContent}>{selectedPost.content}</p>
            </div>
          ) : (
            <div style={styles.postsList}>
              {posts.map((post) => (
                <div
                  key={post.id}
                  style={styles.postCard}
                  onClick={() => setSelectedPost(post)}
                >
                  <h2 style={styles.postTitle}>{post.title}</h2>
                  <p style={styles.postExcerpt}>
                    {post.content.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

    
      {/* <footer style={styles.footer}>
        <p>&copy; 2024 Lifelog. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    lineHeight: "1.6",
  },
  header: {
    backgroundColor: "#fae0e4",
    color: "#0a0908",
    padding: "20px 0",
    textAlign: "center",
  },
  siteTitle: {
    margin: 0,
  },
  mainContent: {
    display: "flex",
    maxWidth: "1200px",
    margin: "20px auto",
    padding: "0 20px",
  },
  sidebar: {
    width: "25%",
    marginRight: "20px",
    backgroundColor: "#f4f4f4",
    padding: "15px",
    borderRadius: "8px",
  },
  sidebarList: {
    listStyle: "none",
    padding: 0,
  },
  blogSection: {
    width: "75%",
  },
  postsList: {
    display: "grid",
    gap: "20px",
  },
  postCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    cursor: "pointer",
    backgroundColor: "#f9f9f9",
    transition: "transform 0.2s",
  },
  postCardHover: {
    transform: "scale(1.02)",
  },
  postTitle: {
    fontSize: "20px",
    margin: "0 0 10px",
  },
  postExcerpt: {
    color: "#666",
  },
  postDetail: {
    textAlign: "left",
  },
  backButton: {
    marginBottom: "10px",
    padding: "5px 10px",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
  postContent: {
    lineHeight: "1.8",
    color: "#555",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0",
  },
};

export default BlogPage;
