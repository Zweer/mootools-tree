(function(){

this.Collapse.implement('options', {
    onExpand: function(element){
        var el = element.getElement(this.options.childSelector);
        if(!el.retrieve('collapse')){
            el.store('collapse', true);
            el.set('slide', { resetHeight: true });
        }

        el.slide('in');
    },
    onCollapse: function(element){
        var el = element.getElement(this.options.childSelector);
        if(!el.retrieve('collapse')){
            el.store('collapse', true);
            el.set('slide', { resetHeight: true });
        }

        el.slide('out');
    }
});

}).call(this);