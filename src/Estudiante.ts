export class Estudiante {
    private _id: number;
    private _nombre: string;
    private _correo: string;

    // Constructor
    constructor(id: number, nombre: string, correo: string) {
        this._id = id;
        this._nombre = nombre;
        this._correo = correo;
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
}
