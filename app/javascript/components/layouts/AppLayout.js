import React from 'react';

import Navigation from '../Navigation';

const AppLayout = (props) => {
    return(
        <div id="app-layout">
            <Navigation />
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default AppLayout;
