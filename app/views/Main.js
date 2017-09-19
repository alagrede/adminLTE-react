/* global Plotly */
import React, { Component } from 'react';
import webApi from "../common/tools/WebApi";


class Main extends Component {

    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="content-wrapper">
            <section className="content-header">
                <h1>
                {this.props.route.title}
                <small>Control panel</small>
                </h1>
            </section>

            <section className="content">    
            </section>
        </div>
    )
    }

}

export default Main