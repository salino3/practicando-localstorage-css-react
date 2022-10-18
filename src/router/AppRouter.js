import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/NavBar';
import PageNotFound from '../components/PageNotFound';
import FirstPage from '../pages/FirstPage';
import FormPage from '../pages/FormPage';
import LoginFormPage from '../pages/LoginFormPage';
import PrincipalPage from '../pages/PrincipalPage';
import SecondPage from '../pages/SecondPage';




const AppRouter = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />

        <Route path="/uno" element={<FirstPage />} />
        <Route path="/dos" element={<SecondPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter