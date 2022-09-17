import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaMarcusComponent } from './tarefa-marcus/tarefa-marcus.component';

const routes: Routes = [
  {path: '', component: TarefaMarcusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
