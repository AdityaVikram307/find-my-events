import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEvent } from '../../actions/eventActions';

class Event extends Component {
  state = {
    showEventInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { id, name, date, time, duration, venue, description, contact } = this.props.event;
    const { showEventInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() =>
              this.setState({
                showEventInfo: !this.state.showEventInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          
        </h4>
        {showEventInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Date: {date}</li>
            <li className="list-group-item">Time: {time}</li>
            <li className="list-group-item">Duration: {duration}</li>
            <li className="list-group-item">Venue: {venue}</li>
            <li className="list-group-item">Description: {description}</li>
            <li className="list-group-item">Contact: {contact}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEvent }
)(Event);
