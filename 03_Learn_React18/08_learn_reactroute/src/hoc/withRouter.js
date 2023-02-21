import { useNavigate,useParams,useSearchParams } from "react-router-dom";

export default function withRouter(WrapperComponent){
  function NewComponent(props){
    const navgator = useNavigate()
    // 2.动态路由的参数: /detail/:id
    const params = useParams()

    const [searchParam] = useSearchParams()
    const query = Object.fromEntries(searchParam)
    const router = {
      navgator:navgator,
      params:params,
      query:query
    }
    return (
      <WrapperComponent {...props} router={router} />
    )
  }
  return NewComponent
}