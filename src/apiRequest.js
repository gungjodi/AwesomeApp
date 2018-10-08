import axios from "axios";

const api = {
    getPeople : (url="https://swapi.co/api/people") => {
        return axios({
          method: "get",
          url: url
        });
    },
    getPeopleDetail : (peopleDetailUrl)=>{
        return axios({
            method: "get",
            url: peopleDetailUrl
        });
    }
}

export default api;