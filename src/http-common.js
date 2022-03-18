import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json"
  }
});

/*"http://localhost:8081/api"*/
/*https://app-za-plate.herokuapp.com*/