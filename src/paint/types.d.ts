/**
 * Decorator utilizado para renderizar o conteúdo do elemento customizado.
 *
 * @param {Component} component - Uma função que retorna o conteúdo HTML a ser renderizado.
 * @param {Style} style - Uma função que retorna o conteúdo CSS a ser renderizado.
 * @returns {Decorator} - Uma função que aplica o decorator a um elemento alvo.
 */
export declare function paint(component: Component, style?: Style): Decorator;

/**
 * Tipo para uma função que retorna o conteúdo HTML a ser renderizado.
 *
 * @param {any} self - O elemento alvo que será renderizado.
 * @returns {string} - O conteúdo HTML a ser renderizado.
 */
type Component = (self: any) => string;

/**
 * Tipo para uma função que retorna o conteúdo CSS a ser renderizado.
 *
 * @param {any} self - O elemento alvo que será renderizado.
 * @returns {CSSStyleSheet} - O conteúdo CSS a ser renderizado.
 */
type Style = (self: any) => CSSStyleSheet;

/**
 * Tipo para a função decoradora que aplica o decorator a um elemento alvo.
 *
 * @param {CustomElementConstructor} constructor - O construtor do elemento customizado.
 * @returns {void} - Não retorna nenhum valor.
 */
type Decorator = (constructor: CustomElementConstructor) => void;
