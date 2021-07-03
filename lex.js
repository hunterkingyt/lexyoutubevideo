const lex = require("aoi.js")
var fs = require('fs');
const bot = new lex.Bot({
  token: "ODU2NDY3OTAzOTkzNzQxMzMz.YNBd5A.b-Ul0wwQh_o4ssxs4k2H9_dZFi4",
  prefix: ["$getServerVar[prefix]","*"],
  mobile: false,
  fetchInvites: true
})
bot.onLeave()
bot.onJoined()
bot.onMessage()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}

//variablelar
bot.variables({
çban:"k",
çl:"",
afks:"",
afk:"hayır",
afkc:"0",
prefix:"*",
reklam: "kapalı",
  saas:"kapalı",
  çkanal:"",
  gkanal:"",
  hosgeldinlog:""
})

//komutları alta yazın
bot.command({
  name:"<@!847395487312904204>",
  aliases:['<@!$clientID>', '<@$clientID>'],
  code:`$deleteIn[45s]
$title[Sanırım Beni Etiketledin]
$description[$thumbnail[$userAvatar[$mentioned[1;yes]]]
**Merhaba ben $userTag[$clientID].**
<a:842099308098879549:846405059788537856> Genel Prefixim : \` * \`
<a:842099308098879549:846405059788537856> Sunucudaki Prefixim : \` $getServerVar[prefix] \`
<a:842099308098879549:846405059788537856> Yardım Komutum : \`*yardım\`
<a:842099308098879549:846405059788537856> İstatistik : \`*i\`
<a:842099308098879549:846405059788537856> Sahibim : <@$botOwnerID>

**Bot Linkleri**
<a:830465223470612521:845218816036306954> [Destek Sunucusu](https://discord.gg/q3feVKFGrV)
<a:830465223470612521:845218816036306954> [Botu Davet Et\\](https://discord.com/oauth2/authorize?client_id=847395487312904204&scope=bot+applications.commands&permissions=40)
$footer[$username Beni Etiketledi]
$addTimestamp
$color[RANDOM]`,
  nonPrefixed: true
})





//komutları üste yazın
//durum
bot.status({
  text: "Lex Loading...", 
  type: "WATCHING", 
  status: "dnd", 
  time: 12 
})
bot.status({
  text: "Hunter Development", 
  type: "WATCHING", 
  status: "dnd"
})
bot.status({
  text: "youtube : HUNTER KİNG", 
  type: "WATCHING", 
  status: "dnd",
  time: 12
})
bot.status({
  text: "Lex Şu Anda $se",
  time: 12 ,
  type: "WATCHING",
  status: "dnd", 
  time: 12 
})


//-------------------- EKLENDİM ATILDIM ----------------------------\\

bot.botLeaveCommand({
    channel:"847811435895455805",// atıldım kanal id 
    code: `
$author[Bir Sunucudan Atıldım ! ]
$thumbnail[$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]]
$description[
  Atıldığım Sunucu = [$serverName\\]($getBotInvite)
  Sahibi = $username[$ownerID]#$discriminator[$ownerID]
  
  Toplam Üye = $membersCount]
  $footer[Toplam $serverCount Sunucu !]`
})
bot.onGuildLeave()

bot.botJoinCommand({
    channel:"847811405410992148",// eklendim kanal id 
    code: `
$author[Bir Sunucuya Eklendim! ]
$thumbnail[$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]]
$description[
  Eklendiğim Sunucu = [$serverName\\]($getBotInvite)
  Sahibi = $username[$ownerID]#$discriminator[$ownerID]
  
  Toplam Üye = $membersCount]
  $footer[Toplam $serverCount Sunucu !]`
})
bot.onGuildJoin()
//--------------------- EKLENDİM - ATILDIM SON -----------------\\
bot.command({
  name:"istatistik",
  aliases: ['i' , 'istatiks' , 'istatistikler' , 'istatistk'],
  code:`
  $author[İstatistiklerime Hoşgeldin;$authorAvatar]
  $description[$thumbnail[$authorAvatar]
  
 »  **CPU kullanımı:** \`%$cpu\` 
 »  **RAM kullanımı:** \`$ramMB\`
 
 »  **Sahibim:** \`$username[793589155367354388]#$discriminator[793589155367354388]\` **|** <@793589155367354388>
   
 »  **Pingim:**  \`$pingms\`
  
 »  ** Çalışma Zamanı:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;s; Saniye;1];h; Saat;1];m; Dakika;1];d; Gün;1];w; Hafta;1]\`
  
 »  **Komut:** \`$commandsCount\`

 »  **Kullanıcı:** \`$allMembersCount\` 

 » **Toplam Sunucu:** \`$serverCount\`

 »  **Kütüphanem:** \`Aoi.JS v$packageVersion\`
  
»  **Linklerim:** 
**»** [Davet Linkim!\\](https://discord.com/api/oauth2/authorize?client_id=847395487312904204&permissions=40&scope=bot) 
**»** [Destek Sunucum!\\](https://discord.gg/q3feVKFGrV)
  
$color[FF0000]
$footer[$username, Kullandı...;$authorAvatar]
$addTimestamp
  `
})  

bot.readyCommand({ 
    channel: "", 
    code: `
$log[---------------------- Aktif --------------------------]
$wait[1s]
$log[$username[$botOwnerID] öpüldü <3]
$wait[1s]
$log[Değişkenler Alınıyor]
$wait[1s]
$log[Veriler yüklendi]
$wait[1s]
$log[Veriler yükleniyor]
$wait[1s]
$log[Komutlar Hazırlandı]
$wait[1s]
$log[Komutlar Hazırlanıyor]
$wait[1s]
$log[$username[$clientID] Bot Açıldı]
$wait[1s]
$log[--------------------- Yükleniyor... ---------------------------]
$wait[1s]`
})

bot.command({
  name:"$alwaysExecute",
  code:`
  $useChannel[847855958210248785]
  $color[RED]
  $thumbnail[$authorAvatar]
  $description[
  Komut Kullanıldı !
  Kullanılan Komut : $message
  Kullanılan Kanal : <#$channelID>
  Kullanılan Sunucu : [$serverName[$guildID]]($getServerInvite)
  Kullanan Kişi : <@$authorID>]
  $footer[$userTag[$authorID];$authorAvatar]
  $addTimestamp
  $onlyIf[$checkContains[$message;*]==true;]
  `,
nonPrefixed: true
})


bot.command({
    name:"$alwaysExecute",
    code:`  $description[<@!$authorID> **Reklam Yapmak Yasak Dostumm!**]
  $deleteIn[5s]
  $deletecommand 
  $onlyIf[$checkContains[$toLowercase[$message];http;https;www.;discord.gg;discord.com]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[reklam]!=kapalı;]`
})

bot.command({
name: "reklam-aç", 
code: `$setServerVar[reklam;açık]
$description[<a:yes:802629858365669437> **Reklam yasağı acldı**]
$onlyPerms[admin;<a:792704133903810560:806932613322768404> **Bunu Kullanmak İçin Yeterli Yetkin Yok**]` 
})

bot.command({
name: "reklam-kapat", 
code: `
$setServerVar[reklam;kapalı]
$description[<a:yes:802629858365669437> **Reklam yasağı kapatıldı**]
$onlyPerms[admin;<a:792704133903810560:806932613322768404> **Bunu Kullanmak İçin Yeterli Yetkin Yok**]` 
})

bot.command({
    name:"sa",
    code:`  <a:830465223470612521:845218816036306954> **Aleyküm Selam, Hoşgeldin**
  $deleteIn[15s]
  $onlyIf[$message==;]
  $onlyIf[$getServerVar[saas]!=kapalı;]`,
   nonPrefixed: true
})
bot.command({
    name:"sea",
    code:`  <a:830465223470612521:845218816036306954> **Aleyküm Selam, Hoşgeldin**
  $deleteIn[15s]
  $onlyIf[$message==;]
  $onlyIf[$getServerVar[saas]!=kapalı;]`,
   nonPrefixed: true
})

bot.command({
name: "saas-aç",
code: `$setServerVar[saas;açık]
$description[<a:yes:802629858365669437> **Sa - As Sistemi Açıldı **]
$onlyPerms[admin;<a:792704133903810560:806932613322768404> **Bunu Kullanmak İçin Yeterli Yetkin Yok**]` 
})

bot.command({
name: "saas-kapat", 
code: `
$setServerVar[saas;kapalı]
$description[<a:yes:802629858365669437> **Sa - As Sistemi Kapatıldı**]
$onlyPerms[admin;<a:792704133903810560:806932613322768404> **Bunu Kullanmak İçin Yeterli Yetkin Yok**]` 
})

bot.botJoinCommand({
    channel:"823935484228141086",//id yi ellemeyin
    code: `$dm[$ownerID]
$color[RANDOM]
    $title[Eklediğiniz İçin Teşekkürler]
    $description[**Merhaba** <@!$ownerID> **Beni Sunucuna Eklediğin İçin Teşekkürler**
    
  **Lex Şu Anda** \`$serverCount\` **Adet Sunucuya** \` $allMembersCount\` **Adet Kişiye Hizmet Veriyor** 
  
  Prefixim : \` * \`
  Yardım Komutum : \` *yardım \`
 İstatistik Komutum : \` *i \`
 
  [Destek Sunucum](https://discord.gg/q3feVKFGrV)
  
  Beni Tercih Ettiğiniz İçin Teşekkürler -Lex Developer <@!793589155367354388>]
  $footer[NOT : Bu Mesaj Sadece Sunucu Sahibine Gönderilir]`
})

bot.command({
name: "dm", 
code: `$replaceText[$replaceText[$isUserDMEnabled[$mentioned[1;yes]];true;**Kullanıcının DM'si Açık** ;-1];false;**Kullanıcının DM'si Kapalı**;-1]` 
})

//------------------------------ SUNUCU ÖZEL --------------------------------\\

bot.joinCommand({

        channel: "$getServerVar[hosgeldinlog]", 

        code: `

        $color[00ff44]

        $title[Sunucumuza Birisi Katıldı !]
       <@$authorID>
        $description[$thumbnail[$authorAvatar]

        <a:giris:849603722187243550> **Aramıza Hoşgeldin** <@$authorID>

       ** Seninle Birlikte Toplam ** \` $membersCount \` ** Kişiyiz.**
      ]

        `

})


bot.leaveCommand({

        channel: "$getServerVar[hosgeldinlog]", 

        code: `

        $color[ff0101]

        $title[Sunucumuzdan Birisi Ayrıldı !]

        $description[$thumbnail[$authorAvatar]

       <a:cikis:849603780382162984> **Hoşçakal** \` $username#$discriminator[$authorID] \`

        **Sen Ayrılınca ** \` $membersCount\` **Kişi Kaldık.**

        ]

        `

})

bot.readyCommand({
channel: "847949930836525118",
code: `$deleteIn[1h]
$color[RANDOM]
$title[Oto İstatistik]
$description[**Bot ; **
**Bot** \`$serverCount\` **Sunucu !**
**Bot** \`$allMembersCount\` **Üye !**
]`
})