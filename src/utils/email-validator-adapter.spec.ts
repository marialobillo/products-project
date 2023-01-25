import { EmailValidatorAdapter } from './email-validator-adapter'

describe('EmailVlidator Adapter', () => {

  test('Should return false if validation returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email')
    expect(isValid).toBe(false)
  })

  
})