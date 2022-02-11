import React from 'react';
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'react-sticky-header/styles.css';
import MobileMenu from '../../components/MobileMenu'



import './style.css'

const Header = () => {

    return(

          <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <h2><AnchorLink href='#home'>Milene & Kibrilha</AnchorLink></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    <li><AnchorLink href='#home'>Home</AnchorLink></li>
                                    <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                                    <li><AnchorLink href='#story'>Story</AnchorLink></li>
                                    <li><AnchorLink href='#people'>People</AnchorLink></li>
                                    <li><AnchorLink href='#event'>Events</AnchorLink></li>
                                    <li><AnchorLink href='#gallery'>Gallery</AnchorLink></li>
                                    <li><AnchorLink href='#rsvp'>Rsvp</AnchorLink></li>
                                    <li><Link to='/'>Languages</Link>
                                        <ul className="submenu">
                                        <li><AnchorLink href='#home'>Portugues</AnchorLink></li>
                                        <li><AnchorLink href='#home'>Dutch</AnchorLink></li>
                                       </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        
    )
}

export default Header;
