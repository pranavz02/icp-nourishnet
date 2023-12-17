import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const EateryForm = () => {
  const initialValues = {
    firstName: "",
    businessName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
    foodType: "",
    quantity: "",
    description: "",
    expiryDate: "",
    cookingDate: "",
  };

  // const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values, { resetForm }) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating async operation
    resetForm(); // Reset the form fields
    toast.success("Food item added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    businessName: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    contact: yup
      .string()
      .matches(
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
        "Phone number is not valid"
      )
      .required("Required"),
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required"),
    foodType: yup.string().required("Required"),
    quantity: yup.number().required("Required").positive().integer(),
    expiryDate: yup.string().required("Required"),
    cookingDate: yup.string().required("Required"),
  });

  return (
    <Box m="20px">
      <Header title="LIST YOUR FOOD" subtitle="Add your surplus food here" />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Typography variant="h6">Food Type and Quantity</Typography>

            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              {/* Food Type */}
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="foodType">Food Type</InputLabel>
                  <Select
                    id="foodType"
                    name="foodType"
                    value={values.foodType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="pulses">Pulses and Cereals</MenuItem>
                    <MenuItem value="curries">Curries</MenuItem>
                    <MenuItem value="meat">Meat</MenuItem>
                    <MenuItem value="beverages">Beverages</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Quantity */}
              <Grid item xs={6}>
                <TextField
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  type="number"
                  value={values.quantity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.quantity && Boolean(errors.quantity)}
                  helperText={touched.quantity && errors.quantity}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ marginTop: "20px" }}>
              Date of Cooking and Date of Expiry
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
              {/* Date of Cooking */}
              <Grid item xs={6}>
                <TextField
                  id="cookingDate"
                  name="cookingDate"
                  label="Date of Cooking"
                  type="date"
                  value={values.cookingDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.cookingDate && Boolean(errors.cookingDate)}
                  helperText={touched.cookingDate && errors.cookingDate}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              {/* Date of Expiry */}
              <Grid item xs={6}>
                <TextField
                  id="expiryDate"
                  name="expiryDate"
                  label="Date of Expiry"
                  type="date"
                  value={values.expiryDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.expiryDate && Boolean(errors.expiryDate)}
                  helperText={touched.expiryDate && errors.expiryDate}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ marginTop: "20px" }}>
              Instructions to add
            </Typography>

            <TextField
              id="description"
              name="description"
              label="Any specific Instructions, You Would Like to add."
              multiline
              rows={4}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
              fullWidth
              sx={{ marginTop: "10px" }}
            />

            {/* Submit Button */}
            <Box display="flex" justifyContent="end" mt="20px" marginBottom="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add your food Item
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </Box>
  );
};

export default EateryForm;
