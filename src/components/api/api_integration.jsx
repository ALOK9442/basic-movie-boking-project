import axios from "axios";


export const gettingData = async () =>{
    try {
        const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}