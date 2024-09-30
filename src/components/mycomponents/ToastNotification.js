import React, {useContext} from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

export const ToastNotification = ({ status }) => {

  const { texts } = useContext(LanguageContext);

  const receiver = "lucascsrodriguez@gmail.com";

  let notificationStatusClassName = "";
  let notificationMessage = "";

  if (status === 200) {
    notificationStatusClassName = "success";
    notificationMessage = `${texts.notificationSuccessMessage} ${receiver} ✔`;
  } else {
    notificationStatusClassName = "error";
    notificationMessage = `${texts.notificationErrorMessage} ❌`;
  }

  return (
    <div className={`notification ${notificationStatusClassName}`}>
      {notificationMessage}
    </div>
  )
}