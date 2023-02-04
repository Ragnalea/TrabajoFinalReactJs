const generateOrder = ({
    nombre = "", 
    apellido = "", 
    nick = "", 
    email = "", 
    telefono = "", 
    cart = [], 
    total = 0
}) => {
    return {
        buyer: {
            nombre: nombre,
            apellido: apellido,
            nick: nick,
            email: email,
            telefono: telefono,
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrder;