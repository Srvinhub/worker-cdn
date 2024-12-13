addEventListener('fetch', event => {
  event.respondWith(
    fetch('http://s10.serv00.com:10086' + new URL(event.request.url).pathname, {
      method: event.request.method,
      headers: event.request.headers,
      body: event.request.method === 'POST' ? event.request.body : null,
    })
  )
})
