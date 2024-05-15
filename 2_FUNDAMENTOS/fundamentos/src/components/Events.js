const Events = () => {
    // e ou event são os dados que o evento contém
    const handleMyEvent = (e) => {
        console.log(e)
    } 

    const renderSomething = (x) => {
        if(x){
            return <h1>Rederizando isso</h1>
        }else{
            return <h1>Também rederizando isso</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou!')}>Clique aqui também!</button>
                <button onClick={() => {
                    if(true){
                        console.log('Isso não deveria existir :)')
                    }
                }}>Clica aqui, por favor.</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )

}
export default Events