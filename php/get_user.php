<?php
/**
 * @file
 * User has successfully authenticated with Twitter. Access tokens saved to session and DB.
 */

/* Load required lib files. */
session_start();
require_once('twitteroauth/twitteroauth.php');
require_once('config.php');

/* Create a TwitterOauth object with consumer/user tokens. */
$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, OAUTH_TOKEN, OAUTH_TOKEN_SECRET);

$screen_name = isset($_GET["screen_name"]) ? $_GET["screen_name"] : "coadycodes";

/* If method is set change API call made. Test is called by default. */
$content = $connection->get('users/show', array('screen_name' => $screen_name));

echo json_encode($content);
