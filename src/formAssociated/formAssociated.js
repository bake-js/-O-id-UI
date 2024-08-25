import intercept, { exec } from "../intercept";
import { formAssociatedCallback } from "../interfaces";

/**
 * Cria um decorator para adicionar lógica ao método `formAssociatedCallback` de um Custom Element.
 *
 * @description
 * O decorator `formAssociated` permite adicionar lógica personalizada ao método `formAssociatedCallback` de um
 * Custom Element. Este método é chamado automaticamente quando um elemento associado a um formulário é registrado
 * com o formulário. O decorator permite que você execute uma função personalizada durante esse processo.
 *
 * @param {Object} target - O alvo do decorator, geralmente a classe do Custom Element.
 * @param {string} propertyKey - O nome do método decorado.
 * @returns {Function} Um decorator que intercepta a chamada do `formAssociatedCallback`.
 *
 * @example
 * // Exemplo de uso:
 * @formAssociated
 * formAssociatedCallback() {
 *   console.log('O elemento foi associado a um formulário.');
 * }
 */
const formAssociated = (target, propertyKey) => {
  // Cria uma instância do interceptor para o método `formAssociatedCallback`.
  const interceptor = intercept(formAssociatedCallback);

  // Adiciona o método decorado à lista de callbacks a serem executados.
  return interceptor
    .in(target) // Define o alvo do interceptor.
    .then(exec(propertyKey)); // Define o método a ser executado pelo interceptor.
};

export default formAssociated;
