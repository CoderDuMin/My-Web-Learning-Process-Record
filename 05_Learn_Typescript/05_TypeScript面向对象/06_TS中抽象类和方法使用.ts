abstract class Shape{
  abstract getShape():number
}

class Rectangle extends Shape {
  constructor(public width:number){
    super()
  }
  getShape(){
    return this.width * this.width
  }
}


class Circle extends Shape{
  constructor(public radius:number){
    super()
  }

  getShape() {
    return this.radius * this.radius * Math.PI 
  }
}
// 抽象类不能创建实例
// const shape = new Shape() 

const rect = new Rectangle(10)
const circle = new Circle(5)


function getCalcArea(shape:Shape){
  return shape.getShape()
}
console.log(getCalcArea(rect))
console.log(getCalcArea(circle))

export {}