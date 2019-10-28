<?php
$Name = $_POST['Name'];
$Email = $_POST['Email'];
$Phone = $_POST['Phone'];
$Text = $_POST['Text'];


// Получатель
$to  = 'bauprice@mail.ru';


// тема письма
$subject = 'Обратная связь с сайта bauprice.com';

// текст письма
$message = '
<h2> Обратная связь с сайта bauprice.com </h2>
Имя: '.$Name.'
<br>
E-mail: '.$Email.'
<br>
Телефон '.$Phone.'
<br>
Описание: '.$Text;

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
// отправитель
$headers .= 'From: bauprice.com <info@bau-price.ru>' . "\r\n";

// Отправляем
mail($to, $subject, $message, $headers);

?>