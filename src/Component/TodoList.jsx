import React, { useState } from "react";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const TodoList = () => {

    const [work, setWork] = useState("");
    const [todo, setTodo] = useState([]);

    const handlerAdd = () => {

        if (todo?.some(item=>item.id ===  work?.replace(/\s/g, ''))) {
            showToast();
        } else {
            setTodo(prev => [...prev, { id: work?.replace(/\s/g, ''), job: work }]);
            setWork(''); 
        }
    }

    const showToast = () => {
        Toastify({
            text: "Object was added previously.",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    };

    const handlerDeleteJob = (id) => {
        setTodo(prev => prev.filter(item => item.id !== id));
    }

    
    return (
        <div className=" flex flex-col gap-8 h-screen justify-center items-center border border-red-500">
            <div className="flex gap-8">
                <input type="text" className="border border-blue-400 px-4 py-2 w-[400px]" value={work} onChange={e=>setWork(e.target.value)}/>
                <button type="button" className="outline-none bg-blue-400 px-4 py-2 rounded-md text-white" onClick={handlerAdd}>Add</button>
            </div>
            <div>
                <h3 className="font-bold text-xl">Content:</h3>
                <ul>
                    {todo?.map((item) => {
                        return (
                            <li key={item.id} className="flex items-center gap-10">
                                <span className="my-2">{item.job}</span>
                                <span className="my-2 cursor-pointer p-2" onClick={()=>{handlerDeleteJob(item.id)}}>X</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;