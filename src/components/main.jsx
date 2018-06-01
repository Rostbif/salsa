import React, { Component } from 'react';
import style from "styles/main";
import MyAppBar from 'components/appBar';
import Content from 'components/content';




export default class Main extends Component {

    render() {
        return (
            <div>
               <MyAppBar/>
               <Content/>
            </div>
        );
    }

}