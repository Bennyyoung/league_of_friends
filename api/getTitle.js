import axios from 'axios';

const getTitle = async (req, res) => {

  axios.get('https://api.chatengine.io/projects/people/')
   .then(res => {
    console.log(res.data)
   })
   .catch((error) => {
    console.log(error)
   })
}

export default getTitle
