
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Hero(){
    return (
        <section className={`py-20 md:py-32`} id={`#hero`}>
            <div className="container-x mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Simplifica la coordinacion de tu equipo con <span className="text-primary">SynHub</span>
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                La plataforma todo en uno para gestionar tareas, horarios y responsabilidades
                                en cualquier entorno colaborativo.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="px-8 text-white" asChild>
                                <Link href={`/`}>
                                    Empezar ahora
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Link>

                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href={`/#features`}>
                                    Explorar
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative min-h-[400px] lg:min-h-[500px]">

                        <Image
                            src={`/phone-bg.webp`}
                            alt="SynHub Dashboard"
                            width={560}
                            height={500}
                            className="object-cover"
                            priority
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}