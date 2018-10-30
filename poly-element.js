import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `poly-element`
 * first attempt
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolyElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'poly-element',
      },
    };
  }
}

window.customElements.define('poly-element', PolyElement);
