module.exports = {
  name:"sil",
  code:`$onlyPerms[managemessages;**Bu Komutu Kullanabilmek İçin ___Mesajları Yönet___ Yetkisine Sahip Olmalısın**]
$color[$random[0;999999]]
$deletecommand
$deleteIn[5s]
$clear[$message[1]]
$argsCheck[1;<a:792704133903810560:806932613322768404> **Silinecek Mesaj Miktarı Belirtmedin!**]
$onlyIf[$message[1]<101;**<a:792704133903810560:806932613322768404> Silinecek Mesaj Miktarı Belirtmedin!**]$description[ <a:yes:802629858365669437> **$message[1] Mesajı Başarıyla Sildim**]
$suppressErrors[ <a:792704133903810560:806932613322768404> **14 Günden Eski Mesajları Bot Silemez!**]`
}