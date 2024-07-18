import { Button } from "@mantine/core";

export const InputButton = ({ children }: { children: string }) => {
  return (
    <Button
      type="submit"
      variant="filled"
      color="var(--mantine-color-red-8)"
      size="md"
      w={200}
      radius="md"
    >
      {children}
    </Button>
  );
};
