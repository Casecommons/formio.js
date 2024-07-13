export default class Field extends Component {
    /**
     * @param {object} element - The component to create.
     * @returns {Field} - The created field.
     */
    render(element: object): Field;
    /**
    /* Saves current caret position to restore it after the component is redrawn
     * @param {HTMLElement} element - The element to save the caret position for.
     * @param {number} index - The index of the element.
     */
    saveCaretPosition(element: HTMLElement, index: number): void;
}
import Component from '../component/Component';
