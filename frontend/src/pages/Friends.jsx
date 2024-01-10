// friends.jsx
import React, { useState } from 'react';
import '../Scss/Friends.scss';
import search1 from "../image/search1.png";

const friendData = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'John Doe', email: 'john.doe@example1.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  { name: 'Alice Williams', email: 'alice.williams@example.com' },
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'John Doe', email: 'john.doe@example1.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  { name: 'Alice Williams', email: 'alice.williams@example.com' },
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'John Doe', email: 'john.doe@example1.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  { name: 'Alice Williams', email: 'alice.williams@example.com' },
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'John Doe', email: 'john.doe@example1.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  { name: 'Alice Williams', email: 'alice.williams@example.com' },
  // Add more entries as needed
];

const Friends = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFriends, setFilteredFriends] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearch = () => {
    const filtered = friendData.filter(friend =>
      friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchToggle(prev => !prev);
    setFilteredFriends(filtered);
  };

  return (
    <div className="upper-container">
      <div className="upper-container-friend">
        <div className="left-friend">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search ... "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-dark search-button"
              onClick={handleSearch}
            >
              <img src={search1} alt="Search" className="medal" />
            </button>
          </div>
          {searchToggle && (
            <div className="showfriend">
              {filteredFriends.map((friend, index) => (
                <div key={index} className="search-box">
                  <div className="search-item">{friend.name}</div>
                  <div className="search-item">{friend.email}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="right-friend"></div>
      </div>
    </div>
  );
};

export default Friends;
