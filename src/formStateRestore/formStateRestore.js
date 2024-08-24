import intercept from "../intercept";
import { formStateRestoreCallback } from "../interfaces";

/**
 * Cria um decorator para adicionar lógica ao método `formStateRestoreCallback` de um Custom Element.
 *
 * @description
 * O decorator `formStateRestore` permite que um método seja executado quando o estado do formulário
 * é restaurado para o Custom Element. O método decorado é chamado automaticamente quando o estado
 * do formulário é restaurado, permitindo a execução de lógica personalizada durante esse processo.
 *
 * @param {Object} target - O alvo do decorator, geralmente a classe do Custom Element.
 * @param {string} propertyKey - O nome do método decorado.
 * @returns {Function} Um decorator que intercepta a chamada do `formStateRestoreCallback`.
 *
 * @example
 * // Exemplo de uso:
 * @formStateRestore
 * formStateRestoreCallback() {
 *   console.log('O estado do formulário foi restaurado.');
 * }
 */
const formStateRestore = (target, propertyKey) => {
  // Cria uma instância do interceptor para o método `formStateRestoreCallback`.
  const interceptor = intercept(formStateRestoreCallback);

  // Adiciona o método decorado à lista de callbacks a serem executados.
  return interceptor
    .in(target) // Define o alvo do interceptor.
    .then(exec(propertyKey)); // Define o método a ser executado pelo interceptor.
};

export default formStateRestore;
