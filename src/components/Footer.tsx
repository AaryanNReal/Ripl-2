import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// ✅ Proper asset import
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-header-foreground/10">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <a href="#home" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="RIPL Interiors Logo"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            <p className="text-header-foreground/60 text-sm leading-relaxed mb-6 max-w-md">
              A Multi-Disciplinary Contracting Company with expertise in Civil,
              Interiors and Fitout Works, delivering Turnkey Interior Solutions
              across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-header-foreground font-medium mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Projects", "Factories", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-header-foreground/60 hover:text-gold text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-header-foreground font-medium mb-4 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "General Contracting",
                "Interior Fit Outs",
                "Civil Execution",
                "Furniture Manufacturing",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-header-foreground/60 hover:text-gold text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-header-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-header-foreground/40 text-sm">
            © {new Date().getFullYear()} RIPL Interiors. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-header-foreground/40 hover:text-gold text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-header-foreground/40 hover:text-gold text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
