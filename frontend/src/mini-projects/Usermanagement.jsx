import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Usermanagement.css";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Usermanagement = () => {
  const [users, getUser] = useState([]);
  const [load, loader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        getUser(res.data.users);
      })
      .catch((err) => console.log(err))
      .finally(() => loader(true));
  }, [load]);

  return (
    <div className="user-container">
      <h1 className="user-header">User Management</h1>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/nav")}
        sx={{ px: 3, borderRadius: 2 }}
      >
        Back to Projects
      </Button>
      {users.map((user, i) => (
        <div
          className="user-card"
          key={i}
          onClick={() => navigate(`/users/${user.id}`)}
          style={{ cursor: "pointer" }}
        >
          {user.firstName} {user.lastName}
        </div>
      ))}
    </div>
  );
};

export default Usermanagement;
