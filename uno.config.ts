import { defineConfig, presetWind } from "unocss";
import presetAutoprefixer from "unocss-preset-autoprefixer"
export default defineConfig({
    presets: [presetWind(), presetAutoprefixer()]
})