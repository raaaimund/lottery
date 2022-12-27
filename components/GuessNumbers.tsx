import React, {useContext, useMemo} from "react";
import {NumbersGuessedContext} from "../context/NumbersGuessedContext";
import GuessedNumberInput from "./GuessedNumberInput";

export default function GuessNumbers() {
    const {
        contextState: areAllNumbersCorrect,
        updateContext: setAreALlNumbersCorrect
    } = useContext(NumbersGuessedContext);
    const correctNumbers = [3, 4, 5, 7]
    const [guessedNumbers, setGuessedNumbers] = React.useState(Array(correctNumbers.length).fill(0))
    const inputRefs = useMemo(() => guessedNumbers.map(i => React.createRef<HTMLInputElement>()), []);

    function checkIfAllNumbersAreCorrect(guessed: typeof guessedNumbers) {
        return guessed.sort().every(
            (guessedNumber, index) => correctNumbers.sort()[index] === guessedNumber
        )
    }

    function focusNextInput(index: number) {
        if (index < guessedNumbers.length - 1) {
            inputRefs[index + 1].current?.focus()
        }
    }

    function onChangeNumber(newNumber: number, index: number) {
        const newGuessedNumbers = [...guessedNumbers]
        newGuessedNumbers[index] = newNumber

        setGuessedNumbers(newGuessedNumbers)
        setAreALlNumbersCorrect(checkIfAllNumbersAreCorrect([...newGuessedNumbers]))
        focusNextInput(index)
    }

    return areAllNumbersCorrect ?
        <div className={"flex flex-row justify-evenly items-center grow"}>
            <span className={"text-9xl text-pink-600 drop-shadow-2xl"}>
                Correct!
            </span>
        </div>
        :
        <>
            <div className={"p-8 text-center"}>
                <h1 className={"font-extralight leading-tight text-9xl max-md:text-7xl max-md:mt-6 mt-0 text-pink-600 drop-shadow-2xl"}>
                    Guess the numbers!
                </h1>
            </div>
            <div className={"flex flex-row justify-evenly items-center grow"}>
                {
                    guessedNumbers.map((guessedNumber, index) => {
                        return (
                            <GuessedNumberInput
                                key={index}
                                value={guessedNumber}
                                index={index}
                                onChange={onChangeNumber}
                                reference={inputRefs[index]}
                            />
                        )
                    })
                }
            </div>
        </>
}