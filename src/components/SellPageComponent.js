import React, { Component } from 'react';
import {ORDERS} from '../data/orders';
function RenderOrders(props){
    const displayOrders = props.orders.map((order) => {
    const items = order.items.map( item => <li>{item}</li>);
        return(
            <div key={order.id} className="col-12 col-md-3 ">
                <div className="p-2 ">
                <div className="border p-2 colourLight text-white">
                        <ul className="list-unstyled">
                            {items}
                        </ul>
                </div>
                </div>
                
            </div>
        )
    });
    return(
    <div className="row no-gutters">{displayOrders}</div>
    )
}

class SellPage extends Component{
    
    constructor(props){
        super(props)

        this.state={
            orders:ORDERS
        }
    }

    render() {
        return(
            <div className="container-fluid ">
                <RenderOrders orders={this.state.orders} /> 
            </div>
        );
    }
}

export default SellPage;