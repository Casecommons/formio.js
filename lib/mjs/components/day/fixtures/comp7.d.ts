declare namespace _default {
    let components: ({
        type: string;
        key: string;
        label: string;
        placeholder: string;
        input: boolean;
        applyMaskOn?: undefined;
        tableView?: undefined;
        hideInputLabels?: undefined;
        inputsLabelPosition?: undefined;
        useLocaleSettings?: undefined;
        fields?: undefined;
        defaultValue?: undefined;
        values?: undefined;
        questions?: undefined;
        action?: undefined;
        theme?: undefined;
    } | {
        label: string;
        placeholder: string;
        applyMaskOn: string;
        tableView: boolean;
        key: string;
        type: string;
        input: boolean;
        hideInputLabels?: undefined;
        inputsLabelPosition?: undefined;
        useLocaleSettings?: undefined;
        fields?: undefined;
        defaultValue?: undefined;
        values?: undefined;
        questions?: undefined;
        action?: undefined;
        theme?: undefined;
    } | {
        label: string;
        hideInputLabels: boolean;
        inputsLabelPosition: string;
        useLocaleSettings: boolean;
        tableView: boolean;
        fields: {
            day: {
                placeholder: string;
                hide: boolean;
            };
            month: {
                type: string;
                placeholder: string;
                hide: boolean;
            };
            year: {
                placeholder: string;
                hide: boolean;
            };
        };
        key: string;
        type: string;
        input: boolean;
        defaultValue: string;
        placeholder?: undefined;
        applyMaskOn?: undefined;
        values?: undefined;
        questions?: undefined;
        action?: undefined;
        theme?: undefined;
    } | {
        type: string;
        key: string;
        label: string;
        values: {
            label: string;
            value: string;
        }[];
        questions: {
            label: string;
            value: string;
        }[];
        placeholder?: undefined;
        input?: undefined;
        applyMaskOn?: undefined;
        tableView?: undefined;
        hideInputLabels?: undefined;
        inputsLabelPosition?: undefined;
        useLocaleSettings?: undefined;
        fields?: undefined;
        defaultValue?: undefined;
        action?: undefined;
        theme?: undefined;
    } | {
        type: string;
        action: string;
        label: string;
        theme: string;
        key?: undefined;
        placeholder?: undefined;
        input?: undefined;
        applyMaskOn?: undefined;
        tableView?: undefined;
        hideInputLabels?: undefined;
        inputsLabelPosition?: undefined;
        useLocaleSettings?: undefined;
        fields?: undefined;
        defaultValue?: undefined;
        values?: undefined;
        questions?: undefined;
    })[];
}
export default _default;
