import axios from 'axios'

export const api = {
    popularMovies : axios.create({
        baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=64969a9a439a9f3baba72e427c276e2e"
    }),
    mostRatedMovies:axios.create({
        baseURL:"https://api.themoviedb.org/3/movie/top_rated?api_key=64969a9a439a9f3baba72e427c276e2e"
    })
}


