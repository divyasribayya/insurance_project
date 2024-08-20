import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-12 ft-1">
                            {/* <h3><span>Legacy</span>Insurance</h3> */}
                            <h4>Enhancing Your Coverage Confidence</h4>
                            <p>Enhancing your coverage confidence means providing tailored insurance solutions that address your specific needs, ensuring comprehensive protection
                                and financial security, and delivering peace of mind through expert guidance and support.</p>
                            <p style={{ fontSize: "16px" }}>
                                <i className="fa fa-phone" style={{ color: "#ef5226" }}></i> +91 8919439603
                            </p>
                            <div className="footer-icons">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-12 ft-2">
                            <h5>Company</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-2 col-12 ft-2">
                            <h5>Insurance</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Privacy Policy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Terms of Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-3">
                            <h5>Working Hours</h5>
                            <p><i className="fa-regular fa-clock" style={{ color: "#ef5226" }}></i> 9:30 AM - 9 PM, Monday - Saturday</p>
                            <p><i className="fa-regular fa-location-arrow" style={{ color: "#ef5226" }}></i> support@lib.com</p>
                            <p>
                                <i className="fa-solid fa-location-dot" style={{ color: "#ef5226" }}></i>
                                Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens Road, VIP Hills, Madhapur, Hyderabad-500081.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="last-footer">
                    <p class="footer-left">
                        <i class="far fa-copyright"></i> Copyright @
                        <script>
                            document.write(new Date().getFullYear());
                        </script> 2024 Legacy insurance brokers
                    </p>
                    <p class="footer-right">
                        <a href="/" target="_blank">Terms & Conditions</a> | 
                        <a href="/" target="_blank"> Privacy Policy</a>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Footer
