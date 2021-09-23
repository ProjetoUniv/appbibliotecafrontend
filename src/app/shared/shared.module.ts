import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MensagemModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    MensagemModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
})
export class SharedModule { }
