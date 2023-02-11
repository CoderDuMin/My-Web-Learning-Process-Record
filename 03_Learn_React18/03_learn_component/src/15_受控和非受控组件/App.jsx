import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      name:'',
      password:'',
      isAgree:false,
      hobbies:[
        {value:'eating',name:'吃饭',checked:false},
        {value:'running',name:'跑步',checked:false},
        {value:'jumping',name:'跳跃',checked:false},
      ],
      fruit:'apple',
      fruits:[]
    }
  }
  inputChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  agreeChange(e){
    this.setState({
      [e.target.name]:e.target.checked
    })
  }
  hobbiesChange(e,index){
    const hobbies = [...this.state.hobbies]
    hobbies[index].checked = e.target.checked
    this.setState({
      hobbies
    })
  }
  furitChange(e){
    console.log('fruit',e.target.value)
    this.setState({
      fruit:e.target.value
    })
  }
  furitsChange(e){
    const fruits = Array.from(e.target.selectedOptions,(item)=>item.value)
    console.log('fruits',fruits)
    this.setState({
      fruits
    })
  }
  onCommit(e){
    e.preventDefault()
    const form = {
      ...this.state
    }
    form.hobbies = form.hobbies.filter(ite => ite.checked).map(item => item.value)
    console.log('提交',form)
  }
  render() {
    const { name,password,isAgree,hobbies,fruit,fruits } = this.state
    return (
      <div>
        <h2>App组件</h2>
        <form onSubmit={(e) => this.onCommit(e)}>
          <label htmlFor="name">
            昵称
            <input type="text" id='name' name="name" value={name} onChange={e => this.inputChange(e)} />
          </label>
          <label htmlFor="password">
            密码
            <input type="password" id='password' name="password" value={password} onChange={e => this.inputChange(e)} />
          </label>
          <div>
            <label htmlFor="isAgree">
              <input type="checkbox" id='isAgree' name="isAgree" checked={isAgree} onChange={e => this.agreeChange(e)}/>
              <span>同意协议</span>
            </label>
          </div>
          <div>
            爱好:
            {
              hobbies.map((item,index) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <input type="checkbox"
                           name={item.value} 
                           checked={item.checked} 
                           id={item.value} 
                           onChange={e => this.hobbiesChange(e,index)}/>
                    <span>{item.name}</span>
                  </label>
                )
              })
            }
          </div>
          <div>
            喜欢的水果(单选):
            {
              <select name="fruit" id="fruit" value={fruit} onChange={e => this.furitChange(e)}>
                <option value="apple">苹果</option>
                <option value="orange">橘子</option>
                <option value="banana">香蕉</option>
              </select>
            }
          </div>
          <div>
            喜欢的水果(多选):
            {
              <select name="fruits" multiple id="fruits" value={fruits}  onChange={e => this.furitsChange(e)}>
                <option value="apple">苹果</option>
                <option value="orange">橘子</option>
                <option value="banana">香蕉</option>
              </select>
            }
          </div>
          <div>
            <button type='submit'>提交</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App