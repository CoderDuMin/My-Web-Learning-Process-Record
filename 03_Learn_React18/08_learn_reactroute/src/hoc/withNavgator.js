import { PureComponent } from "react";
import { useNavigate } from "react-router-dom";

export default function withNavgator(WrapperComponent){
  function NewComponent(props){
    const navgator = useNavigate()
    return (
      <WrapperComponent {...props} navgator={navgator} />
    )
  }
  return NewComponent
}