import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Saulo'

  expect(user.name).toEqual('Saulo')
})
