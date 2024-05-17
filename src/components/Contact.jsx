const Contact = () => {
  return (
    <div
      className="p-5 my-0 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 w-[1000px] text-center rounded-xl mb-10 shadow-2xl shadow-black"
      id="contact"
    >
      <a href="mailto:example@gmail.com">
        <button
          type="button"
          className="font-bold font-serif text-xl text-white"
        >
          Send Email
          <br /> avanti.tatwawadi@gmail.com
        </button>
      </a>
    </div>
  );
};

export default Contact;
