import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import { useAuth } from "../../contexts/userContext";

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
    async function verifyReshToken() {
      try {
        await refresh();
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    !user?.accessToken ? verifyReshToken() : setIsLoading(false);

    return () => {
      setIsLoading(false);
    };
  }, [refresh, user]);

  //   useEffect(() => {
  //     console.log("isLoading", isLoading);
  //     console.log("user", user.accessToken);
  //   }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}
