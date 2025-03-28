import React from "react" 
import './Header.css' // Importa o CSS  

function Header() {
    return (
        <>
            <div className="header">{/*Cabeçalho*/}
                <img src="c:\Users\Estudante\Downloads\icons8-computador-64.png" className="logo" />
                <p className="cyber"> Cyber Assist </p>
            </div>
        </>
    )
}

export default Header