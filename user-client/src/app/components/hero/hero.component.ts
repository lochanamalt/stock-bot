import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {MatSelectionList} from '@angular/material/list';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @ViewChild('companies') companySelectionList: MatSelectionList;
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  subscribeCompanies() {
    const selected = this.getSelected();
  }

  getSelected() {
    return this.companySelectionList.selectedOptions.selected.map(s => s.value);
  }
}
