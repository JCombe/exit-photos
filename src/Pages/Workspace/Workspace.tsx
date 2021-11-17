import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import PhotoToUSB from './PhotoToUSB/PhotoToUSB';

const Workspace = () => {
  return (
    <div>
      <PhotoToUSB />
      <Dashboard />
    </div>
  );
};

export default Workspace;
