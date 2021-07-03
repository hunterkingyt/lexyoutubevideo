module.exports = {

  name: "hg-bb",

  code: `

  $onlyPerms[admin;**Bunun İçin Yeterli Yetkin Yok**]

  $onlyIf[$message!=;Kullanım *hg-bb #kanal]

  $setServerVar[hosgeldinlog;$mentionedChannels[1]]


**Hoşgeldin - Hoşçakal Kanal** <#$mentionedChannels[1]> **Olarak Seçildi.**

  

  `

} 