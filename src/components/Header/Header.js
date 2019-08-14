import React, {PureComponent} from 'react';
import './Header.css';
import {AuthConsumer} from "../../contexts/Auth";
import SectionTitle from "../SectionTitle";

class Header extends PureComponent {
    render() {
        return <AuthConsumer>
            {({isAuthorized, email}) => {
                return <header className="header">
                    <SectionTitle className="header__title" >Header</SectionTitle>
                    <div className="header__content">
                        {isAuthorized ? <div>
                                <p className="header-menu__email header-email t-header-email">{email}</p>
                                <button className="header-menu__button t-logout button"> Выйти</button>
                            </div>
                            : ''}
                    </div>
                </header>;
            }}
        </AuthConsumer>
    }
}

export default Header;
