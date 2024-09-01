import { Box } from "@mui/material"
import Header from "../../components/Header"

const Dashboard = () => {
  return (
  <Box display={"flex"} m="20px" justifyContent={"space-between"} alignItems={"center"}>
   <Header title="Dashboard" subtitle="Welcome to your dashboard" />
  </Box>
  )
}

export default Dashboard
