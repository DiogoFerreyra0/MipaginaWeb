<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
   
    $nombre    = strip_tags(trim($_POST["nombre"]));
    $telefono  = strip_tags(trim($_POST["telefono"]));
    $plan      = strip_tags(trim($_POST["plan"]));
    $mensaje   = htmlspecialchars(trim($_POST["mensaje"]));

   
    $destinatario = "hola@digitaldiogo.com"; 
    
   
    $asunto = "Nuevo cliente potencial: $nombre";

   
    $cuerpoMail  = "Has recibido una nueva consulta desde tu sitio web.\n\n";
    $cuerpoMail .= "👤 Nombre: $nombre\n";
    $cuerpoMail .= "📞 Teléfono / WhatsApp: $telefono\n";
    $cuerpoMail .= "💼 Plan elegido: " . (!empty($plan) ? $plan : "No especificó un plan") . "\n\n";
    $cuerpoMail .= "💬 Mensaje o Idea:\n$mensaje\n";

   
    $headers  = "From: consultas@digitaldiogo.com\r\n"; 
    $headers .= "Reply-To: $destinatario\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    
    if (mail($destinatario, $asunto, $cuerpoMail, $headers)) {
      
        http_response_code(200);
        echo "¡Mensaje enviado con éxito!";
    } else {
        
        http_response_code(500);
        echo "Error interno: El servidor no pudo despachar el correo.";
    }

} else {
    
    http_response_code(403);
    echo "Acceso restringido.";
}
?>