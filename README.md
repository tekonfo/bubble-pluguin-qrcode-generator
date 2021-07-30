# QRCode_generator for Bubble.io
Bubble.ioで提供しているQRCoce Generator プラグインの実装内容です。
ローカルで開発できるよう諸々調整しています。

plugin url: https://bubble.io/plugin/qrcode-generator-1627220810267x534769642467754000

実装内容はpreview.js, update.jsをご覧下さい

## 利用ライブラリ
https://github.com/soldair/node-qrcode#encoding-modes

## 最大文字数
およそ1000文字程度であれば格納することが可能です。
漢字などの3bit以上利用する文字が重なると、それくらいです。
逆に数字、アルファベットなどであれば、2000文字くらいは格納可能です。

## Error correction level
H(High)で固定しています。
これはロゴを上から重ねるため、ある程度の障害に耐えるために最大値に設定しています。

## ロゴの重ね合わせについて
手動でロゴを重ね合わせているので、
