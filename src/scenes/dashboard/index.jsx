import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header"

import StatBox from "../../components/StatBox"
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../../theme";
import LineChart from '../../components/LineChart'
import BarChart from '../../components/BarChart'
import GeoChart from '../../components/GeoChart'
import { mockTransactions } from "../../data/mockData";
import ProgressBar from "../../components/ProgressCircle";
const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box p={"20px"}>
  <Box display={"flex"}  justifyContent={"space-between"} alignItems={"center"}>
   <Header title="Dashboard" subtitle="Welcome to your dashboard" />
   <Button sx={{
    backgroundColor:colors.blueAccent[700],
    color:colors.grey[100],
    fontSize:"12px",
    fontWeight:"bold",
    mt:"10px",
    p:"10px 20px"
   }}>
    <DownloadOutlinedIcon sx={{mr:"10px"}}/>
     Download Reports
   </Button>
  </Box>
  <Box display={'grid'} gridTemplateColumns={'repeat(12,1fr)'} gridAutoRows="140px" gap={'20px'}>
  <Box gridColumn={'span 3'}>
  <StatBox     
  title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
                  <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }/>

  </Box>
  <Box gridColumn={'span 3'}>
  <StatBox     
   title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }/>

  </Box>
  <Box gridColumn={'span 3'}>
  <StatBox     
      title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }/>

  </Box>
  <Box gridColumn={'span 3'}>
  <StatBox     
   title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }/>

  </Box>
   <Box gridColumn={"span 8"} backgroundColor={colors.primary[400]} gridRow={'span 2'} >
   <Box display={"flex"} px={"20px"} pt={"20px"}  justifyContent={"space-between"} alignItems={"center"}>
   <Box>
       <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
   </Box>
    <IconButton>
      <DownloadOutlinedIcon fontSize="26px" sx={{color:colors.greenAccent[500]}}/>
    </IconButton>
   </Box>
   <Box height={'250px'}>
      <LineChart isDashboard={true}/>
   </Box>
   </Box>
   <Box backgroundColor={colors.primary[400]} display={'flex'} flexDirection={'column'} gridColumn={'span 4'} gridRow={'span 2'}>
    <Box px={'20px'} py={'10px'} borderBottom={`4px solid ${colors.grey[500]}`}>
      <Typography variant="h5" fontWeight={'bold'} color={colors.grey[100]}>
        Recent Transaction
      </Typography>
    </Box>
    <Box overflow={'auto'} flexGrow={'1'}>

        {
          mockTransactions.map((trans,i)=>(
    <Box key={`${trans.txId}-${i}`} px={'20px'} py={'10px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} borderBottom={`1px solid ${colors.grey[600]}`}>
      <Box>
        <Typography color={colors.greenAccent[500]} variant="h5" fontWeight={'bold'}>
        {trans.txId}
        </Typography>
        <Typography color={colors.grey[100]}>
        {trans.user}
        </Typography>
      </Box>
      <Box color={colors.grey[100]}>{trans.date}</Box>
      <Box p={'5px 10px'} backgroundColor={colors.greenAccent[500]} borderRadius={'4px'}>
       ${trans.cost}
      </Box>
    </Box>
          ))

        }
    </Box>

   </Box>
   <Box p={"20px"} backgroundColor={colors.primary[400]} gridColumn={'span 4'} gridRow={'span 2'}>
    <Typography variant="h5" fontWeight={'bold'} mb={"30px"} color={colors.grey[100]}>
      Campaign
    </Typography>
    <Box display={'flex'} flexDirection={'column'} justifyContent={"center"} alignItems={"center"}>
      <ProgressBar size="150"/>
      <Typography variant="h5"  sx={{ mt: "15px" }} color={colors.greenAccent[500]}>
        $42,543 revenue generated 
      </Typography>
        <Typography >
        Includes extra misc expinditeurs and costs
      </Typography>
    </Box>
   </Box>
      <Box  backgroundColor={colors.primary[400]} gridColumn={'span 4'} gridRow={'span 2'}>
       <Typography mx={"20px"} mt={"20px"} variant="h5" fontWeight={'bold'} color={colors.grey[100]}>
        Sales Quantity
       </Typography>
       <Box height={'250px'}>
        <BarChart isDashboard={true}/>
       </Box>
       </Box>
      <Box  backgroundColor={colors.primary[400]} gridColumn={'span 4'} gridRow={'span 2'}>
       <Typography mx={"20px"} my={"20px"} variant="h5" fontWeight={'bold'} color={colors.grey[100]}>
        Geography Based Traffic
       </Typography>
       <Box height={'200px'}>
        <GeoChart isDashboard={true}/>
       </Box>
       </Box>
  </Box>
    </Box>
  )
}

export default Dashboard
