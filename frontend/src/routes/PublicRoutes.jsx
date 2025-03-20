import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/About';
import Contact from '../pages/contact/Contact';
import Favorites from '../pages/Favorites';
import Services from '../pages/Services';
import ConsultantRegistration from '../pages/ConsultantRegistration';
import ConsultantDetails from '../pages/SuperAdmin/ConsultantDetails';
import UserRegistration from '../pages/auth/UserRegistration';
import ConsultantRequestCard from '../pages/SuperAdmin/ConsultantRequestCard';
import BookSchedule from '../pages/User/BookSchedule';
import ConsultantLogin from '../pages/Consultant/ConsultantLogin';
import UserLogin from '../pages/auth/UserLogin';
import ConsultantSchedule from '../pages/Consultant/ConsultantSchedule';
import ConsultantAppointment from '../pages/User/ConsultantAppointment';
import Prescription from '../pages/Consultant/Prescription';
import PrescriptionDisplayCard from '../pages/User/PrescriptionDisplayCard';
import PrescriptionDisplay from '../pages/User/PrescriptionDisplay';
import Registration from '../components/Registration';
import Login from '../components/Login';
import ReviewsDisplay from '../pages/User/ReviewsDisplay';
import SuccessfulBooking from '../pages/User/SuccessfulBooking';
import YourBookings from '../pages/User/YourBookings';
import UserRoom from '../pages/User/UserRoom';
import HistoryPage from '../pages/User/History';
import ConsultantBooking from '../pages/Consultant/ConsultantBookings';
import ConsultantHistory from '../pages/Consultant/ConsultantHistory';

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/fav" element={<Favorites />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/auth" element={<Services />}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

        {/* User Auth */}
        <Route path="/userregister" element={<UserRegistration />}></Route>
        <Route path="/userlogin" element={<UserLogin />}></Route>

        {/* Consultant Auth */}
        <Route path="/consultantreg" element={<ConsultantRegistration />}></Route>
        <Route path="/consultantLogin" element={<ConsultantLogin />}></Route>

        <Route path="/consultantrequests" element={<ConsultantRequestCard />}></Route>
        <Route path="/bookAppoitment" element={<BookSchedule />}></Route>
        <Route path="/consultantetails" element={<ConsultantDetails />}></Route>
        <Route path="/consultantSchedule" element={<ConsultantSchedule/>}></Route>
        <Route path="/checkAppoitment" element={<ConsultantAppointment/>}></Route>
        <Route path="/pres" element={<Prescription/>}></Route>
        <Route path="/presCard" element ={<PrescriptionDisplayCard/>}></Route>
        <Route path="/presDisplay" element={<PrescriptionDisplay/>}></Route>
        <Route path="/reviewDisplay" element={<ReviewsDisplay/>}></Route>

        <Route path="/bookingDone" element={<SuccessfulBooking/>}></Route>
        <Route path="/myBookings" element={<YourBookings/>}></Route>
        <Route path="/userRoom/:roomId" element={<UserRoom/>}></Route>
       <Route path="/history" element={<HistoryPage/>}></Route>
       <Route path="/donsultantBookings" element={<ConsultantBooking/>}></Route>
       <Route path="/consultantHistory" element={<ConsultantHistory/>}></Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
