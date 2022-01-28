import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './material.module';
import { MomentPipe } from './moment-pipe';
import { TotalizadorComponent } from './totalizador/totalizador.component';


const maskConfig: Partial<IConfig> = {
    validation: false,
  };


@NgModule({
    declarations:[
        TotalizadorComponent,
        MomentPipe,
    ],
    imports:[
        CommonModule,
        FormsModule,
        MaterialModule,
        NgxMaskModule.forRoot(maskConfig),
        CurrencyMaskModule
    ],
    exports:[
        TotalizadorComponent,
        MomentPipe,
        CurrencyMaskModule
    ],
})
export class SharedModule {

}