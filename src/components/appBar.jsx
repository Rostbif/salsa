import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, {MenuItem} from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import { Link } from 'react-router-dom';
import styles from 'styles/appBar';


export default class MyAppBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isMenuOpen: false,
        };
    }


    toggleMenu(){

        this.setState((prevState, props) => {
            return {isMenuOpen: !prevState.isMenuOpen}
        });
    }

    render() {
        return (
            <div>
            <AppBar className={styles.root} position="static">
                <ToolBar>
                    <IconButton color="inherit" aria-label="Menu" onClick={() => this.toggleMenu()}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={styles.flex}>
                        Title
                    </Typography>
                    <Button color="inherit">Login</Button>
                </ToolBar>
            </AppBar>
            <Drawer open={this.state.isMenuOpen} onClose={() => this.toggleMenu()}>
                <MenuItem><Link to='/' onClick={() => this.toggleMenu()}>Home</Link></MenuItem>
                <MenuItem><Link to='/ofir' onClick={() => this.toggleMenu()}>Ofir</Link></MenuItem>
            </Drawer>
        </div>
    );
    }
}