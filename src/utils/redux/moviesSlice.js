import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies:null,
    trailerVideo: null,
    currentVideo:null,
    allMovies:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
    nullCurrentVideo:(state) => {
      state.currentVideo =null;
    },
    getALLMovies: (state, action) => {
      state.allMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopRatedMovies,addCurrentVideo,nullCurrentVideo,getALLMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;