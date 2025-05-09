import {Settings,Users,Bell,ChartNoAxesCombined, MonitorSmartphone} from "lucide-react";

const features = [
    {
        icon:  <Users className="h-10 w-10 text-primary" />,
        title: "Asignación de Tareas",
        description: "Distribuye responsabilidades de manera equitativa y haz seguimiento del cumplimiento de cada tarea asignada.",
    },
    {
        icon: <Bell className="h-10 w-10 text-primary" />,
        title: "Notificaciones y Recordatorios",
        description: "Recibe alertas personalizadas sobre tus responsabilidades y mantente al día con las actividades del grupo."
    },
    {
        icon: <Settings className="h-10 w-10 text-primary" />,
        title: "Personalización Completa",
        description: "Adapta la plataforma a las necesidades específicas de tu equipo, ya sea laboral, académico o comunitario."
    },
    {
        icon: <ChartNoAxesCombined className="h-10 w-10 text-primary" />,
        title: "Análisis de Progreso",
        description: "Visualiza el rendimiento del equipo a través de gráficos y métricas que facilitan la toma de decisiones."
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Interfaz Intuitiva",
        description: "Disfruta de una navegación sencilla y amigable que permite a los usuarios adaptarse rápidamente a la plataforma."
    },
    {
        icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
        title: "Acceso Multidispositivo",
        description: "Utiliza SynHub desde cualquier dispositivo movil, ya sea android o IOS, para una flexibilidad total."
    }

]

export default function Features(){
    return(
        <section className={`py-12 md:py-20`} id={`#features`}>
            <div className={`container-x mx-auto space-y-6`}>
                <div className={`text-center`}>
                    <h1 className={`text-3xl md:text-4xl font-bold mb-6`}>
                        Características
                    </h1>
                    <p className={`text-lg text-muted-foreground`}>
                        SynHub ofrece un entorno digital intuitivo y multifuncional
                        que permite a los equipos gestionar sus actividades de forma colaborativa y eficiente.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-lg p-6 shadow-md border border-border hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-4 transform group-hover:scale-110 group-hover:translate-x-4 ease-in-out transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}