import React from 'react';

import App from './App';

export default {
  title: 'App',
  component: App,
  args: {},
};

export const Default = (args) => <App {...args} />;
