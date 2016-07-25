import moment from 'moment';
import React, { PropTypes, Component } from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl/lib/Layout';

import AppHeader  from './components/AppHeader';
import AppDrawer  from './components/AppDrawer';
import SignIn     from './components/SignIn';
import DateSlider from './components/DateSlider';

const arrDayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const getDayOfWeek = (day) => {
  return arrDayofWeek[day] || 'Invalid';
};

class App extends Component {

  static contextTypes = {
    firebase: PropTypes.object.isRequired,
    database: PropTypes.object.isRequired,
  };

  state = {
    currentUser: undefined,
    currentDate: moment(),
  };

  componentWillMount() {
    // [START authstatelistener]
    this.context.firebase
      .auth()
      .onAuthStateChanged(this.handleAuthStateChanged);
  }

  handleAuthStateChanged = (user) => {
    if (user) {
      const currentUser= {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };

      this.setState({ currentUser });
    }
  };

  handleDateChange = (date) => {
    this.setState({ currentDate: date });
  }

  render() {
    const { currentUser, currentDate } = this.state;

    return (
      <div className="App">
        <Layout fixedHeader>
          <AppHeader title={getDayOfWeek(currentDate.day())} />
          <AppDrawer />
          <Content className="App-content">
            <DateSlider
              date={currentDate}
              onDateChange={this.handleDateChange}
            />
            {currentUser
              ? this.props.children
              : <SignIn />
            }
          </Content>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
