FROM node:24-alpine AS build
WORKDIR /app

COPY frontend/Angular_Organizer/package.json frontend/Angular_Organizer/package-lock.json ./
RUN npm ci

COPY frontend/Angular_Organizer/ ./
RUN npm run build

FROM nginx:alpine AS final
COPY --from=build /app/dist/Angular_Organizer/browser /usr/share/nginx/html
EXPOSE 80
