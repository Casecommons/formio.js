declare namespace _default {
    let components: ({
        label: string;
        applyMaskOn: string;
        mask: boolean;
        tableView: boolean;
        delimiter: boolean;
        requireDecimal: boolean;
        inputFormat: string;
        truncateMultipleSpaces: boolean;
        key: string;
        type: string;
        input: boolean;
        decimalSymbol: string;
        disableOnInvalid?: undefined;
    } | {
        type: string;
        label: string;
        key: string;
        disableOnInvalid: boolean;
        input: boolean;
        tableView: boolean;
        applyMaskOn?: undefined;
        mask?: undefined;
        delimiter?: undefined;
        requireDecimal?: undefined;
        inputFormat?: undefined;
        truncateMultipleSpaces?: undefined;
        decimalSymbol?: undefined;
    })[];
}
export default _default;
