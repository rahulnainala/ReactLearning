import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  //check if online then return online status
  window.addEventListener("online", () => {
    setOnlineStatus(true);
  });
  
  //returns Boolean Value
  return OnlineStatus;
};
export default useOnlineStatus;
