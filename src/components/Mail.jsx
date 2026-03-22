import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
        },
        (error) => {
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-5">

      <input name="user_name" type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-transparent border border-gray-600" />

      <input name="user_email" type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-transparent border border-gray-600" />

      <input name="subject" type="text" placeholder="Subject" className="w-full p-3 rounded-lg bg-transparent border border-gray-600" />

      <textarea name="message" rows="5" placeholder="Your Message" className="w-full p-3 rounded-lg bg-transparent border border-gray-600"></textarea>

      <button type="submit" className="bg-blue-600 px-6 py-3 rounded-lg">
        Send Message ✈️
      </button>

    </form>
  );
}

export default Contact;