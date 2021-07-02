import { useState } from 'react';
import { FilterContainer, Form, Input, BigInput, ContainerBtn } from '../elements/FormElements';
import Button from '../elements/Button';
import { ReactComponent as IconPlus } from './../images/plus.svg';
import SelectCategory from './SelectCategory';
import DatePicker from './DatePicker';

const ExpensesForm = () => {
    const [inputDescription, setInputDescription] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [category, setCategory] = useState('hogar');
    const [date, setDate] = useState(new Date());

    const handleChange = (e) => {
        if (e.target.name === "description") {
            setInputDescription(e.target.value);
        } else if (e.target.name === "value"){
            setInputValue(e.target.value.replace(/[^0-9.]/g, ''))
        }
    }

    return (
        <Form>
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
                    placeholder="$0"
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
            <ContainerBtn>
                <Button as="button" primario conIcono type="submit">
                    Agregar gasto <IconPlus/>
                </Button>
            </ContainerBtn>
        </Form>
    )
}

export default ExpensesForm
