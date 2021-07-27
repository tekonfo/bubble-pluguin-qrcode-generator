import { Instance } from "./class/instance.js";
import { Properties } from "./class/properties.js";
import { Context } from "./class/context.js";
import { update } from "./update.js";
import { preview } from "./preview.js"

const rootCanvas = $('#rootCanvas')

const url = 'hogehoge.url'
const dark_color = "rgba(0,0,255,0.1)"
const light_color = "rgba(255,255,255,1)"

const instance = new Instance(rootCanvas)
const properties = new Properties(url, light_color, dark_color)
const context = new Context()

preview(instance, properties, context)
update(instance, properties, context)
