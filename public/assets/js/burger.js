$(document).ready(function(){

    console.log('ready!');
​
    $(".devour-form").on("submit", function (event) {
        event.preventDefault();
​
        var burger_id = $(this).children(".burger_id").val();
        console.log(burger_id);
​
        // pass the id of the clicked buger to update it
        $.ajax({
            method: "PUT",
            url: `/burgers/${burger_id}`
        }).then(function(data){
​
            location.reload();
        });
​
    });
});