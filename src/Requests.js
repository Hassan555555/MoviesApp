const API_KEY = "9e144ff0cbb19c7a293f0e859ec11215";

const requests = {
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY }&language=en-US&page=1`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTE0NGZmMGNiYjE5YzdhMjkzZjBlODU5ZWMxMTIxNSIsInN1YiI6IjVmOTk3Mzg3NWEwN2Y1MDAzODMyMDZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AeMM0NITRcNiF35HeMATYtfEZ25T9HTDlsaQntoUcZI (v4)