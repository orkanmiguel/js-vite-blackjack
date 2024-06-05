
/**
 * Retorna el valor de la carta que se obtiene del mazo
 * @param {String} carta 
 * @returns {Number}
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}