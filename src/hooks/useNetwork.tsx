import { useEffect, useState } from "react";

export const useNetwork = (onChange: (online: boolean) => void) => {
  const [status, setStatus] = useState<boolean>(navigator.onLine);
  console.log("first || last " + navigator.onLine);
  const handleChange = () => {
    console.log("2nd " + navigator.onLine);
    onChange(navigator.onLine); // 3rd console.log
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

// const App = () => {
//   const handleNetworkChange = (online: boolean) => {
//     console.log(online ? "Go to Online" : "Go to Offline");
//   };
//   const online = useNetwork(handleNetworkChange);
//   return (
//     <div>
//       <h1>{online ? "Online" : "Offline"}</h1>
//     </div>
//   );
// };
