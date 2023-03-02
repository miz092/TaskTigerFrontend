import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import MyProfile from "./Pages/MyProfile/MyProfile";
import TaskersPage from "./Pages/TaskersPage/TaskersPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<NavBar />}>
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/taskers" element={<TaskersPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
