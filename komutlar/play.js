
module.exports = {
    name: "çal",
    code: `   
    $color[$random[0;9999]]
$description[Şuanda Oynatılan Müzik **$songInfo[title]**

[Müzik Linki]($songInfo[url])

**Müzik İsmi **
$playSong[$message; **Böyle bir müzik bulamadım tekrar denermisin**]
$onlyIf[$voiceID!=; **Ses Kanalına Girmelisin**]
$onlyIf[$message!=; **Bir Müzik İsmi Girmelisin**]`
}