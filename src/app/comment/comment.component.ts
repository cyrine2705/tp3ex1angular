import { Component, OnInit,Input } from '@angular/core';
import { Commentaire } from '../commentaire';
import { Pizza } from '../pizza';

@Component({
  selector: 'cyr-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
 

  @Input("comm")e!: Commentaire;

  constructor() { }

  ngOnInit(): void {
  }

}
