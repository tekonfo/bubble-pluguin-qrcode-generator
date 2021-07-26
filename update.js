export const update = function(instance, properties, context) {
    if (properties.url === undefined || properties.url === null) {
        return
        }

    instance.canvas.empty()
    var d = document.createElement("div")

    var canvas = document.createElement("canvas")
    var error_message = document.createElement("p")
    canvas.setAttribute("id", "canvas");

     QRCode.toCanvas(properties.url, function (error, cv) {
        if (error) console.error(error)
         error_message.append(error)
         console.log(error_message)
         d.appendChild(cv)
         d.appendChild(error_message)
      })

    instance.canvas.append(d)
}
