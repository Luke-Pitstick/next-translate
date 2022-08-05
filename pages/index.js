import Translator from '../components/Translator';
import { useState } from 'react'

export default function Home() {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  
  return (
    <Translator/>
  )
}
