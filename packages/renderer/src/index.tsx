import {ChakraProvider} from '@chakra-ui/react';
import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import theme from './helpers/theme';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('app') as Element);
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
