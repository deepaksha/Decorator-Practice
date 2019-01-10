class LabelDivCmp extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();

        // custom code goes here
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create div
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        // Create label
        const label = document.createElement('label');
        wrapper.setAttribute('class', 'lbl');

        // Take attribute content and put it inside the info span
        const text = this.getAttribute('data-lbl');
        label.textContent = text;

        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        style.textContent = `
      .lbl {
        color: red;
      }
     `;
        // append style to shadow dom
        // append wrapper to shadow dom
        shadow.appendChild(style);
        shadow.appendChild(wrapper);

        // append label to wrapper dom
        wrapper.appendChild(label);
    }
}

// Define the new element
customElements.define('lbl-cmp', LabelDivCmp);