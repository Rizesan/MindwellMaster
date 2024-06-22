import {Card, CardHeader, CardContent, Input, Popover, Button, Select} from "@mui/material";
import {Label} from "@mui/icons-material";
import {CardTitle} from "../../components/cardTitle";
import {CardDescription} from "../../components/cardDescription";
import {CardFooter, PopoverContent, PopoverTrigger, Textarea} from "@chakra-ui/react";
import {SelectItem} from "../../components/selectItem";
import {SelectTrigger} from "../../components/selecTrigger";
import {SelectValue} from "../../components/selectValue";
import {SelectContent} from "../../components/selectContent";

export const FormPage = () => {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Registro</CardTitle>
                <CardDescription>Crea tu cuenta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">ID de usuario</Label>
                        <Input id="username" placeholder="Elige un ID" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Ingresa tu nombre" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Ingresa tu apellido" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" placeholder="ejemplo@correo.com" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input id="password" type="password" placeholder="Ingresa tu contraseña" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="dob">Fecha de nacimiento</Label>
                        <Popover open>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="pl-3 text-left font-normal text-gray-500 dark:text-gray-400">
                                    Selecciona una fecha
                                    <CalendarDaysIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">

                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="gender">Género</Label>
                        <Select>
                            <SelectTrigger className="text-gray-500 dark:text-gray-400">
                                <SelectValue placeholder="Selecciona tu género" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Masculino</SelectItem>
                                <SelectItem value="female">Femenino</SelectItem>
                                <SelectItem value="other">Otro</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="location">Ubicación</Label>
                        <Input id="location" placeholder="Ingresa tu ubicación" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="interests">Intereses en salud mental</Label>
                    <Textarea id="interests" placeholder="Comparte tus intereses en salud mental" className="min-h-[100px]" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Registrarse</Button>
            </CardFooter>
        </Card>
    )
}

function CalendarDaysIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    )
}