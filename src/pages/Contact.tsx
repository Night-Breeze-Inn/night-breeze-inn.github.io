import { useState } from "react";
import type { FormEvent } from "react";

function Contact() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkgrnnw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thanks for your submission!");
        form.reset();
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          setStatus(responseData.errors.map((error: any) => error.message).join(", "));
        } else {
          setStatus("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <div>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4">We would love to hear from you!</p>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "Sending..."}
            className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50">
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p
              className={`mt-4 ${status.startsWith("Oops") || status.startsWith("Sending") ? "text-red-500" : "text-green-500"}`}>
              {status}
            </p>
          )}
        </form>
      </main>
    </div>
  );
}

export default Contact;
