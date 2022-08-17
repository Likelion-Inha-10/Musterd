import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import styled from 'styled-components';
import NavigationBar from '../../musterd-ui/NavigationBar';
import PageInfo from './Component/PageInfo';
import Header from './Component/Header';

const CameraContainer = styled.div`
  width: 80%;
  margin: 50px auto 0 auto;
`;

const QrCamera = (props) => {
  const navigate = useNavigate();
  const [isScan, setIsScan] = useState(false);
  const [data, setData] = useState(); //qr 데이터 저장

  // api 연동할 부분 (스캔 됐는지 여부를 true/false로 보냄)
  // useEffect = (() => {
  //   axios.post(`${apiUrl}/travel-stamp/qr`, { is_scanned: isScan }).then(() => {
  //     console.log('성공');
  //   })}
  // ,[isScan]);

  //스캔 성공시 다시 스탬프페이지로 이동
  const handleScan = (result) => {
    setData(result.text);
    setIsScan(true);
    setTimeout(() => {
      navigate('/stamp');
    }, 1000);
  };

  return (
    <>
      <Header />
      <CameraContainer>
        <p>스캔 확인을 위한 부분:</p>
        <a href={data ? data : 'none'}>{data}</a>
        <QrReader
          onResult={(result) => {
            if (result) {
              handleScan(result);
            }
          }}
          style={{ width: '100%' }}
          scanDelay={300}
        />
      </CameraContainer>
      <PageInfo />
      <NavigationBar />
    </>
  );
};
export default QrCamera;
