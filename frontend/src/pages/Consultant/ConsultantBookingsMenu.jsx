import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react';
  import  "../../App.css";
import { Link } from 'react-router-dom';

const ConsultantBookingsMenu=()=>
{


    return(<>
    
    <Menu isLazy className="ConsultantMenuItem">
  <MenuButton >Appointments</MenuButton>
  <MenuList className="ConsultantMenuItem">
    {/* MenuItems are not rendered unless Menu is open */}
   <Link to="/consultantBookings"><MenuItem className="ConsultantMenuItem">My Appointments</MenuItem></Link> 
   <Link to="/consultantHistory"><MenuItem>History</MenuItem></Link> 
  </MenuList>
</Menu>
    
    </>)
}

export default ConsultantBookingsMenu;