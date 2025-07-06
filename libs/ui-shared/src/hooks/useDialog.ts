import { useState } from "react";

export const useDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleToggleOpenDialog = () => {
    setIsDialogOpen((prevState) => !prevState);
  };

  return {
    isDialogOpen,
    handleOpenDialog,
    handleCloseDialog,
    handleToggleOpenDialog,
  };
};
