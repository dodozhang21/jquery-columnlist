// jquery.columnlist.js
// @weblinc, @jsantell (c) 2012
// @dodozhang21 modified 2016

;(function ($) {
    $.fn.columnlist = function (options) {
        options = $.extend({}, $.fn.columnlist.defaults, options);

        return this.each(function () {
            var
              $list = $(this),
              numberOfColumns = options.numberOfColumns,
              $children = $list.find(options.itemClass),
              perColumn = Math.ceil($children.length / numberOfColumns),
              $column,
              columns = [];
            for (var i = 0; i < numberOfColumns; i++) {
                var k = i + 1;
                $column = returnColumn(k);
                for (var j = i * perColumn; j < i * perColumn + perColumn; j++) {
                    var $child = $children.eq(j);
                    $column.append($child);
                }
                columns.push($column);
            }

            $list = $list.empty();
            for (var o in columns) {
                var $column = columns[o];
                $list.append($column);
            }
        });

        function returnColumn(inc) {
            return $('<' + options.columnTag + ' class="' + options.incrementClass + inc + ' ' + options.class + '"/>');
        }
    };

    $.fn.columnlist.defaults = {
        class: 'column-list',
        incrementClass: 'column-list-',
        itemClass: '.item',
        columnTag: 'div',
        numberOfColumns: 2
    };

})(jQuery);
