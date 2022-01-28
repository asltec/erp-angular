import { CurrencyMaskConfig } from 'ngx-currency/src/currency-mask.config';
import { CurrencyMaskInputMode } from 'ngx-currency/src/currency-mask.config';

export const CustomCurrencyMaskConfig : CurrencyMaskConfig = {

    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: ".",
    nullable: true,
    min: null,
    max: null,
    inputMode: CurrencyMaskInputMode.FINANCIAL

};