export class Empresa {
    private _id: number;
    private _nombre: string;

    // Constructor
    constructor(id: number, nombre: string) {
        this._id = id;
        this._nombre = nombre;
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
}
