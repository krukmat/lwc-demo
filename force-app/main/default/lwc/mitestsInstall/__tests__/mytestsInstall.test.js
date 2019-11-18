import { createElement } from 'lwc';
import MitestsInstall from 'c/MitestsInstall';

describe('c-MitestsInstall', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays greeting', () => {
        // Create element
        const element = createElement('c-mitestsInstall', {
            is: MitestsInstall
        });
        expect(element.getPerson()).toBe('Pepe');
        expect(element.getAge()).toBe(10);
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Hello, Pepe!');
    });
});