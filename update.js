export const update = function(instance, properties, context) {
    const rgba2hex = function(orig) {
        var a,
          rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
          alpha = (rgb && rgb[4] || "").trim(),
          hex = rgb ?
          (rgb[1] | 1 << 8).toString(16).slice(1) +
          (rgb[2] | 1 << 8).toString(16).slice(1) +
          (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

        if (alpha !== "") {
          a = alpha;
        } else {
          a = "01";
        }

        // multiply before convert to HEX
        a = ((a * 255) | 1 << 8).toString(16).slice(1)
        hex = hex + a;

        return hex;
      }

    if (properties.url === undefined || properties.url === null) {
        return
    }

    const dark_color = rgba2hex(properties.dark_color)
    const light_color = rgba2hex(properties.light_color)

    instance.canvas.empty()
    var d = document.createElement("div")

    var canvas = document.createElement("canvas")
    var error_message = document.createElement("p")
    canvas.setAttribute("id", "canvas");

    const options = {
        color: { dark: dark_color, light: light_color },
        // Highに設定する。これで30%くらいは堪えれる。
        errorCorrectionLevel: 'H',
    }

     QRCode.toCanvas(properties.url, options, function (error, cv) {
        if (error) {
            error_message.append(error)
            d.appendChild(error_message)
        } else {
            d.appendChild(cv)
        }
      })

    instance.canvas.append(d)
}
