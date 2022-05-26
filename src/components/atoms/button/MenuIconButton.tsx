import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
}

export const MenuIconButton: VFC<Props> = memo ((props) => {
  const { onOpen } = props;
  return (
    <>
      <IconButton
      mr={10}
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
    </>
  )
})