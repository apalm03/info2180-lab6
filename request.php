<?php
// accept a term (keyword)
// respond with a value
$query = $_GET['q'];
$definition = [
    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "A place that sells alcholic beverages",
    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
    "html" => "The standard markup language for creating web pages and web applications.",
    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
    
];
$xmldata = '<?xml version="1.0" encoding="UTF-8"?>
<entries>
    <definition>
        <name>definition</name>
        <def>a statement of the exact meaning of a word, especially in a dictionary</def>
        <author>Kim</author>
    </definition>
    
    <definition>
        <name>bar</name>
        <def>a place that sells alcholic beverages</def>
        <author>Mary</author>
    </definition>
    
    <definition 
        <name>ajax</name>
        <def>technique which involves the use of javascript and xml</def>
        <author>Latoya</author>
    </definition>
    
    <definition>
        <name>html</name>
        <def>The standard markup language for creating web pages and web applications.</def>
        <author>Latoya</author>
    </definition>
    
    <definition>
        <name>css</name> 
        <def>A style sheet language used for describing the presentation of a document written in a markup language.</def>
        <author>Tommy</author>
    </definition>
    
    <definition>
        <name>javascript</name>
        <def>A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.</def>
    </definition>
    
    <definition>
        <name>php</name>
        <def>A server-side scripting language, and a powerful tool for making dynamic and interactive websites.</def>
        <author>Camille</author>
    </definition>
</entries>';
if ($query=="&all=true"){
    header('Content-Type: text/xml');
    $xmlOutput = new SimpleXMLElement($xmldata);
    echo $xmlOutput->asXML();
} else {
    print "<h3>" . strtoupper($query) . "</h3>";
    print "<p>" . $definition[$query] . "</p>";
}