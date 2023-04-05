class Person {
  name:string
  readonly age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
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
// p1.age = 15


export {}
