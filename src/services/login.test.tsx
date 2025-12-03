import { login } from './login'

describe('login', () => {
  const mockAlert = jest.fn()
  // @ts-ignore
  window.alert = mockAlert

  it('deve exibir um alert com Bem vindo!', () => {
    login()
    expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
  })
})

