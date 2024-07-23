import { Estudiante } from "./Estudiante";
import { Empresa } from "./Empresa";

export class Postulacion {
    private _id: number;
    private _estudiante: Estudiante;
    private _empresa: Empresa;

    // Constructor
    constructor(id: number, estudiante: Estudiante, empresa: Empresa) {
        this._id = id;
        this._estudiante = estudiante;
        this._empresa = empresa;
    }

    // Getter y Setter para id
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    // Getter y Setter para estudiante
    public get estudiante(): Estudiante {
        return this._estudiante;
    }

    public set estudiante(value: Estudiante) {
        this._estudiante = value;
    }

    // Getter y Setter para empresa
    public get empresa(): Empresa {
        return this._empresa;
    }

    public set empresa(value: Empresa) {
        this._empresa = value;
    }
}
