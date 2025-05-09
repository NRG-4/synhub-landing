
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Hero(){
    return (
        <section className={`py-20 md:py-32`} id={`#`}>
            <div className="container-x mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Simplify Team Coordination with <span className="text-primary">SynHub</span>
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                The all-in-one platform for managing tasks, schedules, and responsibilities in any
                                collaborative
                                environment.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="px-8 text-white">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                            <Button size="lg" variant="outline">
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-border shadow-lg">

                        <Image
                            src={`/placeholder.svg?height=500&width=600`}
                            alt="SynHub Dashboard"
                            fill
                            className="object-cover"
                            priority
                        />

                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"/>
                    </div>
                </div>
            </div>
        </section>
    );
}