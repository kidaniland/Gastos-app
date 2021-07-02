import React from 'react';
import { ReactComponent as IconComida } from '../images/cat_comida.svg';
import { ReactComponent as IconCompras } from '../images/cat_compras.svg';
import { ReactComponent as IconCuentasPagos } from '../images/cat_cuentas-y-pagos.svg';
import { ReactComponent as IconDiversion } from '../images/cat_diversion.svg';
import { ReactComponent as IconHogar } from '../images/cat_hogar.svg';
import { ReactComponent as IconRopa } from '../images/cat_ropa.svg';
import { ReactComponent as IconSaludHigiene } from '../images/cat_salud-e-higiene.svg';
import { ReactComponent as IconTransporte } from '../images/cat_transporte.svg';

const IconCategoty = ({ id }) => {
    switch (id) {
        case 'comida':
            return <IconComida />
            break;
        case 'cuentas y pagos':
            return <IconCuentasPagos />
            break; 
        case 'hogar':
            return <IconHogar />
            break; 
        case 'transporte':
            return <IconTransporte />
            break;
        case 'ropa':
            return <IconRopa />
            break; 
        case 'salud e higiene':
            return <IconSaludHigiene />
            break; 
        case 'compras':
            return <IconCompras />
            break; 
        case 'diversion':
            return <IconDiversion />
            break;
        default:
            break;
    }
}

export default IconCategoty;

    
