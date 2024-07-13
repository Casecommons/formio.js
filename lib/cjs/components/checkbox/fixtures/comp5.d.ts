declare namespace _default {
    let title: string;
    let name: string;
    let path: string;
    let type: string;
    let display: string;
    let components: ({
        label: string;
        tableView: boolean;
        validateWhenHidden: boolean;
        key: string;
        conditional: {
            show: boolean;
            conjunction: string;
            conditions: {
                component: string;
                operator: string;
            }[];
        };
        type: string;
        input: boolean;
        applyMaskOn?: undefined;
    } | {
        label: string;
        applyMaskOn: string;
        tableView: boolean;
        key: string;
        type: string;
        input: boolean;
        validateWhenHidden?: undefined;
        conditional?: undefined;
    })[];
}
export default _default;
