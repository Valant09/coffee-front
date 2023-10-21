// nav-bar.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  private hideNavbar = false;

  getHideNavbar(): boolean {
    return this.hideNavbar;
  }

  setHideNavbar(value: boolean): void {
    this.hideNavbar = value;
  }
}

