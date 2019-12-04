import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

// Route Imports
import ShowRoute from '../../routes/Show/ShowRoute';
import ArtistRoute from '../../routes/Artist/ArtistRoute';
import HomeRoute from '../../routes/Home/HomeRoute';
import LandingRoute from '../../routes/Landing/LandingRoute';

function ContentRouter() {
    return (
        <main>
            <Switch>
                <Route exact path ='/' component={LandingRoute} />
                <Route path = '/home' component={HomeRoute} />
                <Route exact path='/show' component={ShowRoute} />
                <Route path='/show/:title' component={ShowRoute} />
                <Route exact path='/artist' component={ArtistRoute} />
                <Route path='/artist/:name' component={ArtistRoute} />
            </Switch>
        </main>
    )
}

export default ContentRouter;