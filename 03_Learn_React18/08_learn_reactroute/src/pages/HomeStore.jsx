import React, { PureComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import withNavgator from '../hoc/withNavgator'

//类组件中无法使用useNavgate hook ,如果需用使用,可以定义高阶组件包裹
export class HomeStore extends PureComponent {
  
  navgatorTo(){
    console.log('navgatorTo:login')
    this.props.navgator('/login')
  }
  render() {
    return (
      <div>
        <h2>这里是home的store页面</h2>
        <p>嘻嘻嘻哈哈哈</p>
        <button onClick={e => this.navgatorTo()}>去登录</button>
      </div>
    )
  }
}

// function HomeStore(props){
//   const navgator = useNavigate()
//   function navgatorTo(){
//     console.log('navgatorTo:login')
//     navgator('/login')
//   }
//   return (
//     <div>
//       <h2>这里是home的store页面</h2>
//       <p>嘻嘻嘻哈哈哈</p>
//       <button onClick={e => navgatorTo()}>去登录</button>
//     </div>
//   )
// }

export default withNavgator(HomeStore) 