
// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck  Es un arreglo de String
 * @returns {String}  Retorna una carta del deck. Valor String
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}