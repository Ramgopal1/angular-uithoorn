import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HelloComponent } from './hello.component';
import { AppRendererDirective } from './Directive/appRendererDirective';

@NgModule({
  declarations: [
    HelloComponent,
    AppComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    AppRendererDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
