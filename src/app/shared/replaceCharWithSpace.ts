import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "replaceCharWithSpace"
})

export class ReplaceCharWithSpace implements PipeTransform{
    transform(value: string, toReplace:string) : string {
        return value.replace(toReplace, ' ');
        
    }
}