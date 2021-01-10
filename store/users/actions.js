const fetch = require('node-fetch')
export default {
  async getAllUsers ({ commit }) {
    const request = await fetch('/.netlify/functions/get-all-users').then(response => response.json()).catch(e => e)
    console.log(request)
    commit()
  }
}
