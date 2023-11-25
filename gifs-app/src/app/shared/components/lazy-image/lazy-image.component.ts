import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';
  @Input()
  public width: string = '35';
  @Input()
  public height: string = '35';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('url property is required');
  }

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
