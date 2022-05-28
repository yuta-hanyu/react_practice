import { VFC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode
  onClick: () => void;
  disabled?: boolean
  loading?: boolean
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <>
      <Button
        disabled={disabled}
        bg="teal.400"
        color="white"
        onClick={onClick}
        isLoading={loading}
      >
        {children}
      </Button>
    </>
  )
})