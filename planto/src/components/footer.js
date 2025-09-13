import React from 'react';
import Logotype from "./headercomponents/logoPlanto";

import '../css/Footer.css'


class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.emailInput = React.createRef();
        this.emailInputLabel = React.createRef()
    
    }
    render(){
        return(
            <div className='planto-footer'>
                <div className='planto-footer-logo-text-container'>
                <Logotype logoname="Planto."/>
                <p className='planto-footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='planto-footer-logo-text-container'>
                    <h4>Quick Link’s</h4>
                    <div className='planto-a-links'>
                        <a>Home</a>
                        <a>Type’s Of plant’s</a>
                        <a>Contact</a>
                        <a>Privacy</a>
                    </div>
                </div>
                <form className='planto-sub-form' name='plantoSubForm'>
                    <h4>For Every Update.</h4>
                    <div>
                        <input required ref={this.emailInput} name='subemail' id="subemailid" className='planto-email-input'></input>
                        <label ref={this.emailInputLabel} className='plant0-email-input-label' htmlFor="subemailid">Enter Email</label>
                        <button type="submit" className='planto-sub'>Subscribe</button>
                    </div>
 
                </form>
                <div className='planto-social'>
                    <a href=''>FB</a>
                    <a href=''>TW</a>
                    <a href=''>LI</a>
                </div>
                <div className='planto-empy-container'></div>
                <p className='planto-copy'>planto &copy; all right reserve</p>
            </div>
        )
    }
      componentDidMount(){
         this.emailInput.current.addEventListener('input', (input)=>{
           if(this.emailInput.current.value != ""){
            this.emailInputLabel.current.classList.add('plant0-email-input-label-active')
           }
           else{
            this.emailInputLabel.current.classList.remove('plant0-email-input-label-active')
           }
         })
    }

}

export default Footer;