import { defineStore } from "pinia";
import { ref } from "vue";
import Swal from 'sweetalert2/dist/sweetalert2'

export const useFavStore = defineStore('fav', () => {

  const itemss = ref(JSON.parse(localStorage.getItem('favItems')) ?? [])
  const addItem = item => {
    const index = itemss.value.findIndex(favItem => favItem.id === item.id)
    if (index === -1) {
      item.quantity = 1
      itemss.value.push(item)
    } else {
      itemss.value[index].quantity++
    }
    localStorage.setItem('favItems', JSON.stringify(itemss.value))
    // $swal function calls SweetAlert into the application with the specified configuration.
    Swal.fire({
      text: 'Done',
      customClass: 'swal-wide',

    });
  }

  const removeItem = (furniture) => {
    const id = furniture.id
    const indexToBeDeleted = itemss.value.findIndex((item) => item.id === id)
    itemss.value.splice(indexToBeDeleted, 1)
    localStorage.setItem('favItems', JSON.stringify(itemss.value))
  }
  return { itemss, addItem, removeItem }

})
