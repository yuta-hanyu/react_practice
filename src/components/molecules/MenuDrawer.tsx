import {VFC, memo} from "react";
import {Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button, useDisclosure} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  toSetting: () => void;
  toUserManagement: () => void;
  toHome: () => void;
}

export const MenuDrawer: VFC<Props> = memo( (props) => {
  const { onClose, isOpen, toHome, toSetting, toUserManagement } = props;
  return (
    <>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0}>
              <Button w="100%" onClick={toHome}>TOP</Button>
              <Button w="100%" onClick={toSetting}>ユーザー一覧</Button>
              <Button w="100%" onClick={toUserManagement}>設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
})