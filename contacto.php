<?php

    $name = $_POST['name'];
    $apellido = $_POST['apellido'];
    $mail = $_POST['mail'];
    $presupuesto = $_POST['presupuesto'];
    $phone = $_POST['phone'];
    $proyecto = $_POST['proyecto'];
    $message = $_POST['message'];

    $header = 'From: ' . $mail . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $message = "Este mensaje fue enviado por: " . $name . " " . $apellido . " \r\n";
    $message .= "Su e-mail es: " . $mail . " \r\n";
    $message .= "Su presupuesto es de: " . $presupuesto . " \r\n";
    $message .= "Teléfono de contacto: " . $phone . " \r\n";
    $message .= "El tipo de proyecto es: " . $proyecto . " \r\n";
    $message .= "Mensaje: " . $_POST['message'] . " \r\n";
    $message .= "Enviado el: " . date('d/m/Y', time());

    $para = 'cotizacion@totalsecurity.mx';
    $asunto = 'Mensaje de Formulario Web';

    mail($para, $asunto, utf8_decode($message), $header);
    header("Location:./index.html");

?>