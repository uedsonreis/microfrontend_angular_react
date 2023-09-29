import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as React from 'react';
import { Root, createRoot } from 'react-dom/client';

@Component({
    selector: 'app-react',
    templateUrl: './react.component.html',
    styleUrls: ['./react.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ReactComponent implements AfterViewInit {

    @ViewChild('reactContainer', { static: true }) containerRef!: ElementRef;
    root!: Root;

    ngAfterViewInit() {
        this.root = createRoot(this.containerRef.nativeElement);
        this.root.render('Carregando microfrontend...');

        try {
            import('reactMf/App').then(ReactApp => {
                this.root.render(React.createElement(ReactApp.default));
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