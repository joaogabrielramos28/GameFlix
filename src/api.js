import axios from 'axios'

export const api = {
    popularMovies : axios.create({
        baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=64969a9a439a9f3baba72e427c276e2e"
    }),
    mostRatedMovies:axios.create({
        baseURL:"https://api.themoviedb.org/3/movie/top_rated?api_key=64969a9a439a9f3baba72e427c276e2e"
    }),

    upComingMovies:axios.create({
        baseURL:"https://api.themoviedb.org/3/movie/upcoming?api_key=64969a9a439a9f3baba72e427c276e2e"
    }),

    tvShows:axios.create({
        baseURL:"https://api.themoviedb.org/3/account/%7Baccount_id%7D/watchlist/tv?api_key=64969a9a439a9f3baba72e427c276e2e&language=en-US&session_id=2e1cfad31f5a5cb268c56ddfbf5965c2890e0f81&sort_by=created_at.asc&page=1"
    })

}


