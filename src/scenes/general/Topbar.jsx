import { Box,useTheme,IconButton } from "@mui/material"
import InputBase from "@mui/material/InputBase"
import { ColorModeContext,tokens } from "../../theme"
import { useContext } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { LightModeOutlined,DarkModeOutlined,NotificationsOutlined,SettingsOutlined,PersonOutlined } from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme()
  const colors  = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display={"flex"} px={2} py={1} justifyContent={"space-between"} >
      {/* search input */}
     <Box
     bgcolor={colors.primary[400]}
     display={"flex"}
     rowGap={2}
     >
    <InputBase sx={{px:2}} placeholder="Enter..." />
      <IconButton>
      <SearchIcon/>
      </IconButton>
     </Box>
     {/* icons  */}
     <Box display={"flex"}>
       <IconButton onClick={colorMode.toggleColorMode}>
      {
        theme.palette.mode === "dark"?
        (<LightModeOutlined/>)
        :
        (<DarkModeOutlined/>)
      }
      </IconButton>
      <IconButton>
      <NotificationsOutlined/>
      </IconButton>
      <IconButton>
      <SettingsOutlined/>
      </IconButton>
      <IconButton>
      <PersonOutlined/>
      </IconButton>
     </Box>
    </Box>
  )
}

export default Topbar
