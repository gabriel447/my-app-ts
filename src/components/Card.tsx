import { Box, Center, Input } from "@chakra-ui/react"
import { Submit } from "./Submit"
import { login } from "../services/login"

export const Card = () => {
  return (
    <Box 
    backgroundColor={'white'} 
    borderRadius={'25px'} 
    padding={'25px'} 
    maxWidth={'500px'} 
    marginTop={'100px'}>
      <Center>
        <h1>Faça login</h1>
      </Center>
      <Input placeholder={'email'} marginTop={'10px'} />
      <Input placeholder={'password'} marginTop={'10px'} />
      <Submit placeholder={'Acessar'} onClick={login} />
    </Box>
  )
}

