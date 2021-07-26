import { Instance } from "./class/instance.js";
import { Properties } from "./class/properties.js";
import { Context } from "./class/context.js";
import { update } from "./update.js";
import { preview } from "./preview.js"

const rootCanvas = $('#rootCanvas')

const url = 'hogehoge.url'

const instance = new Instance(rootCanvas)
const properties = new Properties(url)
const context = new Context()

preview(instance, properties, context)
update(instance, properties, context)
