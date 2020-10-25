import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityVideoPageRoutingModule } from './activity-video-routing.module';

import { ActivityVideoPage } from './activity-video.page';
import { ActivityDetailPage } from '../activity-detail/activity-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityVideoPageRoutingModule
  ],
  entryComponents:[ActivityDetailPage],
  declarations: [ActivityVideoPage]
})
export class ActivityVideoPageModule {}
