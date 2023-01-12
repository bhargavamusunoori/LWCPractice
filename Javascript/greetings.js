class Greetings extends HTMLElement { // inheritance
    constructor() {
        super(); // will ensure all the variables, functions written inside HTMElement are accessible
        // element created
    }

    connectedCallback() {
        // browser calls this method when the element is added to the document
        // (can be called many times if an element is repeatedly added/removed)

        // Access the "lang" attribute value
        const language = this.getAttribute('lang');
        const defaultvalue = this.getAttribute('defaultvalue');
        switch (language) {
            case "en":
                this.innerHTML = `<p>Good morning !!!</p>`
                break;
            case "fr":
                this.innerHTML = `<p>Bonjour !!!</p>`
                break;
            case "gr":
                this.innerHTML = `<p>Guten Morgen !!!</p>`
                break;
            default:
                break;
        }

    }

    disconnectedCallback() {
        // browser calls this method when the element is removed from the document
        // (can be called many times if an element is repeatedly added/removed)
    }

    static get observedAttributes() {
        return [/* array of attribute names to monitor for changes */];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // called when one of attributes listed above is modified
    }

    adoptedCallback() {
        // called when the element is moved to a new document
        // (happens in document.adoptNode, very rarely used)
    }

    // there can be other element methods and properties
}

// instruct the browser to run the code when it encounter a custom HTML Tag
// <greetings> 
customElements.define('greetings-show',Greetings)