// Global DefaultStyles.css
import "./assets/styles/DefaultStyles.css"
// Navbar
import NavBar from "./components/navigation/Navbar.tsx"
// Bootstrap
import "bootstrap/dist/css/bootstrap.css"

// Routing
import { Routes, Route } from 'react-router-dom' 

// pages
import HomePage from "./components/pages/HomePage.tsx"
import NotFound from "./components/pages/NotFound.tsx"
import BlogPage from "./components/pages/BlogPage.tsx"
import AboutPage from "./components/pages/AboutPage.tsx"

function App() {
 
  let LightTheme: boolean = true;
  document.body.style.backgroundColor = "hsl(233, 38%, 90%)";
  document.body.style.color = "#4D4D4D";

  const ChangeTheme = () => {
    if(LightTheme){
      LightTheme = false;
      document.body.style.backgroundColor = "#0C0E1B"; 
      document.body.style.color = "#ffffff";
    } else {
      LightTheme = true;
      document.body.style.backgroundColor = "hsl(233, 38%, 90%)"
      document.body.style.color = "#4D4D4D"
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/#" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes> 
      </div>
      <div className="ThemeButton float-right">
        <button className="btn bg-dark text-light rounded-circle float-right" onClick={ChangeTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
          </svg>
        </button> 
      </div>
    </div>
  );
}

export default App
