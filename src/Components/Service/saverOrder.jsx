import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"

const saveOrderBatch = (cart, orden) => {
    console.log("Guardar orden");
    
    const batch = writeBatch(db)
    const outOfStock = []
    
    cart.forEach((gameInCart) => {
        getDoc(doc(db, 'juegos', gameInCart.id))
        .then(async (documentSnapshot) => {
            const juego = {...documentSnapshot.data(), id: documentSnapshot.id};
            if (juego.stock >= gameInCart.quantity) {
                batch.update(doc(db, 'juegos', juego.id) ,{
                    stock: juego.stock - gameInCart.quantity
                })
            } else {
                outOfStock.push(juego)
            }
            
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                    batch.commit().then(() => {
                        alert("Se genero la order con id: " + id)
                    })
                }).catch((err) => {
                    console.log(`Error: ${err.message}`);
                })
            } else {
                let mensaje = ''
                for (const game of outOfStock) {
                    mensaje += `${game.title}`
                }
                alert(`Productos fuera de stock: ${mensaje}`)
            }
        })
    })
}

export default saveOrderBatch;