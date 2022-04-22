$(document).ready(function(){
    $("#Affiche").css("background-color", "#F01172");
    $("#Dépliant").css("background-color", "grey");
    $("#Kakémono").css("background-color", "grey");
    $(".Kakémono").hide();
    $(".Dépliant").hide();
    for(let i=1;i<7;i++){
        $("#grande_boite"+i).hide(); 
    }
    
    $("#Kakémono").click(function(){
        $("#Kakémono").css("background-color", "#F01172");
        $("#Dépliant").css("background-color", "grey");
        $("#Affiche").css("background-color", "grey");
        $(".Kakémono").show();
        $("#grande_boite6").show();
        $("#grande_boite5").show();
         
        for(let i=1;i<5;i++){
            $("#grande_boite"+i).hide(); 
        }
        $("#corps").hide();
        
    });


    $("#Dépliant").click(function(){
        $("#Dépliant").css("background-color", "#F01172");
       $("#Kakémono").css("background-color", "grey");
        $("#Affiche").css("background-color", "grey");
        for(let i=1;i<5;i++){
            $("#grande_boite"+i).show(); 
        }
        for(let i=5;i<7;i++){
            $("#grande_boite"+i).hide(); 
        }
        $("#corps").hide();
        $(".Dépliant").show(); 
    });
   
    $("#Affiche").click(function(){
       $("#Affiche").css("background-color", "#F01172");
        $("#Dépliant").css("background-color", "grey");
        $("#Kakémono").css("background-color", "grey");
        $(".Kakémono").hide();
        $(".Dépliant").hide();
        for(let i=1;i<7;i++){
            $("#grande_boite"+i).hide(); 
        }
        $("#corps").show();
        $(".Affiche").show();
    })

})