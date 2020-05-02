import React, { useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'
import { StylesProvider } from '@material-ui/core';


const Charts = ({data:{ confirmed, deaths, recovered }, country}) => {

    const [dailyData, setDailyData] = useState([]);


    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        
        fetchAPI();
        // console.log(dailyData)
    },[]);

    const lineChart = (
        dailyData.length?
        <Line 
        data={{
            labels: dailyData.map(({ date })=> date),
            datasets: [{
                data: dailyData.map(({ confirmed })=> confirmed),
                label: 'Infected',
                fill: false,
                borderColor: '#2196f3', // Add custom color border (Line)
                backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
                borderWidth: 1
            },{
                data: dailyData.map(({ deaths })=> deaths),
                label: 'Deaths',
                fill: false,
                borderColor: 'rgba(232, 2, 6, 0.75)', // Add custom color border (Line)
                backgroundColor: 'rgba(232, 2, 6, 0.75)', // Add custom color background (Points and Fill)
                borderWidth: 1
            }],
            options: {
                responsive: true, // Instruct chart js to respond nicely.
               // Add to prevent default behaviour of full-width/height 
              }
        }}
        />:null
    );
        console.log(confirmed, deaths)
    const barChart =(
        dailyData.length?
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0,0,255,0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255,0,0,0.5)'
                    ],
                    data:[confirmed.value, deaths.value, recovered.value]
                }]

            }}
            options={
                {
                    legend: {display: false},
                    title: { display: true, text:`Current state in ${country}`},
                }
            }
        
        />:null);
    

    return (
        <div className={styles.container}>
            {country ? barChart:lineChart}
        </div>
    );
}
export default Charts;
