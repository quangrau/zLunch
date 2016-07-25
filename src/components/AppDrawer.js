import React from 'react';
import { Drawer, Navigation } from 'react-mdl/lib/Layout';

const AppDrawer = () => (
  <Drawer title="zLunch">
    <Navigation>
      <a href="/">Menu</a>
      <a href="/orders">My Orders</a>
    </Navigation>
  </Drawer>
);

export default AppDrawer;
