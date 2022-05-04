import { createContext, useContext } from "react";
import todoStore from "./store/TodoStore";

const store = {
    todoStore: todoStore(),
};

export const StoreContext = createContext (store);
export const useStore = () => {
    return useContext<typeof store>(StoreContext);
}

export default store;