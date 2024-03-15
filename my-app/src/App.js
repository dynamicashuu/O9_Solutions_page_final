import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StickyNavbar from './navbar.jsx';
import Elipse from './Ellipsis.jsx'; // Adjust the path according to your project structure
import LinkFill from './linkfilter.jsx';
import Forwardfill from './Forward.jsx';
import Hamburgerfill from './Hamburger.jsx'
import Typographyvarient from './cards.jsx'

function App() {
 return (
    <Router>
      <StickyNavbar />
      
      <Routes>
        <Route path="/Ellipsis" element={<Elipse />} />
        {/* Add other routes as needed */}
        <Route path="/linkfill" element={<LinkFill />} />
        <Route path="/forwardfill" element={<Forwardfill />} />
        <Route path="/hamburgerfill" element={<Hamburgerfill />} />
      </Routes>
      {/* <Typographyvarient></Typographyvarient> */}
    </Router>
 );
}

export default App;
