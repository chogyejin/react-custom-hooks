import { useNetwork } from "./hooks/useNetwork";

const App = () => {
  const handleNetworkChange = (online: boolean) => {
    console.log(online ? "Go to Online" : "Go to Offline");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
