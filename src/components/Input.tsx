import { ChangeEvent} from "react";
import { textInputBackground, textInputText } from '../constants';

interface Props {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement> ) => void;
}


export default function Input({ label, type, ...props }: Props) {
  return (
    <div
      style={{
        backgroundColor: textInputBackground,
        borderRadius: 12,
        maxWidth: 350,
        paddingBottom: 8,
        paddingTop: 8,
        paddingRight: 16,
        paddingLeft: 16,
        width: "100%",
        margin: 16,
      }}
    >
      <label style={{ color: textInputText, marginBottom: 4 }}>{label}</label>
      <div>
        <input
          style={{
            fontSize: 12,
            outline: "none",
            backgroundColor: textInputBackground,
          }}
          type={type}
          {...props}
          
        />
      </div>
    </div>
  );
}
