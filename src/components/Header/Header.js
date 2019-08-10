import React, {PureComponent} from 'react';
import './Header.css';
import {AuthConsumer} from "../../contexts/Auth";

class Header extends PureComponent {
    render() {
        return <AuthConsumer>
            {({email}) => {
                return <div>
                    <p className="t-header-email">{email}</p>
                    <button className="t-logout"/>
                </div>;
            }}
        </AuthConsumer>
    }
}

export default Header;
