// components/Contact.tsx
const contact = () => (
    <section id="contact" className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form className="mt-4 space-y-4">
        <input className="w-full p-2" type="text" placeholder="Your Name" required />
        <input className="w-full p-2" type="email" placeholder="Your Email" required />
        <textarea className="w-full p-2" placeholder="Your Message" rows={6}></textarea>
        <button className="px-4 py-2 bg-blue-500 text-white">Send</button>
      </form>
    </section>
  );

export default contact;