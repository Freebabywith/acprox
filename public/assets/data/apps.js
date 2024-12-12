const apps = [
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
      "id": "Rom",
      "title": "Rom files for Emulator",
      "url": "https://sites.google.com/site/minecrafterdiskstation/roms",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "retrobowl",
      "title": "Retrobowl",
      "url": "https://eduonlin3.vercel.app/",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png'
    }, 
    {
      "id": "geforce",
      "title": "GeForce NOW (may not work)",
      "url": "https://play.geforcenow.com",
      'image': 'https://raw.githubusercontent.com/proudparrot2/cdn/main/8z9zeDIT_400x400-removebg-preview.
          
      
    
    },
    {
      "id": "reddit",
      "title": "Reddit",
      "url": "https://reddit.com",
      'image': 'https://www.redditinc.com/assets/images/site/reddit-logo.png'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://youtube.com",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png'
    }
  ]
  
  const customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log(`Loaded ${apps.length} apps`)
  if (customapps) console.log(`Loaded ${customapps.length} custom apps`)
