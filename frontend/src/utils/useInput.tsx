import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

export function useInput({
  type,
  placeholder,
  onChange,
}: {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const [value, setValue] = useState("");
  const input =
    type !== "textarea" ? (
      <input
        className="shadow px-4 py-2 rounded focus:outline-none bg-slate-100"
        value={value}
        onChange={(e) => (onChange)? onChange(e) : setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
      />
    ) : (
      <textarea
        className="shadow px-4 py-2 rounded focus:outline-none h-32 bg-slate-100"
        onChange={(e) => (onChange)? onChange(e) : setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      ></textarea>
    );
  return { value, input, setValue };
}
