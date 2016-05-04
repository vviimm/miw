window.Spinner =
  init: () ->
    $(document).on 'click', '#spinner', (event) ->
      $('.loader').show().fadeOut(1000);
      return
