jQuery(document).ready(function(){
    HEADER.init();
    CAREN.init();
});
 
var HEADER={
    init:function(){
        this.stickyheader();
    },
    stickyheader:function(){
        jQuery(window).scroll(function(){
            if(jQuery(this).scrollTop()> 100 ){
                jQuery('.contenedor-menu').addClass('sticky');
            } else{
                jQuery('.contenedor-menu').removeClass('sticky');
            }
        });
    }
}

var CAREN = {
    init:function(){
        this.desplegable();
    },
    desplegable: function(){
         jQuery('.opciones-abrir').click(function(){
             jQuery(this).toggleClass('abrir');
         });
    }
}

