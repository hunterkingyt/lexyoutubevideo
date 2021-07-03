module.exports = ({
name: "profil", 
  aliases:['kb','kullanıcı-bilgi'],
code: `
  $color[303136]
  $description[$thumbnail[$userAvatar[$mentioned[1;yes]]]
  **Lex Kullanıcı Bilgi Sistemi**
  
**Kullanıcı İsmi :** \`$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]\`

**Sunucudaki İsmi :**  \`$nickname[$mentioned[1;yes]]\`

**Durumu :**  \`$replaceText[$getCustomStatus[$mentioned[1;yes]];none;Bir Şey Oynamıyor;-1]\`

**Discord Kimliği :** \` $mentioned[1;yes]\`
  
**Hesap Kurulma Tarihi :**  \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]\`
 
  **Rolleri**
  $userRoles[$mentioned[1;yes];mentions]
  ]
  ` 
})