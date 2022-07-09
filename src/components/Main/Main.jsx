import { React } from 'react';

import FlterTransplant from '../FlterTransplant/FlterTransplant.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import FlightList from '../FlightList/FlightList.jsx';

import classes from './Main.module.scss';

const Main = () => {
  return (
    <main className={classes.main}>
      <FlterTransplant></FlterTransplant>
      <Tabs></Tabs>
      <FlightList></FlightList>
    </main>
  );
};

export default Main;
