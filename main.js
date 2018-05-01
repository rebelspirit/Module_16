// Создаем супер класс фигуры
class Shape {
	constructor(color = null, initX = 0, initY = 0){ // Базовые параметры (по умолчанию)
		this.color = color; //Присвоение параметров
		this.initX = initX; 
		this.initY = initY; 
	}
	getColor(){ // Метод который возвращает цвет
		return this.color;
	}
	setColor(value){ // Метод который присваевает цвет и перезаписывает
		return this.color = value;
	}
	getCoords(){ // Метод который возвращает Х и Y
		return `X: ${this.initX}, Y: ${this.initY}`;
	}
	moveTo(newX, newY){ // Метод новых Х и Y
		this.initX = newX;
		this.initY = initY;
	}
}


class Rectangle extends Shape { // Класс который наследует Супер класс Фигура
	constructor(color = null, initX = 0, initY = 0, initWidth = 0, initHeight = 0){ // Базовые параметры
		super(color, initX, initY); // Создаем образец Супер класса
		this.initWidth = initWidth;
		this.initHeight = initHeight;
	}
	setWidth(newWidth){ // Задаем новую ширину
		this.initWidth = newWidth;
	}
	setHeight(newHeight){ // Задаем новую высоту
		this.initHeight = newHeight;
	}
	getDims(){ // Получам стороны ширину и высоту
		return `Width: ${this.initWidth} Height: ${this.initHeight}`;
	}
	draw(){ // Отрисовываем фигуру
		return console.log(`Draving rectangle at:
  (${this.getCoords()})
 With dimention:
  ${this.getDims()}
 Fill with color: ${this.getColor()}`);
	}
}

class Circle extends Shape{ // Класс который наследует Супер класс Фигура
	constructor(color = null, initX = 0, initY = 0, initRadius = 0){ // Базовые параметры
		super(color, initX, initY); // Создаем образец Супер класса
		this.initRadius = initRadius;
	}
	getRadius(){ // Получаем радиус
		return this.initRadius;
	}
	setRadius(value){ // Задаем новый радиус
		this.initRadius = value;
	}
	draw(){  // Отрисовываем Фигру
		return console.log(`Draving rectangle at:
  (${this.getCoords()})
 With dimention:
  radius ${this.getRadius()}
 Fill with color: ${this.getColor()}`);
	}
}

let a = new Rectangle('#111111', 10, 17, 150, 137); // Создаем экземпляр
let b = new Circle('#222222', 15, 21, 150) // Создаем экземпляр

// Вызиваем две фигуры
a.draw();
b.draw();