const createSweets = function ( Name,shape,color,filling){
    createNewSweet = {
        Name:  Name,
        shape: shape,
        color: color,
        filling: filling
    }
    return createNewSweet
}

function populateSweetsData() {
    const Motichurladu = createSweets("motichur","round","yellow","nuts")
    const kaiserladu = createSweets("kaiser","round","orange","cardemon")
    
    const SweetsArray = [Motichurladu , kaiserladu]

    const stringified = JSON.stringify(SweetsArray)
    localStorage.setItem("SweetsArray", stringified)
}
 





