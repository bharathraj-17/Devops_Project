const axios = require('axios');

 //Commented out direct Axios call, you can keep it for testing purposes
 axios.post('http://localhost:3302/register', {
  userId: 'exampleUserId',
   email: 'example@example.com',
  password: 'examplePassword'
   })
 .then(response => {
   console.log(response.data);
  })
 .catch(error => {
   console.error(error);
 });

 axios.post('http://localhost:3302/contact', {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Regarding your course',
  message: 'I have a question about the course content.'
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});