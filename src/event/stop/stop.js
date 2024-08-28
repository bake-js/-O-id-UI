/**
 * Interrompe a propagação de um evento.
 *
 * @param {Event} event - O evento a ser filtrado.
 * @returns {Event} O próprio evento, após interromper a propagação.
 *
 * @description
 * Este filtro chama o método `stopPropagation` do evento, evitando que o evento continue a ser propagado para
 * outros elementos no DOM. Após interromper a propagação, o próprio evento é retornado, permitindo
 * que outras operações sejam realizadas com o evento modificado.
 *
 * @example
 * // Exemplo de uso em um manipulador de evento:
 * function handleClick(event) {
 *   stop(event);
 *   console.log('A propagação do evento foi interrompida.');
 * }
 */
function stop(event) {
  event.stopPropagation();
  return event;
}

export default stop;
