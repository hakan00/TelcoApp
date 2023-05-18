import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-overlay-title',
  templateUrl: './overlay-title.component.html',
  styleUrls: ['./overlay-title.component.css'],
})
export class OverlayTitleComponent implements OnInit {
  // !: bu kısmı kullanmadan önce atacağıma dair söz vermiş oluyoruz.
  // ?: bu kısım aynı zamanda undefined olabilir demek.
  @Input() text!: string;

  constructor(
    public router: Router
  ) {
    // undefined: bir şeyin tanımlı olmadığını gösterir.
    // null: programcı tarafından verilen bir değerdir. Dolayısıyla JS null değerini ayrı bir tip olarak ele alır.
    // this.text = null;
    // this.text = "Hello";
  }

  ngOnInit(): void {}
}
