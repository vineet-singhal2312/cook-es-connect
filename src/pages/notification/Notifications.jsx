import React, { useEffect } from "react";
import { BottomNav } from "../../components/bottomNav/BottomNav";
import { Header } from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../features/notificationSlice";

import { NotificationCard } from "./NotificationCard";
export const Notifications = () => {
  const { status, notifications } = useSelector((state) => state.notification);
  const { token } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(getNotifications(token));
    }
  }, [dispatch, status, token]);

  return (
    <>
      <Header />
      <BottomNav />
      <div className="notification sm:container md:mx-auto md:px-20  h-screen flex flex-col items-center">
        <div className="notification scrollbar-hidden flex flex-col md:w-4/5 w-full  mt-12 items-center  pt-4  overflow-x-auto">
          <h1 className="text-3xl font-bold">Notifications</h1>

          <div className="grid place-items-center mt-4 w-full mb-32">
            {notifications.map((notification) => (
              <NotificationCard
                key={notification._id}
                notification={notification}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
