var ruLang;
var enLang;

function getLangs(){
    $.getJSON("lang/ru.json", function(json){
        ruLang = json;
    });
    $.getJSON("lang/en.json", function(json){
        enLang = json;
    });
}

getLangs();

// Set the chosen language
$(".translate").click(function() {
    var lang = $(this).attr("id");
    $(".lang").each(function(index, element) {
        if(lang == 'en'){
            $(this).text(enLang[$(this).attr("key")]);
        }
        else{
            $(this).text(ruLang[$(this).attr("key")]);
        }
    });
});

$(document).ready(function() {
    var lang = navigator.language;
    $(".lang").each(function(index, element) {
        if(lang == 'ru'){
            $(this).text(ruLang[$(this).attr("key")]);
        }
        else{
            $(this).text(enLang[$(this).attr("key")]);
        }
    });
});
