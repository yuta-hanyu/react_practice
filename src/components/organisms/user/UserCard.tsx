import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: number,
  imageUrl: string,
  userName: string,
  fullName: string,
  onClick: (id: number) => void;
}

export const UserCard:VFC<Props> = memo((props: Props) => {
  const { imageUrl, userName, fullName, onClick, id } = props;

  return (
  <Box
    onClick={() => onClick(id)}
    w="260px"
    h="260px"
    bg="white"
    borderRadius="10px"
    shadow="md"
    p={4}
    _hover={{ cursor: "pointer", opacity: 0.8 }}
  >
    <Stack
      textAlign="center"
    >
      <Image
        borderRadius="full"
        boxSize="160px"
        m="auto"
        src={imageUrl}
      />
      <Text fontSize="lg" fontWeight="bold">
        {userName}
      </Text>
      <Text fontSize="sm" color="gray">
        {fullName}
      </Text>
    </Stack>
  </Box>
  )
})