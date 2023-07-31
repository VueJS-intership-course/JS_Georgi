class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}


class Triangle extends Shape {
    constructor(height, base) {
        super(height);
        this.base = base;
    }

    area() {
        return `Triangle area: ${((this.height * this.base) / 2).toFixed(2)}`;
    }
}


class Rectangle extends Shape {
    area() {
        return `Rectangle area: ${this.width * this.height}`
    }
}


const triangle = new Triangle(5, 3);
console.log(triangle.area());

const rectangle = new Rectangle(6, 6);
console.log(rectangle.area());


