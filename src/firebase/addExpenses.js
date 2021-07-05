import { db } from './firebaseConfig';


const addExpenses = ({ category, description, value, date, uidUser }) => {
    return db.collection('expenses').add({
        categoria: category,
        descripcion: description,
        valor: Number(value),
        fecha: date,
        usuario: uidUser
    })

}

export default addExpenses
