import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" }
  ];

  const quickLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Design",
    "Mobile App Design", 
    "Brand Identity",
    "UI/UX Consulting",
    "Design Systems",
    "Landing Pages"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Your Design Partner</h3>
            <p className="text-background/80 mb-6 max-w-md">
              Creating stunning, conversion-focused designs that help businesses grow and succeed online. 
              Let's bring your vision to life.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@yourdesign.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="text-background/80 hover:text-primary hover:bg-background/10"
                aria-label={social.label}
              >
                {social.icon}
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-background/80 flex items-center gap-2">
              © {currentYear} Your Design Partner. Made with 
              <Heart className="w-4 h-4 text-primary fill-current" />
              and lots of creativity.
            </p>
          </div>

          {/* Status Badge */}
          <Badge variant="outline" className="border-primary/30 text-primary">
            Available for Projects
          </Badge>
        </div>
      </div>
    </footer>
  );
};

export default Footer;