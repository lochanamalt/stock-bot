import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {MatSelectionList} from '@angular/material/list';
import {ApiService} from '../../api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @ViewChild('companies') companySelectionList: MatSelectionList;
  profileJson: string = null;
  constructor(
    public auth: AuthService,
    private apiService: ApiService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }

  subscribeCompanies() {
    const selected = this.getSelected();
    const sub = this.profileJson.sub();
    const userId = sub.split('|').pop().trim();
    this.apiService.subscribeCompanies(userId, selected).subscribe(data => {
          this.snackBar.open('Successfully subscribed the selected companies. You\'ll be receiving stock analysis to your' +
            ' twitter DM daily', 'OK', { duration: 5000});
    });
  }

  getSelected() {
    return this.companySelectionList.selectedOptions.selected.map(s => s.value);
  }
}
