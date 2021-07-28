import { Instance } from "./class/instance.js";
import { Properties } from "./class/properties.js";
import { Context } from "./class/context.js";
import { update } from "./update.js";
import { preview } from "./preview.js";

const previewCanvas = $('#previewCanvas')
const updateCanvas = $('#updateCanvas')

const url = 'hogehoge.url'
const width = 150
const dark_color = "rgba(0,0,255,1)"
const light_color = "rgba(255,255,255,1)"
const logo = "../public/bowl.png"

const preview_instance = new Instance(previewCanvas)
const update_instance = new Instance(updateCanvas)
const properties = new Properties(width, url, light_color, dark_color, logo)
const context = new Context()

preview(preview_instance, properties, context)
update(update_instance, properties, context)
