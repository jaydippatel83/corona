import axios from 'axios';

const url = 'https://api.covid19india.org/data.json'; //states
const durl = 'https://api.covid19india.org/state_district_wise.json'; // Districts
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; 

export const fetchData = async () => {
    try {
        const data = await axios.get(url);
        return data;
    } catch (error) {

    }
}
export const ChartData = async () => {
    try {
        const { data: { statewise } } = await axios.get(url);
        return {statewise};
    } catch (error) {

    }
}

export const DistData = async () => {
    try {
        const data = await axios.get(durl);
        return data;
    } catch (error) {

    }
}
