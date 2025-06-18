
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function CallToContact(){
    return(
        <section className={`py-12 md:py-20`} id={`contact`}>
            <div className={`container-x mx-auto space-y-6`}>

                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para transformar la coordinación de tu equipo?</h2>
                    <p className="text-xl mb-8 text-muted-foreground">
                        Únete a los miles de equipos que ya están utilizando SynHub para mejorar su organización y productividad.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="px-8" asChild>
                            <Link href={`/`}>
                                Comenzar Ahora
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline"
                                className="border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
                            <Link href={`/#features`}>
                                Explorar SynHub
                            </Link>
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}
