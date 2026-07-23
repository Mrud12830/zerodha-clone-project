import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";

const FRONTEND_URL = "https://zerodha-clone-project-eta.vercel.app";

const BACKEND_URL = "https://zerodha-clone-project-gd4n.onrender.com";

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      // Get token from URL
      const params = new URLSearchParams(window.location.search);
      const tokenFromUrl = params.get("token");

      // If token came from Login, save it in Dashboard localStorage
      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl);

        // Remove token from URL
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }

      // Get token from URL or Dashboard localStorage
      const token = tokenFromUrl || localStorage.getItem("token");

      console.log("TOKEN USED BY DASHBOARD:", token);

      // If no token, redirect to Frontend Login
      if (!token) {
        window.location.href = `${FRONTEND_URL}/login`;
        return;
      }

      try {
        const res = await axios.get(`${BACKEND_URL}/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Dashboard authorized successfully:", res.data);
      } catch (err) {
        console.log(
          "Dashboard authorization failed:",
          err.response?.data || err.message,
        );

        // Remove invalid token
        localStorage.removeItem("token");

        // Redirect to Frontend Login
        window.location.href = `${FRONTEND_URL}/login`;
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    // Remove Dashboard token
    localStorage.removeItem("token");

    // Go to Frontend Login
    window.location.href = `${FRONTEND_URL}/login`;
  };

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>

      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
