import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = (props) => {
  const { loggedInStatus } = props;
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h1>
          Status:
          {loggedInStatus}
        </h1>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  loggedInStatus: PropTypes.string.isRequired,
};

export default Dashboard;
