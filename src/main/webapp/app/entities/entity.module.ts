import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhtekRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhtekCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhtekLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhtekDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhtekTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhtekEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhtekJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhtekJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhtekRegionMySuffixModule,
        JhtekCountryMySuffixModule,
        JhtekLocationMySuffixModule,
        JhtekDepartmentMySuffixModule,
        JhtekTaskMySuffixModule,
        JhtekEmployeeMySuffixModule,
        JhtekJobMySuffixModule,
        JhtekJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhtekEntityModule {}
