$(document).ready(function() {

    // console.log('ready!');​
    $(".devour-form").submit(function (event) {
        event.preventDefault();
        var burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: '/api/burgers/' + burger_id
        }).then(function(data){
           location.reload();
        });
    });
});