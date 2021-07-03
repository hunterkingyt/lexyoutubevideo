module.exports = {
  name:"ban",
  code:`
  $onlyPerms[ban;**Bu Komutu Kullanabilmen İçin  ___ÜYELERİ YASAKLA___  İznine Sahip Olman Gerekiyor**]
  $ban[$mentioned[1];$noMentionMessage]
  
  $username[$mentioned[1]]#$discriminator[$mentioned[1]] **Kişisi Sunucudan $noMentionMessage Sebebi İle Banlanmıştır.**
  $onlyIf[$mentioned[1]!=$authorID;{title:<a:792704133903810560:806932613322768404> **Delirdin Mi Bu Sensin **}{color:FE050E}{delete:7s}]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{title:<a:792704133903810560:806932613322768404> **Kendini Ve Kendinden üsttekileri banlayamazsın**}]

  $onlyIf[$hasPerms[$authorID;ban]!=false;**Üzgünüm Yetkin Yetmiyor !**]
  $onlyIf[$message[2]!=;{title:**Doğru Kullanım : *ban @kişi Sebep**}]
  `
}