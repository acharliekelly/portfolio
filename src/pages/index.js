import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Volunteer from './Volunteer';
import Education from './Education';
import Skills from './Skills';

const Pages = ({ user }) => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Me user={user} />} />
                <Route path="/projects" element={<Projects user={user} />} />
                <Route path="/work" element={<Work user={user} />} />
                <Route path="/volunteer" element={<Volunteer user={user} />} />
                <Route path="/education" element={<Education user={user} />} />
                <Route path="/skills" element={<Skills user={user} />} />
            </Routes>
        </Router>
    );
};

export default Pages;