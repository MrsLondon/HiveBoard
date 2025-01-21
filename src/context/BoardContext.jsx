import { createContext } from "react";
export const BoardContext = createContext({
  allboard: { boards: [] }, // Default value for context
  setAllBoard: () => {}, // Placeholder function to avoid runtime errors
});
