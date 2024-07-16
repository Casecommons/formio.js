/**
 * Deprecated version of findComponents. Renamed to searchComponents.
 * @param {import('@formio/core').Component[]} components - The components to find components within.
 * @param {object} query - The query to use when searching for the components.
 * @returns {import('@formio/core').Component[]} - The result of the component that is found.
 */
export function findComponents(components: import('@formio/core').Component[], query: object): import('@formio/core').Component[];
/**
 * Flatten the form components for data manipulation.
 * @param {object} components
 *   The components to iterate.
 * @param {boolean} includeAll
 *   Whether or not to include layout components.
 * @returns {object}
 *   The flattened components map.
 */
export function flattenComponents(components: object, includeAll: boolean): object;
export const guid: typeof Utils.guid;
export const uniqueName: typeof Utils.uniqueName;
export const MODEL_TYPES: Record<string, string[]>;
export const getModelType: typeof Utils.getModelType;
export const getComponentAbsolutePath: typeof Utils.getComponentAbsolutePath;
export const getComponentPath: typeof Utils.getComponentPath;
export const isComponentModelType: typeof Utils.isComponentModelType;
export const isComponentNestedDataType: typeof Utils.isComponentNestedDataType;
export const componentPath: typeof Utils.componentPath;
export const componentChildPath: any;
export const eachComponentDataAsync: (components: Component[], data: DataObject, fn: AsyncComponentDataCallback, path?: string | undefined, index?: number | undefined, parent?: any, includeAll?: boolean | undefined) => Promise<void>;
export const eachComponentData: (components: Component[], data: DataObject, fn: ComponentDataCallback, path?: string | undefined, index?: number | undefined, parent?: any, includeAll?: boolean | undefined) => void;
export const getComponentKey: typeof Utils.getComponentKey;
export const getContextualRowPath: typeof Utils.getContextualRowPath;
export const getContextualRowData: typeof Utils.getContextualRowData;
export const componentInfo: typeof Utils.componentInfo;
/**
 * Iterate through each component within a form.
 * @param {object} components
 *   The components to iterate.
 * @param {Function} fn
 *   The iteration function to invoke for each component.
 * @param {boolean} includeAll
 *   Whether or not to include layout components.
 * @param {string} path
 *   The current data path of the element. Example: data.user.firstName
 * @param {object} parent
 *   The parent object.
 */
export function eachComponent(components: object, fn: Function, includeAll: boolean, path: string, parent: object): void;
export const eachComponentAsync: typeof Utils.eachComponentAsync;
export const getComponentData: typeof Utils.getComponentData;
export const getComponentActualValue: typeof Utils.getComponentActualValue;
export const isLayoutComponent: typeof Utils.isLayoutComponent;
export const matchComponent: typeof Utils.matchComponent;
export const getComponent: typeof Utils.getComponent;
export const searchComponents: typeof Utils.searchComponents;
export const removeComponent: typeof Utils.removeComponent;
export const hasCondition: typeof Utils.hasCondition;
export const parseFloatExt: typeof Utils.parseFloatExt;
export const formatAsCurrency: typeof Utils.formatAsCurrency;
export const escapeRegExCharacters: typeof Utils.escapeRegExCharacters;
export const getValue: typeof Utils.getValue;
export const getStrings: typeof Utils.getStrings;
export const generateFormChange: typeof Utils.generateFormChange;
export const applyFormChanges: typeof Utils.applyFormChanges;
export const findComponent: typeof Utils.findComponent;
export const getEmptyValue: typeof Utils.getEmptyValue;
export const isComponentDataEmpty: typeof Utils.isComponentDataEmpty;
import { Utils } from '@formio/core';
