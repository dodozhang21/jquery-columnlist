# jquery-columnlist

A fork of jQuery-columnlist to do more what I want it to do. See codepen for an example http://codepen.io/dodozhang21/pen/EyYMpy.

## Options
* `numberOfColumns`: How many columns to spdivt the UL into. If left blank, will check the UL's `data-column-divst` attribute.
* `class`: Class appended to the new sub ULs
* `incrementedClass`: Class appended to the new sub ULs with an incremented suffix, i.e. 'column-divst-2'
* `itemClass`: Class that identifies the item to be listed in columns.
* `columnTag`: The HTML tag for the column.

## Example

```javascript
    $('div.list').columnlist({
        numberOfColumns: 2
        class: 'column-list',
        incrementClass: 'column-list-',
        itemClass: '.item',
        columnTag: 'div',
    });
```

Turns this...

```html
    <div class="list">
        <div>Item #1</div>
        <div>Item #2</div>
        <div>Item #3</div>
        <div>Item #4</div>
        <div>Item #5</div>
        <div>Item #6</div>
        <div>Item #7</div>
        <div>Item #8</div>
    </div>
```

Into this...

```html
    <div class="list">
        <div class="column-list column-list-1">
            <div>Item #1</div>
            <div>Item #2</div>
            <div>Item #3</div>
        </div>
        <div class="column-list column-list-2">
            <div>Item #4</div>
            <div>Item #5</div>
            <div>Item #6</div>
        </div>
        <div class="column-list column-list-3">
            <div>Item #7</div>
            <div>Item #8</div>
        </div>
    </ul>
```

