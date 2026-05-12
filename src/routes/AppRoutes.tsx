import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import PageLoader from "../components/layout/Pageloader";

// Lazy imports
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Explore = lazy(() => import("../pages/Explore"));
const FAQ = lazy(() => import("../pages/FAQ"));

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/faqs" element={<FAQ />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default AppRoutes;