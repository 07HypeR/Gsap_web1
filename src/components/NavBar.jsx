import { navLinks } from "../../constants/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {
  useGSAP(() => {
    gsap.to("nav", {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "50px top",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
