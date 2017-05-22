/**
 * Created by Blue Butterfly on 28/04/2017.
 */
function menu(object) {
    var object1 = "characters";
    var object2 = "history";
    var object3 = "worlds";
    var object4 = "items";

    switch (object){

        case "characters":

            $("."+object+ '.dropdown-menu.inside-menu.list-unstyled').show();
            $("."+object2+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object3+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object4+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object+ '.dropdown-menu.inside-menu.list-unstyled').attr("style","display:grid");
            break;

        case "history":
            $("."+object+ '.dropdown-menu.inside-menu.list-unstyled').show();
            $("."+object1+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object3+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object4+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object+ '.dropdown-menu.inside-menu.list-unstyled').attr("style","display:grid");
            break;

        case "worlds":
            $("."+object+ '.dropdown-menu.inside-menu.list-unstyled').show();
            $("."+object1+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object2+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object4+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object+ '.dropdown-menu.inside-menu.list-unstyled').attr("style","display:grid");
            break;


        case "items":
            $("."+object+ '.dropdown-menu.inside-menu.list-unstyled').show();
            $("."+object1+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object2+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object3+ '.dropdown-menu.inside-menu.list-unstyled').hide();
            $("."+object+ '.dropdown-menu.inside-menu.list-unstyled').attr("style","display:grid");
            break;
    }
}
