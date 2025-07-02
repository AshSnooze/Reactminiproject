import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import "./UserDetails.css"; 
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

const UserDetails = () => {
  const param = useParams();
  const [user, getuser] = useState({});
  const [load, loader] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${param.id}`)
      .then((res) => getuser(res.data))
      .catch((err) => console.error(err))
      .finally(() => loader(false));
  }, [param.id]);

  return (
    <div className="user-details-container">
      {load ? (
        <CircularProgress />
      ) : (
        <>
          <h2 className="user-details-header">User Profile</h2>
          <div className="user-details-card">
            <div className="user-image">
              <img src={user.image} alt={`${user.firstName}'s avatar`} />
            </div>
            <div className="user-info">
              <p>
                <strong>Full Name:</strong> {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Maiden Name:</strong> {user.maidenName}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Password:</strong> {user.password}
              </p>
              <p>
                <strong>Birth Date:</strong> {user.birthDate}
              </p>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={() => Navigate("/users")}
            sx={{ mt: 3, px: 3, borderRadius: 2 }}
          >
            Back to Users
          </Button>
        </>
      )}
    </div>
  );
};

export default UserDetails;
