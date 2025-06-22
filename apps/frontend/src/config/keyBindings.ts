export enum KeyBindings {
  CloseTab = "AltLeft+KeyW",
  CreateNote = "ControlLeft+KeyN",
  DeleteNote = "AltLeft+ShiftLeft+KeyZ",
}

type Handlers = {
  createNote: () => void;
  deleteNote: () => void;
  closeTab: () => void;
};

export const getBindingByName = (name: string): string | undefined => {
  return KeyBindings[name as keyof typeof KeyBindings];
};

export function makeKeyBindings(handlers: Handlers): Record<string, () => void> {
  return {
    [KeyBindings.CreateNote]: handlers.createNote,
    [KeyBindings.DeleteNote]: handlers.deleteNote,
    [KeyBindings.CloseTab]: handlers.closeTab,
  };
}
