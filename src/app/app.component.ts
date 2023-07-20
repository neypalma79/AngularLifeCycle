import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  title = 'AngularLifeCycle';

  ngOnChanges(changes: SimpleChanges): void {
    console.info('OnChanges');
  }

  ngOnInit(): void {
    console.info('Init');
  }

  ngAfterViewInit(): void {
    console.info('AfterViewInit');
  }

  ngOnDestroy(): void {
    console.info('Destroy');
  }
}
