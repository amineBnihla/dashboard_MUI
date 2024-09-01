import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'
import { DataGrid } from '@mui/x-data-grid'
import {mockDataTeam} from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
function Team() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {
            field:'id',
            headerName:'ID',
            flex:1
        },
        {
            field:'name',
            headerName:'Name',
            flex:1,
            cellClassName: "name-column--cell",
        },
        {
               field:'email',
            headerName:'Email',
            flex:1
        },
        {
               field:'age',
            headerName:'Age',
            type:'number',
            headerAlign:'left',
            align:'left',
            flex:1
        },
        {
               field:'phone',
            headerName:'Phone Number',
            flex:1
        },
        {
               field:'access',
            headerName:'Access Level',
            flex:1,
             renderCell: ({ row: { access } }) => {
               return (
                <Box
                width="60%"
                m="0 auto"
                p="5px"
                display={"flex"}
                justifyContent={'center'}
                backgroundColor={
                    access === 'admin'
                    ? colors.greenAccent[600]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
                >
                 {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                 {access === "manager" && <SecurityOutlinedIcon />}
                 {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
                    {access}
                </Typography>
                </Box>
               )
             }
        }
    ]
  return (
<Box p="20px" flex={1} width={'100%'} sx={{overflowX:'hidden',overflowY:'auto'}} >
    <Header title="TEAM" subtitle="Managing the Team Members" />
    <Box sx={{ height: '75%', width: '100%', "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .css-yr9y0d-MuiDataGrid-root .MuiDataGrid-container--top [role=row]": {
            backgroundColor: colors.blueAccent[700]+" !important",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          }, }}>
       <DataGrid checkboxSelection   rows={mockDataTeam}  columns={columns}/> 
      {/* <Typography>Hello</Typography> */}
    </Box>
</Box>
  )
}

export default Team
