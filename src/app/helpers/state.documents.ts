import { BehaviorSubject, Observable } from 'rxjs';

/**
 * @deion Classe de controle do Estado de um Document
 * @author Adauto Lucas
 */
export class StateDocument<T> {

    private _document$: BehaviorSubject<T>;
  
    /**
     * @deion Construtor da classe
     * @param {T} estadoInicial Estado Inicial que será passado para o Document
     */  
    constructor(estadoInicial: T) {
      this._document$ = new BehaviorSubject<T>(estadoInicial);
    }
  
    /**
     * Retorna um Observable do Document
     */  
    public get document$(): Observable<T> {
        return this._document$.asObservable();
    }
  
    /**
     * Getter que retorna o estado atual do Document ou 
     * Setter que atribui um novo valor para o Document
     */  
    public get document(): T {      
        return this._document$.getValue();
    }
  
    public set document(collection: T) {
      this._document$.next(collection);
    }
  
  }