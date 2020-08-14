import { Component, OnDestroy } from '@angular/core';
import { Actions } from '@ngxs/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnDestroy {

  isVisibleCounter = 0;
  subscription: Subscription = new Subscription();

  constructor(actions$: Actions) {
    this.subscription.add(
      actions$
        .subscribe((action) => {
          if (action.status === 'DISPATCHED') {
            this.isVisibleCounter++;
          } else if (this.isVisibleCounter > 0) {
            this.isVisibleCounter--;
          }
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
