import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ConfirmationPage from "./Pages/ConfirmationPage/ConfirmationPage";
import HomePage from "./Pages/HomePage/HomePage";
import MyProfile from "./Pages/MyProfile/MyProfile";
import SignInPage from "./Pages/SignInPage/SignInPage";
import TaskersPage from "./Pages/TaskersPage/TaskersPage";
import ThankYouPage from "./Pages/ThankYou/thankYouPage";

function App() {
  useEffect(() => {
    if (!JSON.parse(window.localStorage.getItem("user")))
      window.localStorage.setItem("user", null);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<NavBar />}>
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/taskers" element={<TaskersPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/thankyou" element={<ThankYouPage/>} />
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
