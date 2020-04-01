import * as React from 'react';
import { Navbar } from "react-bootstrap";

interface Props{
    imgUrl     : string
    brandFunc ?: () => void
}

export class NavigationBar extends React.Component<Props, any>{
    render(){
        return (
        <Navbar
            collapseOnSelect
            bg      = 'primary'
            variant = 'dark'
            expand  = 'md'>
            <Navbar.Brand>
                <img
                    src     = {this.props.imgUrl}
                    onClick = {()=>{this.props.brandFunc()}}
                />
            </Navbar.Brand>
        </Navbar>);
    }
}