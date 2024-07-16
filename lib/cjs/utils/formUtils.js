"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isComponentDataEmpty = exports.getEmptyValue = exports.findComponent = exports.applyFormChanges = exports.generateFormChange = exports.getStrings = exports.getValue = exports.escapeRegExCharacters = exports.formatAsCurrency = exports.parseFloatExt = exports.hasCondition = exports.removeComponent = exports.searchComponents = exports.getComponent = exports.matchComponent = exports.isLayoutComponent = exports.getComponentActualValue = exports.getComponentData = exports.eachComponentAsync = exports.eachComponent = exports.componentInfo = exports.getContextualRowData = exports.getContextualRowPath = exports.getComponentKey = exports.eachComponentData = exports.eachComponentDataAsync = exports.componentChildPath = exports.componentPath = exports.isComponentNestedDataType = exports.isComponentModelType = exports.getComponentPath = exports.getComponentAbsolutePath = exports.getModelType = exports.MODEL_TYPES = exports.uniqueName = exports.guid = exports.flattenComponents = exports.findComponents = void 0;
const core_1 = require("@formio/core");
const { componentFormPath, guid, uniqueName, MODEL_TYPES, getModelType, getComponentAbsolutePath, getComponentPath, isComponentModelType, isComponentNestedDataType, componentPath, componentChildPath, eachComponentDataAsync, eachComponentData, getComponentKey, getContextualRowPath, getContextualRowData, componentInfo, eachComponentAsync, getComponentData, getComponentActualValue, isLayoutComponent, matchComponent, getComponent, searchComponents, removeComponent, hasCondition, parseFloatExt, formatAsCurrency, escapeRegExCharacters, getValue, getStrings, generateFormChange, applyFormChanges, findComponent, getEmptyValue, isComponentDataEmpty } = core_1.Utils;
exports.guid = guid;
exports.uniqueName = uniqueName;
exports.MODEL_TYPES = MODEL_TYPES;
exports.getModelType = getModelType;
exports.getComponentAbsolutePath = getComponentAbsolutePath;
exports.getComponentPath = getComponentPath;
exports.isComponentModelType = isComponentModelType;
exports.isComponentNestedDataType = isComponentNestedDataType;
exports.componentPath = componentPath;
exports.componentChildPath = componentChildPath;
exports.eachComponentDataAsync = eachComponentDataAsync;
exports.eachComponentData = eachComponentData;
exports.getComponentKey = getComponentKey;
exports.getContextualRowPath = getContextualRowPath;
exports.getContextualRowData = getContextualRowData;
exports.componentInfo = componentInfo;
exports.eachComponentAsync = eachComponentAsync;
exports.getComponentData = getComponentData;
exports.getComponentActualValue = getComponentActualValue;
exports.isLayoutComponent = isLayoutComponent;
exports.matchComponent = matchComponent;
exports.getComponent = getComponent;
exports.searchComponents = searchComponents;
exports.removeComponent = removeComponent;
exports.hasCondition = hasCondition;
exports.parseFloatExt = parseFloatExt;
exports.formatAsCurrency = formatAsCurrency;
exports.escapeRegExCharacters = escapeRegExCharacters;
exports.getValue = getValue;
exports.getStrings = getStrings;
exports.generateFormChange = generateFormChange;
exports.applyFormChanges = applyFormChanges;
exports.findComponent = findComponent;
exports.getEmptyValue = getEmptyValue;
exports.isComponentDataEmpty = isComponentDataEmpty;
/**
 * Deprecated version of findComponents. Renamed to searchComponents.
 * @param {import('@formio/core').Component[]} components - The components to find components within.
 * @param {object} query - The query to use when searching for the components.
 * @returns {import('@formio/core').Component[]} - The result of the component that is found.
 */
function findComponents(components, query) {
    console.warn('formio.js/utils findComponents is deprecated. Use searchComponents instead.');
    return searchComponents(components, query);
}
exports.findComponents = findComponents;
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
function eachComponent(components, fn, includeAll, path, parent) {
    if (!components)
        return;
    path = path || "";
    components.forEach((component) => {
        if (!component) {
            return;
        }
        const info = componentInfo(component);
        let noRecurse = false;
        // Keep track of parent references.
        if (parent) {
            // Ensure we don't create infinite JSON structures.
            Object.defineProperty(component, 'parent', {
                enumerable: false,
                writable: true,
                value: JSON.parse(JSON.stringify(parent))
            });
            Object.defineProperty(component.parent, 'parent', {
                enumerable: false,
                writable: true,
                value: parent.parent
            });
            Object.defineProperty(component.parent, 'path', {
                enumerable: false,
                writable: true,
                value: parent.path
            });
            delete component.parent.components;
            delete component.parent.componentMap;
            delete component.parent.columns;
            delete component.parent.rows;
        }
        if (includeAll || component.tree || !info.layout) {
            noRecurse = fn(component, component.path, components, parent);
        }
        if (!noRecurse) {
            if (info.hasColumns) {
                component.columns.forEach((column) => eachComponent(column.components, fn, includeAll, path, parent ? component : null));
            }
            else if (info.hasRows) {
                component.rows.forEach((row) => {
                    if (Array.isArray(row)) {
                        row.forEach((column) => eachComponent(column.components, fn, includeAll, path, parent ? component : null));
                    }
                });
            }
            else if (info.hasComps) {
                eachComponent(component.components, fn, includeAll, componentFormPath(component, path, component.path), parent ? component : null);
            }
        }
    });
}
exports.eachComponent = eachComponent;
/**
 * Flatten the form components for data manipulation.
 * @param {object} components
 *   The components to iterate.
 * @param {boolean} includeAll
 *   Whether or not to include layout components.
 * @returns {object}
 *   The flattened components map.
 */
function flattenComponents(components, includeAll) {
    const flattened = {};
    eachComponent(components, (component, path) => {
        flattened[path] = component;
    }, includeAll);
    return flattened;
}
exports.flattenComponents = flattenComponents;
