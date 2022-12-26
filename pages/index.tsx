import Head from 'next/head'
import GuessedNumber from "../components/GuessedNumber";
import React from "react";
import Image from "next/image";

export default function Home() {
    const correctNumbers = [3, 4, 5, 7]
    const [guessedNumbers, setGuessedNumbers] = React.useState({
        firstNumber: 0,
        secondNumber: 0,
        thirdNumber: 0,
        fourthNumber: 0
    })

    function onChangeFirstNumber(val: string) {
        let newNumber = parseInt(val)
        setGuessedNumbers({
            ...guessedNumbers,
            firstNumber: newNumber
        })
    }

    function onChangeSecondNumber(val: string) {
        let newNumber = parseInt(val)
        setGuessedNumbers({
            ...guessedNumbers,
            secondNumber: newNumber
        })
    }

    function onChangeThirdNumber(val: string) {
        let newNumber = parseInt(val)
        setGuessedNumbers({
            ...guessedNumbers,
            thirdNumber: newNumber
        })
    }

    function onChangeFourthNumber(val: string) {
        let newNumber = parseInt(val)
        setGuessedNumbers({
            ...guessedNumbers,
            fourthNumber: newNumber
        })
    }

    const allNumbersAreCorrect =
        correctNumbers.includes(guessedNumbers.firstNumber)
        && correctNumbers.includes(guessedNumbers.secondNumber)
        && correctNumbers.includes(guessedNumbers.thirdNumber)
        && correctNumbers.includes(guessedNumbers.fourthNumber)

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={"flex flex-col h-full"}>
                {
                    allNumbersAreCorrect &&
                    <div className={"flex flex-row justify-evenly items-center grow"}>
                        <span className={"text-9xl text-pink-600 drop-shadow-2xl"}>
                            PULL
                        </span>
                    </div>
                }
                {
                    !allNumbersAreCorrect &&
                    <>
                        <div className={"p-8 text-center"}>
                            <h1 className={"font-extralight leading-tight text-9xl max-md:text-7xl max-md:mt-6 mt-0 mb-2 text-pink-600 drop-shadow-2xl shadow-pink-600"}>
                                3 x GLEICH
                            </h1>
                        </div>
                        <div className={"flex flex-row justify-evenly items-center grow"}>
                            <GuessedNumber value={guessedNumbers.firstNumber} onChange={onChangeFirstNumber}/>
                            <GuessedNumber value={guessedNumbers.secondNumber} onChange={onChangeSecondNumber}/>
                            <GuessedNumber value={guessedNumbers.thirdNumber} onChange={onChangeThirdNumber}/>
                            <GuessedNumber value={guessedNumbers.fourthNumber} onChange={onChangeFourthNumber}/>
                        </div>
                    </>
                }
            </main>
        </>
    )
}
