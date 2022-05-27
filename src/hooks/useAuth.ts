import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const login = useCallback((id: string) => {
    setLoading(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (res.data) {
        console.log(res)
        history.push("/home");
      } else {
        alert("データなし")
      }
    })
    .catch((e) => alert("失敗"))
    .finally(() => setLoading(false))
  },[history])

  return {login, loading}
}