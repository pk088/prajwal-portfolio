import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import AboutMe from "./Pages/AboutMe"
import Contact from "./Pages/Contact"
import Navbar from './Pages/Navbar';
import { Routes, Route } from "react-router-dom"
import P1img from "./Images/Project.png"
import ExpenseTracker from "./Images/Project Images/Expense-Tracker.png"
import RecipeFinder from "./Images/Project Images/Recipe-Finder.png"


function App() {

  const projectData = [
    {
      level: "basic",
      imgsrc: ExpenseTracker,
      title: "Expense-Tracker",
      desc: "This React-app enable users to track their expenses spent in a year.",
      path: "https://pk088.github.io/expense-tracker/"
    },
    {
      level: "basic",
      imgsrc: RecipeFinder,
      title: "Recipe Finder",
      desc: "Find thousands of recipes you can make right now with ingredients list.",
      path: "https://pk088.github.io/recipe-finder/"
    },
    {
      level: "basic",
      imgsrc: P1img,
      title: "Weather App",
      desc: "Upcoming Project",
      path: ""
    }, {
      level: "basic",
      imgsrc: P1img,
      title: "Movie Watchlist",
      desc: "Upcoming Project",
      path: ""
    }, {
      level: "basic",
      imgsrc: P1img,
      title: "Dictionary",
      desc: "Upcoming Project",
      path: ""
    }, {
      level: "basic",
      imgsrc: P1img,
      title: "To-Do List",
      desc: "Upcoming Project",
      path: ""
    }, {
      level: "basic",
      imgsrc: P1img,
      title: "Dynamic Clock with Greeting",
      desc: "Upcoming Project",
      path: ""
    }, {
      level: "basic",
      imgsrc: P1img,
      title: "Background on Your Choice",
      desc: "Upcoming Project",
      path: ""
    }, {
      level: "basic",
      imgsrc: P1img,
      title: "Simple Calculator",
      desc: "Upcoming Project",
      path: ""
    },
  ]


  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/prajwal-portfolio"/> */}
        <Route index element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects projectData={projectData} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
