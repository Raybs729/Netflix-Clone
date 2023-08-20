import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { MY_API_KEY, TMDB_BASE_URL } from "../utils/constant";

//if genres are not found then dont load movies
const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
  );
  // console.log(genres)
  return genres;
});

//@this will allow it to find the genres we want
const arrayOfMovieData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const moviesGenres = [];
    movie.genre_ids.forEach((genre) => {/*it needs to  ForEach through the genres*/
      const name = genres.find(({ id }) => id === genre); /*trying to search for each genres with their id*/
      if (name) moviesGenres.push(name.name); /*whenever we get a genre with an id it will extract and push it into moviesGenres arrayline 29*/
    });
    if (movie.backdrop_path) //check if movie has a backdrop path the program should select that movie
      moviesArray.push({
        id: movie.id, //now we populate movieArray
        name: movie?.original_name ? movie.original_name : movie.original_title, //this line will populate name with original movie name or original title
        image: movie.backdrop_path,
        genres: moviesGenres.slice(0, 3), // it should only get no more than 3 genres so i should use slice 
      });
  });
};

//``only want a few movies instead of whole TMDB database
const getMovieData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 80 && i < 10; i++) { //i dont want to get more than 80 movies and more than 10 movies should populate
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    arrayOfMovieData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk( //this allows the websit to fetch the movie accoring to trend, week of trend, and type of movie
  "netflix/trending",
  async ({ type }, myThunk) => {
    const {
      netflix: { genres },
    } = myThunk.getState();
    const data = getMovieData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`,
      genres,
      true
    );
    console.log(data);
  }
);

//!will need to change to petflix maybe?
const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});
