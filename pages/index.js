import React, { useState } from "react"

function Home() {
    return <div style={{background: "red", borderRadius: 30, padding: 10,}}>
        <h1>Quantos beijinhos você quer? hein?</h1>
        <Contador/> 
    </div>
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionaContador(){
        setContador(contador + 1);
    }

    return (
        <div style={{}}>
            <div>
                <h1>{contador}</h1>
                {contador <= 10
                ?
                <h3>Poxa só {contador}? :/</h3>
                :
                <h3>Agora sim começou a ficar interessante....</h3>
                
                }
            </div>

            <button style={{width: "100%", padding: 5, color: "purple", fontWeight: "bolder", fontSize: 20, borderRadius: 10, borderColor: "purple"}} onClick={adicionaContador}>Adicionar ++++</button>

            <button style={{width: "100%", padding: 5, color: "purple", fontWeight: "bolder", fontSize: 20, borderRadius: 10, borderColor: "purple", marginTop: 10, marginBottom: 10}} onClick={() => {alert ("Você quer diminuir porquê? Você não gosta de mim? T-T")}}>Diminuir ---- :/</button>
        </div>
    )
}

export default Home