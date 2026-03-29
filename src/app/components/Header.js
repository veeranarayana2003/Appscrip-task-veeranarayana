import { Menu, Search, Heart, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <>
  

      <header className="header">
        <div className="header-inner">

          {/* LEFT */}
          <div className="left">
            <Menu size={20} />
          </div>

          {/* CENTER */}
          <div className="logo">LOGO</div>

          {/* RIGHT */}
          <div className="right">
            <Search size={18} />
            <Heart size={18} />
            <ShoppingCart size={18} />
            <User size={18} />
            <span>ENG</span>
          </div>

        </div>

        <nav className="nav">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </header>
    </>
  );
}