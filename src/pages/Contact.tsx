function Contact() {
  return (
    <div>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4">We would love to hear from you!</p>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-700 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border-gray-300 mt-1 block w-full rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border-gray-300 mt-1 block w-full rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-gray-700 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="border-gray-300 mt-1 block w-full rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
