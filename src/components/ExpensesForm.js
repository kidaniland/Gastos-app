import { useState } from 'react';
import { FilterContainer, Form, Input, BigInput, ContainerBtn } from '../elements/FormElements';
import Button from '../elements/Button';
import { ReactComponent as IconPlus } from './../images/plus.svg';

const ExpensesForm = () => {
    const [inputDescription, setInputDescription] = useState('');
    const [inputValue, setInputValue] = useState('');

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
                <p>Select</p>
                <p>Date picker</p>
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
