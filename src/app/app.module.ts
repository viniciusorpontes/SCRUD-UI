import { ClienteCadastroComponent } from './clientes/cliente-cadastro/cliente-cadastro.component';
import { ClientePesquisaComponent } from './clientes/cliente-pesquisa/cliente-pesquisa.component';
import { ClientesModule } from './clientes/clientes.module';
import { CidadeCadastroComponent } from './cidades/cidade-cadastro/cidade-cadastro.component';
import { CidadePesquisaComponent } from './cidades/cidade-pesquisa/cidade-pesquisa.component';
import { CidadesModule } from './cidades/cidades.module';
import { EstadoCadastroComponent } from './estados/estado-cadastro/estado-cadastro.component';
import { EstadoPesquisaComponent } from './estados/estado-pesquisa/estado-pesquisa.component';
import { EstadosModule } from './estados/estados.module';
import { ProdutoCadastroComponent } from './produtos/produto-cadastro/produto-cadastro.component';
import { ProdutoPesquisaComponent } from './produtos/produto-pesquisa/produto-pesquisa.component';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriaCadastroComponent } from './categorias/categoria-cadastro/categoria-cadastro.component';
import { CategoriaService } from './categorias/categoria.service';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaPesquisaComponent } from './categorias/categoria-pesquisa/categoria-pesquisa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriasModule } from './categorias/categorias.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { SettingComponent } from './components/setting/setting.component';
import { AccordionModule } from 'primeng/accordion';

const routes: Routes =  [
  { path : '', component: ContentComponent},
  { path: 'categorias', component: CategoriaPesquisaComponent},
  { path: 'categorias/novo', component: CategoriaCadastroComponent},
  { path: 'categorias/:id', component: CategoriaCadastroComponent},
  { path: 'produtos', component: ProdutoPesquisaComponent},
  { path: 'produtos/novo', component: ProdutoCadastroComponent},
  { path: 'produtos/:id', component: ProdutoCadastroComponent},
  { path: 'estados', component: EstadoPesquisaComponent},
  { path: 'estados/novo', component: EstadoCadastroComponent},
  { path: 'estados/:id', component: EstadoCadastroComponent},
  { path: 'cidades', component: CidadePesquisaComponent},
  { path: 'cidades/nova', component: CidadeCadastroComponent},
  { path: 'cidades/:id', component: CidadeCadastroComponent},
  { path: 'clientes', component: ClientePesquisaComponent},
  { path: 'clientes/novo', component: ClienteCadastroComponent},
  { path: 'clientes/:id', component: ClienteCadastroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    CategoriasModule,
    ProdutosModule,
    EstadosModule,
    CidadesModule,
    ClientesModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }