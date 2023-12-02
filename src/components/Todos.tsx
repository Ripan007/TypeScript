import React from 'react'

const Todos: React.FC<{ items: string[] }> = (props) => {
    return (
        <>
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </>
    )
}

export default Todos;