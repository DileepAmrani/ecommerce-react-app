import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const Slider = () => {
  return (
    <MDBContainer style={{marginTop: '5px' , width: '100%'}}>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.the-rio.com/catalog/view/theme/default/image/designyourjwellery/banner.jpg"
                alt="First slide"
                style={{height: '30%', maxHeight: '450px'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="http://designsbykamni.com/wp-content/uploads/2013/08/home-slider1.jpg"
                alt="Second slide"
                style={{height: '30%', maxHeight: '450px'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.shilpalifestyle.com/assets/home-slider/home_slider_HOME_PAGE_-1.jpg"
                alt="Third slide"
                style={{height: '30%', maxHeight: '450px'}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}


export default Slider