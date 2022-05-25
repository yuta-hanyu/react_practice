import React from 'react';
import { Button, ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';

import thema from "./thema/thema";
import { Router } from "./route/Router";

function App() {
  return (
    <ChakraProvider theme={thema}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
