import React from "react";
import {Button, Container, Navbar} from "react-bootstrap";
import {ThemeContext} from "../../context/Theme";

const NavBarComp = () => {
    const value = React.useContext(ThemeContext)
    return (
        <Navbar style={{padding: 15}}>
            <Container style={{display: "flex", justifyContent: "end", paddingTop: 5}}>
                <button className={value.theme ? `light dark` : ''}>Course</button>
                <button className={value.theme ? `light dark` : ''}>Course Type</button>
                <button className={value.theme ? `light dark` : ''} onClick={value.onChangeTheme}>Toggle Mode</button>
            </Container>
        </Navbar>
    )
}

export default NavBarComp;