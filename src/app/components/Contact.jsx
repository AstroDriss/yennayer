import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="section my-8 sm:grid grid-cols-3 gap-2">
      <div className="col-span-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.0462693214527!2d-9.5797981!3d30.406429099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b696ddc99b19%3A0x559600239b0202af!2sAgadir%20Higher%20School%20of%20Technology!5e0!3m2!1sen!2sma!4v1704726510564!5m2!1sen!2sma"
          width="600"
          height="450"
          style={{ border: 0, maxWidth: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col">
        <Link className="flex gap-2" href="mailto:drisspennywise@gmail.com">
          <svg
            width={12}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          drisspennywise@gmail.com
        </Link>
        <Link className="flex gap-2" href="tel:+212651501766">
          <svg
            width={12}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          +212 651 501 766
        </Link>
      </div>
    </section>
  );
};

export default Contact;
