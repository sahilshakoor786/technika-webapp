import { ChangeEvent, useState } from "react";

export type SelectOption = {
  value: string | number;
  label: string;
};

export function useSelect({
  options,
  placeholder,
  onChange,
}: {
  options: Array<SelectOption>;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  const [value, setValue] = useState<string | number>(0);
  const input = (
    <select
      className="px-4 py-2 rounded focus:outline-none"
      placeholder={placeholder}
      onChange={(e) => (onChange ? onChange(e) : setValue(e.target.value))}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} selected={option.value == value}>{option.label}</option>
      ))}
    </select>
  );

  return { value, input, setValue };
}
