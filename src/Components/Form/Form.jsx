import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './Form.module.css';

/* eslint react/prop-types: 1 */

export default class Form extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func,
  };

  state = { name: '', number: '' };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  notify = field =>
    toast.warn(`поле ${field} не должно бить пустым`, {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!name) {
      this.notify('Name');
    }
    if (!number) {
      this.notify('Number');
    }

    if (name && number) {
      this.props.onSubmitForm(this.state);
    }

    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    // console.log({ name, value });
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={style.container}>
        <label htmlFor={this.nameInputId} className={style.item}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId} className={style.item}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <ToastContainer />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
