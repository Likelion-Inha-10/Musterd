import React from 'react';
import styled from 'styled-components';
import CompletePopUp from '../PopUpStyled/CompletePopUp';
import AddPopUp from './../PopUpStyled/AddPopUp';
import JoinPopUp from './../PopUpStyled/JoinPopUp';
import MyProfilePopUp from './../PopUpStyled/MyProfilePopUp';
import PlacePopUp from './../PopUpStyled/PlacePopUp';
import StampPopUp from './../PopUpStyled/StampPopUp';

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  width: 24.5%;
  height: 100%;
  z-index: 10000;
`;
const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = (props) => {
  if (props.type === 'completePopUp')
    return (
      <>
        <Overlay>
          <Wrapper>
            <CompletePopUp
              PopModal={props.completeModal}
              setPopModal={props.setCompleteModal}
              content={props.content}
              subcontent={props.subcontent}
              isSignIn={props.isSignIn}
            ></CompletePopUp>
          </Wrapper>
        </Overlay>
      </>
    );
  if (props.type === 'addPopUp')
    return (
      <>
        <Overlay>
          <Wrapper>
            <AddPopUp
              PopModal={props.addModal}
              setPopModal={props.setAddModal}
            ></AddPopUp>
          </Wrapper>
        </Overlay>
      </>
    );
  if (props.type === 'joinPopUp')
    return (
      <>
        <Overlay>
          <Wrapper>
            <JoinPopUp
              PopModal={props.joinModal}
              setPopModal={props.setJoinModal}
            ></JoinPopUp>
          </Wrapper>
        </Overlay>
      </>
    );
  if (props.type === 'myprofilePopUp')
    return (
      <>
        <Overlay>
          <Wrapper>
            <MyProfilePopUp
              PopModal={props.profileModal}
              setPopModal={props.setProfileModal}
            ></MyProfilePopUp>
          </Wrapper>
        </Overlay>
      </>
    );
  if (props.type === 'placePopUp')
    return (
      <>
        <Overlay>
          <Wrapper>
            <PlacePopUp
              PopModal={props.placeModal}
              setPopModal={props.setPlaceModal}
            ></PlacePopUp>
          </Wrapper>
        </Overlay>
      </>
    );
  if (props.type === 'stampPopUp')
    return (
      <>
        <Overlay>
          <Wrapper>
            <StampPopUp
              PopModal={props.stampModal}
              setPopModal={props.setStampModal}
            ></StampPopUp>
          </Wrapper>
        </Overlay>
      </>
    );
};

export default Modal;
