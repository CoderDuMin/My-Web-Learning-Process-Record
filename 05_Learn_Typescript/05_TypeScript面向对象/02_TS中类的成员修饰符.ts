class Person {
  public name:string
  private age:number
  protected sex:number
  constructor(name:string,age:number,sex:number){
    this.name = name
    this.age = age
    this.sex = sex
  }

  eating(){
    console.log(this.name+' is eating')
  }
  say(){
    console.log(`i am ${this.name}, i have ${this.age}`)
  }
}


const p1 = new Person('dumin',16,1)
console.log(p1)
p1.eating()

const p2 = new Person('yihamin',18,0)
console.log(p2)
p2.eating()


class Student extends Person{
  sno:string
  constructor(name:string,age:number,sex:number,sno:string){
    super(name,age,sex)
    this.sno = sno
  }

  intro(){
    console.log(`i am a ${this.sex == 1 ? 'boy' : 'girl'},my name is ${this.name} and sno is ${this.sno}`)
  }
}

const stu = new Student('xiaom',11,1,'a001')

stu.intro()

export {}