import React from 'react';

import styles from './Cards.module.css'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data:{ confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading..'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} color="rgb(213, 216, 222)" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0}
                            end ={confirmed.value}
                            duration = {2.5}
                            separator=","
                            />
                            </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of infected cases of COVID-19</Typography>
                    </CardContent>    
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} color="rgb(213, 216, 222)" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0}
                            end ={recovered.value}
                            duration = {2.5}
                            separator=","
                            />
                            </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of recovered cases of COVID-19</Typography>
                    </CardContent>    
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)} color="rgb(213, 216, 222)" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0}
                            end ={deaths.value}
                            duration = {2.5}
                            separator=","
                            />
                            </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of Deaths caused by COVID-19</Typography>
                    </CardContent>    
                </Grid>
            </Grid>
        </div>
    );
}
export default Cards;
