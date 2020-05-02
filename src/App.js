import React from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api';
import { Grid } from '@material-ui/core'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            country: ''
        }
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState(() => { return { data: fetchedData } });
    }

    handleCountryChange = async (country) => {
        if (country !== "Global") {
            const fetchedData = await fetchData(country);
            this.setState({ data: fetchedData, country: country })
        } else {
            this.setState({ country: '' })
        }
    }

    render() {
        const apidata = this.state.data;
        const country = this.state.country;
        return (
            <div className={styles.container}>
                <Grid container direction="row"
                    justify="space-evenly"
                    alignItems="center">
                    <Grid container item justify="space-evenly"
                    alignItems="center">
                        <div className={styles.head}>
                            <h1>Covid 19 Tracker</h1>
                        </div>
                    </Grid>
                    <Grid container item justify="space-evenly"
                    alignItems="center">
                        <Cards data={apidata} />
                    </Grid>
                    <Grid container item direction="column"
                    justify="space-evenly"
                    alignItems="center">
                        <CountryPicker handleCountryChange={this.handleCountryChange} />
                        <Chart data={apidata} country={country} />
                    </Grid>
                </Grid>
            </div>);
    }
}

export default App;