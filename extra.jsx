import { createContext,useContext,useState } from "react";
const CurrentUserContext = createContext(null)
export default function App(){
  const [currentUser,setCurrentUser] = useState(null)
  return(
    <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
      <Form/>
    </CurrentUserContext.Provider>
  )
}
function Form({children}){
  return(
    <Panel>
      <LoginButton/>
    </Panel>
  )
}
function LoginButton(){
  const {currentUser,setCurrentUser} = useContext(CurrentUserContext)
  if (currentUser !== null){
    return <p>you logged in as{currentUser.name}</p>
  }
  return(
    <Button onClick={()=>{
      setCurrentUser({name:'momna'})
    }}>
      hello
    </Button>
  )
}
function Panel({children,title}){
  return(
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({children,onClick}){
  return(
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}
