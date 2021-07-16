import axios from 'axios'


const api = axios.create({
    baseURL:"https://free-to-play-games-database.p.rapidapi.com/api/",
    headers: {
        'x-rapidapi-key': '979268b1f7msh4dc2b406c7402c8p1a3af5jsn8b800d1812b1',
       
      }
})

export default api


