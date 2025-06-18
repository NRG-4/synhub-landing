import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Lightbulb, Target} from "lucide-react";

export default function MisionAndVision(){
    return (
        <section className={`py-12 md:py-20`} id={`mission`}>
            <div className={`container-x mx-auto space-y-6`}>
                <div className={`text-center`}>
                    <h1 className={`text-3xl md:text-4xl font-bold mb-6`}>
                        About Us
                    </h1>
                    <p className={`text-lg text-muted-foreground`}>
                        Nuestra empresa NRG4 nace con la visión de ofrecer soluciones digitales que
                        mejoren la organización y la colaboración en los entornos donde convivimos y trabajamos.
                    </p>
                </div>
                <div className={`rounded-xl border p-6 shadow-sm flex flex-col gap-6`}>
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
                        <Card>
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-3">
                                    <Target className="h-8 w-8 text-primary" />
                                    <CardTitle className="text-2xl">Misión</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div>

                                    <p>
                                        Nuestra misión como empresa es facilitar la gestión diaria de grupos a
                                        través de una plataforma que promueve la corresponsabilidad, la organización
                                        eficiente y la comunicación clara entre sus integrantes.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-3">
                                    <Lightbulb className="h-8 w-8 text-primary" />
                                    <CardTitle className="text-2xl">Visión</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <p>
                                        Desde NRG4, aspiramos a consolidarnos como referentes en tecnología para la organización colaborativa,
                                        siendo reconocidos por desarrollar soluciones que impacten positivamente la vida diaria de las personas.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>

            </div>
        </section>
    );
}