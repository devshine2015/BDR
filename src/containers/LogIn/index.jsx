import React from 'react';
import LogInForm from './components/LogInForm';
import Logo from '../../shared/img/logo/logo.png';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  render() {
    const { step } = this.state;
    const content = (
      <div className="account__size_content">
        <div className="account__size_content_note">Dieser Prototyp wurde für Full HD Auflösung konzipiert und umgesetzt. Wenn dieses Pop Up bei Ihnen nicht mittig auf dem Bildschirm platziert ist, bitten wir Sie, die Darstellungsgröße ihres Computers während der Nutzung des Prototyps auf 100% zu stellen.</div>
        <div>
          <b>Vorgehensweise</b>
          <ul className="account__size_content_options">
            <li>Öffnen Sie <b>Start</b>, und wählen Sie dann <b>Einstellungen</b>  > <b>System</b> > <b>Anzeige</b>.</li>
            <li>Überprüfen Sie unter Skalierung und Layout die Einstellung unter <b>Ändern der Größe von Text, Apps und anderen Elementen</b>. Zur optimalen Verwendung dieses Prototyps, stellen Sie den <b>Prozentsatz auf 100%</b>.</li>
          </ul>
        </div>
        <button className="btn btn-dark-blue account__size_content_set_btn" onClick={() => this.setState({ step: 2 })}>Ich habe die Darstellungsgröße auf 100% geändert</button>
      </div>
    );
    return (
      <div className="account">
        <div className="account__wrapper">
          <div className="account__card">
            <div className="account__head">
              {
                step === 1
                  ? <h3 className="account__title">Ändern der<br />Darstellungsgrößer</h3>
                  : <h3 className="account__title">Willkommen in der<br />Trusted Data Platform</h3>
              }
              <img className="account__logo" src={Logo} alt="" />
            </div>
            {
              step === 1
                ? content
                : <LogInForm onSubmit />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
