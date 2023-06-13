import React from 'react';

const Form = ({ input, setInput, todos, setTodos}) => {
    
    const onInputChange = (event) =>{
        setInput(event.target.value)
    };

        const onFormSubmit = () =>{
          event.preventDefault();
          setTodos([...todos, { id: idv4(), title: input, complete: false }]);
          setInput("");  
        };
    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder="Enter a Todo..." 
            className="task-input" 
            value={input} 
            required
            onChange={onInputChange}
            />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    );
};

export default Form;