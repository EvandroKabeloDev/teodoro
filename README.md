# 🦙 Dicas do Teodoro

Site educativo com dicas de Fortnite para crianças de até 8 anos, criado pelo **Teodoro**.

Conteúdo: modos recomendados para crianças, peças de construção (cartas que viram), materiais, cores de raridade, tempestade, trabalho em equipe, regras de segurança, relógio de pausa, quiz com estrelas e um espaço para os pais.

## 📁 Arquivos
| Arquivo | Para que serve |
|---|---|
| `index.html` | Página do site |
| `style.css` | Cores e visual |
| `script.js` | Quiz, relógio, mascote e confete |
| `Dockerfile` + `nginx.conf` | Para publicar no Easypanel |

## 🚀 1. Publicar no GitHub
```bash
git init
git add .
git commit -m "Site Dicas do Teodoro"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/dicas-do-teodoro.git
git push -u origin main
```

## 🐳 2. Publicar no Easypanel
1. No Easypanel, crie um **Projeto** e clique em **+ Service → App**.
2. Em **Source**, escolha **GitHub** e selecione o repositório `dicas-do-teodoro` (branch `main`).
3. Em **Build**, escolha **Dockerfile** (caminho: `Dockerfile`).
4. Clique em **Deploy**.
5. Em **Domains**, configure a porta **80** e adicione seu domínio (ou use o domínio gerado pelo Easypanel).

## 💻 Testar no computador (opcional)
```bash
docker build -t dicas-teodoro .
docker run -p 8080:80 dicas-teodoro
# Abra http://localhost:8080
```
Ou simplesmente abra o `index.html` no navegador.

---
Site de fã, educativo e sem fins lucrativos. Não possui ligação com a Epic Games. Fortnite é marca registrada da Epic Games, Inc.
