import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, ProtectedRoute } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import Ticket from "./components/Ticket/Ticket";
import BusPass from "./components/Bus Pass/BusPass";
import StudentPass from "./components/Bus Pass/Student/StudentPass";
import AddEditTour from "./pages/AddEditTour";
import Success from "./components/RedirectPages/Success";
import QrCode from "./components/QrCode/QrCode";
import Onboard from "./components/Onboard/Onboard";
import PrivateRoute from "./components/PrivateRoute";
import TicketUrl from "./components/Email/TicketUrl";
import PassSuccess from "./components/RedirectPages/PassSuccess";
import Settings from "./components/Settings/Settings";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/ticket_file" element={<TicketUrl />} />
        <Route path="/test_db" element={<AddEditTour />} />
        <Route path="/pass_details_submit" element={<PassSuccess />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Header />
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/ticket"
          element={
            <PrivateRoute>
              <Ticket />
            </PrivateRoute>
          }
        />
        <Route
          path="/bus-pass"
          element={
            <PrivateRoute>
              <BusPass />
            </PrivateRoute>
          }
        />
        <Route path="/employee_pass" element={<StudentPass />} />
        <Route
          path="/student_pass"
          element={
            <PrivateRoute>
              <StudentPass />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment_success"
          element={
            <PrivateRoute>
              <Success />
            </PrivateRoute>
          }
        />
        <Route
          path="/qrcode_generation"
          element={
            <PrivateRoute>
              <QrCode />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
