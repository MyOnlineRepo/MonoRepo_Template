FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["backend/Dotnet_Organizer/Dotnet_Organizer.csproj", "backend/Dotnet_Organizer/"]
RUN dotnet restore "backend/Dotnet_Organizer/Dotnet_Organizer.csproj"

COPY . .
WORKDIR /src/backend/Dotnet_Organizer
RUN dotnet publish "Dotnet_Organizer.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "Dotnet_Organizer.dll"]
