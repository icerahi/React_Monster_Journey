import { useContext } from "react";
import { UserContext } from "../UserContext.jsx";

const UserProfile = () => {
  const Data = useContext(UserContext);

  const { profile, setProfile } = Data;
  return (
    <div>
      <h1>{profile.name}</h1>
      <button onClick={() => setProfile({ ...profile, name: "Imran Khan" })}>
        Change name
      </button>
    </div>

    // <div>
    //   <UserProvider.Consumer>
    //     {(props) => {
    //       return (
    //         <div>
    //           <h1>
    //             {props.profile.name}
    //             <button
    //               onClick={() =>
    //                 props.setProfile({ ...props.profile, name: "Imran kHan" })
    //               }
    //             >
    //               Change name
    //             </button>
    //           </h1>
    //         </div>
    //       );
    //     }}
    //   </UserProvider.Consumer>
    // </div>
  );
};
export default UserProfile;
