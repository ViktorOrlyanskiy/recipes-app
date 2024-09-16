import React, { ChangeEvent } from "react";

import { RadioInput } from "../../../shared/ui/radioInput";

import "./radioBlock.scss";

type Props = {
  difficulty: string;
  handleChangeDifficulty: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ComplexityRadio = ({ difficulty, handleChangeDifficulty }: Props) => {
  const isChecked = (value: string) => difficulty === value;

  return (
    <div className="radio-block">
      <div className="radio-block__title">Сложность приготовления:</div>
      <div className="radio-block__inputs">
        <RadioInput
          id="Any"
          name="Any"
          value="Any"
          text="Any"
          onChange={handleChangeDifficulty}
          checked={isChecked("Any")}
        />
        <RadioInput
          id="Easy"
          name="Easy"
          value="Easy"
          text="Easy"
          onChange={handleChangeDifficulty}
          checked={isChecked("Easy")}
        />
        <RadioInput
          id="Medium"
          name="Medium"
          value="Medium"
          text="Medium"
          onChange={handleChangeDifficulty}
          checked={isChecked("Medium")}
        />
        <RadioInput
          id="Hard"
          name="Hard"
          value="Hard"
          text="Hard"
          onChange={handleChangeDifficulty}
          checked={isChecked("Hard")}
        />
      </div>
    </div>
  );
};
