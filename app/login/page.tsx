"use client";

import Image from "next/image";
import { Input } from "../../components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Key, Mail } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DarkModeToggle from "@/components/ui/toggleMode";

export default function Login() {
  const useFormMethods = useForm({
    defaultValues: { email: "", password: "" },
  });

  const { handleSubmit } = useFormMethods;

  const onSubmit = (props) => {
    console.log(props);
  };

  // ...

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center
                    bg-customblue-950 dark:bg-[#0a192f] 
                    [background-image:linear-gradient(90deg,_rgba(255,255,255,0.02)_1px,_transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,_transparent_1px)]
                    dark:[background-image:linear-gradient(90deg,_rgba(255,255,255,0.02)_1px,_transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,_transparent_1px)]
                    [background-size:45px_45px]"
    >
      <div className="flex justify-end w-full pr-4 pt-4">
        <DarkModeToggle />
      </div>

      <div className="h-[50%] flex">
        <Image
          src={"/logo.svg"}
          alt=""
          width={156}
          height={50}
          className="opacity-90"
        />
      </div>

      <div className="rounded-t-3xl p-8 bg-white dark:bg-[#112240] pb-12 gap-2 flex flex-col">
        <div>
          <h2 className="text-3xl font-bold customblue-950 dark:text-white">
            Bem-vindo 👋🏼
          </h2>
          <span className="text-customblue-950 dark:text-[#a0aec0] font-semibold">
            Por favor, insira suas informações de login abaixo para acessar sua
            conta.
          </span>
        </div>

        {/* resto do código */}
        <FormProvider {...useFormMethods}>
          <div className="flex flex-col mt-8 gap-8">
            <div>
              <Label className="font-semibold customblue-950 dark:text-white">
                Email
              </Label>
              <div className="relative w-full max-w-sm">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-gray-400" />
                <Input
                  placeholder="usuarioteste@teste.com"
                  className="pl-10 h-12"
                  inputId="email"
                />
              </div>
            </div>

            <div>
              <Label className="font-semibold customblue-950 dark:text-white">
                Senha
              </Label>
              <div className="relative w-full max-w-sm">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-gray-400" />
                <Input
                  placeholder="*******"
                  className="pl-10 h-12"
                  inputId="password"
                  type="password"
                />
              </div>
            </div>
          </div>

          <Link
            href={"forgot-password"}
            className="text-sm font-semibold text-customblue-900 dark:text-[#a0aec0] flex justify-end"
          >
            Esqueceu a senha?
          </Link>

          <div className="w-full flex flex-col gap-2 mt-4">
            <Button onClick={handleSubmit(onSubmit)}>Entrar</Button>
            <Button onClick={handleSubmit(onSubmit)} variant="outline">
              Sou barbeiro
            </Button>
          </div>

          <div className="w-full flex flex-col gap-2 mt-4">
            <Link
              href={"forget-password"}
              className="text-sm text-customblue-900 dark:text-[#a0aec0] flex justify-center"
            >
              <span>
                Ainda não tem conta?{" "}
                <span className="font-semibold">Cadastre-se </span>
              </span>
            </Link>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
