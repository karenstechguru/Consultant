import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import '../App.css';
import { Link } from 'react-router-dom';

import Logo from '../assets/WebLogo.png';
import MyBookingsMenu from '../pages/User/MyBookingsMenu';
import ConsultantBookingsMenu from '../pages/Consultant/ConsultantBookingsMenu';
const Navbar = () => {
  const consultantToken = Cookies.get('consultantLogin');
  const userToken = Cookies.get('userToken');
  const adminToken = Cookies.get('adminToken');
  let nav = useNavigate();

  const [isVerified, setVerified] = useState();

  useEffect(() => {
    if (consultantToken !== undefined) {
      const email = Cookies.get('email');
      axios
        .get(`http://localhost:5137/getConData/${email}`)
        .then((res) => {
          setVerified(res.data.verified);
        })
        .catch((e) => console.log(e));
    }
  }, [consultantToken]);
  const handleLogout = (token) => {
    Cookies.remove(token);
    Cookies.remove('name');
    Cookies.remove('email');
    nav('/');
    window.location.reload(false);
  };
  return (
    <div>
      <div className="bg-slate-700 text-slate-100 font-semibold text-lg h-18 p-5 align-middle text-center sticky">
        <ul className="flex relative justify-around text-center">
          <div className=" w-40 ">
            <NavLink to="/"><img src={Logo} alt="24/7 Virtual Care" className="w-full h-92" /></NavLink>
          </div>

          {adminToken != null ? (
            <div className="flex relative space-x-6 text-center ">
              <li>
                {' '}
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li>
                {" "}
                <NavLink to="/about">About</NavLink>
              </li> */}
              <li>
                {' '}
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/consultantrequests">Consultant Requests</NavLink>
              </li>
              <li>
                {' '}
                <NavLink onClick={() => handleLogout('adminToken')}>
                  Logout
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </div>
          ) : consultantToken != null && isVerified ? (
            <div className="flex relative space-x-6 text-center ">
              <li>
                {' '}
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li>
                {" "}
                <NavLink to="/about">About</NavLink>
              </li> */}
              <li>
                {' '}
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/consultantSchedule">Schedules</NavLink>
              </li>
              <li>
                {' '}
                <Menu isLazy className="ConsultantMenuItem">
                  <MenuButton>Appointments</MenuButton>
                  <MenuList className="ConsultantMenuItem">
                    <Link to="/consultantBookings">
                      <MenuItem className="ConsultantMenuItem">
                        My Appointments
                      </MenuItem>
                    </Link>
                    <Link to="/consultantHistory">
                      <MenuItem>History</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </li>
              <li>
                {' '}
                <Menu isLazy>
                  <MenuButton>Prescription</MenuButton>
                  <MenuList>
                    <Link to="/pres">
                      <MenuItem>Add Prescription</MenuItem>
                    </Link>
                    <Link to="/presCard">
                      <MenuItem>View Prescription</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </li>
              <li>
                {' '}
                <NavLink onClick={() => handleLogout('consultantLogin')}>
                  Logout
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </div>
          ) : consultantToken != null && !isVerified ? (
            <div className="flex relative space-x-6 text-center ">
              <li>
                {' '}
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li>
                {" "}
                <NavLink to="/about">About</NavLink>
              </li> */}
              <li>
                {' '}
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                {' '}
                <NavLink onClick={() => handleLogout('consultantLogin')}>
                  Logout
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </div>
          ) : userToken != null ? (
            <div className="flex relative space-x-6 text-center ">
              <li>
                {' '}
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li>
                {" "}
                <NavLink to="/about">About</NavLink>
              </li> */}
              <li>
                {' '}
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/checkAppoitment">Book Appointment</NavLink>
              </li>
              {/* <li>
                  {' '}
                <NavLink><MyBookingsMenu/></NavLink>
                </li> */}
              <li>
                {' '}
                <Menu isLazy className="bookingsList">
                  <MenuButton>Bookings</MenuButton>
                  <MenuList>
                    <Link to="/myBookings">
                      <MenuItem>My Bookings</MenuItem>
                    </Link>
                    <Link to="/history">
                      <MenuItem>History</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </li>
              <li>
                {' '}
                <NavLink to="/presCard">Prescription</NavLink>
              </li>
              <li>
                {' '}
                <NavLink onClick={() => handleLogout('userToken')}>
                  Logout
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </div>
          ) : (
            <div className="flex relative space-x-6 text-center ">
              <li>
                {' '}
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li>
                {" "}
                <NavLink to="/about">About</NavLink>
              </li> */}
              <li>
                {' '}
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/register">Registration</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
