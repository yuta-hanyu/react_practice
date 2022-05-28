import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMesssage";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { showMessage } = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (res.data) {
        showMessage({title: "ログインしました", status: "success"});
        history.push("/home");
      } else {
        showMessage({title: "失敗しました", status: "error"})
      }
    })
    .catch((e) => showMessage({title: "失敗しました", status: "error"}))
    .finally(() => setLoading(false))
  },[history, showMessage])

  return {login, loading}
}