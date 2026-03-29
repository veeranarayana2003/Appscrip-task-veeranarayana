export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates</p>

          <div className="subscribe">
            <input placeholder="Enter your email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-grid">
        <div>
          <h4>mettā muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Payment</p>
          <p>FAQs</p>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}