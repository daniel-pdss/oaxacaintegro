import { Data } from "@angular/router";

export interface formulario {
    Fecha : Data
    Reactivo1: string
    Reactivo2: string
    Reactivo3: string
    Reactivo4: string
    Reactivo5: string
    Reactivo6: string
    Reactivo7: string
    Reactivo8: string
    Reactivo101: string
    Reactivo102: string
    Reactivo103: string
    Reactivo104: string
    Reactivo105: string
    Reactivo106: string
    Reactivo107: string
    Reactivo108: string
    Reactivo109: string
    Reactivo110: string
    Reactivo111: string
}

export interface autoEvaluacionForm{
    nombre: string
    Reactivo1: string
    Reactivo2: string
    Reactivo3: string
    Reactivo4: string
    Reactivo5: string
    Reactivo6: string
    Reactivo7: string
    Reactivo8: string
    Reactivo9: string
    Reactivo10: string
    Reactivo11: string
}

export interface DenunciaExprexForm{
    Hora: string
    Fecha: String
    sexo: string
    tipo: string
    edad: string
    categoria: string
    institucion: string
    descripcion: string
    foto: string
}