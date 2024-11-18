import { createContext, PropsWithChildren} from "react";

interface DataContextProps {
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)

export const DataProvider = ({children}: PropsWithChildren) => {

    return(
        <DataContext.Provider value={{
        }}>
            {children}
        </DataContext.Provider>
    )
}