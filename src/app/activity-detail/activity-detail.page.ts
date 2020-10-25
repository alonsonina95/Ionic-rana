import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivityVideoPage } from '../activity-video/activity-video.page';
import { Activity } from '../interfaces';
import { ActivityService } from '../services/activity.service';
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {

  activityDetail: Observable<Activity>;
  constructor(
    private _socialSharing: SocialSharing,
    private modalController: ModalController,
    activityService: ActivityService,
    activatedRoute: ActivatedRoute
    ) {
      let activityID = activatedRoute.snapshot.params["activityID"];
      this.activityDetail = activityService.getActivity(activityID);
    }

  ngOnInit() {}

  async openModal() {
    const videoModal = await this.modalController.create({
      component: ActivityVideoPage
    });

    return await this.activityDetail.subscribe((activity) => {
      videoModal.componentProps = {
        videoURL: activity.video_url
      };
      return videoModal.present();
    });
  }

  share() {
    this.activityDetail.subscribe((activity) => {
      this._socialSharing.share("Look what I found on this app called Rana", activity.name,"",activity.cropped);
    });
  }

}
