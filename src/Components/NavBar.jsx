// NavBar.js
import './navbar.css';
import { useEffect, useState } from 'react';
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { IoIosSearch } from "react-icons/io";
// import { TfiMenu } from "react-icons/tfi";
import { app } from '../FireBase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';


const auth = getAuth(app);

export default function NavBar() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  // const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [user, setUser] = useState(null);
  // const [accInfo, setAccInfo] = useState(false);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.log(error);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

    useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "hi,ta,bn,mr,te,kn", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        "google_translate_element"
      );
    };
  }, []);
  // const handleSearchIconClick = () => {
  //   setIsSearchBarOpen(!isSearchBarOpen);
  // };

  const handleMenu = () => {
    setSideBar(!sideBar);
  };

  // const handleLogout = () => {
  //   auth.signOut().then(() => {
  //     setUser(null);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // };

  // const handleLogin = () => {
  //   navigate('/login');
  // };

  const handleHome = () => {
    navigate('/');
  };


  const handleFest = () => {
    navigate('/festivals');
  };

  // const handleGallery = () => {
  //   navigate('/gallary');
  // };

  // const handleCalender = () => {
  //   navigate('/calender');
  // };

  // const handleArch = () => {
  //   navigate('/architecture');
  // };

  const handleCuisine = () => {
    navigate('/cuisine');
  };

  const handleArt = () => {
    navigate('/art');
  };

  // const handleYoga = () => {
  //   navigate('/yoga');
  // };

  const handleContact = () => {
    navigate('/contact');
  };
  // const handleCloseSearchBar = () => {
  //   setIsSearchBarOpen(false);
  // };
  const gotoHeritage = () => {
    navigate('/heritage');
  }


  if (user === null) {
    return (
      <div className='Main-Container'>
        <header className="header">
        <div className=" header-container">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <div className="logo-text">भा</div>
            </div>
            <span>भारतीय संस्कृति</span>
          </Link>
          <nav className="main-nav">
            <li onClick={handleHome} className="nav-link">
              Home
            </li>
            <li onClick={gotoHeritage} className="nav-link">
              Heritage
            </li>
            <li onClick={handleArt} className="nav-link">
              Art
            </li>
            <li onClick={handleFest} className="nav-link">
              Festivals
            </li>
            <li onClick={handleCuisine} className="nav-link">
              Cuisine
            </li>
            <li onClick={handleContact} className="nav-link">
              Contact
            </li>
              <li className="nav-link">
                <div id="google_translate_element"></div>
              </li>
          </nav>
          <button className="nav-btn primary-btn desktop-only" onClick={() => navigate('/loginPage')}>Login</button>
          <button className="nav-btn icon-btn mobile-only" onClick={handleMenu}>
            <span className="sr-only" >  </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        {sideBar && <SideBar className='sidebar' close={handleMenu} />}

      </header>
      </div>
    );
  }

  return (
    <div className='page-container'>
      <header className="header">
        <div className=" header-container">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <div className="logo-text">भा</div>
            </div>
            <span>भारतीय संस्कृति</span>
          </Link>
          <nav className="main-nav">
            <li onClick={handleHome} className="nav-link">
              Home
            </li>
            <li onClick={gotoHeritage} className="nav-link">
              Heritage
            </li>
            <li onClick={handleArt} className="nav-link">
              Art
            </li>
            <li onClick={handleFest} className="nav-link">
              Festivals
            </li>
            <li onClick={handleCuisine} className="nav-link">
              Cuisine
            </li>
            <li onClick={handleContact} className="nav-link">
              Contact
            </li>
          </nav>
          <button className="nav-btn primary-btn desktop-only" onClick={() => setShowLogout(!showLogout)}>{user.email}</button>
          {showLogout && (
              <div className="dropdown">
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          <button className="nav-btn icon-btn mobile-only" onClick={handleMenu}>
            <span className="sr-only"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        {sideBar && <SideBar className='sidebar' close={handleMenu} />}
      </header>
    </div>
  );
}
