import axios from 'axios'
import { CountryPicker } from '../components';
const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableURL = url;
    if(country){
        changeableURL= `${url}/countries/${country}`;
        try {
            const { data:{ confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableURL);
            return { confirmed,recovered,deaths,lastUpdate };
        } catch (error){
    
        };
    }
    try {
        const { data:{ confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        return { confirmed,recovered,deaths,lastUpdate };
    } catch (error){

    };
    
}

export const fetchDailyData = async ()=>{
    try{
        const response = await axios.get(`${url}/daily`);
        return response.data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        })
        );
    }
    catch(error){

    }
}

export const countries = async ()=> {
    try{
        const { data: {countries}}= await axios.get(`${url}/countries`)

        return countries.map((country)=> country.name);
    }
    catch(error){

    }
}
