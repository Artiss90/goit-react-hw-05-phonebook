import React, { Component } from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

/* eslint react/prop-types: 1 */

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }),
    ).isRequired,
    onClickDelete: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, onClickDelete } = this.props;
    return (
      <ul className={style.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={style.item}>
            <p className={style.contact}>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </p>
            <button type="button" onClick={() => onClickDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
