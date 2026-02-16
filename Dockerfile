FROM mcr.microsoft.com/dotnet/core/sdk:3.1
WORKDIR /app
COPY . .
RUN dotnet restore
RUN dotnet build -c Release -o /app
EXPOSE 80
CMD ["dotnet", "run"]