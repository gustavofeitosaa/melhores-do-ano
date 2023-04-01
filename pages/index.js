import React, { useState } from "react"

function Home() {
    return <div>
        <h1>Quantos beijinhos você quer?</h1>
        <Contador/> 
    </div>
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionaContador(){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionaContador}>Adicionar</button>
        </div>
    )
}

export default Home