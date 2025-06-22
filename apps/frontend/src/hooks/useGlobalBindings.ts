import { useRef, useLayoutEffect } from "react";
import { getBindingByName, makeKeyBindings } from "@/config/keyBindings";
import { defaultNote } from "@/constants/defaultTabs";
import { Tab } from "@/types/Tab";

type UseGlobalKeyBindingsProps = {
  tabs: Tab[] | [],
  activeTab: number,
  createTab: (newTab?: Tab) => void,
  closeTab: () => void,
};

export const useGlobalKeyBindings = ({ tabs, activeTab, createTab, closeTab }: UseGlobalKeyBindingsProps) => {
  const keysRef = useRef<Set<string>>(new Set());

  const createNote = () => {
    createTab(defaultNote);
  };

  const deleteNote = () => {
    closeTab();
  };

  const keyAction = makeKeyBindings({ createNote, deleteNote, closeTab });

  const handleKeyDown = (event: KeyboardEvent) => {
    keysRef.current.add(event.code);

    if (keysRef.current.values()) {
      const keysPressed = keysRef.current.values();
      const keyCombination = Array.from(keysPressed).join("+");

      if (keyCombination) {
        const binding = getBindingByName(keyCombination);

        if (binding) {
          const action = keyAction[binding];

          if (typeof action === "function") {
            event.preventDefault();
            action();
          }
        }
      }
    }
  };
  const handleKeyUp = (event: KeyboardEvent) => {
    keysRef.current.delete(event.code);
  };

  useLayoutEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return [tabs, activeTab, setActiveTab, createTab, closeTab];
};
