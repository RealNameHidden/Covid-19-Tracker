import React, {useState,useEffect} from 'react';
import { FormControl, NativeSelect, Box} from '@material-ui/core'
import { countries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries]= useState([]);

    useEffect(()=>{
        const fetchCountries = async ()=>{
            setFetchedCountries(await countries());
        }
        fetchCountries();
    },[setFetchedCountries]);

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <Box component="span" m={1}>

            <NativeSelect defaultValue='' onChange={(e)=>{ handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=>
                    <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
            </Box>
        </FormControl>
        
    );
}
 
export default CountryPicker;
