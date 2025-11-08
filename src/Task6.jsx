import React, { useEffect, useReducer, useState } from 'react';

const initialstate = {
    loading: false,
    error: { status: false, message: "" },
    data: [],
    isediting: { status: false, id: "", name: "", email: "" }
};

function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: action.payload };

        case "ERROR":
            return { ...state, error: action.payload };

        case "UPDATEDATA":
            return { ...state, data: action.payload };

        case "DELETEUSER":
            return { ...state, data: action.payload };

        case "EDITED":
            return { ...state, isediting: action.payload };

        case "UPDATE_USER": {
            const updatedUsers = state.data.map(user =>
                user.id === action.payload.id
                    ? { ...user, name: action.payload.name, email: action.payload.email }
                    : user
            );
            return {
                ...state,
                data: updatedUsers,
                isediting: { status: false, id: "", name: "", email: "" }
            };
        }

        default:
            return state;
    }
}

const Task6 = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);

    async function fetching(url) {
        dispatch({ type: "LOADING", payload: true });

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch data");

            const data = await res.json();
            dispatch({ type: "UPDATEDATA", payload: data });
            dispatch({ type: "LOADING", payload: false });
            dispatch({ type: "ERROR", payload: { status: false, message: "" } });

        } catch (error) {
            dispatch({ type: "LOADING", payload: false });
            dispatch({
                type: "ERROR",
                payload: { status: true, message: error.message }
            });
        }
    }

    function deletehandler(id) {
        const filter = state.data.filter((value) => value.id !== id);
        dispatch({ type: "DELETEUSER", payload: filter });
    }

    function edithandler(id) {
        let editeditem = state.data.find((value) => value.id === id);
        dispatch({
            type: "EDITED",
            payload: {
                status: true,
                id: editeditem.id,
                name: editeditem.name,
                email: editeditem.email
            }
        });
    }

    function updateData(id, name, email) {
        dispatch({
            type: "UPDATE_USER",
            payload: { id, name, email }
        });
    }

    useEffect(() => {
        fetching("https://jsonplaceholder.typicode.com/users");
    }, []);

    return (
        <div className='task6'>
            <h2>User Management (useReducer + API CRUD)</h2>

            {state.isediting.status && (
                <Editformcontainer
                    id={state.isediting.id}
                    comingtitle={state.isediting.name}
                    comingemail={state.isediting.email}
                    updateData={updateData}
                />
            )}

            {state.data.map((value) => {
                const { id, name, email } = value;
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <p>{email}</p>
                        <button onClick={() => deletehandler(id)}>Delete</button>
                        <button onClick={() => edithandler(id)}>Edit</button>
                    </div>
                );
            })}
        </div>
    );
};

function Editformcontainer({ id, comingtitle, comingemail, updateData }) {
    const [title, setTitle] = useState(comingtitle || "");
    const [email, setEmail] = useState(comingemail || "");

    function submitHandler(e) {
        e.preventDefault();
        updateData(id, title, email);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Update Data</button>
            </form>
        </>
    );
}

export default Task6;
