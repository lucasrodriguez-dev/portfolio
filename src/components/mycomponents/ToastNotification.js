import React from 'react';

export const ToastNotification = ({ status }) => {

  const receiver = "lucascsrodriguez@gmail.com";

  let notificationStatusClassName = "";
  let notificationMessage = "";

  if (status === 200) {
    notificationStatusClassName = "success";
    notificationMessage = `Your message was sent to ${receiver} ✔`;
  } else {
    notificationStatusClassName = "error";
    notificationMessage = `Oops... Something went wrong ❌`;
  }

  return (
    <div className={`notification ${notificationStatusClassName}`}>
      {notificationMessage}
    </div>
  )
}