import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LinkCategoryService} from "../../../../@core/data/link-category.service";

@Component({
    selector: 'ngx-add-edit-category',
    templateUrl: './add-edit-category.component.html',
    styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent implements OnInit {

    categoryId;
    category;
    successMessage;
    errorMessage;

    constructor(private route: ActivatedRoute, private linkCategoryService: LinkCategoryService) {
        this.category = {title: ''};
    }

    ngOnInit() {
        this.categoryId = this.route.snapshot.paramMap.get('id');
        if (this.categoryId) {
            //get the user from the database and set to the user
            this.getCategory();
        }
    }

    getCategory() {
        this.linkCategoryService.getCategory(this.categoryId).subscribe(
            data => {
                this.setCategory(data);
            },
            err => {
                console.log(err);
            }
        );
    }

    createCategory() {
        // get the user from the localstorage
        const category = {
            title: this.category.title,
        };
        if (this.categoryId) {
            this.update(category);
        } else {
            this.insert(category);
        }
    }
    insert(category) {
        this.linkCategoryService.createCategory(category).subscribe(
            data => {
                this.successMessage = data.message;
                this.setCategory(data);
            },
            err => {
                const {error} = err;
                this.errorMessage = error.message;
            }
        );
    }
    update(category) {
        this.linkCategoryService.updateCategory(category, this.categoryId).subscribe(
            data => {
                this.successMessage = data.message;
                this.setCategory(data);
            },
            err => {
                const {error} = err;
                this.errorMessage = error.message;
            }
        );
    }
    setCategory(data) {
        this.category.title = data.category.title;
    }

}
