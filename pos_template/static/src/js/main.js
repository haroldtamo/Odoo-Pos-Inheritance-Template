openerp.pos_template = function(instance) {

    var module = instance.pos_template; // Create namespace of pos_template for your own classes

    var pos_base = instance.point_of_sale; // Namespace of point_of_sale module that holds classes of the POS

    pos_template_db(instance,module);         // import db.js

    pos_template_models(instance,module);     // import models.js

    pos_template_screens(instance,module);    // import screens.js

    pos_template_widgets(instance,module);    // import widgets.js

};


