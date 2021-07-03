module.exports = ({
  name:"ping",
  code:`$if[$botPing<=100]
  🟢 Pingim $botPing ms, Ping durumu düşük
$endif
$if[$botPing>=100]
🟠 Pingim $botPing ms, Ping durumu orta
$onlyIf[$botPing<=250]
$endif
$if[$botPing>=250]
🔴 Pingim $botPing ms, Ping durumu yüksek
$endif`
})