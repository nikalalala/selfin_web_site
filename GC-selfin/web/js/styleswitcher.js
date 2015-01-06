var widthLink = $("link[href|='css/width']");
var colorLink = $("link[href|='css/style']");
var switchCheck = $('input[name="full-width-checkbox"]');


if($.cookie("reason-color")) {
    colorLink.attr("href","css/" + $.cookie("reason-color"));
}

if($.cookie("reason-width")) {
    widthLink.attr("href","css/" + $.cookie("reason-width"));

    if ($.cookie("reason-width") == "width-boxed.css" && switchCheck.bootstrapSwitch('state')) {
        switchCheck.bootstrapSwitch('state', false);
    }
}

$(document).ready(function() {
    $("#color-options .color-box").click(function() {
        colorLink.attr("href", "css/" + $(this).attr('rel'));
        colorLink.attr("href", "css/" + $(this).attr('rel'));
        $.cookie("reason-color",$(this).attr('rel'), {expires: 7, path: '/'});
        return false;
    });

    $("#width-options .container-option").click(function() {
        widthLink.attr("href", "css/" + $(this).attr('rel'));
        $.cookie("reason-width",$(this).attr('rel'), {expires: 7, path: '/'});
        return false;
    });

    switchCheck.on('switchChange.bootstrapSwitch', function(event, state) {
        if (state) {
            widthLink.attr("href", "css/width-full.css");
            $.cookie("reason-width", "width-full.css", {expires: 7, path: '/'}); }
        else
        {
            widthLink.attr("href", "css/width-boxed.css");
            $.cookie("reason-width", "width-boxed.css", {expires: 7, path: '/'});
        }
    });
});
