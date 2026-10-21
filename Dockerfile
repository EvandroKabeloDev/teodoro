# Site estático "Dicas do Teodoro" servido com Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html style.css script.js /usr/share/nginx/html/
COPY img /usr/share/nginx/html/img

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
