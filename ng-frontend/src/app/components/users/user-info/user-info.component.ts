import { Component, Input } from '@angular/core';
import { IUser } from '../../../models/user-model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Input() user!: IUser;

  dynamicStyle = { color: 'gold', fontWeight: 700, backgroundColor: '#444' };

  dynamicClasses = { feature: false, 'my-border': true };

  onToggleClasses() {
    this.dynamicClasses['feature'] = !this.dynamicClasses['feature'];
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
  }

  onChangeStyle() {
    this.dynamicStyle = {
      ...this.dynamicStyle,
      color: 'orange',
    };
  }

  onResetStyle() {
    this.dynamicStyle = {
      ...this.dynamicStyle,
      color: 'gold',
    };
  }
}
