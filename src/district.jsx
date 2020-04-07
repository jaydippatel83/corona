import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { DistData } from './api/index';


class District extends Component {
    state = {
        dist: [],
    }
    async componentDidMount() {
        const data = await DistData();
        this.setState({ dist: data.data })
    }
    render() {
        const pid = this.props.id;
        const data = this.state.dist;
        let distData = null;
        for (let X in data[pid]) {
            distData = data[pid].districtData;
        }
        const display = distData ? Object.keys(distData).map((d, key) => {

            return (
                <li className="list-group-item d-flex justify-content-between" key={key}>
                    {d}
                    <span className="text-danger">{distData[d].confirmed}</span>
                </li>
            );
        }) : null
        return ( 
            <div className="position container"  >
                <div className=" ">
                    <h2 className="text-primary text-uppercase">{pid === '' ? 'India' : pid}</h2>
                    <p className="font-weight-bold text-secondary">State Records</p>
                </div>
                <div className=" dist-height mb-4 pb-3">
                    <ul className="list-group">
                        {display}
                    </ul>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.id
    }
}
export default connect(mapStateToProps, null)(District);
