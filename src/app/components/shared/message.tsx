import  { MessageTypes }  from "@/app/helpers/constants";
import React  from "react"
import Loader from "./loader";
import Message from "@/app/interfaces/message";
import useSwipe from "@/hooks/useSwipe";



const Message: React.FC<{ type: string; text ?: string , className ?: string }>= ({type,text,className}:Message) => {
  const { handlers } = useSwipe()
  return  ( 
    <React.Fragment>
    {type === MessageTypes.LOADER 
      ?<Loader />
      :<h2 {...handlers} className={className}>{text}</h2>}
    </React.Fragment>
  )
}


export default Message