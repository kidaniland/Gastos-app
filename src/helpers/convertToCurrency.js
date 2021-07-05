const formatquantity = (value) => {
    return new Intl.NumberFormat(
        'en-US',
        {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }
    ).format(value);
}
 
export default formatquantity;

//Nota: Intl.NumberFormat es un constructor para objetos que permiten un formato numérico sensible al idioma. Utilizanos USD y english por el tipo de formato y no porque estemos trabajando con dólares 