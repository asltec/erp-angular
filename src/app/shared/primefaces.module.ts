import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

const primefacesModule = [
    InputTextModule

]

@NgModule({
    imports:[...primefacesModule],
    exports:[...primefacesModule]
})
export class PrimefacesModule {

    

}