import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDI4MmFlZDQxMWMyNjMzNWI1NTMwMmE0YWJjNGNmMiIsInN1YiI6IjY2MGZhNzdmNGE0YmY2MDE3YzI4OTM2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eJE4lFp5yDVRtKf5zBlFVNyIq47eQ2-xRBeBNPb676k'
    },
});

export default instance;