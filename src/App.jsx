import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './Pages/Signup'
import SignIn from './Pages/Login'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Pages/dashboard'
import AuthRoute from './Routes/AuthRoutes'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contacte from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import Profile from './Pages/Profile'

import ProtectedRoute from './Routes/ProtectedRoutes'
import LogOut from './Pages/Logout'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ServicesPage from './Pages/ServicesPage'
import DonorRegistrationForm from './Pages/DonorRegistrationForm'
import FeaturedItemsSection from './Pages/BloodDonationCamps'

// import LogOut from './Pages/Logout'
function App() {
  const [count, setCount] = useState(0)
  const theme = createTheme({
    palette: {
      primary: {
        main: '#e5383b', // Your primary color
      },
      secondary: {
        main: '#a4161a', // Your secondary color
      },
      background: {
        default: '#ffffff', // Main background color
        paper: '#f5f3f4', // Paper background color
      },
      text: {
        primary: '#0b090a', // Primary text color
        secondary: '#b1a7a6', // Secondary text color
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* <Route element={<AuthRoute />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacte />} />
          <Route path="/aboutus" element={<AboutUs />} />
        
          {/* <Route path="/abc" element={<FeaturedItemsSection />} /> */}

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/register" element={<DonorRegistrationForm />} />
          <Route path="/servicespage" element={<ServicesPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </ThemeProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      // transition={Bounce}
      />
    </>
  )
}

export default App

