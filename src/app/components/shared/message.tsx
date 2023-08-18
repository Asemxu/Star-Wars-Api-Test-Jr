import  { MessageTypes }  from "@/app/helpers/constants";
import React  from "react"
import Loader from "./loader";
import Message from "@/app/interfaces/message";

const Message: React.FC<{ type: string; text ?: string , className ?: string }>= ({type,text,className}:Message) => {
  return  ( 
    <React.Fragment>
    {type === MessageTypes.LOADER 
      ?<Loader />
      :<h2 className={className}>{text}</h2>}
    </React.Fragment>
  )
}


export default Message