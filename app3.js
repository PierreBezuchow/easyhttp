const http = new EasyHTTP;

// Get users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Rambo',
  username: 'Rambo123',
  email: 'johnr@gmail.com'
}

// // Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Update User
// http.put('https://jsonplaceholder.typicode.com/users/5', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/3')
  .then(data => console.log(data))
  .catch(err => console.log(err));