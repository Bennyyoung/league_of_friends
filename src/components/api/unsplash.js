import axios from 'axios';

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
   Authorization: "Client-ID IYgxh-fC2smPlKN43iYKOijn-06NQfY_AVfJEly-va4"
  }
})