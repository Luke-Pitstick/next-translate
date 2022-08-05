import TextBox from "./TextBox";
import { languages, languageCodes } from "../public/languages.js";
import Button from "./Button";
import Selector from "./Selector";
import { useState } from "react";
import styles from "../styles/Translator.module.css";
import axios from "axios";

const Translator = () => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const [fromLanguage, setFromLanguage] = useState("");

  const handleChange = (e) => {
    setFromValue(e.target.value);
  };

  const changeToLanguage = (e) => {
    setToLanguage(e.target.value);
  };

  const changeFromLanguage = (e) => {
    setFromLanguage(e.target.value);
  };

  const translate = async () => {
    const fromCodeIndex = languages.indexOf(fromLanguage);
    const toCodeIndex = languages.indexOf(toLanguage);
    const fromCode = languageCodes[fromCodeIndex];
    const toCode = languageCodes[toCodeIndex];

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", fromValue);
    encodedParams.append("target", toCode);
    encodedParams.append("source", fromCode);

    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "83542139f7msh76a6b5997c888cbp1c7dd7jsn5c87185fa973",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: encodedParams,
    };

    const data = await axios.request(options)

    const translation = data.data.data.translations[0].translatedText

    setToValue(translation) 
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Selector onChange={changeFromLanguage} options={languages} />
          <TextBox
            rows={5}
            columns={30}
            onChange={handleChange}
            value={fromValue}
          />
        </div>
        <div className={styles.textContainer}>
          <Selector
            selections={1}
            onChange={changeToLanguage}
            options={languages}
          />
          <TextBox rows={5} columns={30} read={true} value={toValue} />
        </div>
      </div>
      <div className={styles.container}>
        <Button className={styles.button} onClick={translate}>
          Translate
        </Button>
      </div>
    </div>
  );
};

export default Translator;
