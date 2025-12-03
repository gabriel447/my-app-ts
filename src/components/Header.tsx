import { Box, Flex, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box position={'sticky'} top={0} width={'100%'} backgroundColor={'#21d877'} boxShadow={'sm'} zIndex={10}>
      <Flex align={'center'} justify={'flex-start'} height={'60px'} paddingX={'24px'}>
        <Text fontSize={'lg'} fontWeight={'bold'}>DioBank</Text>
      </Flex>
    </Box>
  )
}
