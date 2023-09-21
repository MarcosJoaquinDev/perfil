"use client";

import { useState } from "react";
import Messages from "./Messages";

export type Messages = {
  type: "user" | "bot";
  message: string;
};

const initMessages: Messages[] = [
  { type: "bot", message: "Hola, en que puedo ayudarte?" },
];
const API_KEY = "4I3y15xztHu7tgZzdJ2hTP5FO6aIrTO2I4zdhWkb";
const EXAMPLES = [
  { text: "Hola", label: "Saludo" },
  { text: "Como estas?", label: "Saludo" },
  { text: "Quien sos?", label: "Saludo" },
  { text: "Estas estudiando?", label: "Estudio" },
  { text: "Donde estudiaste?", label: "Estudio" },
  { text: "Que estudios tenes?", label: "Estudio" },
  { text: "Trabajas actualmente?", label: "Trabajo" },
  { text: "Tenes experiencia?", label: "Trabajo" },
  { text: "Donde te puedo contactar?", label: "Contacto" },
  { text: "Tenes redes?", label: "Contacto" },
  { text: "Tenes github?", label: "Contacto" },
  { text: "Tenes LinkedIn", label: "Contacto" },
];
const ANSWERS = {
  Saludo:
    "Hola mi nombre es Marcos , soy Softaware developer y este bot es para que conozcas un poco mas de mi",
  Trabajo:
    "He trabajado en Axoft una agencia de producto para gestionar productos contables",
  Estudio:
    "Estudie en la UTN la tecnicatura en programacion, hice varios cursos en desarrolo de software",
  Contacto:
    "Podes contactarme por LinkedIn o directamente mandarme un mensaje a este mail: marcosjuako@hotmail.com",
  default:
    "Disculpa no soy Marcos soy un bot para contestar solo algunas preguntas, por favor podes reformular",
};

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="feather feather-send"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default function Chat() {
  const [messages, setMessages] = useState<Messages[]>(initMessages);
  const [value, setValue] = useState<string>("");

  const handle = async (e: any) => {
    e.preventDefault();
    const newMessage: Messages = { type: "user", message: value };
    setMessages((prevState) => [...prevState, newMessage]);
    const { classifications } = await fetch(
      "https://api.cohere.ai/v1/classify",
      {
        method: "POST",
        headers: {
          Authorization: "BEARER " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "embed-english-v2.0",
          inputs: [value],
          examples: EXAMPLES,
        }),
      }
    ).then((res) => res.json());
    setMessages((prevState) => [
      ...prevState,
      {
        type: "bot",
        message:
          ANSWERS[
            (classifications[0].prediction as keyof typeof ANSWERS) || "default"
          ],
      },
    ]);

    setValue("");
  };
  return (
    <form
      className=" border-slate-100 p-4 rounded bg-zinc-950 w-3/5"
      onSubmit={handle}
    >
      <div>
        <Messages messages={messages} />
      </div>
      <div className="flex gap-2 align-middle mt-4 items-center">
        <input
          value={value}
          onInput={(e: any) => setValue(e.target.value)}
          type="text"
          className="w-full p-2 bg-zinc-950 border-b-2 focus-visible:outline-none"
        />
        <button>
          <SendIcon />
        </button>
      </div>
    </form>
  );
}
