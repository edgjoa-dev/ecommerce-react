# Etapa de construcción (build)
FROM node:20 AS build
WORKDIR /app
# Copia los archivos de configuración
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile
# Copia el código fuente
COPY . .
# Compila el proyecto con Vite
RUN yarn build

# Etapa de producción (prod-deps)
FROM node:20 AS prod-deps
WORKDIR /app
# Copia solo las dependencias de producción
COPY package*.json yarn.lock ./
RUN yarn install --production

# Etapa de desarrollo (dev-deps)
FROM node:20 AS dev-deps
WORKDIR /app
# Copia todas las dependencias (incluyendo las de desarrollo)
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile
# Compila el proyecto en modo desarrollo
RUN yarn build

# Etapa de ejecución (runner)
FROM node:20 AS runner
WORKDIR /app
# Copia los archivos compilados de la etapa de construcción
COPY --from=build /app/dist ./dist
# Copia las dependencias de producción
COPY --from=prod-deps /app/node_modules ./node_modules
# Expone el puerto que utilizará la aplicación
EXPOSE 3000

# Configura el comando de inicio
CMD ["yarn", "preview", "--host"]