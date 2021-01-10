const { query } = './utils/hasura'
exports.handler = async () => {
  const { users } = await query(
    {
      method: 'POST', query: ` 
      query {
        users {
            email
            id
            name
            password
            phone
      }
    }
        `
    })
  console.log(users, 'users')
  return users
}
