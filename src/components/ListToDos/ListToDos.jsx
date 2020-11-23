import React from 'react'

export default function ListToDos({ toDos, name, desc }) {

    const list = toDos.map(() => (
        <div key={Math.random()}>
            <div>{name}</div>
            <div>{desc}</div>
        </div>
    ))

    return (
        <div>
            List To Do:
            <div>
                { toDos.length > 0 ? list : 'Nothing to do :)' }
            </div>
        </div>
    )
}
