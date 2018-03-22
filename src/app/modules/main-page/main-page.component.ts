import { Component, OnInit } from '@angular/core';
import { Good } from '@models/good.model';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { GoodService } from '@services/good.service';
import { Paging } from '@models/paging.model';
import { CommentGood } from '@models/comment-good.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  goodAlt: Good;
  goods: Good[];
  pageInfo: Paging;
  trustedGoodUrl: SafeUrl;
  goodsLoading: boolean;

  constructor(private goodService: GoodService,
    private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.goodsLoading = true;
    this.getGoods(1, 9);
  }

  getGoods(currentPage: number, itemsPerPage: number) {
    this.goodService.getAllGoods(currentPage, itemsPerPage)
      .subscribe(
        gp => {
          this.goods = gp.goods;
          this.pageInfo = gp.pageInfo;
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

  moreLink(good: Good) {
    this.goodService.sendData(good);
    this.router.navigate(['/item-page', good.id]);
  }

  pageChanged() {
    this.getGoods(this.pageInfo.currentPage, this.pageInfo.itemsPerPage);
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '25rem';
    document.getElementById('main').style.marginLeft = '25rem';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
  }
}
