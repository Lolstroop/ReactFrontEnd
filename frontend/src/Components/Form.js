import { ReactComponent } from "*.svg";

import React, { Component } from 'react'
import './App.css'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }
    }

    handleIdChange = (event) => {
        this.setState({
            id: event.target.value
        })
    }

    handleSubmit = event => {
        alert('${this.state.id}')
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>

                    <label>Product ID</label>
                    <input type='text' 
                    value={this.state.id} 
                    onChange={this.handleIdChange}/>

                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }


}

export default Form