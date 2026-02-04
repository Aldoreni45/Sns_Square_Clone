export default function ContactSection() {
  return (
    <div className="contact-wrapper">

      <div className="contact-left">
        <button className="touch-btn">● Get In Touch</button>

        <h1>
          Let's Build Your <br />
          <span>Agentic Future</span>
        </h1>

        <p>
          Beyond automation. Agentic AI that thinks, acts, and delivers.
          The future is agentic.
        </p>
      </div>

      <div className="contact-form">
        <h2>Let's Build Together</h2>
        <p>We'll get back to you within 24h hours</p>

        <div className="form-row">
          <input placeholder="Name*" />
          <input placeholder="Contact Number*" />
        </div>

        <input placeholder="Email ID*" />

        <textarea placeholder="Message"></textarea>

        <button className="submit-btn">Submit</button>
      </div>

    </div>
  );
}
