import React, {PureComponent} from 'react';
import './Layout.css';

class Layout extends PureComponent {
    render() {
        const {header, footer, children} = this.props;

        return (
            <React.Fragment>
                {header ? React.createElement(header) : ''}
                <main className={(header ? 'main main--with-header' : '') + (footer ? ' main--with-footer' : '')}>
                    <p className="main__title section-title">Main</p>
                    {children}
                </main>
                {footer ? React.createElement(footer) : ''}
            </React.Fragment>
        )
    }
}

export default Layout;
