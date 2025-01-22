import React ,{useState} from 'react'
import logo from '../images/logowhite.png';
import steps from '../images/stepps.png';
import todo from  '../images/todolist.png';
import book from '../images/health journal.png';
import about from '../images/about.png'
import '../styles/About.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../styles/Slider.css";
import { LuListTodo } from "react-icons/lu";
import { FaMicroblog } from "react-icons/fa";
import { IoFootstepsOutline } from "react-icons/io5";
import { LuBookLock } from "react-icons/lu";
import { RiHealthBookLine } from "react-icons/ri";
function About() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
    };
  
    const handlePage = () => {
      navigate("/Home");
    };
    const handleBlog = () => {
        navigate("/blog");
      };
      const handleContact = () => {
        navigate("/contact");
      }; 
  return (
    <div className='section'>
         <div className="overdone">
      <div className="log">
        <img src={logo} alt="LifeLog Logo" />
      </div>
      <nav className="navLink">
        <a href="#home" onClick={handlePage}>Home</a>
        <li class="dropdown">
      <a href="#services" class="dropbtn">Services</a>
      <ul class="dropdown-content">
        <li><a href="#blog" onClick={handleBlog}>Blog</a></li>
        <li><a href="#todo-list">To-Do List</a></li>
        <li><a href="#health-journal">Health Journal</a></li>
        <li><a href="#secret-diary">Secret Diary</a></li>
        <li><a href="#steps-tracker">Steps Tracker</a></li>
      </ul>
    </li>
        <a href="#contact" onClick={handleContact}>Contact</a>
      </nav>
      </div>
   <div className='pic'>
      <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
        <div className="slider-div">

           <div className='more'>  
       <h1>LifeLog</h1>
        <p>LifeLog is your personal digital journal, designed to capture every moment and insight of your life journey. Whether you're tracking health, 
            mood, daily tasks, or personal achievements, LifeLog provides a secure and intuitive platform to document, reflect, and understand your life better.
            By bringing together advanced data visualization and privacy-first features.
        </p>
     </div>
        </div>
        <div className="slider-div" >
          <div className='second'>
     <h1>More About LifeLog</h1>
     <p>With LifeLog, every entry builds a story, letting you look back on your personal evolution while setting a course for where you want to go.
         Our mission is to empower you to live intentionally by harnessing the power of your own data,
         making it easy to explore your progress and connect with what matters most.</p>
    </div>  
        </div>
      </div>
      <button className="arrow left-arrow" onClick={handlePrev}>
        &#8592;
      </button>
      <button className="arrow right-arrow" onClick={handleNext}>
        &#8594;
      </button>
    </div>
</div>
   <div className='learn-more'>
     <h1>Lear more About us</h1>
    <p>LifeLog is an innovative website designed to help users document and organize their daily experiences, thoughts, and activities seamlessly.
         It offers a user-friendly platform for journaling, setting goals, and tracking personal progress over time. With interactive tools for reminders and customizable entries,
          LifeLog empowers users to reflect, grow, and maintain a detailed personal record that captures both significant milestones and everyday moments. 
          Perfect for those who value mindfulness, organization, and self-improvement, 
        LifeLog serves as a comprehensive digital diary for modern life.</p>
   </div>
   <div className='last'>
   <img src={steps} alt="LifeLog" />
   <img src={todo} alt="LifeLog " />
   <img src={book} alt="LifeLog" />
   </div>
<section className='next'>
    <h1> About Lifelog</h1>
    <p> At Lifelog, we believe in empowering individuals to track and cherish the moments that matter most.
         Whether you’re planning your day, reflecting on your health journey,
         or penning down your deepest thoughts, our platform is designed with care to help you stay on top of it all.</p>
</section>

<section className='services'>
    <h1>Our Services</h1>
    <ul>
    <li><h3><RiHealthBookLine />Health Journal:</h3> <p> Keep track of your well-being with logs that help you reflect and grow healthier, <br /> one step at a time.</p></li>

       <li> <h3><LuListTodo /> To-Do List:</h3> <p> Simplify your tasks and stay productive with a smart and intuitive task manager.</p></li>
   
        <li> <h3><FaMicroblog />Blog: </h3><p>Dive into a world of insights, tips, and inspiration curated to enrich your life.</p></li>
   
       <li> <h3><LuBookLock />Secret Diary:</h3> <p>A safe, private space to pour out your heart and treasure your memories.</p></li>
    
       <li>  <h3><IoFootstepsOutline /> Steps Tracker:</h3><p>  Celebrate your daily movements and stride towards your fitness goals.</p></li>
    </ul>
</section>
<div className='ty'>
    <h1>Why Lifelog?</h1>
    <div className='why'>
    <img src={about} alt="about" className='Aimage' />     
    <p>Because your story deserves to be recorded, your goals deserve to be achieved, 
        and your journey deserves to be celebrated. <br />
        Lifelog isn’t just a tool—it’s your trusted companion in creating a life you love. <br />
        Thank you for being part of our journey. Together, let’s make every day count!</p>
    
     </div>    
</div>
<footer class="footer">
  <div class="contact-info">
    <div class="footer-left">
      {/* <img src={logo} alt="Lifelog Logo" class="footer-logo"/> */}
      <p>lifelog@gmail.com</p>
      <p>+212 72720017</p>
      <p>123 LifeLog st., Hoceima, Morocco, 456</p>
       <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook <span>💬</span></a> <br />
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram<span>📷</span></a>  <br />
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp<span>📞</span></a><br />
      </div>
    </div>
    <div class="footer-center">
      <ul class="footer-links">
        <li><a href="Health Journal">Health Journal</a></li>
        <li><a href="Blog">Blog</a></li>
        <li><a href="To-Do List">To-Do List</a></li>
        <li><a href="Secret Diary">Secret Diary</a></li>
        <li><a href="Your Steps"> Your Steps</a></li>
      </ul>
    </div>
   
    <div class="footer-right">
      <ul class="footer-links">
        <li><a href="#home" onClick={handlePage}>Home</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#about"> <Link to="/about">About Us</Link></a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
        
    <p>© 2024 Lifelog. All rights reserved</p>
  </div>
</footer>
 </div>
  
  )
}

export default About;