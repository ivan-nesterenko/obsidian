// import React, { useContext, useState } from 'react';
// import { Tab } from '../types/Tab';
//
//
// export const useTabs()=> {
//   const [tabs, setTabs] = useState<Tab[]>();
//   const [activeTab, setActiveTab] = useState();
//
//   const createNote = () => {
//     setTabs()
//   };
//
//   const deleteNote = () => {};
//   const closeTab = () => {};
//
//   const [notes, setNotes] = useState<Note[]>([]);
//   const value = {
//     createNote: () => setNotes(ns => [...ns, {/* ... */}]),
//     deleteNote: () => {/* ... */},
//   };
//   return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
// }
//
// export function useTabs() {
//   const ctx = useContext(NotesContext);
//
//   if (!ctx) throw new Error("useTabs must be inside NotesProvider");
//
//   return ctx;
// }
