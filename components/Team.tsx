import {Card} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {GithubIcon} from "lucide-react";
import Link from "next/link";

const team = [
    {
        name: "Juan Astonitas",
        career: "Lead Architect",
        imgUrl: "/teampics/astonitas-pfp.webp",
        gitUrl: "https://github.com/NeoRise456"

    },
    {
        name: "Gianluca Pasquale",
        career: "Scrum Master",
        imgUrl: "/teampics/gianluca-pfp.webp",
        gitUrl: "https://github.com/cwassointt"
    },
    {
        name: "Alexander Casas",
        career: "Tech Lead",
        imgUrl: "/teampics/alex-pfp.webp",
        gitUrl: "https://github.com/Al3xiel"
    },
    {
        name: "Sebastian Pacheco",
        career: "Project manager",
        imgUrl: "/teampics/sebastian-pfp.webp",
        gitUrl: "https://github.com/Pachieeee"
    },
    {
        name: "Jose Alejo",
        career: "Lead Engineer",
        imgUrl: "/teampics/jose-pfp.webp",
        gitUrl: "https://github.com/Firtness"
    }

]

export default function Team(){
    return(
        <section className={`py-12 md:py-20`} id={`team`}>
            <div className={`container-x mx-auto space-y-6`}>
                <div className={`text-center`}>
                    <h1 className={`text-3xl md:text-4xl font-bold mb-6`}>
                        NRG-4 Team
                    </h1>
                    <p className={`text-lg text-muted-foreground`}>
                        Conoce al equipo detrás de SynHub, profesionales apasionados por
                        transformar la forma en que las personas colaboran.
                    </p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                    {
                        team.map((member, index) => {
                            return (
                                <Card className={`p-0 overflow-hidden border border-border group`} key={index}>
                                    <div className={``}>
                                        <div className={`relative w-full h-60 bg-amber-400`}>
                                            <Image
                                                src={`${member.imgUrl}`}
                                                alt="SynHub Dashboard"
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                            <div className={`absolute inset-0 w-full h-full bg-gradient-to-t from-black/70 
                                            to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                            flex items-end justify-center p-4`}>
                                                <div className={`flex `}>
                                                    <Button className={`inline-flex `} variant="outline" asChild>
                                                        <Link href={member.gitUrl} target={`_blank`}>
                                                            <GithubIcon className={`h-4 w-4`}/>
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`p-6`}>
                                            <h3 className={`text-2xl font-medium`}> {member.name} </h3>
                                            <p className={`text-primary font-medium mb-3`}> {member.career} </p>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}