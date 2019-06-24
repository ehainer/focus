const http = require('http')
const https = require('https')
const contentful = require('contentful')

const httpAgent = new http.Agent({ keepAlive: true })
const httpsAgent = new https.Agent({ keepAlive: true })

export default ({ env }, inject) => {
  const config = {
    space: env.CTF_SPACE_ID,
    accessToken: env.CTF_ACCESS_TOKEN,
    httpAgent: httpAgent,
    httpsAgent: httpsAgent
  }

  const client = contentful.createClient(config)

  const helpers = {
    getComponent: async function(id) {
      try {
        const entries = await client.getEntries({ content_type: 'component', 'fields.slug': id, 'limit': 1 })
        return entries.items[0]
      } catch (error) {
        console.log(error)
        return { fields: {}, sys: {} }
      }
    },
    getComponents: async function() {
      try {
        const entries = await client.getEntries({ content_type: 'component', 'order': 'fields.name' })
        return entries.items
      } catch (error) {
        console.log(error)
        return []
      }
    },
    getPage: async function(id) {
      try {
        const entries = await client.getEntries({ content_type: 'page', 'fields.slug': id, 'limit': 1 })
        return entries.items[0]
      } catch (error) {
        console.log(error)
        return { fields: {}, sys: {} }
      }
    }
  }

  inject('contentful', helpers)
}
