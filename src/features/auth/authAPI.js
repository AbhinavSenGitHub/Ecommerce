export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" }
    })
    const data = await response.json()
    resolve({ data })
  }
  )
}

// login API
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email
    const password = loginInfo.password
    const response = await fetch("http://localhost:8080/users?email=" + email)
    const data = await response.json()
    console.log({ data })
    if (data.length) {
      // if data has some length then check following fields
      if (password === data[0].password) {
        resolve({ data: data[0] })
      } else {
        reject({ message: "wrong credentials" })
      }
    } else {
      reject({ message: "user not fount" })
    }
    resolve({ data })
  }
  )
}

// checkout form API
export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" }
    })
    const data = await response.json()
    resolve({ data })
  }
  )
}