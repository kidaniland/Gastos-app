import { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { useHistory } from 'react-router';

const useGetaSingleExpense = (id) => {
    const [expense, setExpense] = useState('');
    const history = useHistory();

    useEffect(() => {
        db.collection('expenses')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setExpense(doc)
                } else {
                    history.push('/listas')
                }
            })

    }, [history, id]);

    return [expense]
}

export default useGetaSingleExpense
