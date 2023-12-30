import ReactTooltip from "react-tooltip";
import { generate } from "@wcj/generate-password";
import classNames from "classnames";

import IconCopy from "../../assets/copy.svg";
import { useGenerator } from "../../hooks/userGenerator";
import { toastUtil } from "../../utils/toast.util";

import "./styles.scss";

export const Generator = () => {
  const {
    checkboxes,
    setCheckboxes,
    password,
    setPassword,
    totalCharacters,
    setTotalCharacters,
    choppedPassword,
    isDisabled,
    MAX_CHARACTERS,
  } = useGenerator();

  const handleCopy = async () => {
    if (isDisabled) return null;
    await navigator.clipboard.writeText(password);
    toastUtil("Copied to clipboard !");
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTotalCharacters(parseInt(evt.target.value));
  };

  const handleClick = () => {
    const password = generate({
      length: totalCharacters,
      lowerCase: checkboxes.lower_case,
      upperCase: checkboxes.upper_case,
      numeric: checkboxes.numbers,
      special: checkboxes.symbols
    });
    setPassword(password);
  };

  const handleCheckbox = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = evt.target;

    setCheckboxes({
      ...checkboxes,
      [name]: checked
    });

  };

  return (
    <div className="generator">
      <span className='header'>Password Generator</span>

      <div className='password'>
        <span className='password__value' data-tip data-for="passwordTooltip">{choppedPassword}</span>
        <div className="password--left">
          <img src={IconCopy} alt="icon copy password" className={classNames("password__copy", {
            "password__copy--disabled": isDisabled
          })} onClick={handleCopy} />
        </div>
      </div>

      <div className='form'>
        <div className="form__header">
          <span className="form__title">Character Lenght</span>
          <span className="form__value">{totalCharacters}</span>
        </div>

        <div className="form__content">
          <input className="form__input" type="range" value={totalCharacters} onChange={handleChange} max={MAX_CHARACTERS} />

          <div className="form__checkboxes">
            <label>
              <input type="checkbox" name="upper_case" onChange={handleCheckbox} /> Include Uppercase Letter
            </label>

            <label>
              <input type="checkbox" name="lower_case" onChange={handleCheckbox} /> Include Lowercase Letter
            </label>

            <label>
              <input type="checkbox" name="numbers" onChange={handleCheckbox} /> Include Numbers
            </label>

            <label>
              <input type="checkbox" name="symbols" onChange={handleCheckbox} /> Include Symbols
            </label>
          </div>

        </div>


        <div className="form__footer">
          <button className="form__button" type="button" onClick={handleClick} disabled={isDisabled}>GENERATE</button>
        </div>
      </div>

      <ReactTooltip id="passwordTooltip" type="success" effect="float" place="top">
        <span>{password}</span>
      </ReactTooltip>

    </div>
  );
};