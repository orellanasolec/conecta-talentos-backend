import { Empresa } from "./Empresa";

export class OfertaLaboral {
    private _id: number;
    private _nombre: string;
    private _correo: string;
    private _empresa: Empresa;

    // Constructor
    constructor(id: number, nombre: string, correo: string, empresa: Empresa) {
        this._id = id;
        this._nombre = nombre;
        this._correo = correo;
        this._empresa = empresa;
    }

    // Getter y Setter para id
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    // Getter y Setter para nombre
    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    // Getter y Setter para correo
    public get correo(): string {
        return this._correo;
    }

    public set correo(value: string) {
        this._correo = value;
    }

    // Getter y Setter para empresa
    public get empresa(): Empresa {
        return this._empresa;
    }

    public set empresa(value: Empresa) {
        this._empresa = value;
    }
}
