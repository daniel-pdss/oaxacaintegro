import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatPage } from './chat/chat.page';
import { DenunciaComponent } from './componentes/denuncia/denuncia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//========================= Fire Base==========================
//                    Key para firebase
import { FirebaseConfig } from '../environments/environment';
//                     Modulos de Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [DenunciaComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestore,
    AngularFireModule.initializeApp(FirebaseConfig),
    DenunciaComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
