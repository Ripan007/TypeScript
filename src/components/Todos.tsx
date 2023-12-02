import React from 'react'
import Todo from '../models/Todo'
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </>
    )
}

export default Todos
