import directiveTime from "./ftime";
import directiveUnit from "./vunit";

export default function directives(app){
  directiveUnit(app)
  directiveTime(app)
}