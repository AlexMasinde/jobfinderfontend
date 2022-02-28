import axios from "../api/axios";
import { useAuth } from "../contexts/userContext";

export default function useRefreshToken() {
  const { setAuth } = useAuth();

  async function refresh() {
    const response = await axios.get("/users/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
        type: response.data.type,
        userId: response.data.userId,
      };
    });
    return response.data.accessToken;
  }
  return refresh;
}
