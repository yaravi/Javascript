import React from 'react';
import './Foto.css';


export default class Foto extends React.Component{
    constructor (props) {
        super(props);
        console.log(props);
    }
    render () {
        return ( <div className="row bg-picture justify-content-center">
            <img style={{backgrundColor:this.props.bgColor}} className="img-fluid rounded-circle img-profile" src={this.props.srcFoto}></img>
        </div> 
        );
    }
}