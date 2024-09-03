import { Avatar, Box, colors, IconButton, Typography, useTheme } from '@mui/material'
import {useState} from 'react'
import { tokens } from '../../theme'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
const Item = ({title,icon,to,selected,setSelected})=>{
return (
  
  <MenuItem
  active={selected === title}
  onClick={()=>setSelected(title)}
  
  >
  {/* <Box display={'flex'} gap={1}>
  </Box>
  <Icon /> */}
  <Link to={to} style={{color:colors.grey[100],textDecoration:'none',display:'flex',height:'100%',width:'100%',alignItems:'center',gap:"5px"}}>
  {icon}
   <Typography  >{title}</Typography>
  </Link>
 </MenuItem>
)
} 
const SidebarCom = ({isActive,setIsActive}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  
   const [selected,setSelected] = useState("dashboard")
  return (
   

  <Sidebar collapsed={isActive}   backgroundColor={colors.primary[400]} rootStyles={{border:"none"}}>
  <Menu 
   
  menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&:hover a`]: {
         color: "#868dfb !important",
     
        },
        [`&:hover `]: {
        
         backgroundColor:colors.primary[500]
        },
         [`&.ps-active a`]: {
          color: "#6870fa !important",
       
        },
      },
    }}>
     <MenuItem  >
     <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      {!isActive && <Typography variant='h3' color={colors.grey[100]}>Adminis</Typography>}
        <IconButton onClick={() => setIsActive(!isActive)}>
        <MenuOutlinedIcon />
        </IconButton>
     </Box>
     </MenuItem>
    
    {
         !isActive &&
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} rowGap={1} mt={2}>
       <img alt="User" src={'/assets/user.png'}  style={{ width: '100px', height: '100px',borderRadius:'50%' }}/>
       <Box textAlign={'center'}>
         <Typography variant='h2' fontWeight="bold" color={colors.grey[100]}>
          Ed Roh
         </Typography>
           <Typography variant='h6' fontWeight="bold" color={colors.greenAccent[500]}>
         VP Fancy Admin
         </Typography>
       </Box>
      </Box> 
    }
    <Box mt={2}>
  <Item
     title="Dashboard"
     icon={<HomeOutlinedIcon sx={{minWidth:'30px'}} />}
          selected={selected}
              setSelected={setSelected}
              to={'/'}
     />
      <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon sx={{minWidth:'30px'}} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon sx={{minWidth:'30px'}} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon sx={{minWidth:'30px'}} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon sx={{minWidth:'30px'}}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon sx={{minWidth:'30px'}}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon sx={{minWidth:'30px'}}/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon sx={{minWidth:'30px'}}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon sx={{minWidth:'30px'}}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon sx={{minWidth:'30px'}}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon sx={{minWidth:'30px'}}/>}
              selected={selected}
              setSelected={setSelected}
            />

    </Box>
   
  </Menu>
</Sidebar>
  
  )
}


export default SidebarCom
