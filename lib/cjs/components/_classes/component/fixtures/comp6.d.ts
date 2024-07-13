declare namespace _default {
    let components: ({
        label: string;
        applyMaskOn: string;
        tableView: boolean;
        key: string;
        type: string;
        input: boolean;
        defaultValue: string;
        mask?: undefined;
        delimiter?: undefined;
        requireDecimal?: undefined;
        inputFormat?: undefined;
        truncateMultipleSpaces?: undefined;
        widget?: undefined;
        data?: undefined;
        action?: undefined;
        showValidations?: undefined;
    } | {
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
        defaultValue: number;
        widget?: undefined;
        data?: undefined;
        action?: undefined;
        showValidations?: undefined;
    } | {
        label: string;
        widget: string;
        tableView: boolean;
        data: {
            values: {
                label: string;
                value: string;
            }[];
        };
        key: string;
        type: string;
        input: boolean;
        defaultValue: string;
        applyMaskOn?: undefined;
        mask?: undefined;
        delimiter?: undefined;
        requireDecimal?: undefined;
        inputFormat?: undefined;
        truncateMultipleSpaces?: undefined;
        action?: undefined;
        showValidations?: undefined;
    } | {
        label: string;
        action: string;
        showValidations: boolean;
        tableView: boolean;
        key: string;
        type: string;
        input: boolean;
        applyMaskOn?: undefined;
        defaultValue?: undefined;
        mask?: undefined;
        delimiter?: undefined;
        requireDecimal?: undefined;
        inputFormat?: undefined;
        truncateMultipleSpaces?: undefined;
        widget?: undefined;
        data?: undefined;
    })[];
}
export default _default;
