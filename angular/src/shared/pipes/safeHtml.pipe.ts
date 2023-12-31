import { PipeTransform, Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Pipe({
    name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer){}
    transform(value: any, ...args: any[]) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}