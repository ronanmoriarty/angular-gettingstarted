import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ConvertToSpacesPipe,
    StarComponent,
    CommonModule,
    FormsModule
   ]
})
export class SharedModule { }
