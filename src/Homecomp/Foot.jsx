import React from 'react';
import logo from "../Assests/logob.png"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted' style={{backgroundColor:"white"}} >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/tedxchandigarhuniversity' target='_blank'  className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/TEDxChandiUni' target='_blank' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />  
          </a>
          <a href='https://www.instagram.com/tedx.chandigarhuniversity' target='_blank' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/tedxchandigarhuniversity/' target='_blank' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <img src={logo} width="100%" style={{marginLeft:"-15px"}} />
              {/* <h6 className='text-uppercase fw-bold mb-4' style={{color:"red"}}>
                <MDBIcon icon="gem" className="me-3" style={{color:"red"}} />
                TEDx Chandigarh University
              </h6> */}
              <p>
              An independently organized event by the students of Chandigarh University, where we give voices to 'Ideas Worth Spreading'.
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Mohali-Chandigarh, India
              </p>
              <p >
                <MDBIcon icon="envelope" className="me-2" />
                tedxchandigarhuniversity@outlook.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 78980 04254
              </p>
              {/* <p>
                <MDBIcon icon="print" className="me-3" /> + 91 78980 04254
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor:'#1a1a1a' }}>
        © 2021 Copyright : 
        <a className='text-reset fw-bold' href=''>
          TEDx Chandigarh University
        </a>
      </div>
    </MDBFooter>
  );
}