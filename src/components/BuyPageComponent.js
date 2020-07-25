import React, { Component } from 'react';
import {Button, FormGroup, Form,Input, Card,CardBody,CardTitle} from 'reactstrap';


function RenderAdvertisement(props) {
    return ( 
        <div className="m-2">
            <Card className="p-3">
                <CardTitle className="">Advertisement</CardTitle>
                <CardBody>Advertisement Title</CardBody>
            </Card>
        </div>
    );
}

class BuyPage extends Component{
    
    constructor(props){
        super(props);

        this.state={
            itemList:[],
            currentItem:{
                text:'',
                key:''
            },
        }
        this.handleOrder = this.handleOrder.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleChange = (e) =>{
        this.setState({
            currentItem:{
                text:e.target.value,
                key: Date.now()
            }
        })
    }
    handleKeyPress= (e) =>{
        if(e.key==='Enter' && this.state.currentItem.text!==''){
            const newItem=this.state.currentItem;
            const items = [...this.state.itemList, newItem];
            this.setState({
                itemList: items,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }

    deleteItem(itemKey){
        console.log(itemKey);
        const filteredItems = this.state.itemList.filter( item => item.key !== itemKey);
        this.setState({
            itemList:filteredItems
        })
    }
    handleOrder(event){
        event.preventDefault();
        if(this.state.currentItem.text!=="" && this.buyShop.value!==""){
            let str="";
            for(let i=0;i<this.state.itemList.length;i++){
                str=str+this.state.itemList[i].text+", ";
            }
            str=str+this.state.currentItem.text;
            alert("You ordered "+str+" from "+this.buyShop.value);
            this.buyShop.value="";
            this.setState({
                itemList: [],
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
        else if(this.state.itemList.length>0 && this.buyShop.value!==""){
            let str="";
            for(let i=0;i<this.state.itemList.length;i++){
                str=str+this.state.itemList[i].text+" ";
            }
            alert("You ordered "+str+" from "+this.buyShop.value);
            this.buyShop.value="";
            this.setState({itemList:[]})
        }
        else{
            alert("Enter all fields correctly!")
        }
    }

    render() {
        const AllItems = this.state.itemList.map((item) => {
            return(
                <div key={item.key} className=" d-inline-block border mb-3 pl-1 pr-1 text-white rounded-sm listItem">{item.text}  
                <i onClick={() => {this.deleteItem(item.key)}} className="fa fa-close"></i></div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-3">
                        <Form >
                            <FormGroup>
                                <Input type="text" id="buyItem" name="buyItem" placeholder="Enter Item"
                                    value={this.state.currentItem.text}
                                    onChange={this.handleChange} onKeyPress={this.handleKeyPress}
                                    />
                            </FormGroup>
                            {AllItems}
                            <FormGroup>
                                <Input type="text"  id="buyShop" name="buyShop" placeholder="Enter Shop's name"
                                    innerRef={(input) => this.buyShop = input}/>
                            </FormGroup>
                            <Button color="primary" onClick={this.handleOrder}>Place order</Button>
                        </Form>
                    </div>
                </div>
                <div className="row no-gutter mt-10">    
                    <div className="col-6">
                        <RenderAdvertisement />
                    </div>
                    <div className="col-6">
                        <RenderAdvertisement />
                    </div>
                    <div className="col-6">
                        <RenderAdvertisement />
                    </div>
                    <div className="col-6">
                        <RenderAdvertisement />
                    </div>
                    <div className="col-6">
                        <RenderAdvertisement />
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyPage;