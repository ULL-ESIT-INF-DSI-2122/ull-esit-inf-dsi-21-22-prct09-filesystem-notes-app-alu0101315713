// Una nota estará formada, como mínimo, por un título, un cuerpo y un color (rojo, verde, azul o amarillo).

export class Nota {
  static getNotas: any;
  constructor(
        public titulo: string,
        public cuerpo: string,
        public color: string,
        public id?: number,
  ) {}
  getTitulo(): string {
    return this.titulo;
  }
  getCuerpo(): string {
    return this.cuerpo;
  }
  getColor(): string {
    return this.color;
  }
  getId(): number|undefined {
    return this.id;
  }
  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }
  setCuerpo(cuerpo: string): void {
    this.cuerpo = cuerpo;
  }
  setColor(color: string): void {
    this.color = color;
  }
  setId(id: number): void {
    this.id = id;
  }
  static saveNotas(notas: Nota[]): void {
    localStorage.setItem('notas', JSON.stringify(notas));
  }
}
