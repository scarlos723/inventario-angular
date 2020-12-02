import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { OrdenesCotizacionesComponent } from './ordenes-cotizaciones/ordenes-cotizaciones.component';
import { ProveedoresComprasComponent } from './proveedores-compras/proveedores-compras.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ListaOrdenesComponent } from './lista-ordenes/lista-ordenes.component';
import { ListaCotizacionesComponent } from './lista-cotizaciones/lista-cotizaciones.component';
import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';
import { VerProveedorComponent } from './ver-proveedor/ver-proveedor.component';
import { UserComponent } from './user/user.component';
import { SearchPipe } from './pipes/search';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [  //Aqui se colocan las rutas o paths de navegacion
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path: 'dash', component: DashComponent},
  {path: 'lista-clientes', component: ListaClientesComponent},
  {path: 'lista-productos', component: ListaProductosComponent},
  {path: 'ordenes-cotizaciones', component: OrdenesCotizacionesComponent},
  {path: 'proveedores-compras', component: ProveedoresComprasComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'lista-ordenes', component: ListaOrdenesComponent},
  {path: 'lista-cotizaciones', component: ListaCotizacionesComponent},
  {path: 'lista-proveedores', component: ListaProveedoresComponent},
  {path: 'ver-cliente/:id', component: VerClienteComponent},
  {path: 'ver-proveedor/:id' , component: VerProveedorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ListaClientesComponent,
    MenuComponent,
    ListaProductosComponent,
    OrdenesCotizacionesComponent,
    ProveedoresComprasComponent,
    ReportesComponent,
    ListaOrdenesComponent,
    ListaCotizacionesComponent,
    ListaProveedoresComponent,
    UserComponent,
    VerClienteComponent,
    VerProveedorComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule    //comentado por que en el curso de platzi no se usa
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
