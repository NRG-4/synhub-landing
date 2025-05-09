'use client'

import {useTheme} from "next-themes";
import {Switch} from "@/components/ui/switch";
import {Moon, Sun} from "lucide-react";
import {useEffect} from "react";

export default function ThemeSwitch(){
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme("dark");
    },[])

    return (
        <div className="flex items-center space-x-2">
            <Sun className={`h-4 w-4`}/>
            <Switch defaultChecked
                    onCheckedChange={(e) => {
                        setTheme(e ? "dark" : "light");
                    }}
            />
            <Moon className={`h-4 w-4`}/>
        </div>
    );
}