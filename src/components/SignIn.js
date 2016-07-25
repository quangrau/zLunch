import React, { PropTypes, Component } from 'react';
import './SignIn.css';

class SignIn extends Component {

  static contextTypes = {
    firebase: PropTypes.object.isRequired,
  };

  handleSignIn = () => {
    const { firebase } = this.context;

    if (!firebase.auth().currentUser) {
      // [START createprovider]
      const provider = new firebase.auth.GoogleAuthProvider();

      // [START addscopes]
      provider
        .addScope('https://www.googleapis.com/auth/plus.login');

      // [START signin]
      firebase
        .auth()
        .signInWithPopup(provider);
        // .then(this.handleSignInSucceed)
        // .catch(this.handleSignInFailed);
    } else {
      // [START signout]
      firebase.auth().signOut();
    }
  };

  render() {
    return (
      <div className="SignIn">
        <button
          className="SignIn__button"
          onTouchTap={this.handleSignIn}
        >SignIn with Google</button>
      </div>
    );
  }
}

SignIn.propTypes = {
};

export default SignIn;
