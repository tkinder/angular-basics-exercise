import { Component, OnInit } from '@angular/core';
import { createPublicKey } from 'crypto';
import { title } from 'process';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
title = 'This is the title';
content = 'This is some content';
isTechRelated = true;
changeButtonState = true;

  constructor() { }

  getColor() {
  return this.isTechRelated === false ? 'yellow' : 'blue';
  }

  buttonClick() {
  this.isTechRelated = !this.isTechRelated

}

  ngOnInit(): void {
  }
}




