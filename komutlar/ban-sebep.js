module.exports = ({
name:"bansebep",
aliases:['ban-sebep','ban-sebebi','bansebebi'],
code:`$if[$isNumber[$message[1]]==true]
$title[Lex Ban - Sebep Sistemi]
$description[**Kullanıcı :** \`$userTag[$message[1]]\`
**Ban Sebebi:** \`$getBanReason[$message[1]]\`
$thumbnail[$userAvatar[$message[1]]]
$footer[Toplam Ban Sayısı: $banCount;$authorAvatar]
$color[RANDOM]
$onlyIf[$isBanned[$message[1]]==true;$customEmoji[yanlis] Ban Sebebine Bakmaya Çalıştığınız Kullanıcı Sunucudan Banlanmamış.]
$else
$title[$userTag[$mentioned[1]] Kullanıcısının Ban Sebebi]
$description[Kullanıcı : $userTag[$mentioned[1]
Ban Sebebi: $getBanReason[$mentioned[1]]
Toplam Ban Sayısı : $banCount]
$thumbnail[$userAvatar[$mentioned[1]]]
$footer[İsteyen : $username;$authorAvatar]
$color[RED]
$onlyIf[$isBanned[$mentioned[1]]==true;$customEmoji[yanlis] Ban Sebebine Bakmaya Çalıştığınız Kullanıcı Sunucudan Banlanmamış.]
$onlyIf[$mentioned[1]!=;$customEmoji[yanlis] **Ban Sebebine Bakmanız İçin Bir** \`ID\` **Belirtin**]
$endif
$onlyBotPerms[ban;$customEmoji[yanlis] **Kullanıcıların Ban Sebeplerini Görmem İçin** \`Üyeleri Yasakla \` **Yetkisine Sahip Olmam Lazım**]`
})
