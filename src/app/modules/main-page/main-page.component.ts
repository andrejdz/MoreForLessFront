import { Component, OnInit } from '@angular/core';
import { Good } from '@models/good.model';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { GoodService } from '@services/good.service';
import { Paging } from '@models/paging.model';
import { CommentGood } from '@models/comment-good.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  goodAlt: Good;
  goods: Good[];
  paging: Paging;
  trustedGoodUrl: SafeUrl;
  goodsLoading: boolean;

  constructor(private goodService: GoodService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.goodsLoading = true;
    this.getGoods(1, 10);
    // this.getGoodById(23);
    // this.getCommentById(23);
  }

  getGoods(currentPage: number, itemsPerPage: number) {
    this.goodService.getAllGoods(currentPage, itemsPerPage)
      .subscribe(
        gp => {
          this.goods = gp.goods;
          this.paging = gp.paging;
        },
        undefined,
        () => this.goodsLoading = false);
  }

  getGoodById(goodId: number) {
    this.goodService.getGoodById(goodId)
      .subscribe(g => this.goodAlt = g);
  }

  getTrustedGoodUrl(goodUrl: string): SafeUrl {
    return this.trustedGoodUrl = this.sanitizer.bypassSecurityTrustUrl(goodUrl);
  }
}
