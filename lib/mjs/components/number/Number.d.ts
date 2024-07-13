export default class NumberComponent extends Input {
    static get builderInfo(): {
        title: string;
        icon: string;
        group: string;
        documentation: string;
        weight: number;
        schema: any;
    };
    static get serverConditionSettings(): {
        operators: any[];
        valueComponent(classComp: any): any;
    };
    static get conditionOperatorsSettings(): {
        operators: any[];
        valueComponent(classComp: any): any;
    };
    static savedValueTypes(schema: any): string[];
    constructor(...args: any[]);
    decimalSeparator: any;
    delimiter: any;
    decimalLimit: number;
    numberMask: any;
    /**
     * Creates the number mask for normal numbers.
     * @returns {*} - The number mask.
     */
    createNumberMask(): any;
    isDecimalAllowed(): any;
    parseNumber(value: any): number;
    setInputMask(input: any): void;
    getValueAt(index: any): number | null;
    setValueAt(index: any, value: any, flags?: {}): void;
    parseValue(input: any): number;
    focus(): void;
    getMaskedValue(value: any): any;
    getValueAsString(value: any, options: any): any;
}
import Input from '../_classes/input/Input';
