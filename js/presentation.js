$(document).ready(function () {
    var presentation = {
        name:"",
        desc:""
    };
    var slide = {
        data:""
    };

    function add_new(presentation) {
        var new_presentation = _.template($("#presentationTemplate").html(), {title:presentation.name, description:presentation.desc});
        $("#presentationContainer").append(new_presentation);
    }

    $("#newPresentation button[type=submit]").click(function () {
        presentation.name = $("#name").val();
        presentation.desc = $("#description").val();
        add_new(presentation);
        $('#newPresentation')[0].reset();
        $("#addPresentationDialog").modal("toggle");
        $("#presentationsBox a.icon.icon-plus").bind('click', {data:presentation}, function (event) {
            var my_addSlide = $("#addSlideDialog");
            var my_slide_space = $("#presentationContainer .sldbox .slides");
        });
        return false;
    });

    function add_new_slide(slide) {
        var new_slide = _.template($("#slideTemplate").html(), {counter:slide.data});
        $("#presentationContainer .sldbox .slides").append(new_slide);
    }

    $("#newSlide a.btn.btn-primary").on("click", function (event) {
        slide.data = $("#markup").val();
        add_new_slide(slide);
        $("#addSlideDialog").modal("toggle");
    });

});


