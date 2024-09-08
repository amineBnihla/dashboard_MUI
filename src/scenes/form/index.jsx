import { Box,TextField,Button, Input} from "@mui/material" 
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
    <Box m={"20px"}>
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
    <Formik initialValues={initialValues} validationSchema={formValidationSchema} onSubmit={handleSubmit}>
       {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched
       })=>(
  <form onSubmit={handleSubmit}>
        <Box display={"grid"} gap={"30px"} gridTemplateColumns={'repeat(4,minmax(0,1fr))'}>
          <TextField
          onBlur={handleBlur}
          fullWidth
          onChange={handleChange}
          value={values.firstName}
          label="First Name"
          type="text"
          name="firstName"
          variant="filled"
          error={!!touched.firstName && !!errors.firstName}
          helperText={touched.firstName && errors.firstName}
          sx={{gridColumn:'span 2'}}
          />
              <TextField
          onBlur={handleBlur}
          fullWidth
          onChange={handleChange}
          value={values.lastName}
          label="Last Name"
          type="text"
          name="lastName"
          variant="filled"
          error={!!touched.lastName && !!errors.lastName}
          helperText={touched.lastName && errors.lastName}
          sx={{gridColumn:'span 2'}}
          />
              <TextField
          onBlur={handleBlur}
          fullWidth
          onChange={handleChange}
          value={values.email}
          label="Email"
          type="text"
          name="email"
          variant="filled"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{gridColumn:'span 2'}}
          />
              <TextField
          onBlur={handleBlur}
          fullWidth
          onChange={handleChange}
          value={values.contact}
          label="Contact"
          type="text"
          name="contact"
          variant="filled"
          error={!!touched.contact && !!errors.contact}
          helperText={touched.contact && errors.contact}
          sx={{gridColumn:'span 2'}}
          />
              <TextField
          onBlur={handleBlur}
          fullWidth
          onChange={handleChange}
          value={values.address1}
          label="Address 1"
          type="text"
          name="address1"
          variant="filled"
          error={!!touched.address1 && !!errors.address1}
          helperText={touched.address1 && errors.address1}
          sx={{gridColumn:'span 4'}}
          />
              <TextField
          onBlur={handleBlur}
          fullWidth
          onChange={handleChange}
          value={values.address2}
          label="Address"
          type="text"
          name="address"
          variant="filled"
          error={!!touched.address2 && !!errors.address2}
          helperText={touched.address2 && errors.address2}
          sx={{gridColumn:'span 4'}}
          />

        </Box>
           <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
        </form>
       )}
      

    </Formik>
    </Box>
      
  )
}

export default Form
