import { Box,TextField,Button} from "@mui/material" 
import { Formik } from "formik"
import Header from "../../components/Header"
import * as yup from 'yup'
const initialValues = {
    lastName :"",
    firstName :"",
    email :"",
    contact :"",
    address1 :"",
    address2 :"",
}

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const formValidationSchema = yup.object().shape({
    firstName : yup.string().required("required"),
    lastName:yup.string().required("required"),
    email:yup.string().email("Email invalid").required("required"),
    contact:yup.string().matches(phoneRegExp,"Phone number is not valid").required("required"),
    address1:yup.string().required("required"),
    address2:yup.string().required("required")
})
const Form = () => {

    const handleSubmit = (values)=>{
     console.log(values)
    }
  return (
    <Box>
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
    <Formik initialValues={initialValues} validationSchema={formValidationSchema} onSubmit={handleSubmit}>
       {({
        values,
        handleSubmit,
        handleChange,
        errors,
        touched
       })=>{
//   <form onSubmit={}>
//         <Box display={"grid"} gap={"30px"} gridTemplateColumns={'repeat(4,minmax(0,1fr))'}>

//         </Box>
//         </form>
console.log(param)
       }}
      

    </Formik>
    </Box>
      
  )
}

export default Form
