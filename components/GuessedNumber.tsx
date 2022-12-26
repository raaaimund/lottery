import React from "react";

export default function GuessedNumber(props: Props) {
    const [currentValue, setCurrentValue] = React.useState("?")

    function onChangeEventHandler(sender: React.ChangeEvent<HTMLInputElement>) {
        if (/[0-9]/.test(sender.target.value)) {
            const newNumber = parseInt(sender.target.value)
            setCurrentValue(`${newNumber}`)
            props.onChange(newNumber)
        }
    }

    return (
        <div>
            <input type={"text"}
                   maxLength={1}
                   className={"p-6 h-40 w-40 max-md:h-20 max-md:w-20 max-md:text-4xl text-8xl text-pink-400 text-center border-b border-pink-200 rounded-2xl hover:rounded-2xl hover:border hover:border-pink-600 focus:border focus:border-pink-600 focus:rounded-2xl focus:outline-pink-600 drop-shadow focus:drop-shadow-2xl "}
                   value={currentValue}
                   onFocus={() => setCurrentValue("")}
                   onChange={onChangeEventHandler}
            />
        </div>
    )
}

interface Props {
    value: number
    onChange: (value: number) => void
}