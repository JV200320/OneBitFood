import { useState, useEffect } from 'react'

export default function TypeWriter({ text }) {
  const [phrase, setPhrase] = useState('')

  useEffect(() => {
    let currentText = '';
    text.split('').forEach((letter, i) => {
      setTimeout(() => {
        currentText = currentText.slice(0, -1);
        currentText += letter;
        if (text.length != i + 1) {
          currentText += '|'
        }
        setPhrase(currentText)
      }, 200 + (i * 100));
    });
  }, [])

  return (
    <>
      {phrase}
    </>
  )
}