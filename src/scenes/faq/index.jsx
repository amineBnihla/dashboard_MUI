import {Box,useTheme,Typography } from "@mui/material"
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";


 const Faq = ()=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

return(
    <Box p={'20px'}>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
       
       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
         <Typography color={colors.greenAccent[500]} variant="h6">
            First Question
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime illo aut temporibus repellendus accusamus impedit aliquid rerum illum tenetur voluptatem?
        </AccordionDetails>
       </Accordion>
       <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
         <Typography color={colors.greenAccent[500]} variant="h6">
            Another Interest Question
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime illo aut temporibus repellendus accusamus impedit aliquid rerum illum tenetur voluptatem?
        </AccordionDetails>
       </Accordion>
       <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
         <Typography color={colors.greenAccent[500]} variant="h6">
             Another Random Question
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime illo aut temporibus repellendus accusamus impedit aliquid rerum illum tenetur voluptatem?
        </AccordionDetails>
       </Accordion>
       <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
         <Typography color={colors.greenAccent[500]} variant="h6">
             Final Question
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime illo aut temporibus repellendus accusamus impedit aliquid rerum illum tenetur voluptatem?
        </AccordionDetails>
       </Accordion>
    </Box>

)
 }

 export default Faq