# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Permite pasar variables de entorno como argumentos de build (opcional)
ARG REACT_APP_MY_SERVICE_ID_KEY
ARG REACT_APP_MY_TEMPLATE_ID_KEY
ARG REACT_APP_MY_PUBLIC_ID_KEY

# Copia primero los archivos de configuración necesarios
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto (incluyendo .env si existe)
COPY . .

# Establece las variables de entorno para el build DESPUÉS de copiar el .env
# Esto asegura que las variables pasadas como ARG tengan prioridad sobre las del .env
# En Create React App, las variables ENV tienen prioridad sobre las del .env
ENV REACT_APP_MY_SERVICE_ID_KEY=${REACT_APP_MY_SERVICE_ID_KEY}
ENV REACT_APP_MY_TEMPLATE_ID_KEY=${REACT_APP_MY_TEMPLATE_ID_KEY}
ENV REACT_APP_MY_PUBLIC_ID_KEY=${REACT_APP_MY_PUBLIC_ID_KEY}

# Construye la aplicación React para producción
RUN npm run build

RUN npm install -g serve

# Expón el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicia
CMD ["serve", "-s", "build"]
