
import _ from "lodash";

export default function Img({ src }:{src:string}) {
  if (_.isEmpty(src)) {
    return null;
  }
  return <img src={src} alt="icon" />;
}
