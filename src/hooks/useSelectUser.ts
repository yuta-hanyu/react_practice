import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  users: Array<User>,
  id: number,
  onOpen: () => void;
}

export const useSelectUser = () => {
  const [detailUser, setDetailUser] = useState<User | null>();

  const selectUser = useCallback((props: Props) => {
    const { id, users, onOpen} = props;

    setDetailUser(users.find(user => user.id === id));
    onOpen();
  }, []);

  return { selectUser, detailUser }
}