import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-inkCharcoal text-warmWhite/80">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/#inicio" className="mb-6 inline-block">
              <Image
                src="/images/logo_horizontal_flat_color_dark_bg.svg"
                alt="Kaidev Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-md">
              Consultora de ingeniería de software especializada en eficiencia
              en IA. Ayudamos a las empresas a obtener más trabajo útil de las
              herramientas que ya pagan, con medición, control de costes y
              seguridad.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/EverlyRusher"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/kaidev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://bsky.app/profile/jpascual.kaidev.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-warmWhite/70 transition-colors hover:text-kaidevTeal"
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
                className="flex items-center justify-center text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                aria-label="Email"
              >
                <Mail />
                &nbsp;info@kaidev.io
              </a>
            </div>
            <p className="mt-6 text-sm">
              Miembros de la comunidad Laravel Catalunya
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-medium text-warmWhite">
              Enlaces
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#inicio"
                  className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/#experiencia"
                  className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                >
                  Experiencia
                </Link>
              </li>
              <li>
                <Link
                  href="/#medicion"
                  className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                >
                  Medición
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonios"
                  className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-medium text-warmWhite">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-warmWhite/70 transition-colors hover:text-kaidevTeal"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-warmWhite/10 pt-8 text-center text-sm">
          <p>© {currentYear} Kaidev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
