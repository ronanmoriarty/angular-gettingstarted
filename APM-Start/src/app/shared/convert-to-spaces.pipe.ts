import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, characterToConvert: string):string {
        return value.replace(characterToConvert, ' ');
    }
}