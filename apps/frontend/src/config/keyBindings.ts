export enum KeyBindings {
  CloseTab = "AltLeft+KeyW",
  CreateNote = "ControlLeft+KeyN",
  DeleteNote = "AltLeft+ShiftLeft+KeyZ",
}

type Handlers = {
  closeTab: () => void;
  createNote: () => void;
  deleteNote: () => void;
};

export const getBindingByName = (name: string): string | undefined => KeyBindings[name as keyof typeof KeyBindings];

export function makeKeyBindings(handlers: Handlers): Record<string, () => void> {
  return {
    [KeyBindings.CloseTab]: handlers.closeTab,
    [KeyBindings.CreateNote]: handlers.createNote,
    [KeyBindings.DeleteNote]: handlers.deleteNote,
  };
}
