import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import styled from 'styled-components';
import NavigationBar from '../../musterd-ui/NavigationBar';
import PageInfo from './Component/PageInfo';
import Header from '../../musterd-ui/Header';
import mission from '../../assets/img/mission.png';

const CameraContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Margin = styled.div`
  height: ${(props) => (props.height ? props.height : '100%')};
  width: ${(props) => (props.width ? props.width : '100%')};
`;

const TypoWrapper = styled.img`
  padding: 70px 0px 20px 0px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const QrCamera = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState(); //qr 데이터 저장

  // api 연동할 부분 (스캔 됐는지 여부를 true/false로 보냄)
  // useEffect = (() => {
  //   axios.post(`${apiUrl}/travel-stamp/qr`, { qr_data: data }).then(() => {
  //     console.log('성공');
  //   })}
  // ,[isScan]);

  //스캔 성공시 다시 스탬프페이지로 이동
  const handleScan = (result) => {
    setData(result.text);
    setTimeout(() => {
      navigate('/stamp');
    }, 1000);
  };

  return (
    <>
      <Header back />
      <TypoWrapper src={mission} />
      <CameraContainer>
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
      <Margin height="10px" />
      <PageInfo />
      <NavigationBar pageNumber="3" />
    </>
  );
};
export default QrCamera;
