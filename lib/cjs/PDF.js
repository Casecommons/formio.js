"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Formio_1 = require("./Formio");
const Webform_1 = __importDefault(require("./Webform"));
const utils_1 = require("./utils/utils");
class PDF extends Webform_1.default {
    constructor(element, options) {
        options.display = 'pdf';
        super(element, options);
        this.components = [];
    }
    init() {
        super.init();
        // Handle an iframe submission.
        this.on('iframe-submission', (submission) => this.setValue(submission, {
            fromIframe: true
        }), true);
        this.on('iframe-change', (submission) => this.setValue(submission, {
            fromIframe: true
        }), true);
        this.on('iframe-getIframePositions', (query) => {
            const iframe = document.getElementById(`iframe-${query.formId}`);
            if (iframe) {
                const iframeBoundingClientRect = iframe.getBoundingClientRect();
                this.postMessage({
                    name: 'iframePositions',
                    data: {
                        formId: query.formId,
                        iframe: {
                            top: iframeBoundingClientRect.top
                        },
                        scrollY: window.scrollY || window.pageYOffset
                    }
                });
            }
        });
        // Trigger when this form is ready.
        this.on('iframe-ready', () => {
            return this.iframeReadyResolve();
        }, true);
    }
    render() {
        this.submitButton = this.addComponent({
            disabled: this.form.disableWizardSubmit,
            input: true,
            type: 'button',
            action: 'submit',
            internal: true,
            label: 'Submit',
            key: 'submit',
            ref: 'button',
            hidden: this.isSubmitButtonHidden()
        });
        return this.renderTemplate('pdf', {
            submitButton: this.submitButton.render(),
            classes: 'formio-form-pdf',
            children: this.renderComponents()
        });
    }
    redraw() {
        this.postMessage({ name: 'redraw' });
        return this.builderMode ? Promise.resolve() : super.redraw();
    }
    destroy(all = false) {
        if (this.iframeElement) {
            delete this.iframeElement.formioComponent;
            this.iframeElement.formioComponent = null;
        }
        super.destroy(all);
    }
    rebuild() {
        if (this.attached && this.builderMode && this.component.components) {
            this.destroyComponents();
            this.addComponents();
            return Promise.resolve();
        }
        this.postMessage({ name: 'redraw' });
        return super.rebuild();
    }
    // Do not attach nested components for pdf.
    attachComponents(element, components, container) {
        components = components || this.components;
        container = container || this.component.components;
        element = this.hook('attachComponents', element, components, container, this);
        return Promise.resolve();
    }
    attach(element) {
        return super.attach(element).then(() => __awaiter(this, void 0, void 0, function* () {
            this.loadRefs(element, {
                button: 'single',
                buttonMessageContainer: 'single',
                buttonMessage: 'single',
                zoomIn: 'single',
                zoomOut: 'single',
                iframeContainer: 'single'
            });
            this.submitButton.refs = Object.assign({}, this.refs);
            this.submitButton.attachButton();
            // Reset the iframeReady promise.
            this.iframeReady = new Promise((resolve, reject) => {
                this.iframeReadyResolve = resolve;
                this.iframeReadyReject = reject;
            });
            // iframes cannot be in the template so manually create it
            const iframeSrc = this.getSrc();
            this.iframeElement = this.ce('iframe', {
                src: iframeSrc,
                id: `iframe-${this.id}`,
                seamless: true,
                class: 'formio-iframe',
            });
            this.iframeElement.formioContainer = this.component.components;
            this.iframeElement.formioComponent = this;
            // Append the iframe to the iframeContainer in the template
            this.empty(this.refs.iframeContainer);
            this.appendChild(this.refs.iframeContainer, this.iframeElement);
            const { appEnv, headers } = this.options;
            const acceptedEnvs = [];
            if (acceptedEnvs.includes(appEnv)) {
                try {
                    const bodyRequest = yield fetch(iframeSrc, {
                        method: 'GET',
                        headers: Object.assign({ credentials: 'include' }, headers),
                    });
                    const htmlBody = yield bodyRequest.text();
                    const iframeWindow = this.iframeElement.contentWindow || this.iframeElement.contentDocument.parentWindow;
                    const iframeDoc = iframeWindow.document;
                    iframeDoc.open();
                    iframeDoc.write(htmlBody);
                    iframeDoc.close();
                }
                catch (error) {
                    console.log('error setting pdf iframe', error);
                }
            }
            // Post the form to the iframe
            this.form.base = Formio_1.Formio.getBaseUrl();
            this.form.projectUrl = Formio_1.Formio.getProjectUrl();
            this.postMessage({ name: 'form', data: this.form });
            // Hide the submit button if the associated component is hidden
            const submitButton = this.components.find(c => c.element === this.refs.button);
            if (submitButton) {
                this.refs.button.classList.toggle('hidden', !submitButton.visible);
            }
            this.addEventListener(this.refs.zoomIn, 'click', (event) => {
                event.preventDefault();
                this.postMessage({ name: 'zoomIn' });
            });
            this.addEventListener(this.refs.zoomOut, 'click', (event) => {
                event.preventDefault();
                this.postMessage({ name: 'zoomOut' });
            });
            const form = (0, utils_1.fastCloneDeep)(this.form);
            if (this.formio) {
                form.projectUrl = this.formio.projectUrl;
                form.url = this.formio.formUrl;
                form.base = this.formio.base;
                this.postMessage({ name: 'token', data: this.formio.getToken() });
            }
            this.emit('attach');
        }));
    }
    /**
     * Get the submission from the iframe.
     * @returns {Promise<any>} - The submission from the iframe.
     */
    getSubmission() {
        return new Promise((resolve) => {
            this.once('iframe-submission', resolve);
            this.postMessage({ name: 'getSubmission' });
        });
    }
    /**
     * Ensure we have the submission from the iframe before we submit the form.
     * @param {any} options - The options for submission.
     * @returns {Promise<any>} - Resolves when the form is submitted.
     */
    submitForm(options = {}) {
        this.postMessage({ name: 'getErrors' });
        return this.getSubmission().then(() => super.submitForm(options));
    }
    getSrc() {
        if (!this._form || !this._form.settings || !this._form.settings.pdf) {
            return '';
        }
        let iframeSrc = `${this._form.settings.pdf.src}.html`;
        const params = [`id=${this.id}`];
        if (this.options.showCheckboxBackground || this._form.settings.showCheckboxBackground) {
            params.push('checkboxbackground=1');
        }
        if (this.options.readOnly) {
            params.push('readonly=1');
        }
        if (this.options.zoom) {
            params.push(`zoom=${this.options.zoom}`);
        }
        if (this.builderMode) {
            params.push('builder=1');
        }
        if (params.length) {
            iframeSrc += `?${params.join('&')}`;
        }
        return iframeSrc;
    }
    setForm(form, flags = {}) {
        return super.setForm(form, flags).then(() => {
            if (this.formio) {
                form.projectUrl = this.formio.projectUrl;
                form.url = this.formio.formUrl;
                form.base = this.formio.base;
                this.postMessage({ name: 'token', data: this.formio.getToken() });
            }
            this.postMessage({ name: 'form', data: this.form });
        });
    }
    /**
     * Set's the value of this form component.
     * @param {import('@formio/core').Submission} submission - The submission JSON to set the value of this form.
     * @param {any} flags - The flags to use when setting the submission.
     * @returns {boolean} - If the value changed or not.
     */
    setValue(submission, flags = {}) {
        const changed = super.setValue(submission, flags);
        if (!flags || !flags.fromIframe) {
            this.once('iframe-ready', () => {
                if (changed) {
                    this.postMessage({ name: 'submission', data: submission });
                }
            });
        }
        return changed;
    }
    postMessage(message) {
        // If we get here before the iframeReady promise is set up, it's via the superclass constructor
        if (!this.iframeReady) {
            return;
        }
        if (!message.type) {
            message.type = 'iframe-data';
        }
        this.iframeReady.then(() => {
            if (this.iframeElement && this.iframeElement.contentWindow && !(message.name === 'form' && this.iframeFormSetUp)) {
                this.iframeElement.contentWindow.postMessage(JSON.stringify(message), '*');
                this.iframeFormSetUp = message.name === 'form';
            }
        });
    }
    focusOnComponent(key) {
        this.postMessage({
            name: 'focusErroredField',
            data: key,
        });
    }
    // Do not clear the iframe.
    clear() { }
    showErrors(error, triggerEvent) {
        var _a;
        const helpBlock = document.getElementById('submit-error');
        const submitError = this.t('submitError');
        const isSubmitErrorShown = ((_a = this.refs.buttonMessage) === null || _a === void 0 ? void 0 : _a.textContent.trim()) === submitError;
        if (!helpBlock && (error === null || error === void 0 ? void 0 : error.length) && !isSubmitErrorShown) {
            const p = this.ce('p', { class: 'help-block' });
            this.setContent(p, submitError);
            p.addEventListener('click', () => {
                window.scrollTo(0, 0);
            });
            const div = this.ce('div', { id: 'submit-error', class: 'has-error' });
            this.appendTo(p, div);
            this.appendTo(div, this.element);
        }
        if (!(error === null || error === void 0 ? void 0 : error.length) && helpBlock) {
            helpBlock.remove();
        }
        super.showErrors(error, triggerEvent);
    }
    isSubmitButtonHidden() {
        let hidden = false;
        (0, utils_1.eachComponent)(this.component.components, (component) => {
            if ((component.type === 'button') &&
                ((component.action === 'submit') || !component.action)) {
                hidden = component.hidden || false;
            }
        });
        return hidden;
    }
}
exports.default = PDF;
/**
 * Listen for window messages.
 */
if (typeof window !== 'undefined') {
    window.addEventListener('message', (event) => {
        let eventData = null;
        try {
            eventData = JSON.parse(event.data);
        }
        catch (err) {
            eventData = null;
        }
        // If this form exists, then emit the event within this form.
        if (eventData &&
            eventData.name &&
            eventData.formId &&
            Formio_1.Formio.forms.hasOwnProperty(eventData.formId)) {
            Formio_1.Formio.forms[eventData.formId].emit(`iframe-${eventData.name}`, eventData.data);
        }
    });
}
