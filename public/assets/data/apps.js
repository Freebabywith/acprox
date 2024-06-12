var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
    },
    {
      "id": "Rom Files",
      "title" : "Rom Files",
      "url": "https://sites.google.com/site/minecrafterdiskstation/roms",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
    },
    {
      "id": "Purepro",
      "title": "Purepro",
      "url": "https://dsa-games.vercel.app/",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
    }
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
