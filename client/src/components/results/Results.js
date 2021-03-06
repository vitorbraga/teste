import './Results.scss';

import React, { Component } from 'react';

import FlightCard from '../flight-card';
import PropTypes from 'prop-types';

class Results extends Component {

  static propTypes = {
    flights: PropTypes.arrayOf(PropTypes.object),
  };

  render() {

    const { flights } = this.props;

    return (
      <div className="results">
        {flights.length > 0 ? (
          flights.map((flight, index) => <FlightCard key={`flight-${index}`} flight={flight} />)
        ) : (
          <span className="results__empty-state">No flights found</span>
        )}
      </div>
    );
  }
}

export default Results;
