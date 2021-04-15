    <?php

    $Nom = $_POST["Nom"];
    $Email = $_POST["Email"];
    $N°Téléphonique = $_POST["N°Téléphonique"];
    $Message = $_POST["Message"];
    $Genre = $_POST["Genre"];

    $msg = "Genre:\t$Genre\n";
    $msg .= "Nom:\t$Nom\n";
    $msg .= "Email:\t$Email\n";
    $msg .= "N°Téléphonique;\t$N°Téléphonique\n";
    $msg .= "Message:\t$Message\n\n";

    $recipient = "dylangirault973@gmail.com";
    $subject = "Formulaire Portfolio";

    $mailheaders = "From: formulaire";
    $mailheaders .= "Reply-To: $Email\n\n";

    mail($recipient, $subject, $msg, $mailheaders);

    echo "<HTML><HEAD>";
    echo "<TITLE>Formulaire envoyer!</TITLE></HEAD></HTML>";
    echo "<H1 align=center>Merci, $Nom </H1>";
    echo "<P align=center>";
    echo "Votre formulaire a bien été envoyé !</P>";
    echo "<form action=\"../index.html\">";
    echo "<button align=\"center\">Revenir à la page d'accueil</button></form>";
    echo "</BODY></HTML>";


    ?>