$(function() {
    
    // Functions
    
    function show_page(page) {
        $(".page").hide();
        $("#" + page).show();
    }
    
    // Buttons
    // Go to biology
    $('.picker-level-1 .option#biology').click(function(){
        show_page('page-biology-home');
    });
    // Go to chemistry
    $('.picker-level-1 .option#chemistry').click(function(){
        show_page('page-chemistry-home');
    });
    // Go to physics
    $('.picker-level-1 .option#physics').click(function(){
        show_page('page-physics-home');
    });
    
    // Setup
    
    /* Show the home page */
    show_page('page-subject-selector');
    
});