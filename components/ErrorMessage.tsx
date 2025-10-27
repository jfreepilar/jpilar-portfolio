import { Text } from "@radix-ui/themes";

const ErrorMessage = ({ error }: { error: string | undefined }) => {
  return (
    <Text as="span" className="text-mandy">
      {error}
    </Text>
  );
};

export default ErrorMessage;
