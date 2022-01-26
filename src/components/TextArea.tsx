import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { textInputBackground, textInputText } from '../constants';

interface Props {
  label: string;
  cols?: number;
  rows: number;
  placeholder?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement> ) => void;
}


export default function TextArea({ label, ...props }: Props) {
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
        <textarea
          style={{
            width: "100%",
            fontSize: 12,
            outline: "none",
            backgroundColor: textInputBackground,
          }}
          {...props}
          
          
        />
      </div>
    </div>
  );
}
