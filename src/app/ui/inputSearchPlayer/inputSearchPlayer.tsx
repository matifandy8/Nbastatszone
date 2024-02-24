import { useState } from "react";
import styles from "./inputSearchPlayer.module.css";
import { useDebounce } from "@/app/lib/hooks/useDebounce";

export default function InputSearchPlayer({ onSearch }: any) {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = useDebounce(onSearch, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    debouncedSearch(event.target.value);
  };

  return (
    <input
      className={styles.input}
      placeholder="Search player"
      value={inputValue}
      onChange={handleChange}
    />
  );
}
