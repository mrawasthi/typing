// src/components/Profile.jsx
import React from 'react';

const Profile = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 mt-5 pt-5 ">
          <div className="row z-depth-3">
            <div className="col-sm-4 bg-info rounded-left">
              <div className="card-block text-center text-white">
                <i className="fas fa-user-tie fa-7x mt-5"></i>
                <h2 className="font-weight-bold mt-4">Profile</h2>
                <p>Name</p>
                <i className="far fa-edit fa-2x mb-4"></i>
              </div>
            </div>
            <div className="col-sm-8 bg-white rounded-right">
              <h3 className="mt-3 text-center">Information</h3>
              <hr className="badge-primary mt-0 w-25" />
              <div className="row-">
                <div className="col-sm-6">
                  <p className="font-weight-bold">Email:</p>
                  <h6 className="text-muted">useremail</h6>
                </div>
                <div className="col-sm-6">
                  <p className="font-weight-bold">Phone:</p>
                  <h6 className="text-muted">number</h6>
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
