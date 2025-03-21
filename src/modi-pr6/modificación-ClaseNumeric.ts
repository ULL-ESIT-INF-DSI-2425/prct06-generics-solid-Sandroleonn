import { PrintableCollection } from "./ejercicio1-modi.js"

/**
   * Subclase que contiene un método para imprimir elementos númericos
   * 
   * @method print - Método que devuelve una cadena de elementos de tipo numérico
*/
export class NumericPrintableCollection extends PrintableCollection<number> {
    /**
     * Método  para imprimir la colección
     * 
     * @return - Retorna un string con la colección separada por comas.
    */
    print(): string {
      return this.items.join(', ');
    }
}