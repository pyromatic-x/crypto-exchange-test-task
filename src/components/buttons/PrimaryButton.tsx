import { Button } from "./PrimaryButton.styled";

export default function PrimaryButton({
  title,
  disabled = false,
  action,
  styles,
}: {
  title: string;
  disabled?: boolean;
  action: () => void;
  styles?: {
    width?: string;
    height?: string;
  };
}) {
  return (
    <Button onClick={() => action()} $styles={styles} disabled={disabled}>
      {title}
    </Button>
  );
}
