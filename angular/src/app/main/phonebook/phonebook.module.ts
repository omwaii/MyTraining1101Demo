import {NgModule} from '@angular/core';
import {AppSharedModule} from '@app/shared/app-shared.module';
import {PhoneBookRoutingModule} from './phonebook-routing.module';
import {PhoneBookComponent} from './phonebook.component';
import { CreatePersonModalComponent } from '../create-person-modal.component';
import { EditPersonModalComponent } from '../edit-person-modal.component';
import { ModalModule } from '@node_modules/ngx-bootstrap/modal';

@NgModule({
    declarations: [PhoneBookComponent,CreatePersonModalComponent,EditPersonModalComponent],
    imports: [AppSharedModule, PhoneBookRoutingModule, ModalModule]
})
export class PhoneBookModule {}
