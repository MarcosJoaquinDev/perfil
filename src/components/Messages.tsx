import Message from "./Message";

export type Messages = {
  type: "user" | "bot";
  message: string;
  children?: any;
  key: any;
};
export default function Messages({ messages }: any) {
  return (
    <>
      {messages.map((i: Messages) => (
        <Message prop={i} key={i.message} />
      ))}
    </>
  );
}
