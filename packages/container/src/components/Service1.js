// import { mount } from 'service1/Service1App';
import React from 'react';
import useServiceMount from '../hooks/useServiceMount';

let mount = () => {};
try {
  mount = require('service1/Service1App')?.mount;
} catch (e) {
  console.error('service1MountFunc can not be loaded!', e);
}

const Service1 = () => {
  const nodeRef = useServiceMount(mount);

  return <div ref={nodeRef}></div>;
};

export default Service1;
