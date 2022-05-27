import { ChangeEvent, memo, useState, VFC } from "react";
import { Flex, Heading, Box, Divider,Stack, Input} from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login:VFC = memo(() => {
  const [userId, setUserID] = useState('');
  const { login, loading } = useAuth();

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => setUserID(e.target.value);
  const onClickLogin = () => {
    login(userId);
  }
  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="lg">
          <Heading as="h1" size="lg" textAlign="center">
            ユーザー管理アプリ
          </Heading>
          <Divider my={4}/>
          <Stack spacing={6} py={6} px={10}>
            <Input
              placehodler="ユーザーID"
              value={userId}
              onChange={changeInput}
            />
            <PrimaryButton
              disabled={ userId === ""}
              onClick={onClickLogin}
              loading={loading}
            >
              ログイン
            </PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </>
  )
})