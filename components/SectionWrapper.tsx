import { cn } from "@/lib/utils";

export default function SectionWrapper(
    { children, className , id }: Readonly<{ children: React.ReactNode; className?: string , id?: string }>,
) {
    return (
        <section className={cn("w-full py-8 md:py-16 lg:py-24 container-x mx-auto", className)} id={id ?? ""}>
            {children}
        </section>
    );
}