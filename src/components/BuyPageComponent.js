import React, { Component } from 'react';
import {Button, FormGroup, Form,Input} from 'reactstrap';


class BuyPage extends Component{
    
    constructor(props){
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event){
        alert(this.buyItem.value+this.buyShop.value);
        this.buyItem.value="";
        this.buyShop.value="";
        event.preventDefault();
    }

    render() {
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 col-md-9 mt-3">
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Input type="text" id="buyItem" name="buyItem" placeholder="Enter Item"
                                    onKeyPress={this.handleKeyPress}
                                    innerRef={(input) => this.buyItem = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" id="buyShop" name="buyShop" placeholder="Enter Shop's name"
                                    innerRef={(input) => this.buyShop = input}/>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Place Order</Button>
                        </Form>
                    </div>
                </div>
                <div className="row flex-row flex-nowrap ">
                    <div className="col-auto advert">
                        card1
                    </div>
                    <div className="col-auto advert">
                        card1
                    </div>
                    <div className="col-auto advert">
                        card1
                    </div>
                    <div className="col-auto advert">
                        card1
                    </div>
                    <div className="col-auto advert">
                        card1
                    </div>
                    <div className="col-auto advert">
                        card1
                    </div>
                    <div className="col-auto advert">
                        card1
                    </div>
                    <div className="col-auto advert">
                        card1
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyPage;