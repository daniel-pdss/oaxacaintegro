import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatPage } from './chat/chat.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//========================= Fire Base==========================
//                    Key para firebase
import { FirebaseConfig } from '../environments/environment';
//                     Modulos de Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { DenunciasComponent } from './componentes/denuncias/denuncias.component';
import { AutoEvaluacionComponent } from './componentes/auto-evaluacion/auto-evaluacion.component';
import { from } from 'rxjs';
// ionic camara
import { Camera  } from '@ionic-native/camera/ngx';
@NgModule({
  declarations: [AppComponent,DenunciasComponent,AutoEvaluacionComponent],
  entryComponents: [DenunciasComponent,AutoEvaluacionComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(FirebaseConfig)],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
