// import React from "react";
// import Data from "./User.json";

// const AppContext = React.createContext({});

// const Context = ({ children }) => {
//   const userData = localStorage.getItem("user") || null;
//   const tokenData = localStorage.getItem("token") || "";
//   const [user, setUser] = React.useState(JSON.parse(userData));
//   const [userJwt, setUserJwt] = React.useState(tokenData);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("token", userJwt);
//     }
//   }, [user, userJwt]);

//   const signUp = (data) => {
//     setIsLoading(true);
//     setError(null);
//     setUser(null);
//     setUserJwt(null);
//     setTimeout(() => {
//       const user = Data.find((user) => user.email === data.email);
//       if (user) {
//         setError("User already exists");
//         setIsLoading(false);
//       } else {
//         setUser(data);
//         data.id = data.length + 1;
//         data.token = "token";
//         setUserJwt("token");
//         // store in data
//         Data.push(data);
//         localStorage.setItem("user", JSON.stringify(data));
//         localStorage.setItem("token", "token");
//         setIsLoading(false);
//       }
//     }, 2000);
//   };

//   const login = (data) => {
//     console.log(data);
//     setIsLoading(true);
//     setError(null);
//     setUser(null);
//     setUserJwt(null);
//     setTimeout(() => {
//       const user = Data.find((user) => user.email === data.email);
//       if (user) {
//         if (user.password === data.password) {
//           setUser(user);
//           setUserJwt("token");
//           localStorage.setItem("user", JSON.stringify(user));
//           localStorage.setItem("token", "token");
//         } else {
//           setError("Invalid password");
//         }
//       } else {
//         setError("User not found");
//       }
//       setIsLoading(false);
//     }, 2000);
//   };

//   const logout = () => {
//     console.log(user);
//     setUser(null);
//     setUserJwt(null);
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//   };

//   return (
//     <AppContext.Provider
//       value={{ login, signUp, logout, user, userJwt, isLoading, error }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default Context;
// export { AppContext };
