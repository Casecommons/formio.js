declare namespace _default {
    let _id: string;
    let title: string;
    let name: string;
    let path: string;
    let type: string;
    let display: string;
    let components: ({
        label: string;
        tableView: boolean;
        key: string;
        type: string;
        input: boolean;
        src?: undefined;
        disableOnInvalid?: undefined;
    } | {
        label: string;
        tableView: boolean;
        src: string;
        key: string;
        type: string;
        input: boolean;
        disableOnInvalid?: undefined;
    } | {
        type: string;
        label: string;
        key: string;
        disableOnInvalid: boolean;
        input: boolean;
        tableView: boolean;
        src?: undefined;
    })[];
    let project: string;
    let machineName: string;
}
export default _default;
