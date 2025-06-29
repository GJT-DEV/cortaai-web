"use client";

import { Input } from "../../components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Mail } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/ui/toggleMode";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Login() {
  const useFormMethods = useForm({
    defaultValues: { email: "", password: "" },
  });

  const [otpReady, setOtpReady] = useState<boolean>(false);
  const [otpCode, setOtpCode] = useState<string>("");

  const { handleSubmit } = useFormMethods;

  const onSubmit = () => {
    console.log(otpReady);
    setOtpReady(true);
  };

  return (
    <div
      className="h-screen w-full flex flex-col items-center 
                    bg-white dark:bg-[#112240] p-4"
    >
      <div className="flex justify-end w-full ">
        <DarkModeToggle />
      </div>

      <div className="mt-30">
        <h2 className="text-3xl font-bold text-customblue-950 dark:text-white">
          {otpReady ? "Autenticação" : "Esqueceu a senha?"}
        </h2>
        <span className="text-customblue-950 opacity-70 dark:text-[#a0aec0] font-semibold">
          {otpReady
            ? "Insira o código de autenticação que enviamos para o seu e-mail."
            : " Por favor, insira seu e-mail para iniciar o processo de redefinição de senha."}
        </span>
      </div>

      <FormProvider {...useFormMethods}>
        {otpReady ? (
          <div className="flex flex-col mt-8 gap-8 w-full items-center">
            <InputOTP maxLength={4} value={otpCode} onChange={setOtpCode}>
              <InputOTPGroup className="flex gap-4">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
            <div className="w-full flex flex-col gap-2 mt-4">
              <Button onClick={handleSubmit(onSubmit)} size="lg">
                Enviar
              </Button>
              <Button
                onClick={handleSubmit(onSubmit)}
                size="lg"
                variant="ghost"
              >
                Reenviar código.
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col mt-8 gap-8 w-full">
            <div>
              <Label className="font-semibold text-customblue-950 dark:text-white">
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

            <div className="w-full flex flex-col gap-2 mt-4">
              <Button onClick={handleSubmit(onSubmit)} size="lg">
                Enviar
              </Button>
            </div>
          </div>
        )}
      </FormProvider>
    </div>
  );
}
