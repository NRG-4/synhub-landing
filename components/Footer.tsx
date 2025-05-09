import Link from "next/link";
import {Facebook, Instagram, Linkedin, Twitter} from "lucide-react";

export default function Footer(){
    return(
        <footer className="bg-card text-card-foreground border-t border-border">
            <div className="container-x mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary">
                Syn<span className="text-foreground">Hub</span>
              </span>
                        </Link>
                        <p className="text-muted-foreground mb-4">
                            Transformando la forma en que los equipos se organizan y colaboran.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5"/>
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5"/>
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5"/>
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5"/>
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Producto</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#features"
                                      className="text-muted-foreground hover:text-primary transition-colors">
                                    Características
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Precios
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Integraciones
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Casos de Uso
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Empresa</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about"
                                      className="text-muted-foreground hover:text-primary transition-colors">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="#mission"
                                      className="text-muted-foreground hover:text-primary transition-colors">
                                    Misión & Visión
                                </Link>
                            </li>
                            <li>
                                <Link href="#team"
                                      className="text-muted-foreground hover:text-primary transition-colors">
                                    Equipo
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Carreras
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Soporte</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Centro de Ayuda
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Documentación
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Comunidad
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} NRG4. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Términos de Servicio
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}