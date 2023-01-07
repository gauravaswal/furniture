import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const requestHelper = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
   headers: {
      "Content-Type": "application/json",
   },
});
// For GET requests
requestHelper.interceptors.request.use(
   (req) => {
      // Add configurations here
      return req;
   },
   (err) => {
      return Promise.reject(err);
   }
);

requestHelper.interceptors.response.use(
   (res) => {
      // Add configurations here
      if (res.status === 201) {
         console.log('Posted Successfully');
      }
      return res;
   },
   (err) => {
      if (err?.response?.status === 400) {
         // alert(err?.response.data.message)
         return toast.warn(err?.response.data.message)
      } else {
         return Promise.reject(err);
      }

   }
);
export default requestHelper;
