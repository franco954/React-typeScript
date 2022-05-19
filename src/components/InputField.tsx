import React from "react";

// creamos una interface props para las propiedades que llegan

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (React.FormEventHandler)
}

const InputField : React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTodo(e.target.value)
    }


    return (
        <form onSubmit={handleAdd}>
            <input type="text" 
            placeholder="Enter a task" 
            name="task" 
            onChange={handleOnChange}/>
            <button type="submit">Go</button>
        </form>
    );
}

export default InputField;
