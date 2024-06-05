import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { Root, createRoot } from 'react-dom/client';
import * as React from 'react';

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
        this.root.render('Loading micro-frontend component...');
        try {
            import('reactMf/Label').then(Label => {
                this.root.render(React.createElement(Label.default, { text: this.text }));
            });
        } catch (error) {
            console.error('Error on load micro-frontend component: ', error);
        }
    }

    ngOnDestroy() {
        this.containerRef.nativeElement.unmount();
        this.root.unmount();
    }
}