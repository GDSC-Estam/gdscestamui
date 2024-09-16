import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Archive, Contact, Events, Home, Team } from './Layouts/Pages'
import { PastEvents, UpcomingEvents } from './Layouts/Pages/Events/Layout';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
