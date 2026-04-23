var builder = WebApplication.CreateBuilder(args);

builder.Configuration
    .AddJsonFile("Presentation/appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"Presentation/appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true);

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();

app.Run();
