import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
import  mask  from '@alpinejs/mask'
import intersect from '@alpinejs/intersect'
 
window.Alpine = Alpine

Alpine.plugin(focus)

Alpine.plugin(mask)

Alpine.plugin(intersect)

Alpine.start()