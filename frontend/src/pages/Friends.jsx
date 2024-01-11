// friends.jsx
import React, { useState } from 'react';
import '../Scss/Friends.scss';
import search1 from "../image/search1.png";
import { useAuth } from '../store/Auth';

const Friends = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFriends, setFilteredFriends] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);
  const [friendData, setFriendData]=useState([])
  const [currFriend,setCurrFriend]=useState([])
  const [currPending,setCurrPending]=useState([])

  const {token,user} =useAuth()
  console.log(user)
  console.log(token)
  const id=user._id
  const [getUser,setgetUser]=useState({})
  const firstRender=async()=>{             
    try {
      const response=await fetch(`http://localhost:3000/myfriends/${id}`,{
        method:"GET",
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      if(response) {
        const data=await response.json()
        let obj=data.msg
        console.log(obj)
        setCurrFriend(obj)
       }    

       const response2=await fetch(`http://localhost:3000/getfriends/${id}`,{
        method:"GET",
        headers:{
            Authorization:`Bearer ${token}`
        }
       })
       if(response2) {
        const data=await response2.json()
        let obj=data.msg
       console.log(obj)
       setFriendData(obj)
       }    

       const response3=await fetch(`http://localhost:3000/mypendingrequest/${id}`,{
        method:"GET",
        headers:{
            Authorization:`Bearer ${token}`
        }
       })
       if(response3) {
        const data=await response3.json()
        let obj=data.msg
        setCurrPending(obj)
        console.log(obj)
       }    
    } catch (error) {
     console.log(`${error}`) 
    }
  }

  React.useEffect(()=>{
    firstRender()
  },[])
  
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
          {!searchToggle && 
            <div className="friends-area-container">
            <div className="friends-area">
              {currFriend.map((friend, index) => (
                <div key={index} className="search-box search-friend-out">
                  <div className="search-out">
                    <div className="search-item">{friend.name}</div>
                    <div className="search-item">{friend.email}</div>
                  </div>
                  <button type="button" className="btn btn-danger request-button">
                    Remove
                  </button>
                </div>
              ))}
            </div>
            </div>
          }
          
          {searchToggle && (
            <div className="showfriend">
              {filteredFriends.map((friend, index) => (
                <div key={index} className="search-box">
                  <div className="search-out">
                    <div className="search-item">{friend.name}</div>
                    <div className="search-item">{friend.email}</div>
                  </div>
                  <button type="button" class="btn btn-success request-button" >Request</button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="right-friend">
          <div className="heading">PENDING REQUESTS</div>
          <div className="friends-area-container right-friend-request">
              <div className="friends-area">
                {currPending.map((friend, index) => (
                  <div key={index} className="search-box search-friend-out">
                    <div className="search-out">
                      <div className="search-item">{friend.name}</div>
                      <div className="search-item">{friend.email}</div>
                    </div>
                    <div className="requests">
                    <button type="button" className="btn btn-success request-button2">
                      ACCEPT
                    </button>
                    <button type="button" className="btn btn-danger request-button2">
                      REJECT
                    </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
