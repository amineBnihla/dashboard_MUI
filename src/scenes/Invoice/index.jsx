import { Box, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'
import { DataGrid } from '@mui/x-data-grid'
import {mockDataInvoices} from '../../data/mockData'

function Invoice() {
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
               field:'cost',
            headerName:'Cost',
            type:'number',
            align :'center',
            headerAlign:'center',
             flex:1,
               renderCell: ({ row: { cost } }) => {
               return (
               <Typography sx={{color:colors.greenAccent[500]}}>
                {'$'+ cost}
               </Typography>
               )
             },
             
        },
        {
               field:'phone',
            headerName:'Phone Number',
            flex:1
        },
        {
               field:'date',
            headerName:'Date',
            flex:1,
          
        }
    ]
  return (
<Box p="20px" flex={1} width={'100%'} sx={{overflowX:'hidden',overflowY:'auto'}} >
    <Header title="INVOICE" subtitle="List of Invoice Balances" />
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
          }, 
          "& .MuiDataGrid-cell.MuiDataGrid-cell--textCenter": {
            display: `flex`,
            alignItems:'center'
          }, }}>
       <DataGrid checkboxSelection   rows={mockDataInvoices}  columns={columns}/> 
      {/* <Typography>Hello</Typography> */}
    </Box>
</Box>
  )
}

export default Invoice
