import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../Footer/Footer.css'

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 footer" >
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="6">
            <h3 className="title">The Diamond Shop</h3>
            <p>
              The Diamond Jewellery Shop, We Deal with New and Latest Design World Wide <br />
              Indian Jewellery, American Jewellery and Latest Jewellery Made by <br /> 
              International Companise.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h3 className="title">Contact Us </h3>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twiter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pinterest</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.cricbuc.com"> Cricbuc And Team </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;