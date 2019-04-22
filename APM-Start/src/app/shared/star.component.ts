import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();
    starWidth: number;

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(){
        this.ratingClicked.emit(this.rating);
    }
}