import React, {PureComponent} from 'react';
import {AuthConsumer} from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
    render() {
        return <AuthConsumer>
            {({isAuthorized, email}) => {
                return <div>
                    <p className="t-footer">{isAuthorized ? `Вы вошли как ${email}` : 'Вы гость в этой системе'}</p>
                </div>;
            }}
        </AuthConsumer>
    }
}

export default Footer;
