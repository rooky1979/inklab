import Link from "next/link";
import navStyles from "@/styles/Landing.module.css";


const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <p className={`nav_item ${active ? "active" : ""}`}>{text}</p>
    </Link>
  );
};

export default NavItem;
