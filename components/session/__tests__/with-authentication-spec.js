import { userEmailIsFromOurCompany } from '../with-authentication'
jest.mock('../../firebase/firestore', () => jest.fn())

describe('userEmailIsFromOurCompany', () => {
  const companyEmailDomain = '@gmail'

  it('returns true if user email domain belongs to same domain', () => {
    const email = 'jean@gmail.com'

    expect(userEmailIsFromOurCompany(email, companyEmailDomain)).toBeTruthy()
  })

  it('returns false if user email domain doesnt belong to same domain', () => {
    const email = 'jean@anothercompany.com'

    expect(userEmailIsFromOurCompany(email, companyEmailDomain)).toBeFalsy()
  })
})
