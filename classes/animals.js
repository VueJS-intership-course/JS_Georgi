class Animal {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    set_value(name, age) {
        this._name = name;
        this._age = age;
    }

    getInfo() {
        return `Hi, my name is ${this._name}, I am ${this._age} years old, here is some extra info =>`;
    }
}

class Zebra extends Animal {
    constructor(name, age, extraInformation) {
        super(name, age);
        this.extraInformation = extraInformation;
    }

    configuredExtraInfo() {
        const message = Object.entries(this.extraInformation).reduce((acc, [key, value]) => {
            return `${acc}${key}: ${value}\n`;
        }, '');

        return message;
    }

    printInformation() {
        return this.getInfo() + this.configuredExtraInfo();
    }
}

class Dolphin extends Animal {
    constructor(name, age, extraInformation) {
        super(name, age);
        this.extraInformation = extraInformation;
    }

    configuredExtraInfo() {
        const message = Object.entries(this.extraInformation).reduce((acc, [key, value]) => {
            return `${acc}${key}: ${value}\n`;
        }, '');

        return message;
    }

    printInformation() {
        return this.getInfo() + this.configuredExtraInfo();
    }
}

const zebra = new Zebra('Gosho', 22, {
    origin: 'Africa',
    color: 'black & white'
});

zebra.set_value('Gosho2', 22);
console.log(zebra.printInformation());

const dolphin = new Dolphin('Pesho', 19, {
    origin: 'Ocean',
    color: 'White or blue'
});

console.log(dolphin.printInformation());

