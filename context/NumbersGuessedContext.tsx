import React, {createContext, Dispatch, PropsWithChildren, SetStateAction, useState} from "react";

function createNumbersGuessedContext<A>(defaultValue: A) {
    type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>
    const defaultUpdate: UpdateType = () => defaultValue
    const ctx = createContext({
        contextState: defaultValue,
        updateContext: defaultUpdate,
    })

    function Provider(props: PropsWithChildren<{}>) {
        const [contextState, updateContext] = useState(defaultValue)
        return <ctx.Provider value={{contextState, updateContext}} {...props} />
    }

    return [ctx, Provider] as [typeof ctx, typeof Provider]
}

export const [NumbersGuessedContext, NumbersGuessedContextProvider] = createNumbersGuessedContext(false)