declare namespace _default {
    let title: string;
    let name: string;
    let path: string;
    let type: string;
    let display: string;
    let components: ({
        label: string;
        widget: string;
        tableView: boolean;
        dataSrc: string;
        data: {
            url: string;
            headers: {
                key: string;
                value: string;
            }[];
        };
        multiple: boolean;
        valueProperty: string;
        validateWhenHidden: boolean;
        key: string;
        type: string;
        input: boolean;
        defaultValue: string[];
        selectValues: string;
        disableLimit: boolean;
        noRefreshOnScroll: boolean;
        selectData: {
            value1: {
                label: string;
            };
            value3: {
                label: string;
            };
        };
        disableOnInvalid?: undefined;
    } | {
        type: string;
        label: string;
        key: string;
        disableOnInvalid: boolean;
        input: boolean;
        tableView: boolean;
        widget?: undefined;
        dataSrc?: undefined;
        data?: undefined;
        multiple?: undefined;
        valueProperty?: undefined;
        validateWhenHidden?: undefined;
        defaultValue?: undefined;
        selectValues?: undefined;
        disableLimit?: undefined;
        noRefreshOnScroll?: undefined;
        selectData?: undefined;
    })[];
}
export default _default;
