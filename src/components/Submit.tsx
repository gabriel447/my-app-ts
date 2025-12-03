import { Button } from "@chakra-ui/react"

interface ISubmit {
  placeholder: string
  onClick: () => void
}

export const Submit = ({ placeholder, onClick }: ISubmit) => {
  return (
    <Button 
    onClick={onClick} 
    colorScheme={'purple'} 
    marginTop={'10px'} 
    width={'100%'}>
      {placeholder}
    </Button>
  )
}
