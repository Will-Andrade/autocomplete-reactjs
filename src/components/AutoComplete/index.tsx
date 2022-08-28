import React, { useState } from 'react';
import Option from './Option';
import Overlay from './Overlay';
import * as Styles from './styles';

const optionsMock = [
  "Oblivion",
  "Piratas do Caribe",
  "Shrek"
];

export default function AutoComplete (): JSX.Element {
  const [shouldDisplayOptions, setShouldDisplayOptions] = useState(false);
  const [inputText, setInputText] = useState('');
  const filteredOptions = optionsMock.filter(option => option.toLowerCase().includes(inputText.toLowerCase()));

  const handleClickOverlay = (): void => {
    setShouldDisplayOptions(false);
  };

  const handleClickOption = (text: string): void => {
    setInputText(text);
    setShouldDisplayOptions(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <label htmlFor="query-box">Select an option</label>
      <input 
        id="query-box" 
        type="text" 
        value={inputText}
        onFocus={() => setShouldDisplayOptions(true)} 
        onChange={handleInputChange}
      />

      {shouldDisplayOptions && 
      (<Styles.OptionsContainer className='showOptions'>
          <ul>
            {filteredOptions.map(option => (<Option key={option} text={option} handler={handleClickOption} />))}
          </ul>
      </Styles.OptionsContainer>)
      }

      <Overlay handler={handleClickOverlay} />
    </>
  );
}
