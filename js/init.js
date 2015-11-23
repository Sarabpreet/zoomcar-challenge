(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
     $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

      $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

      

  }); // end of document ready
})(jQuery); // end of jQuery name space

