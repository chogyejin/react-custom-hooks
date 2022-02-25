import { useFadeIn } from "./hooks/useFadeIn";

const App = () => {
  const fadeInDiv = useFadeIn(1, 2); // 1초 동안 서서히 2초 뒤에
  const fadeInP = useFadeIn(5, 10); // 5초 동안 서서히 10초 뒤에
  return (
    <div>
      <div {...fadeInDiv}>Hi</div>
      <p {...fadeInP}>안녕 안녕 안녕</p>
    </div>
  );
};

export default App;
