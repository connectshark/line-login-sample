const BASE_URL = import.meta.env.VITE_API_URL
const LINE_URL = import.meta.env.VITE_LINE_URL

const api = {
  auth (code) {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + `/auth?code=${code}`)
        .then(r => r.json())
        .then(res => resolve(res))
        .then(err => reject(err))
    })
  },

  verifyToken (access_token) {
    return new Promise((resolve, reject) => {
      fetch(LINE_URL + `/oauth2/v2.1/verify?access_token=${access_token}`)
        .then(r => r.json())
        .then(res => resolve(res))
        .then(err => reject(err))
    })
  },

  getProfile (access_token) {
    return new Promise((resolve, reject) => {
      fetch(LINE_URL + '/v2/profile', {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      .then(r => r.json())
      .then(res => resolve(res))
      .then(err => reject(err))
    })
  }
}

export default api