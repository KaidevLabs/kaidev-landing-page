import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

const currentYear = new Date().getFullYear();

const focusRing =
  'focus-visible:ring-2 focus-visible:ring-focus-inverse focus-visible:ring-offset-2 focus-visible:ring-offset-graphiteCore focus-visible:outline-hidden';

const socialLink = `inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-inverse/70 transition-colors hover:bg-ink-inverse/10 hover:text-silentJade ${focusRing}`;

const footerLink = `inline-flex min-h-11 min-w-11 max-w-full items-center rounded-sm text-ink-inverse/70 transition-colors hover:text-silentJade ${focusRing}`;

const Footer = () => {
  return (
    <footer className="border-t border-ink-inverse/10 bg-graphiteCore text-ink-inverse/80">
      <div className="container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8">
          <div className="col-span-2">
            <Link
              href="/#inicio"
              className={`mb-5 inline-flex min-h-11 items-center rounded-sm ${focusRing}`}
            >
              <Image
                src="/images/logo_horizontal_flat_color_dark_bg.svg"
                alt="Kaidev Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-md text-ink-inverse/80">
              Consultora de ingeniería de software especializada en eficiencia
              en IA. Ayudamos a las empresas a obtener más trabajo útil de las
              herramientas que ya pagan, con medición, control de costes y
              seguridad.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/EverlyRusher"
                target="_blank"
                rel="noopener noreferrer"
                className={socialLink}
                aria-label="GitHub"
              >
                <Github aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/kaidev/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href="https://bsky.app/profile/jpascual.kaidev.io"
                target="_blank"
                rel="noopener noreferrer"
                className={socialLink}
                aria-label="BlueSky"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3 .5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9 120.3 124.6 164.8-26.7 187.7-103.4 22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7 5.9-19.9 15-138.9 15-155.5s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8-66.1 46.6-137.1 141.1-163.2 191.8z" />
                </svg>
              </a>
              <a
                href="mailto:info@kaidev.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className={`inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-ink-inverse/70 transition-colors hover:text-silentJade ${focusRing}`}
              >
                <Mail aria-hidden="true" className="h-5 w-5" />
                <span>info@kaidev.io</span>
              </a>
            </div>
            <p className="mt-6 text-sm text-ink-inverse/70">
              Miembros de la comunidad Laravel Catalunya
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-heading text-lg font-medium text-ink-inverse">
              Enlaces
            </h3>
            <ul>
              <li>
                <Link href="/#inicio" className={footerLink}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className={footerLink}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#experiencia" className={footerLink}>
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="/#medicion" className={footerLink}>
                  Medición
                </Link>
              </li>
              <li>
                <Link href="/#testimonios" className={footerLink}>
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className={footerLink}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-heading text-lg font-medium text-ink-inverse">
              Legal
            </h3>
            <ul>
              <li>
                <Link href="/privacy-policy" className={footerLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className={footerLink}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className={footerLink}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-ink-inverse/10 pt-6 text-center text-sm text-ink-inverse/70 md:mt-12 md:pt-8">
          <p>© {currentYear} Kaidev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
