import { ChangeEventHandler } from "react";

import "./styles.scss";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "password";
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  variant?: "dark" | undefined;
}

export const Input: React.FC<Props> = ({ variant, ...props }) => {
  return (
    <div className={`app-input ${variant ?? ""}`}>
      <input {...props} />
    </div>
  );
};

export default Input;
