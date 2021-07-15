
  //להוסיף אירוע כאשר PANEL אחד נפתח, לשנות את הצבע רקע לצהוב ואת הרקע של ה-PANEL שנסגר לכחול



$( function() {
    $( "#accordion" ).accordion();

    $( "#accordion" ).on( "accordionactivate", function( event, ui ) {
        $(ui.newPanel).css("background-color","Yellow");
        $(ui.oldPanel).css("background-color","blue");
    } );
  } );
