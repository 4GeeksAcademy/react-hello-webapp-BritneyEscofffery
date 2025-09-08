export const initialStore=()=>{
  return{
    fname: "Britney",
    lname: "Escoffery",
    baseUrl: "https://playground.4geeks.com/contact"
  }
}

export default function storeReducer(store, action = {}) {
   if (action.type == "set-fname"){
    return{
      ...store,
      fname: action.payload
    }
  }
    if (action.type == "set-lname"){
    return{
      ...store,
      lname: action.payload
      } 
    }
   }
  
   // switch(action.type){
  //   case 'add_task':

  //     const { id,  color } = action.payload

  //     return {
  //       ...store,
  //       todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
  //     };
  //   default:
  //     throw Error('Unknown action.');
  // }    

