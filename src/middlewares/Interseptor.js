import { useEffect } from "react";
import axios from "axios";
// import { useAuth } from "../providers/AuthProvider";

function Interceptor() {
  //   const { setIsAxiosFullfil } = useAuth();

  const addErrorInterceptor = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          const code = error.response.status;
          if (code === 401) {
            // setIsAxiosFullfil(true);
            // setTimeout(() => {
            //   setIsAxiosFullfil(false);
            // }, 2000);
            console.log("Something went wrong. 401");
          }
          // console.log("Something went wrong.");
          if (code === 403) {
            console.log("You’re not authorized to do that.");
            //   setIsAxiosFullfil(true);
            //   setTimeout(() => {
            //     setIsAxiosFullfil(false);
            //   }, 5000);
          }
          if (code === 400) {
            console.log("Please fill correct information!!");
            //   setIsAxiosFullfil(true);
            //   setTimeout(() => {
            //     setIsAxiosFullfil(false);
            //   }, 5000);
          }

          if (code === 404) {
            console.log("status code 404");
            //   setIsAxiosFullfil(true);
            //   setTimeout(() => {
            //     setIsAxiosFullfil(false);
            //   }, 5000);
          }

          //     else if (error.message) {
          //       console.log(error.message);
          //     }
          //     console.log("interseptor");
          //   }
          console.log("interseptor");
        }
      }
    );
  };

  useEffect(() => {
    addErrorInterceptor();
  }, []);

  return null;
}

export default Interceptor;
