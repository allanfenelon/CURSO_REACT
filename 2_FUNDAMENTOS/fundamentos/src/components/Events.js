const Events = () => {
    // e ou event são os dados que o evento contém
    const handleMyEvent = (e) => {
        console.log(e)
    } 

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
        </div>
    )

}
export default Events