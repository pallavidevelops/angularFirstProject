import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating : number = 0;
    @Output() notifyContainerComponent : EventEmitter<string> = new EventEmitter<string>();
    cropWidth: number = 75;

    ngOnChanges(): void{
        this.cropWidth = this.rating * 75/5;
    }
    changeRating():void{
        console.log(`change rating to  ${this.rating}`);
        this.notifyContainerComponent.emit(this.rating.toString());
    }
}