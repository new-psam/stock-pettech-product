FROM node:18-alpine

# Define a pasta de ttrabalho
WORKDIR /usr/app

#Copia e instala dependências (otimiza o cache)
COPY package.json ./
RUN npm install

# Copia o restante do código e o .env (que agora é publico)
COPY . .

# Instala o pnpm e executa o build (pode ser npm run build se não for pnpm)
RUN npm i -g pnpm
RUN pnpm build

# apenas expõe a porta de escuta da aplicação
EXPOSE 3010

# Comando para iniciar a aplicação (o processo principal do container)
CMD ["node", "dist/main"]