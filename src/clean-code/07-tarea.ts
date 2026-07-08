(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {
        }
    }

    interface Events {
        value: string;
        placeholder: string;
        id: string;
        type: HtmlType;
    }

    class InputEvents {
        public element : HtmlElement;
        public atributes : InputAttributes;
        constructor({
            id, type,
            value, placeholder
        }: Events
        ) {
            this.element = new HtmlElement(id,type);
            this.atributes = new InputAttributes(value, placeholder);
        }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputEvents({
        value : 'Fernando',
        placeholder :'Enter first name',
        id : 'txtName',
        type : 'input'
    });

    console.log({ nameField });

})()