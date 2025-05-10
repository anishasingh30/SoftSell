import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import HomePage from './Pages/HomePage';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                </Routes>
            </Router>
        </ThemeProvider >
    );
}

export default App;