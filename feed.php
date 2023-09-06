<?php
$rss_feed_url = 'https://totalsecurity.mx/Blog/feed';
$rss_feed = simplexml_load_file($rss_feed_url);

if ($rss_feed) {
    $limit = 5; // Número de posts a mostrar

    echo '<ul>';
    foreach ($rss_feed->channel->item as $item) {
        echo '<li><a href="' . $item->link . '">' . $item->title . '</a></li>';
    }
    echo '</ul>';
} else {
    echo 'No se pudo cargar el feed RSS.';
}
?>