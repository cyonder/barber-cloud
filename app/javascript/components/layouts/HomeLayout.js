import React from 'react';

import Header from '../Header';

const HomeLayout = (props) => {
    return(
        <div id="home-layout">
            <Header />
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default HomeLayout;
