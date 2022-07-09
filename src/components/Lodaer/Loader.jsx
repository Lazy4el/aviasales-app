import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import 'antd/dist/antd.css';
import classes from './Loader.module.scss';

const antIcon = (
  <LoadingOutlined
    spin
    style={{
      color: '#fff',
      fontSize: 20,
    }}
  />
);

const Loader = () => {
  return <Spin className={classes.loader} indicator={antIcon}></Spin>;
};

export default Loader;
