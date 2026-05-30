# 🎰 Tombola Dictée

Système de tirage au sort en live pour l'événement La Dictée.

## Lancer le serveur

```bash
node server.js
```

- **Back-Office** → http://localhost:3030/
- **Front Projecteur** → http://localhost:3030/front.html

## Structure

| Fichier | Rôle |
|---------|------|
| `index.html` | Back-Office : config marques, import participants, tirage |
| `front.html` | Écran projecteur : affichage gagnant en live |
| `server.js` | Serveur local Node.js |
