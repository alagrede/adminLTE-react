import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                    <p>Alexander Pierce</p>
                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                        </button>
                    </span>
                    </div>
                </form>

                <ul className="sidebar-menu" data-widget="tree" ref="menu">
                    <li className="header">MAIN NAVIGATION</li>

                    <li classNameName={this.activeRoute("/main")}>
                        <Link to="/main">
                            <i className="fa fa-dashboard"></i> <span>Main view</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </Link>
                    </li>
                    <li classNameName={this.activeRoute("/minor")}>
                        <Link to="/minor">
                            <i className="fa fa-circle-o"></i> <span>Minor view</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </Link>
                    </li>
                </ul>
                </section>
            </aside>
        )
    }
}

export default Navigation