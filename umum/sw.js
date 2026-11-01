// alamat pindah ke https://rakasiwifajar.github.io/kucingku/ : hapus cache lama, lepas service worker, arahkan ke alamat baru
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{ e.waitUntil((async()=>{ const ks=await caches.keys(); await Promise.all(ks.filter(k=>k.startsWith('kucing-umum')).map(k=>caches.delete(k))); await self.registration.unregister(); const cs=await self.clients.matchAll({type:'window'}); cs.forEach(c=>c.navigate('https://rakasiwifajar.github.io/kucingku/')); })()); });
