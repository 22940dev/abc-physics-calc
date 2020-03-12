export interface EquationProps {
  variables: (string | string[])[] | undefined;
  funcName: string | undefined;
}

export interface EquationInputProps {
  field: {
    desc: string;
    unit: string;
    value: number;
  };
  inputValue: string | number;
  index: number;
  handleInputChange: (arg0: number, arg1: string) => void;
}

export interface EquationInputWithSelectProps {
  field: any;
  selectCategory: string;
  inputValue: string | number;
  index: number;
  selectIndexes: any;
  selectValues: (string | number)[];
  handleInputChange: (arg0: number, arg1: string) => void;
  handleSelectChange: (arg0: number, arg1: number) => void;
}
