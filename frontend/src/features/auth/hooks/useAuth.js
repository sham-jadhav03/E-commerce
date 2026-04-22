import { setError, setLoading, setUser } from "../state/auth.slice";
import { register, login } from "../services/auth.api";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();

  async function handleRegister({
    email,
    password,
    contact,
    fullName,
    isSeller = false,
  }) {
    try {
      dispatch(setLoading(true));
      const data = await register({
        email,
        password,
        contact,
        fullName,
        isSeller,
      });

      dispatch(setUser(data.user));
      return data.user;
    } catch (error) {
       console.log("Backend error:", error.response?.data);
      dispatch(
        setError(error.response?.data?.message || "Registration failed"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function handleLogin({ email, password }) {
    const data = await login(email, password);
    dispatch(setUser(data.user));
    return data.user;
  }

  return { handleRegister, handleLogin };
};
