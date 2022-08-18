import React from 'react';
import styled from 'styled-components';
import CompletePopUp from '../PopUpStyled/CompletePopUp';
import AddPopUp from './../PopUpStyled/AddPopUp';
import JoinPopUp from './../PopUpStyled/JoinPopUp';
import MyProfilePopUp from './../PopUpStyled/MyProfilePopUp';
import PlacePopUp from './../PopUpStyled/PlacePopUp';

const Overlay = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Wrapper = styled.div`
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
};

// if (props.type === 'PlacePopUp') {
//   return (
//     <>
//       <Overlay>
//         <Wrapper>
//           <PlacePopUp
//             PopModal={props.placeModal}
//             setPopModal={props.setPlaceModal}
//           ></PlacePopUp>
//         </Wrapper>
//       </Overlay>
//     </>
//   );
// }

export default Modal;
