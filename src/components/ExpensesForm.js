import { useState } from 'react';
import { FilterContainer, Form, Input, BigInput, ContainerBtn } from '../elements/FormElements';
import Button from '../elements/Button';
import { ReactComponent as IconPlus } from './../images/plus.svg';
import SelectCategory from './SelectCategory';
import DatePicker from './DatePicker';
import addExpenses from '../firebase/addExpenses';
import getUnixTime from 'date-fns/getUnixTime';
//import fromUnixTime from 'date-fns/fromUnixTime';
import { useAuth } from '../context/authContext';
import Alert from '../elements/Alert';


const ExpensesForm = () => {
    const [inputDescription, setInputDescription] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [category, setCategory] = useState('hogar');
    const [date, setDate] = useState(new Date());
    const [alertState, setAlertState] = useState(false)
    const [alert, setAlert] = useState({});
    const { user } = useAuth();

    const handleChange = (e) => {
        if (e.target.name === "description") {
            setInputDescription(e.target.value);
        } else if (e.target.name === "value"){
            setInputValue(e.target.value.replace(/[^0-9.]/g, ''))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let valueFloat = parseFloat(inputValue).toFixed(2);
        let dateUnixTime = getUnixTime(date);

        //comprobamos si hay descripcion y valor
        if (inputDescription !== '' && inputValue !== '') {
            if (valueFloat) {
                addExpenses({
                    category: category,
                    description: inputDescription,
                    value: valueFloat,
                    date: dateUnixTime,
                    uidUser: user.uid 
                })
                .then(()=>{
                    setCategory('hogar');
                    setInputDescription('');
                    setInputValue('');
                    setDate(new Date());
                    setAlertState(true);
                    setAlert({type: 'success', message: 'El gasto se ha agregago correctamente.'})
                }) 
                .catch((error) => {
                    setAlertState(true);
                    setAlert({type: 'error', message: 'Hubo un problema al intentar agregar tu gasto.'})
                })
            } else {
                setAlertState(true);
                setAlert({type: 'error', message: 'El valor ingresado no es correcto.'})
            };
        } else {
            setAlertState(true);
            setAlert({type: 'error', message: 'Debes rellenar todos los campos.'})
        };
    }


    return (
        <Form onSubmit={handleSubmit}>
            <FilterContainer>
                <SelectCategory category={category} setCategory={setCategory}/>
                <DatePicker date={date} onDateChange={(day)=>{ console.log(day); setDate(day)}}/>
            </FilterContainer>
            <div>
                <Input 
                    type="text" 
                    name="description" 
                    id="description" 
                    placeholder="Descripción"
                    value={inputDescription}
                    onChange={handleChange}
                />
                <BigInput
                    type="text" 
                    name="value" 
                    id="value" 
                    placeholder="$0.00"
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
            <ContainerBtn>
                <Button as="button" primario conIcono type="submit">
                    Agregar gasto <IconPlus/>
                </Button>
            </ContainerBtn>
            <Alert
                MsgType={alert.type}
                message={alert.message}
                alertState={alertState}
                changeAlertState={setAlertState}
            />
        </Form>
    )
}

export default ExpensesForm
