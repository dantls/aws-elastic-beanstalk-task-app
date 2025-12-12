FROM node:18-alpine

WORKDIR /usr/src/app

# Copiar package.json da raiz do projeto
COPY package*.json ./
RUN npm ci --only=production --no-audit

# Copiar todo o código da raiz (backend original)
COPY api ./api
COPY lib ./lib
COPY config ./config
COPY database ./database
COPY index.js ./
COPY tustas.js ./
COPY db.js ./

# Copiar frontend buildado
COPY client/build/ ./client/build/

EXPOSE 80
CMD ["node", "index.js"]
