import { AnimatePresence } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores"
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const TodoList = () => {
    const  {todoStore} = useStore();

    
    return (
        <motion.li
        whileHover={{
            scale: 0.9,
            transition: { type: "spring", duration: 0.2 },
          }}
          exit={{
            x: "-60vw",
            scale: [1, 0],
            transition: { duration: 0.5 },
            backgroundColor: "rgba(255,0,0,1)",
          }}
            className="displaytodos">
            {todoStore.list.map((l)=>(
                    <h3 className="card" key={l.id}>{l.title}</h3>
                 ))} 

</motion.li>
    );
};

export default observer(TodoList);


