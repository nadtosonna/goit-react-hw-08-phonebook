import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserRoutes from "../UserRoutes";
import { Loader } from "./Loader/Loader";
import { getLoadingUserStatus } from "redux/auth/auth-selectors";
import { current } from "redux/auth/auth-operations";
import Navbar from "./Navbar/Navbar";


function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      {isLoadingUser ? <Loader /> : (
        <>
          <UserRoutes />
        </>
      )}
    </div>
  );
}

export default App;