const fetch = require('node-fetch')
async function query ({ method, query }) {
  console.log(process.env.VUE_APP_HASURA_API_URL, 'Hasura api url')
  console.log(process.env.VUE_APP_HASURA_ADMIN_SECRET, 'Hasura admin secret')
  const request = await fetch(process.env.VUE_APP_HASURA_API_URL, {
    method,
    headers: {
      'Content-type': 'application/json',
      'X-Hasura-Admin-Secret': process.env.VUE_APP_HASURA_ADMIN_SECRET
    },
    body: JSON.stringify({ query })
  }).then(response => response.json())
    .catch(err => console.log(err, 'err'))
  console.log(request, 'request')
  return request.data
}

exports.query = query
