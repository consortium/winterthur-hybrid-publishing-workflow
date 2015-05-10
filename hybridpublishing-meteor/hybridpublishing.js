if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup

    });
}

if (Meteor.isClient) {
    // initialise router. just one route added
    Router.route('/', function () {
        Session.set('currentPage', 'main');
        this.render('main');
    });

    // external links
    var isExternal = function (href) {
        if (href.indexOf("http") === -1 || href.indexOf(document.location.host) !== -1 || href.indexOf("localhost") !== -1 || href.indexOf("127.0.0.1") !== -1) {
            return false;
        }
        return true;
    };


    Meteor.startup(function () {
        // une fois que toute la structure de la page est là: action
        $(document).ready(function () {


            // action: si c'est externe, on attribue à "ça" une target pour le lien qui est un nouvel onglet
            $("a[href]").each(

            function () {
                if (isExternal($(this).attr('href'))) {
                    $(this).attr('target', '_blank')
                }
            });

            $('a').smoothScroll();

        });
    });
}
