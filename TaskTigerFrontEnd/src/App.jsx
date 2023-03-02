import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import MyProfile from "./Pages/MyProfile/MyProfile";
import ConfirmationPage from "./Pages/ConfirmationPage/ConfirmationPage.jsx";
import ThankYouPage from "./Pages/ThankYou/thankYouPage.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route element={<NavBar/>}>
                        <Route path="/myprofile" element={<MyProfile/>}/>
                        <Route path="/confirm" element={<ConfirmationPage/>}/>
                        <Route path="/thankyou" element={<ThankYouPage/>}/>
                        <Route path="/error" element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
