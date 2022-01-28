import { primaryColor } from "../constants";

interface Props {
  label: string;
  isValid: boolean;
  onClick?: () => void;
}

const button = {
  display: "flex",
  width: "100%",
  paddingRight: 16,
  paddingLeft: 16,
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius: 4,
  maxWidth: 200,
  justifyContent: "center",
  alignItems: "center",
};

export default function Button({ label, isValid, ...props }: Props) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 32,
        paddingLeft: 32,
        margin: 16,
        cursor: 'pointer'
      }}
      {...props}
    >
      <div
        style={
          isValid
            ? { ...button, backgroundColor: primaryColor }
            : { ...button, backgroundColor: "#6b7280" }
        }
      >
        <p style={{ fontWeight: "900", color: "white" }}>{label}</p>
      </div>
    </div>
  );
}
