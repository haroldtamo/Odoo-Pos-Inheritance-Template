function pos_template_widgets(instance, module){
    //module is instance.pos_template
    //pos_base is instance.point_of_sale;

    var QWeb = instance.web.qweb;
    _t = instance.web._t;

    module.OrderWidget = pos_base.OrderWidget.include({
        template:'OrderWidget',

        init: function(parent, options) {
            var self = this;
            this._super(parent,options);
        }
    });

}
