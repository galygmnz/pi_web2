"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/Button"
import { Home, Calendar, ClipboardList, LogOut, Menu, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="fixed bottom-4 left-4 z-50 bg-cyan-900 text-lime-200 hover:bg-cyan-100"
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>


            <SheetContent


                side="left"
                className="w-64 bg-emerald-800 text-lime-200 border-none shadow-lg"
            >

             <div className="sr-only">Sidebar Navigation</div>

                <nav className="flex flex-col h-full">
                    <div className="ml-10 flex items-center font-bold text-white mb-8">
                        <Image
                            src="/OrbixLogo.png"
                            alt="OrbixLogo"
                            width={130}
                            height={120}
                            className="mr-10"
                        />
                    </div>

                    <h2 className="text-xl font-semibold mb-6 text-cyan-100 px-4">
                        ¡Bienvenido Al Panel De Reservas!
                    </h2>

                    <div className="flex flex-col space-y-4 px-4">
                        <Link href="/dashboard/" className="flex items-center space-x-3 hover:text-neutral-300 transition-colors">
                            <Home className="h-5 w-5" />
                            <span>Inicio</span>
                        </Link>
                        <Link href="/" className="flex items-center space-x-3 hover:text-neutral-300 transition-colors">
                            <Calendar className="h-5 w-5" />
                            <span>Reservar</span>
                        </Link>
                        <Link href="/dashboard/mis-reservas" className="flex items-center space-x-3 hover:text-neutral-300 transition-colors">
                            <ClipboardList className="h-5 w-5" />
                            <span>Mis Reservas</span>
                        </Link>
                    </div>

                    <div className="mt-auto px-4 pb-4">
                        <div className="border-t border-emerald-700 pt-4 mb-4">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center">
                                    <User className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Usuario</p>
                                    <p className="text-xs text-emerald-300">prueba@email.com</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/" className="flex items-center space-x-3 text-red-300 hover:text-red-400 transition-colors">
                            <LogOut className="h-5 w-5" />
                            <span>Cerrar Sesión</span>
                        </Link>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}
