import React, {useState} from "react"; 
import {
FormGroup, 
Input ,
InputGroup,
InputGroupAddon,
Button, 
Form,
Container
} from "reactstrap";
import { v4 } from "uuid";


const TodoFrom = ({addTodos})=>{
    const [todoString, setTodoString] = useState("") ;

const handleSubmit = e =>{
           e.preventDefault() 
           if(todoString=== ""){
               return alert("Todo Can't be Empty")
           }
 const todo = {
               todoString,
               id: v4()
           }
           addTodos(todo);

           setTodoString("");
       }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                   <Input
                    name= "todo"
                    id ="todo"
                    placeholder="Enter a todo Event"
                    value={todoString}
                    onChange={e => setTodoString(e.target.value)}
                    />
                   <InputGroupAddon>
                   <Button 
                   color = "success"
                   >
                    Add Todo
                   </Button>
                   </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoFrom;