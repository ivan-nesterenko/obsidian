import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { createVault, openVault } from "../../api/controllers/vault-controllers";
import { VaultManagerSchema } from "../../schemas/vault-manager";
import { Button } from "@/ui-shared/components/button";
import { useForm } from "@/ui-shared/components/form";
import { FormInput } from "@/ui-shared/components/input";

export const WindowVaultManager: FC = () => {
  const { isPending: isPendingCreateVault, mutate: mutateCreateVault } = useMutation({
    mutationFn: createVault,
    onSuccess: (res) => {
      console.log(res);
    }
  });

  const { isPending: isPendingOpenVault, mutate: mutateOpenVault } = useMutation({
    mutationFn: openVault,
    onSuccess: (res) => {
      console.log(res);
    }
  });

  const form = useForm<z.infer<typeof VaultManagerSchema>>({
    defaultValues: {
      directoryPath: "",
      vaultName: "",
    },
    resolver: zodResolver(VaultManagerSchema),
  });
  const { handleSubmit, setValue } = form;

  const onSubmitCreateVaultForm = handleSubmit(async (data) => {
    const { directoryPath, vaultName } = data;

    if (isPendingCreateVault) {
      return;
    }

    mutateCreateVault({ directory: directoryPath, name: vaultName });
  });

  const openVaultHandler = async () => {
    const { filePaths } = await window.electron.getDirectory();

    if (isPendingOpenVault) {
      return;
    }

    mutateOpenVault({ directory: filePaths });
  };

  const setFormDirectory = async () => {
    const { filePaths } = await window.electron.getDirectory();

    if (filePaths) {
      setValue("directoryPath", filePaths, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-blue-200">
      <Button className="h-[40px] w-[200px]" onClick={openVaultHandler}>
        Open Vault
      </Button>
      <FormProvider {...form}>
        <form className="flex w-[200px] flex-col gap-2" onSubmit={onSubmitCreateVaultForm}>
          <FormInput control={form.control} label="Enter vault name" name="vaultName" type="text" />
          <Button className="h-[40px] w-full" onClick={setFormDirectory} type="button">
            Chose Directory
          </Button>
          <Button className="h-[40px] w-full" type="submit">
            Create Vault
          </Button>
        </form>
      </FormProvider>
    </main>
  );
};

WindowVaultManager.displayName = "WindowVaultManager";
