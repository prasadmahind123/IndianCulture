import  { useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
const pages = [
  { label: 'Historic Monuments & Architecture', path: '/architecture' },
  { label: 'Indian Art & Dance', path: '/art' },
  { label: 'Indian Cuisine', path: '/cuisine' },
  { label: 'Indian Festivals & Celebrations', path: '/festivals' },
  { label: 'Spirituality & Yoga' , path: '/yoga' },
  { label: 'Monuments & Historical Sites' , path: '/historicalSites' },
  { label: 'Temples & Religious Heritage' , path: '/temples' },
  { label: 'Caves' , path: '/cave' },
  { label: 'Wildlife & Nature' , path: '/wild' },
  { label: 'Forts' , path: '/forts' },
  { label: 'Music' , path: '/music' },
  { label: 'Languages' , path: '/language' },
];
const SearchBar = () => {
let [search, setSearch] = useState('');
const [filteredPages, setFilteredPages] = useState([]);
const navigate = useNavigate();
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const filteredPages = pages.filter((page) => page.label.toLowerCase().includes(searchValue));
    setFilteredPages(filteredPages);
  };
  const handlePageClick = (path) => {
    navigate(path);
  };
  return (
    <div className="search-bar">
        <div className="InputContainer">
            <input  list='search'  onChange={handleSearch}   type="text" placeholder="Search..." />
        </div>
          {search && (
          <ul className="search-results">
            {filteredPages.length > 0 ? (
               <div className="columns">
               {filteredPages.map((page, index) => (
                 <div key={index} className="column">
                   <button onClick={() => handlePageClick(page.path)}>{page.label}</button>
                 </div>
               ))}
             </div>
            ) : (
              <li>No data found</li>
            )}
          </ul>
        )}
    </div>
  );
};

export default SearchBar;