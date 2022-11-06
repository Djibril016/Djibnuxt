<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    name:"Mixins",
  mounted() {
    AOS.init({ 
      disable: 'mobile'
    })
  }
}
</script>
