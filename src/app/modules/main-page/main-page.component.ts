import { Component, OnInit } from '@angular/core';
import { Good } from '@models/good.model';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { GoodService, CategoryService } from '@services/index';
import { Paging } from '@models/paging.model';
import { CommentGood } from '@models/comment-good.model';
import { Router } from '@angular/router';
import { Category } from '@app/shared/models/category.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  goods: Good[];
  categories: Category[];
  selectedCategory: string;
  pageInfo: Paging;
  trustedGoodUrl: SafeUrl;
  goodsLoading: boolean;

  constructor(private goodService: GoodService, private categoryService: CategoryService,
    private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.goodsLoading = true;
    this.getCategories();
    this.getGoods(this.categoryService.currentPage === undefined ? 1 : this.categoryService.currentPage,
      9,
      this.categoryService.categoryId === undefined ? '172282' : this.categoryService.categoryId);
  }

  getGoods(currentPage: number, itemsPerPage: number, categoryId: string) {
    this.goodService.getAllGoods(currentPage, itemsPerPage, categoryId)
      .subscribe(
        gp => {
          this.goods = gp.goods;
          this.pageInfo = gp.pageInfo;
          this.categoryService.categoryId = this.selectedCategory = categoryId;
          this.categoryService.currentPage = gp.pageInfo.currentPage;
        },
        undefined,
        () => this.goodsLoading = false);
  }

  getTrustedGoodUrl(goodUrl: string): SafeUrl {
    return this.trustedGoodUrl = this.sanitizer.bypassSecurityTrustUrl(goodUrl);
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(c => this.categories = c);
  }

  moreLink(good: Good) {
    this.goodService.good = good;
    this.router.navigate(['/item-page', good.id]);
  }

  pageChanged() {
    this.getGoods(this.pageInfo.currentPage, this.pageInfo.itemsPerPage, this.selectedCategory);
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '25rem';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.body.style.backgroundColor = 'white';
  }

  chooseCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    this.getGoods(1, 9, categoryId);
  }
}
