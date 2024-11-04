// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import NotFound from "./pages/NotFound";
// import PageNav from "./components/PageNav";

// function App() {
//   return (
//     <>
     
//       <h1> Hello Router</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="product" element={<Product />} />
//           <Route path="pricing" element={<Pricing />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
   




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './route/Home';
import About from './route/About';
import Contact from './route/Contact';
import Login from './route/Login';
import ListComponent from './route/ListComponent';
import "./App.css"
import Navbar from './route/Navbar';
function App() {
  return (
    <Router>
          <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<ListComponent />}/>
      </Routes>
    </Router>
  );
}

export default App;



