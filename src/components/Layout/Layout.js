import React, {PureComponent} from 'react';
import './Layout.css';

class Layout extends PureComponent {
    render() {
        const {header, footer, children} = this.props;

        return <main className={(header ? 'main--with-header' : '') + (footer ? ' main--with-footer' : '')}>
            {header ? React.createElement(header) : ''}
            <div className="main">{children}</div>
            {footer ? React.createElement(footer) : ''}
        </main>;
    }
}

export default Layout;
