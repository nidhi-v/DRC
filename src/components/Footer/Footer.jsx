import { useState } from "react";

// import React {useState}from "react";
import "./Footer.css";
const Footer = () => {
  const [activeTab, setActiveTab] = useState('disclaimer');
  const [disclaimerSubTab, setDisclaimerSubTab] = useState('link1');
  return (
    <div className="main-foot">
      <div className="foot-up">
        <div className="foot-logo">
          <img src="/images/drc-logo.png"></img>
          <div className="foot-icons">

          <a href="https://www.facebook.com/drchokseyfinserv"><i class="fa-brands fa-facebook fa-2xl" style={{"color": "#316ff6"}}></i></a>
          
            <a href="https://www.instagram.com/devenchoksey/"><i class="fa-brands fa-instagram fa-2xl instagram" ></i></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FDRCFinServ"><i class="fa-brands fa-twitter fa-2xl" style={{"color": "#316ff6"}}></i></a>
            <a href="https://linkedin.com/company/devenchoksey/"><i class="fa-brands fa-linkedin fa-2xl" style={{"color": "#0077b5"}}></i></a>
          </div>
        </div>
        <div className="useful-links">
          <p>Useful Links</p>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Investment Ideas</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Downloads</a>
          </li>
        </div>
        <div className="foot-call-visit">
            <h4>Call Us</h4>
            <p>+91–22-6696 5555</p>
            <div className="visit">
              <h4>Visit</h4>
              <p>DRChoksey FinServ Private Limited 5th<br></br> Floor, Abhishek Building, Behind Monginis <br></br>Cake Factory, Off New Link Road,<br></br> Andheri (West), Mumbai – 400058</p>
            </div>
        </div>
        <div className="signup">
          <p>Signup to our Newsletters and Webinars</p>
          <input type="email" placeholder="Enter Your Email" /><a href="">CHATUR.AI </a>
        </div> 
      </div>
      
      <div className="foot-down">
            {/* Main Tabs */}
            <div className="tabs-foot">
                <button onClick={() => setActiveTab('disclaimer')}>Disclaimer |</button>
                <button onClick={() => setActiveTab('privacy')}>Privacy |</button>
                <button onClick={() => setActiveTab('terms')}>Terms of Use</button>
            </div>

            {/* Tab Content */}
            {activeTab === 'disclaimer' && (
                <div className="content-foot">
                    <h2>Disclaimer</h2>
                    <p>Regulatory Registration Details<br></br>
DRCHOKSEY FINSERV PRIVATE LIMITED | CIN U67100MH2020PTC352816
</p>
                    <div className="table-container">
                    {/* Table with Y columns */}
                    <table className="seg-table">
                        <thead>
                            <tr>
                                <th>Segment</th>
                                <th>Type</th>
                                <th>Management</th>
                                <th>Research</th>
                                <th>Advisory</th>
                                <th>BASL</th>
                                <th>AMFI</th>
                                {/* Add more columns as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Registration No.</td>
                                <td>Non-individual</td>
                                <td>IMP000007906</td>
                                <td>INH000011246</td>
                                <td>INA000017903</td>
                                <td>1982</td>
                                <td>ARn- 256167</td>
                            </tr>
                            <tr>
                                <td>Validity of</td>
                                <td>-</td>
                                <td>Mar 13, 2023</td>
                                <td>Jan 16, 2023</td>
                                <td>Apr 24, 2023</td>
                                <td>Apr 26, 2023</td>
                                <td>Nov 03, 2022 - Nov 02</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                    </div>

                    {/* Paragraphs */}
                    <div className="krc">
                      <h4>KRC Insurance Advisors Limited | CIN: U65910MH1988PLC047966</h4>
                      <h4>IRDA Registration | CA-0278</h4>
                      <p>Registered & Corporate Address | 5th Floor, Abhishek Building, Behind Monginis Cake Factory, Off New Link Road, Andheri (West), Mumbai – 400058</p>
                      <p>Centralised Helpdesk | +91-22-66965513 | +91-22-66965524 | <a href="mailto:service@devenchoksey.com">service@devenchoksey.com</a></p>
                      <p>Principal Officer in Investment Advisory | <a href="mailto:vishal.shinde@devenchoksey.com">vishal.shinde@devenchoksey.com</a></p>
                      <h4>Info about KYC Procedure</h4>
                      <p>KYC is one-time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (Portfolio Management Services, Investment Advisor, Mutual Fund, etc.), you need not undergo the same process again when you approach another intermediary.</p>

                      <h4>Important Links</h4>
                    </div>
                    <table className="stock">
                        <thead>
                            <tr>
                                <th><a href="https://www.sebi.gov.in/">SEBI</a></th>
                                <th><a href="https://www.bseindia.com/">BSE</a></th>
                                <th><a href="http://www.nseindia.com/">NSE</a></th>
                                <th><a href="http://www.cdslindia.com/">CDSL</a></th>
                                <th><a href="http://www.mcxindia.com/">MCX</a></th>
                                <th><a href="https://irdai.gov.in/">IRDA</a></th>
                                <th><a href="https://www.amfiindia.com/">AMFI</a></th>
                            
                            </tr>
                        </thead>
                        
                    </table>


                    
                   
                </div>
            )}

            {activeTab === 'privacy' && (
                <div className="content-foot-privacy">
                    <h2>Privacy Policy</h2>
                    <p>Drchoksey FinServ Private Limited is strongly committed to every individual's right to privacy and to keeping personal and financial information secure. As part of the effort to earn your trust and confidence in our commitment, we are fully disclosing our privacy practices. We, therefore, encourage you to read our privacy statement to familiarize yourself and understand the types of personally identifiable information we collect and how we use this information. <br /><br />

Drchoksey FinServ Private Limited only collects the necessary personally identifiable information in order to respond to your requests for our customized products and services. Personally identifiable information is defined as any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains. Such information is pertinent to the site includes, but is not limited to, first and last name, physical address, e-mail address, phone number, birth date, and any other information that itself identifies or when tied to the above information, may identify you as a specific individual. <br /><br />

Drchoksey FinServ Private Limited is strongly committed to every individual's right to privacy and to keeping personal and financial information secure. As part of the effort to earn your trust and confidence in our commitment, we are fully disclosing our privacy practices. We, therefore, encourage you to read our privacy statement to familiarize yourself and understand the types of personally identifiable information we collect and how we use this information. <br /><br />

Drchoksey FinServ Private Limited only collects the necessary personally identifiable information in order to respond to your requests for our customized products and services. Personally identifiable information is defined as any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains. Such information is pertinent to the site includes but is not limited to, first and last name, physical address, e-mail address, phone number, birth date, and any other information that itself identifies or when tied to the above information, may identify you as a specific individual.</p>
                </div>
            )}

            {activeTab === 'terms' && (
                <div className="content-foot-terms">
                    <h2>Terms of Use</h2>
                    <p>We invite you to fully experience, enjoy and participate in the many unique services and features offered on Drchoksey FinServ Private Limited. However, the use of the website is offered to you on your acceptance of the Terms of Use, our Privacy Policy and other notices posted on this website. Your use of this website or of any content presented in all areas of the website indicates your acknowledgement and agreement to these Terms of Use, our Privacy Policy and other notices posted on this website. <br /><br />

Drchoksey FinServ Private Limited also reserves the right at its sole discretion, to modify, add or remove any terms or conditions of these Terms of Use without notice or liability to you. Any changes to these Terms of Use shall be effective immediately after posting such changes on this website. Your continued use of drchoksey.com means that you accept any new or modified terms and conditions that are maintained. We would thus encourage you to re-visit the 'Terms of Use' link at our site from time to time to stay abreast of any changes that are introduced.</p>
                </div>
            )}
        </div>
      </div>
    
  );
};

export default Footer;
