export enum KeyBindings {
  CLOSE_TAB = "AltLeft+KeyW",
  CREATE_NOTE = "ControlLeft+KeyN",
  DELETE_NOTE = "AltLeft+ShiftLeft+KeyZ",
}

type Handlers = {
  closeTab: () => void;
  createNote: () => void;
  deleteNote: () => void;
};

export const getBindingByName = (name: string): string | undefined => KeyBindings[name as keyof typeof KeyBindings];

export function makeKeyBindings(handlers: Handlers): Record<string, () => void> {
  return {
    [KeyBindings.CLOSE_TAB]: handlers.closeTab,
    [KeyBindings.CREATE_NOTE]: handlers.createNote,
    [KeyBindings.DELETE_NOTE]: handlers.deleteNote,
  };
}
