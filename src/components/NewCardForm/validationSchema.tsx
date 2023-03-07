import * as yup from "yup"; 

const isRequiredMessage = "This field is required";

  export default yup.object().shape({
    cardNumber: yup.number().required(isRequiredMessage).max(12),
    expirationDate: yup.string().required(isRequiredMessage).max(15),
    cvv: yup.number().required(isRequiredMessage).max(3), 
    service: yup.string().required(isRequiredMessage).max(20)
  }); 

  