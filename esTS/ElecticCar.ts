class ElecticCar implements Car<ElecticCar> {

    targa: string;
    cilindrata: number
    anno_imm : number
    colore: string
    marca: string


    constructor(targa, cilindrata, anno_imm, colore, marca) {
        this.targa = targa;
        this.cilindrata = cilindrata
        this.anno_imm = anno_imm
        this.colore = colore
        this.marca = marca
    }


    getTarga(): String {
        return this.targa
    }

    setTarga(value: string) {
        this.targa = value
    }

    getCilindrata(): number {
        return this.cilindrata
    }

    setCilindrata(value: number) {
        this.cilindrata = value
    }

    getAnno(): number {
        return this.anno_imm
    }

    setAnno(value: number) {
        this.anno_imm = value
    }

    getColore(): String {
        return this.colore 
    }

    setColore(value: string) {
        this.colore = value
    }

    getMarca(): String {
        return this.marca
    }

    setMarca(value: string) {
        this.marca = value
    }

    run(): void {

        document.write(this.getTarga() +" "+ this.getCilindrata() + " "
        + this.getAnno() + " " + this.getColore() + " " + this.getMarca())
    }

    faster(eCar: ElecticCar): boolean {

        if(eCar.getCilindrata() > this.cilindrata)
        return true;

        return false;
    }





}