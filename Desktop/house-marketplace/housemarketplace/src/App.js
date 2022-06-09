import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Explore from "./pages/Explore";
import Forgotpassword from "./pages/Forgotpassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Router>
      <Routes>
         <Route path='/' element={<Explore />} />
         <Route path='/offers' element={<Offers />} />
         <Route path='/profile' element={<Profile/>} />
         <Route path='/sign-in' element={<Signin />} />
         <Route path='/sign-up' element={<Signup />} />
         <Route path='/forgot-password' element={<Forgotpassword />} />
      </Routes>
      <Navbar />
      </Router>
      
    </>
  );
}

export default App;
