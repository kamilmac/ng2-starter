# ng2-starter
###Angular2 starter with vscode config.



###npm install && npm start

I like to keep html and css in one .ts component file.
On top of that its nice to have cssnext (autoprefixing , nesting and many more) for inline styles. 


```javascript
@Component({
    selector: 'app',
    styles: [`
        container {
            display: flex;
            & .header {
                margin: 10px;
            }
        }
    `],
    template: '<h1>Ng2 starter</h1>'
})
export class AppComponent {
    constructor() {}
}
```

Turns to:

```javascript
@Component({
    selector: 'app',
    styles: [`
        container {
            display: flex;
            display:-webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
        }
        container .header {
            margin: 10px;
        }
    `],
    template: '<h1>Ng2 starter</h1>'
})
export class AppComponent {
    constructor() {}
}
```