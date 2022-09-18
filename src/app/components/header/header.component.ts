import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'About me',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Fomation',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Hobbies',
        icon: 'pi pi-fw pi-send',
      }
    ];
  }
}
