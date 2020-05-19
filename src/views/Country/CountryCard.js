import React, { Component } from "react";
import { WeatherStackApiAcessKey } from "../../constant"

class CountryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: [],
            isLoading: false
        }
    }


    fetchWeather = async (capital) => {
        debugger
        let result = await fetch(`http://api.weatherstack.com/current?access_key=${WeatherStackApiAcessKey}&query=${capital}`).then(res => res.json()).then(res => { return res })
        this.setState({ weatherData: result })
        if (result) {
            this.setState({ isLoading: true })
        }
    }
    render() {
        const { data, weatherData,isLoading } = this.props;

        return (
            <>
                <tr>
                    <td>{data ? data.capital : ""}</td>
                    <td>{data ? data.population : ""}</td>
                    <td>
                        X: {data ? data.latlng[0] : ""} Y :{data ? data.latlng[1] : ""}</td>
                    <td>
                        {data ? <img src={data.flag} style={{ maxWidth: "120px" }} alt="flag" /> : ""}
                    </td>
                    <td>
                       { !isLoading?
                        <span onClick={() => this.fetchWeather(data.capital)} >
                            Capital Weather
                         </span>:
                         <WeatherCard data={weatherData} />

                    }
                    </td>

                </tr>



            </>
        )
    }
}

function WeatherCard({data}) {
     const { current } = data;
     return (
         <>
             <p>Temperature {current ? current.temperature : ""}</p>
             <p>Wind_Speed{current ? current.wind_speed : ""}</p>
             <p>precip {current ? current.precip : ""}</p>
             <p>
                 { current.weather_icons.map((i)=>(
                         <img src={i} alt=""/>
                     ))
                 }
                 </p>
 
         </>
     )

}

export default CountryCard;