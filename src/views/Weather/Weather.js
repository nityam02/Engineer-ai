import React, { Component } from "react";
import { withRouter } from "react-router-dom"

import "./Weather.css";

class Weather extends Component {


    constructor(props) {
        super(props);
        this.state = {
            country: ""
        }
    }



    // Methods


    handleInput = (e) => this.setState({ country: e.target.value });

    submitCountry = (e) => {
        e.preventDefault();
        let { country } = this.state;
        this.props.history.push(`/${country}`)
    }


    render() {
        const { country } = this.state
        return (
            <div className="view-weather-app">
                <form className="form" onSubmit={this.submitCountry}>
                    <label className="label">
                        Country</label>
                    <input
                        onChange={this.handleInput}
                        className="input"
                        value={country}
                        name="country"
                        id="country"
                        placeholder="Enter country"
                    />
                    <button className="button" type="submit" disabled={country.length === 0}>
                        Submit
                    </button>
                </form>

            </div>
        )
    }
}

export default withRouter(Weather);