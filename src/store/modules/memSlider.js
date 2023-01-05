
const state = {
  projects: [],
  newProject: {},
  isModalOpen: false,
}

const getters = {
  getIsModalOpen(state) {
    return state.isModalOpen
  },
}

const mutations = {
  // UPDATE_PROJECTS(state, projects) {
  //   projects.forEach(project => {
  //     state.projects.push(project)
  //   })
  // },
  // UPDATE_NEW_PROJECTS(state, project) {
  //   state.newProject = project
  //   state.projects.unshift(project)
  // },
  // DELETE_PROJECT(state, id) {
  //   const index = state.projects.findIndex(project => project.id === id)
  //   if (index !== -1) {
  //     state.projects.splice(index, 1)
  //   }
  // },
  // ARCHIVE_PROJECT(state, { id, payload }) {
  //   const index = state.projects.findIndex(project => project.id === id)
  //   if (index !== -1) {
  //     state.projects[index].status = payload.status
  //   }
  // },
}

const actions = {
  // async requestProjects({ commit }) {
  //   try {
  //     const { data } = await requestProjects()
  //     commit('UPDATE_PROJECTS', data)
  //   } catch (err) {
  //     throw err
  //   }
  // },

  // async postProject({ commit }) {
  //   try {
  //     const { data } = await postProject()
  //     commit('UPDATE_NEW_PROJECTS', data.project)
  //   } catch (err) {
  //     throw err
  //   }
  // },

  // async deleteProject({ commit }, id) {
  //   try {
  //     await deleteProject(id)
  //     commit('DELETE_PROJECT', id)
  //   } catch (err) {
  //     throw err
  //   }
  // },

  // async archiveProject({ commit }, { id, payload }) {
  //   try {
  //     await archiveProject(id, payload)
  //     commit('ARCHIVE_PROJECT', { id, payload })
  //   } catch (err) {
  //     throw err
  //   }
  // },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
