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
              Art & Culture
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
              <li><div id="google_translate_element"></div></li>
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
     {/* <div className="Navbar">
        <div className="logo-icon">
           <img src="/images/logo.webp" alt="India" /> 
          <div className="logo-text">भा</div>
          <span>भारतीय संस्कृति</span>
        </div>
     

        <div className="right">
          <ul>
            <div className="nav-hide">
              <li onClick={handleHome}>Home</li>
              <li onClick={gotoHeritage} onMouseEnter={handleHeritage} onMouseLeave={handleHeritage} className='heritage-drop'>
                <p>Heritage</p>
                {isHeritageDropdownOpen && (
                  <div className="dropdown">
                    <ul  className="dropdown-item">
                      <li onClick={handleArch}>Architecture</li>
                      <li onClick={handleCuisine}>Cuisine</li>
                      <li onClick={handleArt}>Art & Dance</li>
                      <li onClick={handleYoga}>Yoga</li>
                    </ul>
                  </div>
                )}
              </li>
              <li onClick={handleFest}>Festivals</li>
              <li onClick={handleGallery}>Gallery</li>
              <li onClick={handleCalender}>Calender</li>
              <li onClick={handleContact}>Contact</li>
              <li className='search-icon' onClick={handleSearchIconClick}>
                <IoIosSearch />
              </li>
              {isSearchBarOpen && (
                <li className='search-bar-container'>
                  <SearchBar />
                  <button className="close-search-bar" onClick={handleCloseSearchBar}>
                      &#10005;
                    </button>

                </li>
              )}
            </div>
            <li onClick={handleAccInfo} className='acc-icon'><MdOutlineAccountCircle />
              <div className={`acc-content ${accInfo ? 'acc-content-active' : ''}`}>
                <ul>
                  <p>Profile</p>
                  <p onClick={handleLogout}>
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
        {sideBar && <SideBar className='sidebar' close={handleMenu} />}
      </div> */}
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
              Art & Culture
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
