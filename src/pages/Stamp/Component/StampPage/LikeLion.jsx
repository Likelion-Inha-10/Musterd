import React, { useState, useEffect } from 'react';
import Performance from '../Performance';
import NavigationBar from '../../../../musterd-ui/NavigationBar';
import BeforeScan from '../Performance/BeforeScan';
import axios from 'axios';

const LikeLion = () => {
  const [isScan, setIsScan] = useState(false);

  // api 연동
  // useEffect(() => {
  //   axios.get(`apiurl/travel-stamp`).then((res) => {
  //     setIsScan(res.data);
  //   });
  // }, [isScan]);

  return (
    <div>
      {isScan ? <Performance /> : <BeforeScan />}
      <NavigationBar pageNumber="3" />
    </div>
  );
};

export default LikeLion;
