import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'caelumpic-mensagem',
  template: `
    <p class="alert alert-{{tipo}}">
      {{texto}}
    </p>
  `,
  styles: []
})
export class MensagemComponent implements OnInit {
  @Input() tipo = 'primary';
  @Input() texto = ''

  constructor() { }

  ngOnInit() {
  }

}
