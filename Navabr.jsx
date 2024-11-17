import { Outlet, Link } from 'react-router-dom';
import TopBar from './TopBar'


function Navbar() {
  return (
    <div>
      <TopBar />
    <nav className="navbar navbar-light bg-white h-20 w-auto">
      <div className="container flex justify-between items-center">
        <a className="navbar-brand text-black text-2xl py-4 p-4" href="https://algodox.co.in/">Algodox</a>
        <ul className="navbar-nav flex space-x-4 font-medium">
          <li className="nav-item">
            <Link className="nav-link text-black hover:text-yellow-500 p-6" to="./">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black hover:text-yellow-500 p-6" to="/aboutUs">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black hover:text-yellow-500 p-6" to="/Service">Service</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link text-black hover:text-yellow-500 p-6" to="/Blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black hover:text-yellow-500 p-6" to="/Protfolio">Protfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black hover:text-yellow-500 p-6" to="/ContactUs">Contact</Link>
          </li>
        </ul>
        <div className="rounded-md box-border text-black w-auto h-10 p-1 cursor-pointer tracking-widest border-2 font-bold hover:text-red-500 border-black-500">
          Connect Now <span class="icofont-arrow-right"></span>
      </div>

      </div>
    </nav>
    <Outlet />

    </div>
  );
}

export default Navbar;
