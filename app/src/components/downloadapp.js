import React from 'react';
import ReactDom from 'react-dom';
import MediaQuery from 'react-responsive';
import PhoneImg from '../images/appdownload/phone.png';

const DownloadApp = (props) => (
 <div className="d-flex download-container download-text align-items-center">
   <div className="col-md-6 col-sm-6">
     <div className='mw-20'>
       <h2>Download the app</h2>
       <ul className='g-list-inline'>
         <li><h6>5 star rated on both app stores</h6></li>
         <li><h6>20,000+ reservable locations</h6></li>
         <li><h6>Find, pay & extend on-the-go</h6></li>
         <li><h6>Handy reminders</h6></li>
         <li><h6>Easy navigation</h6></li>
         <li><h6>Quick rebooking</h6></li>
         <li><h6>Smart notifications</h6></li>
       </ul>
       <div className='text-align-center d-flex'>
         <div className='appstore col-6 col-md-6 col-sm-6'></div>
         <div className='google col-6 col-md-6 col-sm-6'></div>
       </div>
     </div>
   </div>
   <MediaQuery query='(min-device-width: 40em)'>
     <div className="col-md-6 col-sm-6 d-table h-100">
       <div className="d-table-cell align-bottom">
        <img src={PhoneImg} height='50%' width='50%' className='img-fluid'/>
       </div>
     </div>
   </MediaQuery>
 </div>
);

export default DownloadApp;
