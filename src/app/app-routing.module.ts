import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  {path: 'table', component: TableComponent},
  {path: 'form', component: FormComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'author/:author', component: AuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TableComponent, FormComponent]
