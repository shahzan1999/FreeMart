import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Home extends Component{

    render() {
        return(
            <div>
                <Link to="/buypage" style={{textDecoration:'none'}} ><div className="homepage">Let's buy</div></Link>
                <Link to="/sellpage" style={{textDecoration:'none'}} ><div className="homepage">I wan't to sell</div></Link>
            </div>
        );
    }
}

export default Home;