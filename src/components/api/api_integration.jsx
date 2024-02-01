import axios from "axios";

const BASEURL = "https://api.tvmaze.com/search/shows?q=all"

export const gettingData = async () =>{
    try {
        const response = await axios.get(BASEURL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}