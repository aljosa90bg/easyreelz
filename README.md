Komande razne:

za headless renderovanje aep fajla: aerender -project "C:\path\to\Text on Video.aep" -comp "Comp 1" -output "C:\path\to\output.mp4"

za run-ovanje AE-a sa skriptom za menjanje teksta iz command line-a: AfterFX.exe -r "C:\path\to\your\script.jsx"
Ovo meni nije radilo, radi samo ako pustim skriptu iz VSCode

Ekstenzija za VSCode: ExtendSCript Debugger. Adobe.



Kopiranje fajla:
var sourcePath = "./source_image.png"; // Relative path to the source file
var destinationPath = "./destination_image.png"; // Relative path to the destination file
copyFile(sourcePath, destinationPath);

Menjanje boje:
var newColor = [1, 0, 0]; // New color in RGB (normalized to 0-1 range, e.g., red)
textProp.setValue(newColor);
