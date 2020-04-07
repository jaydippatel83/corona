import React from "react";
import { withRouter } from 'react-router-dom';


const FooterPage = () => {
    return (
        <div>
            <footer className="page-footer font-small blue-grey lighten-5 ">
                <div style={{ backgroundColor: ' #eee' }}>
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 font-weight-bold">Get connected with us on social networks!</h6>
                            </div>
                            <div className="col-md-6 col-lg-7 text-center text-md-right">
                                <a href="https://www.facebook.com/jaydip.patel.1432">
                                    <i className="fab fa-facebook-f    mr-4"></i>
                                </a>
                                <a href="https://www.instagram.com/jaydip_patel_143/" className="ins-ic">
                                    <i className="fab fa-instagram   " />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container   text-md-left mt-5 ml-auto mr-auto">
                    <div className="row mt-3 dark-grey-text">
                        <div className="col-md-3 col-sm-6 col-12 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">CodeCrunch</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto " style={{ width: '60px', backgroundColor: ' #21d192' }} />
                            <p className="text-left">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.
                                </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-12 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: ' #21d192' }} />
                            <p>
                                <i className="fas fa-home mr-3"></i>Ahmedabad, Titanium city center </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i>jaydippatel83.pj@gmail.com</p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> + 91 9638130135</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center  py-3  font-weight-bold" style={{ backgroundColor: 'black', color: 'white' }}>© 2020 Copyright :-
                    <a className="text-secondary" href="http://codecrunch.co/">Code Crunch Pvt.Ltd</a>
                </div>
            </footer>
        </div>
    );
}

export default withRouter(FooterPage);