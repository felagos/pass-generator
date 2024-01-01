import { useMemo, useState } from "react";
import { generate } from "@wcj/generate-password";

const MAX_CHARACTERS = 32;
const MIN_CHARACTERS = 24;

export const useGenerator = () => {

  const [checkboxes, setCheckboxes] = useState({
    upper_case: false,
    lower_case: false,
    numbers: false,
    symbols: false
  });
  const [password, setPassword] = useState("");
  const [totalCharacters, setTotalCharacters] = useState(0);

  const isDisabled = useMemo(() => {
    const { upper_case, lower_case, numbers, symbols } = checkboxes;
    return totalCharacters === 0 && (!upper_case || !lower_case || !numbers || !symbols);
  }, [totalCharacters, checkboxes]);

  const choppedPassword = useMemo(() => {
    if (password.length <= MIN_CHARACTERS) return password;
    return `${password.slice(0, MIN_CHARACTERS)} ...`;
  }, [password]);

  const generatePassword = () => {
    const password = generate({
      length: totalCharacters,
      lowerCase: checkboxes.lower_case,
      upperCase: checkboxes.upper_case,
      numeric: checkboxes.numbers,
      special: checkboxes.symbols
    });
    setPassword(password);
  };


  return {
    checkboxes,
    choppedPassword,
    isDisabled,
    password,
    setCheckboxes,
    setTotalCharacters,
    setPassword,
    totalCharacters,
    MAX_CHARACTERS,
    generatePassword,
  } as const;


};