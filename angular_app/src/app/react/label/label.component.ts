import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation, ContentChild, Input } from '@angular/core';
import * as React from 'react';
import { Root, createRoot } from 'react-dom/client';

@Component({
    selector: 'label-react',
    template: `<div #labelReact></div>`,
    encapsulation: ViewEncapsulation.None
})
export class LabelComponent implements AfterViewInit {

    @ViewChild('labelReact', { static: true }) containerRef!: ElementRef;
    @Input() text: string = '';
    root!: Root;

    ngAfterViewInit() {
        this.root = createRoot(this.containerRef.nativeElement);
        this.root.render('Carregando component from microfrontend...');

        try {
            import('reactMf/Label').then(Label => {
                this.root.render(React.createElement(Label.default, { text: this.text }));
            });
        } catch (error) {
            console.error('Error on load microfrontend: ', error);
        }
    }

    ngOnDestroy() {
        this.containerRef.nativeElement.unmount();
        this.root.unmount();
    }

}