import css from './ContactForm.module.css';

const ContactForm = ({
  onSubmit,
  name,
  number,
  onNameChange,
  onNumberChange,
}) => (
  <form className={css.contactForm} onSubmit={onSubmit}>
    <label className={css.formLabel}>
      Name:
      <br />
      <input
        type="text"
        className={css.formInput}
        name="name"
        required
        value={name}
        onChange={onNameChange}
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
        onChange={onNumberChange}
      />
    </label>
    <button type="submit" className={css.formButton}>
      Add contact
    </button>
  </form>
);

export default ContactForm;
