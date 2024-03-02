import React from 'react';

export const ToastNotification = ({ notificationType }) => {

  const receiver = "lucascsrodriguez@gmail.com";

  const message = notificationType === 'success' ? `Your message was sent to ${receiver} ✔` : "Oops... An error has occurred ❌";

  return (
    <div className={`notification ${notificationType}`}>
      {message}
    </div>
  )
}