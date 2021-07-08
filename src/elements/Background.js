import React from 'react';
import styled from 'styled-components';
//import { ReactComponent as Puntos } from '../images/puntos.svg';

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(	255, 154, 0, .15);
         
    }
`;



const Background = () => {
    return (
        <>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FF9A00" 
                    fill-opacity="1" 
                    d="M0,192L18.5,181.3C36.9,171,74,149,111,160C147.7,171,185,213,222,192C258.5,171,295,85,332,85.3C369.2,85,406,171,443,218.7C480,267,517,277,554,240C590.8,203,628,117,665,74.7C701.5,32,738,32,775,26.7C812.3,21,849,11,886,53.3C923.1,96,960,192,997,208C1033.8,224,1071,160,1108,160C1144.6,160,1182,224,1218,213.3C1255.4,203,1292,117,1329,85.3C1366.2,53,1403,75,1422,85.3L1440,96L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z">
                </path>
            </Svg>
        </>
    )
}

export default Background


/*
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem;
    left: 2.5rem;
`;

const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem;
    right: 2.5rem;
`;
*/
