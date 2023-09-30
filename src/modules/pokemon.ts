export class Pokemon {
    id: number;
    name: string;
    type: string[];
    description: string;
    photo: string;
    constructor(id: number, name: string;, type: string[], description: string; photo: string;) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.photo = photo;
    }
}