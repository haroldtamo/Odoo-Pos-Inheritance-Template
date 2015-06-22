function pos_template_db(instance, module){
    
   /* The PosDB holds reference to data that is either
     * - static: does not change between pos reloads
     * - persistent : must stay between reloads ( orders )
    */

    module.PosDB = pos_base.PosDB.include({
        init: function(options){
            this._super();
        }
    });
}
