$("#my-form").submit(function(e) {
    e.preventDefault();
  
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Merci pour votre message.Je vous répondrai rapidement");
    });
  });