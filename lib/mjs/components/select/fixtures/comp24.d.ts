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
            resource: string;
        };
        template: string;
        validate: {
            select: boolean;
        };
        key: string;
        type: string;
        searchField: string;
        input: boolean;
        noRefreshOnScroll: boolean;
        addResource: boolean;
        reference: boolean;
        valueProperty: string;
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
        template?: undefined;
        validate?: undefined;
        searchField?: undefined;
        noRefreshOnScroll?: undefined;
        addResource?: undefined;
        reference?: undefined;
        valueProperty?: undefined;
    })[];
}
export default _default;
