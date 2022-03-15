import axios from "axios";

export default axios.create({
  baseURL: "https://app-za-plate.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});