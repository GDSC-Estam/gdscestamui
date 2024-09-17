import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Archive, Contact, Events, Home, Team } from './Layouts/Pages'
import { PastEvents, UpcomingEvents } from './Layouts/Pages/Events/Layout';
import { Loader } from './Layouts/Constant';

const LocationWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the loader when route changes
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();

    // Simulate loading time
    const timer = setTimeout(() => {
      handleComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className='bg-white'>
      {loading ? <Loader /> : children}
    </div>
  );
};


function App() {
  return (
    <BrowserRouter>
      <LocationWrapper>

        <div className="App">
          <Routes>
            {/* Home Page */}
            <Route path='/' element={<Home />} />

            {/* About Page */}
            <Route path='/team' element={<Team />} />

            {/* Events Page */}
            <Route path='/upcomingevents' element={<UpcomingEvents />} />
            <Route path='/pastevents' element={<PastEvents />} />

            {/* Contact Us Page */}
            <Route path='/contact' element={<Contact />} />

            {/* Archive Page */}
            <Route path='/archive' element={<Archive />} />
          </Routes>
        </div>
      </LocationWrapper>
    </BrowserRouter>
  );
}

export default App;
