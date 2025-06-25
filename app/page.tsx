"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

export default function OnBoard() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const slides = [
    {
      title: "Agendamento",
      description:
        "Não perca mais tempo em filas de espera ou ligações, agende os seus compromissos com agilidade e comodidade!",
      image: "/onboard/agendamento.jpg",
    },
    {
      title: "Pagamento Online",
      description:
        "Pague pelo seu serviço diretamente pelo aplicativo, de forma segura e fácil. Sem a necessidade de levar dinheiro em mãos.",
      image: "/onboard/pagamento_online.jpg",
    },
    {
      title: "Programa de Fidelidade",
      description:
        "Acumule pontos a cada serviço realizado e troque por bônus exclusivos. Cuide de si mesmo e ganhe benefícios!",
      image: "/onboard/programa_fidelidade.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-muted flex flex-col items-center justify-center text-white">
      <div className="flex flex-col justify-between h-full w-full max-w-md mx-auto align-bottom ">
        <div className="absolute w-full h-[75%]">
          <Image
            src={slides[step]?.image}
            alt={slides[step]?.title}
            fill
            className="object-fill"
          />
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>

        <div className="z-100 h-full flex justify-end flex-col">
          <div className="bg-blue-950 px-6 py-8 rounded-t-3xl flex flex-col h-fit">
            <h2 className="text-xl font-bold">{slides[step]?.title}</h2>
            <p className="text-sm mt-2 mb-6 text-[#FFFFFFB2]">
              {slides[step]?.description}
            </p>

            <div className="flex gap-2 mb-4 justify-center">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ease-in-out
        ${step === i ? "bg-white w-6" : "bg-white/30 w-2"}`}
                />
              ))}
            </div>

            <Button
              onClick={() => {
                router.push("/login");
              }}
              className="w-full bg-blue-600 text-white"
            >
              Começar agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
