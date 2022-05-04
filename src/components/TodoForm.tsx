import { motion } from "framer-motion";
import {GoPlus} from 'react-icons/go'
import { action } from "mobx";
import { FormEvent } from "react";
import { useStore } from "../stores";

const TodoForm = () => {

    const {todoStore} = useStore();

    const handleSubmit = action((e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const value = formData.get('title')?.toString() || '';

        todoStore.list.push({
            title: value,
            id: Date.now()
        });

    });

    return(
        <form className="addTodos" action="#" onSubmit={handleSubmit}>
            <input name="title" placeholder="add text" className="todo-input" />
            
            <motion.button  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn">
                <GoPlus />
            </motion.button>
        </form>
    )
}

export default TodoForm;

