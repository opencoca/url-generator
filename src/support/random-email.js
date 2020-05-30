const randomEmail = () => fetch('https://randomuser.me/api/?inc=email')
  .then(response => response.json())
  .then(({ results }) => {
    return results[Math.floor(Math.random() * results.length)]
  })
  .then(user => (user.email).toLowerCase())
  .catch(e => {
    console.warn(e) // eslint-disable-line no-console
    return 'admin@openco.ca'
  })

export default randomEmail
