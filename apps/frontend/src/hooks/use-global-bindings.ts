import { useLayoutEffect, useRef } from "react";
import { getBindingByName, makeKeyBindings } from "@/frontend/config/keyBindings";
import { defaultNote } from "@/frontend/constants/defaultTabs";
import { Tab } from "@/frontend/types/tab";

type UseGlobalKeyBindingsProperties = {
  activeTab: number;
  closeTab: () => void;
  createTab: (newTab?: Tab) => void;
  tabs: [] | Tab[];
};

export const useGlobalKeyBindings = ({ activeTab, closeTab, createTab, tabs }: UseGlobalKeyBindingsProperties) => {
  const keysReference = useRef<Set<string>>(new Set());

  const createNote = () => {
    createTab(defaultNote);
  };

  const deleteNote = () => {
    closeTab();
  };

  const keyAction = makeKeyBindings({ closeTab, createNote, deleteNote });

  const handleKeyDown = (event: KeyboardEvent) => {
    keysReference.current.add(event.code);

    if (keysReference.current.values()) {
      const keysPressed = keysReference.current.values();
      const keyCombination = [...keysPressed].join("+");

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
    keysReference.current.delete(event.code);
  };

  useLayoutEffect(() => {
    globalThis.addEventListener("keydown", handleKeyDown);
    globalThis.addEventListener("keyup", handleKeyUp);

    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown);
      globalThis.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
};
