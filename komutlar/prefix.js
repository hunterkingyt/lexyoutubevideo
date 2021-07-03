module.exports = {
name: "prefix", 
aliases:['prefix-ayarla'],
code: `$setServerVar[prefix;$message[1]]
<a:yes:802629858365669437> **Prefix Başarıyla Ayarlandı. Yeni Prefix :** \`$message[1] \`
$onlyPerms[admin;<a:792704133903810560:806932613322768404> **Bunu Yapmak İçin Yeterli Yetkin Bulunmuyor**]
$suppressErrors[<a:792704133903810560:806932613322768404> **Hata Oluştu **]
$argsCheck[<1;<a:792704133903810560:806932613322768404> **Hangi Prefixi Yapıcam Söylemedin**]
$onlyIf[$message[1]!=;<a:792704133903810560:806932613322768404> **Hangi Prefixi Yapıcam Söylemedin**]`
}