import React from "react"

function Card({produto,imagem}){
    return(
        <>
            <div className="card7">{/*Card7*/}
          <div className="bottom"></div>
          <img src={imagem} className="limpezaimg" />
          <p className="formatar texto"> {produto} </p>
        </div>        
        </>
    )
}

export default Card 