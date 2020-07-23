import React, { Component } from 'react';
import  Header  from "./HeaderComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import BuyPage from './BuyPageComponent';
import SellPage from './SellPageComponent';
import {Switch ,Route ,Redirect} from 'react-router-dom';

class Main extends Component{

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component= {Home} />
                    <Route path="/buypage" component={BuyPage} />
                    <Route path="/sellpage" component={SellPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;