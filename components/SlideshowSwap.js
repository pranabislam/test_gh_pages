import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

class SlideshowSwap extends React.Component {

    constructor(props) {
        super(props)
        this.unlabeledImages = props.unlabeledImages;
        this.labeledImages = props.labeledImages;
        this.zoomInProperties = {
            indicators: true,
            scale: 1.0,
            //duration: 5000,
            transitionDuration: 200,
            infinite: false,
            prevArrow: (
                <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#2e2e2e"
                    >
                        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
                    </svg>
                </div>
            ),
            nextArrow: (
                <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#2e2e2e"
                    >
                        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
                    </svg>
                </div>
            ),
        };
      };
	
    state = {
        open: true
    };
    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    };

    getImageArray = () => (this.state.open ? this.unlabeledImages : this.labeledImages);
        
	//These are custom properties for zoom effect while slide-show

    render() {
        return (
            <div className="m-10">
                <h1 className="text-center text-6xl  font-bold pb-10 ">
                    Click on the image <span className="text-indigo-600">to see them change</span>
                </h1>

                <Zoom {...this.zoomInProperties}>
                    {this.unlabeledImages.map((each, index) => (
                        <div key={index} className="flex justify-center w-full h-full">
                            <img
                                className="w-3/4 object-cover rounded-lg shadow-xl"
                                src={this.getImageArray()[index].length > 0 ? this.getImageArray()[index] : each}
                                onClick={this.toggleImage}
                            />
                        </div>
                    ))}
                </Zoom>
            </div>
        );
    };
};

export default SlideshowSwap;


// Idea: create a function that uses the zoom component and image but also 
// keeps track of state. not sure how this thing will keep track of current image though?
// this is because i dont know how the slideshow knows which image its even on at 
// the moment lol. but maybe i can make each = half len list + each if the property is on..
// similarly access the image with images[index] where inde would be the updated image 
// when property is on?