import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const form = useRef();

  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const[success, setSuccess] = useState('');

  const handleName = (e) =>{
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u8s904s", "template_alrpwml", form.current, {
        publicKey: "0mX6adQSRKtib2o7s",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-black bg-green-400">{success}</p>
      <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-white px-2"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-white px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className="rounded-lg bg-white p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-royalblue text-black h-12 font-bold text-xl hover:bg-royalblue bg-sky transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}
