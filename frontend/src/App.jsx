import React from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export default App;
