import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold">
              The Rotary Silver Jubilee Trust
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Established 1974 | Serving Society for over 50 years
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Regd. No.: BOM/259/Sangli
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/trustees"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Trustees
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  1622/E, Ganesh Nagar, Rotary Complex, Sangli – 416 416,
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 98220 43518</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@rotarytrustsangli.org</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>PAN: AAATR1683A</li>
              <li>TAN: KLPT02123C</li>
              <li>GST: 27AAATR1683A2ZQ</li>
              <li className="mt-4">
                <Link
                  href="/compliance"
                  className="hover:text-primary-foreground transition-colors"
                >
                  View Certificates →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} The Rotary Silver Jubilee Trust, Sangli.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
