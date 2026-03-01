import { Input, Spinner } from "@/components/ui";

const Suffix = () => {
  return (
    <div className="max-w-xl">
      <Input
        label="Label input"
        placeholder="Tìm kiếm..."
        suffix={<Spinner className="size-4.5 border-2" />}
      />
    </div>
  );
};

export { Suffix };
