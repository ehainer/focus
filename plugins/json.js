export default ({ $axios }, inject) => {
  const helpers = {
    fetch: async function(url, def) {
      const response = await $axios.get(url)
      if (response.status === 200) {
        return response.data
      }
      return def
    }
  }

  inject('json', helpers)
}
