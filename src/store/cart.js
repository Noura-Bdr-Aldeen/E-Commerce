import { defineStore } from "pinia";
import { ref } from "vue";
import Swal from 'sweetalert2/dist/sweetalert2';


export const useCartStore = defineStore('cart', () => {
  const items = ref(JSON.parse(localStorage.getItem('cartItems')) ?? [])
  // const items =ref([])
  const addItem = item => {
    const index = items.value.findIndex(cartItem => cartItem.id === item.id)
    if (index === -1) {
      item.quantity = 1
      items.value.push(item)
    } else {
      items.value[index].quantity++
    }
    localStorage.setItem('cartItems', JSON.stringify(items.value))
    // $swal function calls SweetAlert into the application with the specified configuration.
    Swal.fire({
      text: 'Done',
      customClass: 'swal-wide',

    });
  }


  const removeItem = (furniture) => {
    const id = furniture.id
    const indexToBeDeleted = items.value.findIndex((item) => item.id === id)
    items.value.splice(indexToBeDeleted, 1)
    localStorage.setItem('cartItems', JSON.stringify(items.value))

  }
  return { items, addItem, removeItem }

})
