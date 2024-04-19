
function NavBar(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-title ps-3" href="./">ChobbyCode</a>
          <ul className="navbar-links my-3">
            <li className="nav-item-links">
              <a className="nav-link" href="./">Home</a>
            </li>
            <li className="nav-item-links">
              <a className="nav-link" href="./blog">Blog</a>
            </li>
            <li className="nav-item-link">
              <a className="nav-link" href="./about">About</a>
            </li>
          </ul>
        </nav>  
    </div>
  );
}

export default NavBar;
