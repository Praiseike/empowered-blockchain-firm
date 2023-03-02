import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import Landing from './pages/landing/landing';
import Dashboard from './pages/dashboard/dashboard';
import Loader from './pages/loader/loader';
// Pages
const Signin = lazy(() => import("./pages/landing/signin/signin"));
const Signup = lazy(() => import("./pages/landing/signup/signup"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader timeout={4} />}>
        <Routes>
          <Route path="/*" element={<Landing />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/register" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
