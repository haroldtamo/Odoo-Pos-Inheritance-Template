function pos_template_models(instance, module){
    //pos_base is instance.point_of_sale;

    var QWeb = instance.web.qweb;
    var _t = instance.web._t;

    // Add a model to load at POS start
    pos_base.PosModel.prototype.models.push({
        model: 'model.name',
        fields: ['field1','field2','field3'],
        domain: null, //add a domain if wanted
        loaded: function(self,field){
            // Actions to do when the model has been loaded
        }
    });

}
