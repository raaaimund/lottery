import React from "react";

export default function GuessedNumber(props: Props) {
    function onKeyDownEventHandler(sender: React.KeyboardEvent<HTMLInputElement>) {
        if (/[0-9]/.test(sender.key)) {
            const newNumber = parseInt(sender.key)
            props.onChange(newNumber)
        }
    }

    return (
        <div>
            <input type={"number"}
                   maxLength={1}
                   className={"p-6 h-40 w-40 max-md:h-20 max-md:w-20 max-md:text-4xl text-8xl text-pink-400 text-center border-b border-pink-200 rounded-2xl hover:rounded-2xl hover:border hover:border-pink-600 focus:border focus:border-pink-600 focus:rounded-2xl focus:outline-pink-600 drop-shadow focus:drop-shadow-2xl"}
                   value={props.value}
                   onKeyDown={onKeyDownEventHandler}
                   onChange={(sender) => sender.preventDefault()}
                   ref={props.reference}
            />
        </div>
    )
}

interface Props {
    value: number
    onChange: (value: number) => void
    reference?: React.LegacyRef<HTMLInputElement>
}