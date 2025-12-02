import { Layout } from './components/Layout';
import {
  Box,
  ChakraProvider,
  Input,
  Center,
  Button
} from "@chakra-ui/react"

export default function App() {
  return (
    <ChakraProvider>
      <Box minHeight={'100vh'} backgroundColor={'black'} padding={'25px'}>
        <Box backgroundColor={'white'} padding={'25px'} borderRadius={'25px'}>
          <Center >
            <h1>Faça login</h1>
          </Center>
          <Input placeholder='email' marginTop={'10px'} />
          <Input placeholder='password' marginTop={'10px'} />
          <Button colorScheme='blackAlpha' marginTop={'10px'} width={'100%'}>Acessar</Button>
        </Box>
      </Box>
    </ChakraProvider>
  )
}