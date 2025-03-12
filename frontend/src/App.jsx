import React from "react";
import { Route, Routes } from "react-router-dom";
import Captainlogin from "./Captainlogin";
import CaptainSignup from "./CaptainSignup";
import Start from "./Start";
import Userlogin from "./Userlogin";
import UserSignup from "./UserSignup";
import Home from "./Home";
import UserProtectWrapper from "./UserProtectWrapper";
import UserLogout from "./UserLogout";
import CaptainHome from "./CaptainHome";
import CaptainProtectWrapper from "./CaptainProtectWrapper";
import Riding from "./Riding";
import CaptainRiding from "./CaptainRiding";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
