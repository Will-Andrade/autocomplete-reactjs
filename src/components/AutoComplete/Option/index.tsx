interface OptionProps {
  text: string;
  handler: (text: string) => void;
}

export default function Option ({text, handler}: OptionProps): JSX.Element {
  return (
    <li>
      <div role="button" onClick={() => handler(text)}>{text}</div>
    </li>
  );
};
