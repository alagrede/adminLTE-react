import React, { Component } from 'react';

class Minor extends Component {

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

export default Minor