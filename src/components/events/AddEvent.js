import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/eventActions';

class AddEvent extends Component {
  state = {
    name: '',
    date: '',
    time: '',
    duration: '',
    venue: '',
    description: '',
    contact: '',
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, date, time, duration, venue, description, contact } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (date === '') {
      this.setState({ errors: { date: 'Date is required' } });
      return;
    }

    if (time === '') {
      this.setState({ errors: { time: 'Time is required' } });
      return;
    }

    if (venue === '') {
      this.setState({ errors: { venue: 'Please Specify a Venue' } });
      return;
    }

    if (description === '') {
      this.setState({ errors: { description: 'Please Provide Apt Description' } });
      return;
    }

    if (contact === '') {
        this.setState({ errors: { contact: 'Please Provide Contact Number' } });
        return;
      }

    const newEvent = {
      name,
      date,
      time,
      duration,
      venue,
      description,
      contact
    };

    this.props.addEvent(newEvent);

    // Clear State
    this.setState({
      name: '',
      date: '',
      time: '',
      duration: '',
      venue: '',
      description: '',
      contact: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, date, time, duration, venue, description, contact, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add an Event</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Date"
              name="date"
              type="text"
              placeholder="Enter Date"
              value={date}
              onChange={this.onChange}
              error={errors.date}
            />
            <TextInputGroup
              label="Time"
              name="time"
              placeholder="Enter Time"
              value={time}
              onChange={this.onChange}
              error={errors.time}
            />
            <TextInputGroup
              label="Duration"
              name="duration"
              placeholder="Enter Duration"
              value={duration}
              onChange={this.onChange}
              error={errors.duration}
            />
            <TextInputGroup
              label="Venue"
              name="venue"
              placeholder="Enter Venue"
              value={venue}
              onChange={this.onChange}
              error={errors.venue}
            />
            <TextInputGroup
              label="Description"
              name="description"
              placeholder="Enter Description"
              value={description}
              onChange={this.onChange}
              error={errors.description}
            />
            <TextInputGroup
              label="Contact"
              name="contact"
              type="number"
              placeholder="Enter Contact Number"
              value={contact}
              onChange={this.onChange}
              error={errors.contact}
            />
            <input
              type="submit"
              value="Add Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEvent }
)(AddEvent);
