FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["backend/Dotnet_Organizer/Presentation/Presentation.csproj", "backend/Dotnet_Organizer/Presentation/"]
COPY ["backend/Dotnet_Organizer/Shared/Shared.csproj", "backend/Dotnet_Organizer/Shared/"]
RUN dotnet restore "backend/Dotnet_Organizer/Presentation/Presentation.csproj"

COPY . .
WORKDIR /src/backend/Dotnet_Organizer/Presentation
RUN dotnet publish "Presentation.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "Presentation.dll"]
