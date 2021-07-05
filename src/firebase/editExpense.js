import { db } from './firebaseConfig';


const editExpense = ({ id, category, description, value, date }) => {
    return db.collection('expenses').doc(id).update({
        categoria: category,
        descripcion: description,
        valor: Number(value),
        fecha: date
    })

}

export default editExpense
