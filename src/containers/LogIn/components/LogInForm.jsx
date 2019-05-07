import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderCheckBoxField from '../../../shared/components/form/CheckBox';

class LogInForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { handleSubmit } = this.props;
    const { showPassword } = this.state;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Email</span>
          <div className="form__form-group-field">
            <Field
              className="account__input"
              name="name"
              component="input"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <Field
              className="account__input"
              name="password"
              component="input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Passwort"
            />
          </div>
          <div className="account__forgot-password">
            <a href="/">Passwort vergessen?</a>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Field
              name="remember_me"
              component={renderCheckBoxField}
              label="Anmeldedaten merken"
            />
          </div>
        </div>
        <Link className="btn btn-dark-blue account__btn account__btn--small" to="/pages/one">Anmelden</Link>
        <Link className="btn btn-secondary account__btn account__btn--small" to="/log_in">
          Account beantragen
        </Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'log_in_form',
})(LogInForm);
