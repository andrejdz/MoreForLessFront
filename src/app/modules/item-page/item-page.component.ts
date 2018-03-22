import { Component, OnInit } from '@angular/core';
import { Good } from '@models/good.model';
import { GoodService, CommentService, ScoreService } from '@services/index';
import { CommentGood } from '@models/comment-good.model';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  good: Good;
  commentText: string;
  score: number;

  disabled = false;

  constructor(
    private goodService: GoodService,
    private commentService: CommentService,
    private scoreService: ScoreService) {
    goodService.receiveData().subscribe(
      good => this.good = good);
  }

  ngOnInit() {
    this.score = Math.round(this.good.average);
  }

  addComment(text: string) {
    this.commentService.addComment({ 'goodId': this.good.id, 'text': text })
      .subscribe(c => this.good.comments.unshift(c),
        error => this.disabled = false,
        () => this.disabled = false);
  }

  addScore(score: number) {
    this.scoreService.addScore({ 'goodId': this.good.id, 'value': score })
      .subscribe(s => this.score = Math.round(s.value));
  }

  onSubmit() {
    if (this.commentText.length < 2000) {
      this.disabled = true;
      this.addComment(this.commentText);
      this.commentText = '';
    }
  }

  rateChanged(score: number) {
    if (score !== 0) {
      this.addScore(score);
    }
  }
}
