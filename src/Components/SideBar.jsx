import './SideBar.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../FireBase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);
const navItems = [
  { id: 1, name: 'Home', link: '/' },
  { id: 3, name: 'Heritage', link: '/heritage' },
  { id: 4, name: 'Architecture', link: '/architecture' },
  { id: 5, name: 'Art & Dance', link: '/art' },
  { id: 6, name: 'Cuisine', link: '/cuisine' },
  { id: 7, name: 'Yoga', link: '/yoga' },
  { id: 8, name: 'Festivals', link: '/festivals' },
  { id: 9, name: 'Gallary', link: '/gallary' },
  { id: 10, name: 'Calander', link: '/calender' },
  { id: 11, name: 'Contact', link: '/contact' },
];

export default function SideBar() {
  const navigate = useNavigate();
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

  const handleNavigation = (link) => {
    navigate(link);
  };
  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
      <div className="sidebar">
        <ul>
          {navItems
            .filter((item) => item.id !== 4 && item.id !== 5 && item.id !== 6 && item.id !== 7)
            .map((item) => (
              <li key={item.id}>
                <span onClick={() => handleNavigation(item.link)}>{item.name}</span>
                {item.name === 'Heritage' && (
                  <ul>
                    {navItems
                      .filter((heritageItem) => heritageItem.id >= 4 && heritageItem.id <= 7)
                      .map((heritageItem) => (
                        <li key={heritageItem.id}>
                          <span onClick={() => handleNavigation(heritageItem.link)}>
                            {heritageItem.name}
                          </span>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          <li>
            {user ? (
              <span onClick={handleLogout}>Logout</span>
            ) : (
              <span onClick={() => handleNavigation('/loginPage')}>Login</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
