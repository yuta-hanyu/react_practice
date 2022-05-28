import { Wrap, WrapItem, Spinner, Center, useDisclosure  } from "@chakra-ui/react";
import { memo, useCallback, useEffect, useState, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { User } from "../../types/api/user";

export const UserManagement: VFC = memo( () => {

  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onOpen, onClose} = useDisclosure();
  const { selectUser, detailUser } = useSelectUser();

  const onClickUser = useCallback((id: number) => {
    selectUser({id, users, onOpen})
  }, [selectUser,users, onOpen]);

  useEffect(() => getUsers(), [])

  return (
    <>
    {loading ? (
      <Center h="100vh">
        <Spinner />
      </Center>
      ) : ( 
      <Wrap>
          {users.map((user) => (
          <WrapItem key={user.id} mx="auto"> 
            <UserCard
              id={user.id}
              onClick={onClickUser}
              imageUrl="https://source.unsplash.com/random"
              userName={user.username}
              fullName={user.name}
            ></UserCard>
          </WrapItem>
          ))}
      </Wrap>
    )}
    <UserDetailModal
      isOpen={isOpen}
      onClose={onClose}
      user={detailUser!}
    />
    </>
  )
});