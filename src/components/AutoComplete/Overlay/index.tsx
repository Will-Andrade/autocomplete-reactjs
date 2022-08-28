import * as Styles from './styles';

interface OverlayProps {
  handler: () => void;
}

export default function Overlay ({ handler }: OverlayProps): JSX.Element {
  return (
    <Styles.Overlay onClick={handler}/>
  );
};
