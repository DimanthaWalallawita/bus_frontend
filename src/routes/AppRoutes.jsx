import React from 'react'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  const Home = lazy(() => import('../pages/Home'))
  const About = lazy(() => import('../pages/About'))
  const Contact = lazy(() => import('../pages/Contact'))
  const Login = lazy(() => import('../pages/auth/Login'))
  const Register = lazy(() => import('../pages/auth/Register'))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes