import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import { useSelector } from "react-redux";
import { setLogout } from "../../redux/features/authSlice";

const Settings = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { isAuthenticated } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const token = user?.token;
  const navigate = useNavigate();
  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }
  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
  };
  return (
    <div style={{ marginTop: "500px" }}>
      {user?.result?._id ? (
        <MDBNavbarItem>
          <p className="header-text" onClick={() => handleLogout()}>
            Logout
          </p>
        </MDBNavbarItem>
      ) : (
        <MDBNavbarItem></MDBNavbarItem>
      )}
    </div>
  );
};

export default Settings;
