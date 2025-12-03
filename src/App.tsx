import { Header } from './components/Header'
import { Card } from './components/Card'
import {
  Box,
  ChakraProvider,
  Center,
} from "@chakra-ui/react"

export default function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight={'100vh'} backgroundColor={'#1e192d'} padding={'25px'}>
        <Center>
          <Box>
            <Card />
          </Box>
        </Center>
      </Box >
    </ChakraProvider >
  )
}
