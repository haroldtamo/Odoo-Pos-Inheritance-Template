function pos_template_screens(instance, module){
    //module is instance.pos_template
    //pos_base is instance.point_of_sale;

    var QWeb = instance.web.qweb;
    _t = instance.web._t;

    module.ClientListScreenWidget = pos_base.ClientListScreenWidget.include({

    });

}
