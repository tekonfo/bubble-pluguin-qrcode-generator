// QRCodeが使えないので、静的リンクでなんとかする。
// サイズとロゴだけ確認できるようにはできるかな
export const preview = function(instance, properties) {
    const margin = 6

    // 上下左右のmarginを省く
    const width = properties.width - margin * 2
    var qr = new Image(width, width)
    qr.style.paddingLeft = "4px"
    qr.style.paddingTop  = "4px"

    qr.src = "https://s3.amazonaws.com/appforest_uf/f1627437102891x317756865227791360/qr-code.png"
    instance.canvas.append(qr)
}
