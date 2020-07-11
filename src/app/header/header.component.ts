import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isUserHavePermission: boolean = false;

  constructor(private authService: AuthService, private refDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.authService.isLoggedInSubject$.subscribe((loggedIn) => {
      this.isUserHavePermission = loggedIn;
      this.refDetector.detectChanges();
    });
  }

  ngOnDestroy(): void {

  }

  async logout(): Promise<void> {
    try {
      await this.authService.signOut();
    } catch (e) {
      console.warn(e);
    } finally {
      this.refDetector.detectChanges();
    }
  }

}
