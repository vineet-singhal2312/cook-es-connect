import { useCallback, useEffect } from "react";
import axios from "axios";
import { axiosFailed } from "../features/alertSlice";
import { useDispatch } from "react-redux";

function Interceptor() {
  const dispatch = useDispatch();

  const addErrorInterceptor = useCallback(() => {
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
          if (code === 403) {
            console.log("You’re not authorized to do that.");
            //   setIsAxiosFullfil(true);
            //   setTimeout(() => {
            //     setIsAxiosFullfil(false);
            //   }, 5000);
          }
          if (code === 400) {
            console.log("Please fill correct information!!");
            dispatch(axiosFailed());

            setTimeout(() => {
              dispatch(axiosFailed());
            }, 5000);
          }

          if (code === 404) {
            dispatch(axiosFailed());

            setTimeout(() => {
              dispatch(axiosFailed());
            }, 5000);
          }

          console.log("interseptor");
        }
      }
    );
  }, [dispatch]);

  useEffect(() => {
    addErrorInterceptor();
  }, [addErrorInterceptor]);

  return null;
}

export default Interceptor;
