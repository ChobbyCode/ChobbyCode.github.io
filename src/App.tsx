import { Link, Route } from "wouter";

// pages
import HomePage from "./components/pages/HomePage.tsx"

function App() {
  
  return (
    <div>
      <Route path="/" component={HomePage}>toast</Route>
    </div>
  );
}

export default App
