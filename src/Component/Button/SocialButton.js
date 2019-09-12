import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const SocialButtonsPage = (props) => {
  return (
    <MDBContainer >
      <MDBBtn social="fb" size="lg" color="blue" onClick={props.onclick}>
        <MDBIcon fab icon="facebook-f" className="pr-1"  />Facebook
      </MDBBtn>
    </MDBContainer>
  );
}

export default SocialButtonsPage;