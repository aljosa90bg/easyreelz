var projectPath = File("C:/Users/Relja/Desktop/Demo AE/Text on Video.aep"); // Full path to your AE project
var compositionName = "Main Comp"; // Name of the composition
var layerName = "Text"; // Name of the text layer in the composition
var newText = "Hello, World!"; // New text to update

try {
    // Open the project
    if (!projectPath.exists) throw new Error("Project file not found: " + projectPath.fsName);
    app.open(projectPath);
    $.writeln("Project opened successfully.");

    // Get the composition
    var comp = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.item(i).name === compositionName && app.project.item(i) instanceof CompItem) {
            comp = app.project.item(i);
            break;
        }
    }
    if (!comp) throw new Error("Composition not found: " + compositionName);
    $.writeln("Composition found: " + comp.name);

    // Find the text layer
    var textLayer = null;
    for (var j = 1; j <= comp.numLayers; j++) {
        if (comp.layer(j).name === layerName && comp.layer(j) instanceof TextLayer) {
            textLayer = comp.layer(j);
            break;
        }
    }
    if (!textLayer) throw new Error("Text layer not found: " + layerName);
    $.writeln("Text layer found: " + textLayer.name);

    // Update the text
    var textProp = textLayer.property("Source Text");
    if (!textProp) throw new Error("Source Text property not found on layer: " + layerName);
    var textDocument = textProp.value;
    textDocument.text = newText;
    textProp.setValue(textDocument);
    $.writeln("Text updated successfully.");

    // Save the project
    app.project.save();
    $.writeln("Project saved successfully.");
} catch (error) {
    $.writeln("Error: " + error.message);
} finally {
    // Close the project (optional)
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    $.writeln("Done.");
}
