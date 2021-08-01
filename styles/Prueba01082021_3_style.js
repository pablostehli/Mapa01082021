var size = 0;
var placement = 'point';

var style_Prueba01082021_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Prueba");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 1378.673000 && value <= 1703.666282) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(24,215,56,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1703.666282 && value <= 1958.380897) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(70,172,45,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1958.380897 && value <= 2213.095511) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,129,33,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2213.095511 && value <= 2467.810126) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(163,86,22,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2467.810126 && value <= 2722.524741) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,43,11,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2722.524741 && value <= 3669.108000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
