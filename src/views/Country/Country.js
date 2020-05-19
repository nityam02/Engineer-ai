import React, { Component } from "react";
import { withRouter } from "react-router-dom"

import { WeatherStackApiAcessKey, CountryDetail } from "../../constant";
import CountryData from "./CountryCard"
import "./Country.css";


class Country extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryData: []
        }
    }

    async componentDidMount() {
        let result = await this.fetchData();
        if (Array.isArray(result))
            this.setState({ countryData: result });
        else {
            alert("Invalid Country Name")
            this.props.history.push("/")
        }
    }
    fetchData = async () => {
        const { match } = this.props
        return await fetch(`${CountryDetail}${match.params.id}`).then(res => res.json()).then(res => { return res })
    }

    render() {
        const { countryData } = this.state;
        return (
            <div className="view-country-data">
                <table style={{ textAlign: 'left' }}>
                    <tr>
                        <th>Capital</th>
                        <th>Population</th>
                        <th>Latlng</th>
                        <th>Flag</th>
                        <th>Weather</th>
                    </tr>
                    {countryData?.map((c, index) => <CountryData data={c} key={index} />)
                    }
                </table>
            </div>
        )
    }
}

export default withRouter(Country);