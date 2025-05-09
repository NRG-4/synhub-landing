import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import ThemeSwitch from "@/components/ThemeSwitch";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {AlignJustifyIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Header(){
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container-x mx-auto flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center" passHref>
                        <span className="text-2xl font-bold text-primary">
                            Syn<span className="text-foreground">Hub</span>
                        </span>
                    </Link>
                </div>

                <NavigationMenu className={`hidden md:flex`}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href={`/`} className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>

                            <NavigationMenuLink href={`/`} className={navigationMenuTriggerStyle()}>
                                About Us
                            </NavigationMenuLink>

                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href={`/`} className={navigationMenuTriggerStyle()}>
                                Mision & Vision
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href={`/`} className={navigationMenuTriggerStyle()}>
                                Features
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href={`/`} className={navigationMenuTriggerStyle()}>
                                NRG-4 Team
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>



                <ThemeSwitch/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className={`flex md:hidden`}>
                            <AlignJustifyIcon className={`h-4 w-5`}/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuGroup>

                            <Link href='/' passHref>
                                <DropdownMenuItem>
                                    Home
                                </DropdownMenuItem>
                            </Link>

                            <Link href='/' passHref>
                                <DropdownMenuItem>
                                    About Us
                                </DropdownMenuItem>
                            </Link>

                            <Link href='/' passHref>
                                <DropdownMenuItem>
                                    Mision & Vision
                                </DropdownMenuItem>
                            </Link>

                            <Link href='/' passHref>
                                <DropdownMenuItem>
                                    Features
                                </DropdownMenuItem>
                            </Link>

                            <Link href='/' passHref>
                                <DropdownMenuItem>
                                    NRG-4 Team
                                </DropdownMenuItem>
                            </Link>

                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>


        </header>
    );
}