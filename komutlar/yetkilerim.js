module.exports = {
name:"yetkilerim",
code:`
$title[Kullanıcı Bilgi]
$description[
**__Yönetici:__ $replaceText[$replaceText[$hasPerms[$authorID;admin];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Sunucuyu Yönet:__ $replaceText[$replaceText[$hasPerms[$authorID;manageserver];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Üyeleri Yasakla:__ $replaceText[$replaceText[$hasPerms[$authorID;ban];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Üyeleri At:__ $replaceText[$replaceText[$hasPerms[$authorID;admin];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Everyone Ve Here Atma:__ $replaceText[$replaceText[$hasPerms[$authorID;mentioneveryone];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Rolleri Yönet:__ $replaceText[$replaceText[$hasPerms[$authorID;manageroles];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Kanalları Yönet:__ $replaceText[$replaceText[$hasPerms[$authorID;managechannels];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Kullanıcı Adlarını Yönet:__ $replaceText[$replaceText[$hasPerms[$authorID;managenicknames];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Mesajları Yönet:__ $replaceText[$replaceText[$hasPerms[$authorID;managemessages];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Emojiler Yönet:__ $replaceText[$replaceText[$hasPerms[$authorID;manageemojis];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Tepki Ekle:__ $replaceText[$replaceText[$hasPerms[$authorID;addreactions];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Denetim Kaydını Görüntüle:__ $replaceText[$replaceText[$hasPerms[$authorID;viewauditlog];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Mesaj Gönder:__ $replaceText[$replaceText[$hasPerms[$authorID;sendmessages];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Bağlan (Ses):__ $replaceText[$replaceText[$hasPerms[$authorID;connect];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Konuş (Ses):__ $replaceText[$replaceText[$hasPerms[$authorID;speak];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Üyeleri Sustur (Ses):__ $replaceText[$replaceText[$hasPerms[$authorID;mutemembers];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Bağlantı Kes (Ses):__ $replaceText[$replaceText[$hasPerms[$authorID;deafenmembers];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]
__Üyeleri Taşı (Ses):__ $replaceText[$replaceText[$hasPerms[$authorID;movemembers];true;<a:yes:802629858365669437>;-1];false;<a:792704133903810560:806932613322768404>;-1]**]

`
} 