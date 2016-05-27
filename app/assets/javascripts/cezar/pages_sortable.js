window.Sort = {
  init: function() {

    $().ready(function() {
      var ns = $('ol.sortable').nestedSortable({
        forcePlaceholderSize: true,
        handle: 'div',
        helper: 'clone',
        items: 'li',
        opacity: .6,
        placeholder: 'placeholder',
        revert: 250,
        tabSize: 25,
        tolerance: 'pointer',
        toleranceElement: '> div',
        isTree: true,
        expandOnHover: 700,
        startCollapsed: false,
        excludeRoot: true,

        stop: function() {
          arraied = $(this).nestedSortable('toArray', {startDepthCount: 0});

          $.ajax({
              type: "PUT",
              url: "../cezar/update_position",
              data :JSON.stringify(arraied),
              dataType: 'json',
              contentType: "application/json"
          });

          // $.ajax({
          //     url: "../cezar/refresh_part"
          // });
        }
      });

      $('.expandEditor').attr('title','Кликни для редактирования');
      $('.disclose').attr('title','Показать/скрыть детали');
      $('.deleteMenu').attr('title', 'Кликни для удаления');

      $('.disclose').on('click', function() {
        $(this).closest('li').toggleClass('mjs-nestedSortable-collapsed').toggleClass('mjs-nestedSortable-expanded');
        $(this).toggleClass('ui-icon-plusthick').toggleClass('ui-icon-minusthick');
      });
    });
  }
};

