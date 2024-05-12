import Button from "../Commons/Button";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="flex items-center justify-center w-full p-10">
      <div className="max-w-[1440px] w-full p-10">
        <h4 className="uppercase w-full text-left font-semibold pb-5 text-[#FF3946]">
          Contact Us
        </h4>
        <h1 className="text-5xl text-[#314584] font-semibold">Get in Touch</h1>
        <div className="py-10 Inputs">
          <input
            type="text"
            placeholder="Your Email"
            className="px-4 py-3 Email bg-blue-100 rounded placeholder:font-bold font-bold placeholder:text-[#314484ad] text-[#314584]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="px-4 py-3 Subject bg-blue-100 rounded placeholder:font-bold font-bold placeholder:text-[#314584ad] text-[#314584]"
          />
          <textarea
            type="text"
            placeholder="Message"
            className="px-4 py-3 Message bg-blue-100 rounded placeholder:font-bold font-bold placeholder:text-[#314584ad] text-[#314584]"
          />
        </div>
        <div className="flex items-center justify-center w-full py-5">
            <Button>Send Message</Button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
