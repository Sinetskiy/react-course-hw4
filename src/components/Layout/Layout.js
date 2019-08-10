import React, {PureComponent} from 'react';
import './Layout.css';

class Layout extends PureComponent {
    render() {
        const {header, footer} = this.props;

        return <main className={(header ? 'main--with-header' : '') + (footer ? 'main--with-footer' : '')}>
            {header ? <div className="header">{this.props.header}</div> : ''}
            {footer ? <div className="footer">{this.props.footer}</div> : ''}
        </main>;
    }
}

export default Layout;
