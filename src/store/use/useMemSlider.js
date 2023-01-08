import { createNamespacedHelpers } from 'vuex-composition-helpers'
console.log('createNamespacedHelpers :>> ', createNamespacedHelpers);

import store from '../index'
console.log('store :>> ', store);

function useMemSlider() {
  const { useGetters, useActions } = createNamespacedHelpers(store, 'memSlider')
  console.log('useGetters :>> ', useGetters);

  const {
    getIsModalOpen: isModalOpen,
    getEventDirection: eventDirection,
  } = useGetters([
    'getIsModalOpen',
    'getEventDirection',
  ])

  const {
    changeEventDirection,
  } = useActions([
    'changeEventDirection',
  ])

  return {
    isModalOpen,
    eventDirection,
    changeEventDirection,
  }
}

export default useMemSlider

//
//

// import { useStore } from 'vuex'

// const MODULE_NAME = 'memSlider'

// const useMemSlider = () => {
//   const store = useStore()

//   const requestProjects = () => store.dispatch(`${MODULE_NAME}/requestProjects`)
//   const postProject = () => store.dispatch(`${MODULE_NAME}/postProject`)
//   const deleteProject = (id) => store.dispatch(`${MODULE_NAME}/deleteProject`, id)
//   const archiveProject = (id, payload) => {
//     store.dispatch(`${MODULE_NAME}/archiveProject`, { id, payload })
//   }
//   const projects = store.getters[`${MODULE_NAME}/getProjects`]
//   const isModalOpen = store.getters[`${MODULE_NAME}/getIsModalOpen`]

//   return {
//     store,
//     isModalOpen,
//     projects,
//     requestProjects,
//     postProject,
//     deleteProject,
//     archiveProject,
//   }
// }

// export default useMemSlider
