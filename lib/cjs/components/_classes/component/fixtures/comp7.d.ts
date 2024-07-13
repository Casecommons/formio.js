declare namespace _default {
    let components: ({
        label: string;
        action: string;
        showValidations: boolean;
        tableView: boolean;
        key: string;
        type: string;
        event: string;
        input: boolean;
        theme?: undefined;
        collapsible?: undefined;
        hidden?: undefined;
        logic?: undefined;
        collapsed?: undefined;
        components?: undefined;
        applyMaskOn?: undefined;
    } | {
        label: string;
        action: string;
        showValidations: boolean;
        theme: string;
        tableView: boolean;
        key: string;
        type: string;
        event: string;
        input: boolean;
        collapsible?: undefined;
        hidden?: undefined;
        logic?: undefined;
        collapsed?: undefined;
        components?: undefined;
        applyMaskOn?: undefined;
    } | {
        collapsible: boolean;
        hidden: boolean;
        key: string;
        logic: {
            name: string;
            trigger: {
                type: string;
                event: string;
            };
            actions: {
                name: string;
                type: string;
                property: {
                    label: string;
                    value: string;
                    type: string;
                };
                state: boolean;
            }[];
        }[];
        type: string;
        label: string;
        collapsed: boolean;
        input: boolean;
        tableView: boolean;
        components: never[];
        action?: undefined;
        showValidations?: undefined;
        event?: undefined;
        theme?: undefined;
        applyMaskOn?: undefined;
    } | {
        label: string;
        applyMaskOn: string;
        tableView: boolean;
        key: string;
        type: string;
        input: boolean;
        action?: undefined;
        showValidations?: undefined;
        event?: undefined;
        theme?: undefined;
        collapsible?: undefined;
        hidden?: undefined;
        logic?: undefined;
        collapsed?: undefined;
        components?: undefined;
    })[];
}
export default _default;
