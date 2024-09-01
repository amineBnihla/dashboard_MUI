import { Box, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import {mockDataContacts} from '../../data/mockData'
function Contacts() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {
            field:'id',
            headerName:'ID',
            flex:0.5
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
               field:'address',
            headerName:'Addresse',
            flex:1
        },
        {
               field:'city',
            headerName:'City',
            flex:1
        },
        {
               field:'zipCode',
            headerName:'Zip code',
            flex:1
        },
        {
               field:'registrarId',
            headerName:'Registrar ID',
            flex:1
        }
    ]
  return (
<Box p="20px" flex={1} width={'100%'} sx={{overflowX:'hidden',overflowY:'auto'}} >
    <Header title="Contacts" subtitle="List of Contacts for Future Reference" />
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
          },  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          }, }}>
       <DataGrid   rows={mockDataContacts}  columns={columns} slots={{ toolbar: GridToolbar }} /> 
      {/* <Typography>Hello</Typography> */}
    </Box>
</Box>
  )
}

export default Contacts
