document.addEventListener('DOMContentLoaded', () => {

  Adapter.fetchGroups().then( r => r.forEach(aCappellaGroup.renderGroup))
})
