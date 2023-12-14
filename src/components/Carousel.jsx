import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    incCount(){
        if (this.state.count >= 2){
            this.setState({
                count: 0
            })
        }else{
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    decCount(){
        if (this.state.count <= 0){
            this.setState({
                count: 2
            })
        }else{
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    

    render(){
        return(
            // <h1>Hello</h1>
            <div className="container">
                <div className="left-arrow flex arrow" onClick={() => this.decCount()}><ArrowBackIosIcon /></div>
                <div className="title box">{images[this.state.count].title}</div>
                <img src={images[this.state.count].img} alt="" />
                <div className="subtitle box">{images[this.state.count].subtitle}</div>
                <div className="right-arrow flex arrow" onClick={() => this.incCount()}><ArrowForwardIosIcon /></div>
            </div>
        )
    }
}

export default Carousel;

console.log(images)