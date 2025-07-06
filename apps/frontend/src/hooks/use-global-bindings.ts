import { useLayoutEffect, useRef } from "react";
import { getBindingByKeys, makeKeyBindings } from "../config/key-bindings";
import { createDefaultNote } from "../constants/default-tabs";
import { UseTabsOutput } from "../types/tab";

export const useGlobalKeyBindings = ({ closeTab, createTab }: Omit<UseTabsOutput, "setActiveTab">) => {
  const keysReference = useRef<Set<string>>(new Set());

  const createNote = () => {
    createTab(createDefaultNote());
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
        const binding = getBindingByKeys(keyCombination);

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
