// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';

// import Home from './componenets/First';
// import Dashboard from './componenets/Dashboard';

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       loggedInStatus: 'NOT_LOGGED_IN',
//       user: null,
//     };

//     this.handleLogout = this.handleLogout.bind(this);
//     this.handleLogin = this.handleLogin.bind(this);
//   }

//   componentDidMount() {
//     this.checkLoginStatus();
//   }

//   handleLogin(data) {
//     this.setState({
//       loggedInStatus: 'LOGGED_IN',
//       user: data.user,
//     });
//   }

//   handleLogout() {
//     this.setState({
//       loggedInStatus: 'NOT_LOGGED_IN',
//       user: null,
//     });
//   }

//   checkLoginStatus = () => {
//     const { loggedInStatus } = this.state;
//     axios
//       .get('http://localhost:3001/logged_in', { withCredentials: true })
//       .then((response) => {
//         if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
//           this.setState({
//             loggedInStatus: 'LOGGED_IN',
//             user: response.data.user,
//           });
//         } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
//           this.setState({
//             loggedInStatus: 'NOT_LOGGED_IN',
//             user: null,
//           });
//         }
//       })
//       .catch((error) => {
//         console.log('check login error', error);
//       });
//   };

//   render() {
//     const { loggedInStatus, user } = this.state;

//     return (
//       <div className="app">
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={loggedInStatus} />} />
//             <Route path="/dashboard" element={<Dashboard loggedInStatus={loggedInStatus} />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
