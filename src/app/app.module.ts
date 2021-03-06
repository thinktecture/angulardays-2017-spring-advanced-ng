import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {PictureComponent} from './picture/picture.component';
import {CameraService} from './camera.service';
import {MobileCameraService} from './mobile-camera.service';
import {DesktopCameraService} from './desktop-camera.service';
import {StarwarsComponent} from './starwars/starwars.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { ViewComponent } from './view/view.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    StarwarsComponent,
    ViewComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [{
    provide: CameraService,
    useFactory: CameraServiceFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function CameraServiceFactory() {
  return window['cordova'] ? new MobileCameraService() : new DesktopCameraService();
}
