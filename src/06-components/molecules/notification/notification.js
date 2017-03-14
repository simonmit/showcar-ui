import registerElement from '../../../07-utilities/helpers.js';
import ContainerHandler from './notification/ContainerHandler';

export default function(tagName) {
    let containerHandler = new ContainerHandler();
    let items = [];
    function attachedCallback() {
        if(items.indexOf(this.id) != -1){ // prevent of appearing twice. TODO check on new polyfill
            return;
        }

        items.push(this.id);
        containerHandler.createNotification(this);
    }
    function attributeChangedCallback(attributeName, previous, value) {
        containerHandler.updateNotification(this, attributeName, previous, value);
    }

    registerElement({
        attachedCallback,
        attributeChangedCallback,
        tagName
    });
}
