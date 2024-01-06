// src/components/Profile.jsx
import React,{useState} from 'react';
import axios from "axios"
import { useAuth } from '../store/auth';
const Profile = () => {
  const [image,setImage]=useState()
  const {user} =useAuth()
  console.log(user.image)
  console.log(user._id)
  const id=user._id
  const submitImage=async (e)=>{
    e.preventDefault();
    const formdata=new FormData()
    formdata.append('image',image)

    const result = await axios.post(`http://localhost:3000/upload-image/${id}`,
    formdata,
    {
      headers: {"Content-Type": "multipart/form-data"}
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }


  
  console.log(user._id)
  return (
    
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 mt-5 pt-5 ">
          <div className="row z-depth-3">
            <div className="col-sm-4 bg-info rounded-left">
              <div className="card-block text-center text-white">
                <i className="fas fa-user-tie fa-7x mt-5"></i>
                <h2 className="font-weight-bold mt-4">Profile</h2>
                <p>{user.name}</p>
                <i className="far fa-edit fa-2x mb-4"></i>
                <div>
                {/* <img src={import(`../images/${user.image}`).default} /> */}
                <img src={`http://localhost:3000/images/${user.image}`}/>
                </div>
              </div>
            </div>
            <div className="col-sm-8 bg-white rounded-right">
              <h3 className="mt-3 text-center">Information</h3>
              <hr className="badge-primary mt-0 w-25" />
              <div className="row-">
                <div className="col-sm-6">
                  <p className="font-weight-bold">Email:</p>
                  <h6 className="text-muted">{user.email}</h6>
                </div>
                <div className="col-sm-6">
                  <p className="font-weight-bold">Phone:</p>
                  <h6 className="text-muted">number</h6>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-12">
                  <label className="font-weight-bold">Upload Profile Image:</label>
                  <div className="d-flex">
                    <input type="file" className="form-control-file" onChange={e => setImage(e.target.files[0])} />
                    <button className="btn btn-secondary ml-2" type="button" onClick={submitImage}>Upload</button>
                  </div>
                </div>
              </div>
              <h4 className="mt-3">ScoreCard</h4>
              <hr className="bg-primary" />
              <div className="row">
                <div className="col-sm-6">
                  <p className="font-weight-bold">Recent</p>
                  <h6 className="text-muted">Best Score</h6>
                </div>
                <div className="col-sm-6">
                  <p className="font-weight-bold">Accuracy</p>
                  <h6 className="text-muted">what derived</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
