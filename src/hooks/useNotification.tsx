export const useNotification = (title: string, options = {}) => {
  // window 객체에 Notification 없으면 return
  if (!("Notification" in window)) {
    return;
  }

  const triggerNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("물어서 허락받고 알림 보내기");
          new Notification(title, options);
        } else {
          // 초기 설정 denide || permission === "denied"
          console.log("알림 거절");
          return;
        }
      });
    } else {
      console.log("처음부터 알림 보내기 가능");
      new Notification(title, options);
    }
  };
  return triggerNotification;
};

// const App = () => {
//   const title = "안녕하세요";
//   const options = {
//     body: "반갑습니다",
//   };
//   const onNotify = useNotification(title, options);
//   return (
//     <div>
//       <button onClick={onNotify}>Button</button>{" "}
//     </div>
//   );
// };
