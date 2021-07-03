module.exports = {
    name: 'forceban',
    code: `
$thumbnail[$useravatar[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1;yes];1]]]
$ban[$message[1]]
$addField[Ban atılan;\`$username[$message[1]]#$discriminator[$message[1]]\`]
$addfield[\`>\` Ban Atan Kullanıcı ID; $authorID]
$addfield[\`>\` Ban Atan Kullanıcı; $username]
 $footer[> Ban Atılan KULLANICI ID:$message[1]]
$color[RANDOM]
$onlyIf[$hasPerms[$authorID;ban]!=false;**Bu Komutu Kullanabilmen İçin  ___YÖNETİCİ___  İznine Sahip Olman Gerekiyor**]
$onlyIf[$isNumber[$message[1]]!=false; <a:792704133903810560:806932613322768404> **Girilen Bir ID Değil !**]
$onlyIf[$message!=;<a:792704133903810560:806932613322768404> ** Banlanacak Kişinin İD Yazınız**]
`
};