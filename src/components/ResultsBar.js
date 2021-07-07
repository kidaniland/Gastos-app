import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import formatquantity from '../helpers/convertToCurrency';
import { useTotalintheMont } from '../context/totalSpendintheMonthContex';

const TotalExpensesBar = styled.div`
    background: ${theme.verde};
    font-size: 1.25rem; /* 20px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
`;


const ResultsBar = () => {
    const { total } = useTotalintheMont();
    return (
        <TotalExpensesBar>
            <p>Total gastado en el mes:</p>
            <p>{formatquantity(total)}</p>
        </TotalExpensesBar>
    )
}

export default ResultsBar
