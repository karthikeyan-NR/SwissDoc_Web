import { ModuleWithProviders, NgModule } from '@angular/core';

const APIS: any = [];

const CONTROLLERS: any = [];

@NgModule({
    imports: [
        
    ]
})
export class AppApiModule {
    static forRoot(): ModuleWithProviders<AppApiModule> {
        return {
            ngModule: AppApiModule,
            providers: [...APIS, ...CONTROLLERS]
        };
    }
}
