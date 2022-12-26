import React from "react";

export default function GuessedNumber(props: Props) {
    function onChangeEventHandler(sender: React.KeyboardEvent<HTMLInputElement>) {
        if (/[0-9]/.test(sender.key)) {
            props.onChange(sender.key)
        }
    }

    return (
        <div>
            <input type={"text"}
                   className={"p-6 h-40 w-40 text-8xl text-pink-400 text-center border-b border-pink-200 rounded-2xl hover:rounded-2xl hover:border hover:border-pink-600 focus:border focus:border-pink-600 focus:rounded-2xl drop-shadow focus:drop-shadow-2xl "}
                   value={props.value}
                   onKeyDown={onChangeEventHandler}
                   onChange={(sender) => console.log(sender.target.value)}
            />
        </div>
    )
}

interface Props {
    value: number
    onChange: (value: string) => void
}