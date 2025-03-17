import './navbar.css';
import { useEffect, useState } from 'react';
import { MdOutlineAccountCircle  } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { app } from '../FireBase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { TfiMenu } from "react-icons/tfi";
import SearchBar from './SearchBar';
import {  useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
const auth = getAuth(app);

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Heritage', path: '/heritage' },
  { label: 'Festivals', path: '/festivals' },
  { label: 'Gallary', path: '/gallary' },
  { label: 'Calender', path: '/calender' },
  { label: 'Contact', path: '/contact' },
];

export default function NavBar() {
  const navigate = useNavigate();
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const handleSearchIconClick = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };
  const [sideBar , showSideBar] = useState(false);
  const handleMenu = () => {
    showSideBar(!sideBar);
  }
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const [accInfo, setaccInfo] = useState(false);
  const handleAccInfo = () => {
    setaccInfo(!accInfo);
  }

  const Logout = () => {
    auth.signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleLogin = () => {
    navigate('/login');
  }

  const handleNavItemClick = (path) => {
    navigate(path);
  }

  if (user === null) {
    return (
      <div className='Main-Container'>
        <div className="Navbar">
          <div className="left">
            <img src="/images/logo.webp" alt="India" />
          </div>

          <div className="right">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='nav-item' onClick={() => handleNavItemClick(item.path)}>{item.label}</li>
              ))}
              <li className='search-icon' onClick={handleSearchIconClick}>
                <IoIosSearch />
              </li>
              {isSearchBarOpen && (
                <li className='search-bar-container'>
                  <SearchBar />
                </li>
              )}
              <li className='acc-icon' onClick={handleLogin}>
                <button className="acc-button">
                    <span className="button-text">Login</span>
                    <div className="fill-container"></div>
                </button>
              </li>
              <li className='menuBtn' onClick={handleMenu}><TfiMenu /></li>
              
            </ul>
          </div>
          {
            sideBar && <SideBar className = 'sidebar' close={handleMenu} />
          }
        </div>
        
      </div>
    )
  }

  return (
    <div className='Main-Container'>
      <div className="Navbar">
        <div className="left">
          <img src="/images/logo.webp" alt="India" />
        </div>

        <div className="right">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className='nav-item' onClick={() => handleNavItemClick(item.path)}>{item.label}</li>
            ))}
            <li className='search-icon' onClick={handleSearchIconClick}>
              <IoIosSearch />
            </li>
            {isSearchBarOpen && (
              <li className='search-bar-container'>
                <SearchBar />
              </li>
            )}
            <li onClick={handleAccInfo} className='acc-icon'><MdOutlineAccountCircle />
              <div className={`acc-content ${accInfo ? 'acc-content-active' : ''}`}>
                <ul>
                  <p>Profile</p>
                  <p onClick={Logout}>
                    <button className="Btn">
                      <div className="sign">
                        <svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg>
                      </div>
                      <div className="text">Logout</div>
                    </button>
                  </p>
                </ul>
              </div>
            </li>
            <li className='menuBtn' onClick={handleMenu}><TfiMenu /></li>
          </ul>
        </div>
        {
            sideBar && <SideBar className = 'sidebar' close={handleMenu} />
          }
      </div>
    </div>
  )
}