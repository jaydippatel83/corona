import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Total from './total';
import District from './district';
import { connect } from 'react-redux';
import { fetchData } from './api/index';
import MapChart from './chart/chart';

class Main extends Component {
  state = {
    states: [],
    search: ''
  }
  async componentDidMount() {
    const data = await fetchData(); 
    this.setState({ states: data.data })
  }
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }


  render() {
    const data = this.state.states.statewise;
    return (
      <div> 
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-lg-6">
              <Total />
            </div>
            <div className="col-lg-6">
              <MapChart/> 
            </div>
          </div>
          <div className="row  mt-4 mb-2">
            <div className="col-12 col-lg-6">
              <div className="col-12 search-sec">
                <h2 className="text-primary">STATES</h2>
                <div className=" " id="search-container">
                  <input type="text" placeholder="Search" onChange={(e) => this.searchSpace(e)} />
                </div>
              </div>
            </div> 
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 table-height">
              <table className="table responsive ">
                <thead className="sticky">
                  <tr>
                    <th className="text-secondary" scope="col">State</th>
                    <th className="text-primary" scope="col">Active</th>
                    <th className="text-warning" scope="col">Confirmed</th>
                    <th className="text-success" scope="col">Recovered</th>
                    <th className="text-danger" scope="col">Deaths</th>
                  </tr>
                </thead>
                {
                  data ? data.filter((data) => {
                    if (this.state.search == null)
                      return data
                    else if (data.state.toLowerCase().includes(this.state.search.toLowerCase()) || data.state.toLowerCase().includes(this.state.search.toLowerCase())) {
                      return data
                    }
                  }).map((st, index) => {
                    return (
                      <tbody key={index}>
                        <tr className="sticky" onClick={() => this.props.cid(st.state)}>
                          <th scope="row">{st.state}</th>
                          <td>{st.active}</td>
                          <td>{st.confirmed}</td>
                          <td>{st.recovered}</td>
                          <td>{st.deaths}</td>
                        </tr>
                      </tbody>
                    )
                  }) : null
                }
              </table>
            </div> 
            <div className="col-12 col-lg-6">
            <District />
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cid: (id) => { dispatch({ type: 'ADD_ID', payload: id }) }
  }
}

export default connect(null, mapDispatchToProps)(Main);
