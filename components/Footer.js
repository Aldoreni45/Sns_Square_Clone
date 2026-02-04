import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-logo">
          <Image src="/sns.png" alt="logo" width={120} height={80} />
        </div>

        <div className="footer-col">
          <h4>Agentic Workbench</h4>
          <p>Foundation Agent</p>
          <p>Industrial Solutions</p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>Privacy policy</p>
          <p>Terms of Service</p>
        </div>

        <div className="footer-col">
          <h4>Address</h4>
          <p>BLOCK-L, Embassy Tech Village,</p>
          <p>Outer Ring Rd,</p>
          <p>Devarabisanahalli, Bellandur,</p>
          <p>Bengaluru, Karnataka 560103</p>
        </div>

        <div className="footer-col">
          <h4>Email</h4>
          <p>info@snssquare.com</p>

          <div className="socials">
            <span>🔗</span>
            <span>▶️</span>
            <span>📸</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 SNS Square. All rights reserved.
      </div>

    </footer>
  );
}
