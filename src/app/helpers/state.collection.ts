import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @deion Classe de controle do Estado de uma Collection
 * @author Adauto Lucas
 */
export class StateCollection<T extends { id: number }> {
    private _collection$: BehaviorSubject<T[]>;
  
    /**
     * @deion Construtor da classe
     * @param {T} estadoInicial Estado Inicial que será passado para a Collection
     */
    constructor(estadoInicial: T[] = []) {
      this._collection$ = new BehaviorSubject<T[]>(estadoInicial);
    }
  
    /**
     * Retorna um Observable da Collection
     */
    public get collection$(): Observable<T[]> {
      return this._collection$.asObservable();
    }
  
    /**
     * Getter que retorna o estado atual da Collection ou 
     * Setter que atribui uma nova Collection
     */
    public get collection(): T[] {
      return this._collection$.getValue();
    }
  
    public set collection(collection: T[]) {
      this._collection$.next(collection);
    }
  
    /**
     * Retorna um Observable com a quantidade de itens dentro da Collection
     */
    public get quantidadeRegistros$(): Observable<number> {
      return this.collection$.pipe(map(itens => itens.length));
    }
  
    /**
     * Busca o item com o id informado e retorna o objeto encontrado
     * @param {T} item id do item a ser buscado
     */
    public getById(id: number): T {
      return this.collection.find(item => item.id == id);
    }
  
    /**
     * Adiciona um item na Collection
     * @param {T} item item a ser adicionado
     */
    public adicionar(item: T): void {
      this.collection = [...this.collection, item];
    }
  
    /**
     * Busca o item com o id informado e altera o mesmo
     * dentro da Collection com as novas informações passadas de parâmetro
     * @param {T} item item a ser alterado
     */
    public alterar(item: T): void {
      const itemAlterar = this.getById(item.id);
  
      const index = this.collection.indexOf(itemAlterar);
      this.collection[index] = { ...item };
      this.collection = [...this.collection];
    }
  
    /**
     * Exclui o item com o id informado dentro da Collection
     * @param {T} item item a ser excluído
     */  
    public excluir(id: number): void {
      this.collection = this.collection.filter(item => item.id !== id);
    }
  
    /**
     * Exclui todos os itens da Collection
     */ 
    public limpar(): void {
      this.collection = [];
    }
  }