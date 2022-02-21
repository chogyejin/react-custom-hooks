import { useState } from "react";

export const useInput = (
  initialValue: string,
  validator: (value: string) => boolean
) => {
  const placeholder = "Name";
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event; // value = event.target.value

    let willUpdate = false;
    willUpdate = validator(value);

    if (willUpdate) {
      setValue(value);
    }
  };

  return { placeholder, value, onChange };
};

// const App = () => {
//   const maxLen = (value: string) => value.length <= 10;
//   const name = useInput("Mr. ", maxLen);
//   return (
//     <div className="App">
//       <h1>asdas</h1>
//       <input {...name} />
//     </div>
//   );
// };
