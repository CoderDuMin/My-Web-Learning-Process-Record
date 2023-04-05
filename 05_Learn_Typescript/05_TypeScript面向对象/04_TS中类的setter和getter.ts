class Person {
  name:string
  private _age:number
  constructor(name:string,age:number){
    this.name = name
    this._age = age
  }
  // setter/getter: 对属性的访问进行拦截操作
  set age(newValue:number){
    this._age = newValue
  }
  get age(){
    return this._age
  }

  eating(){
    console.log(this.name+' is eating')
  }
  say(){
    console.log(`i am ${this.name}, i have ${this.age}`)
  }
}


const p1 = new Person('dumin',16)
console.log(p1)
p1.age = 15
console.log(p1)



export {}
