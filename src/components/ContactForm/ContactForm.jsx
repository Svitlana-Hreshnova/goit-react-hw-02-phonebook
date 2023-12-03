import css from './ContactForm.module.css';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    const input = e.target.value.replace(/\D/g, ''); // Видаляємо все, крім цифр
    this.setState({ number: input });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!name || !number) {
      alert('Please enter both name and number.');
      return;
    }

    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.contactForm} onSubmit={this.handleSubmit}>
        <label className={css.formLabel}>
          Name:
          <br />
          <input
            type="text"
            className={css.formInput}
            name="name"
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </label>
        <label className={css.formLabel}>
          Number:
          <br />
          <input
            type="tel"
            className={css.formInput}
            name="number"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
