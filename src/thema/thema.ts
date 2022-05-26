import { extendTheme } from "@chakra-ui/react";

const thema = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "red.100",
        color: "red.800"
      }
    }
  }
})

export default thema;