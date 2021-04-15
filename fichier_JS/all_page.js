
function OpenMenu() { /* La fonction fait descendre ce qui est caché au dessus en cachant le texte "MENU"*/
    document.getElementById("ForAll").style.bottom = "0";
    document.getElementById("ForAll").style.top = "0";
    document.getElementById("menu_Tel").style.display = "none"
  }

function CloseMenu() { /* La fonction fait remonter ce qui était caché au dessus en remettant le texte "MENU" */
	  document.getElementById("ForAll").style.bottom = "auto";
    document.getElementById("ForAll").style.top = "-1350px";
    document.getElementById("menu_Tel").style.display = "block"
	}

function CloseMenu_CV() { /* En raison d'un problème particulier de la page, la fonction est légèrement modifier */
  document.getElementById("ForAll").style.bottom = "auto";
  document.getElementById("ForAll").style.top = "-1310px";
  document.getElementById("menu_Tel").style.display = "block"
}
