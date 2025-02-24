import { Data, Data1 } from "../App.jsx";
import { useContext } from "react";

const ComponentA = () => {
  const userName = useContext(Data);
  const Age = useContext(Data1);

  return (
    <h1>
      {" "}
      My name is {userName} and I'm {Age} year old.
    </h1>
  );

  // grab context data without useContext Hook
  //   return (
  //     <Data.Consumer>
  //       {(name) => {
  //         return (
  //           <Data1.Consumer>
  //             {(age) => (
  //               <h1>
  //                 I'm {name} and I'm {age} years old.
  //               </h1>
  //             )}
  //           </Data1.Consumer>
  //         );
  //       }}
  //     </Data.Consumer>
  //   );
};
export default ComponentA;
