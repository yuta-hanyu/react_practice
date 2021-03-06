import { Flex, Heading, Box, Link, useDisclosure} from "@chakra-ui/react";
import { VFC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo (() => {
  const history = useHistory();

  const toSetting = useCallback(() => 
    history.push("/home/setting")
  ,[history]);

  const toUserManagement = useCallback(() => 
    history.push("/home/user_management")
  ,[history]);

  const toHome = useCallback(() => history.push("/home"), [history])
  
  const { isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Flex 
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5}}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{cursor: "pointer"}} >
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg"}}
            onClick={toHome}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{base: "none", md: "flex"}}>
          <Box pr={4}>
            <Link onClick={toUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={toSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen} onClose={onClose}
        toSetting={toSetting}
        toUserManagement={toUserManagement}
        toHome={toHome}
      />
    </>
  )
})