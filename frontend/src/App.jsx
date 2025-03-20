import "./App.css";
import Navbar from "./components/Navbar";
import ConsultantSchedule from "./pages/Consultant/ConsultantSchedule";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <>
      <Navbar />
      <PublicRoutes />
    </>
  );
}

export default App;
