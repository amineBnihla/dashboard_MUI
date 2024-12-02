import { Box, Icon, Typography, useTheme } from "@mui/material"
import { tokens } from "../theme"
import ProgressBar from "./ProgressCircle"



const StatBox = ({title,subtitle,icon,increase,progress})=>{
const theme = useTheme()
const colors = tokens(theme.palette.mode)
    return(
    <Box p='20px'  backgroundColor={colors.primary[400]} >
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
            {icon}
           <Typography variant="h4" color={colors.grey[100]} fontWeight="bold">
            {title}
           </Typography>
            </Box>
        <Box>
               <ProgressBar progress={progress}/>
        </Box>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={"center"} mt={"10px"}>
              <Typography variant="h5" color={colors.greenAccent[500]}>
            {subtitle}
           </Typography>
         <Typography variant="h5" fontStyle={'italic'} color={colors.greenAccent[500]}>{increase}</Typography>
        </Box>
    </Box>
    )

}
export default StatBox
