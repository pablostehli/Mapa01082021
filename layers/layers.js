var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Prueba01082021_3 = new ol.format.GeoJSON();
var features_Prueba01082021_3 = format_Prueba01082021_3.readFeatures(json_Prueba01082021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prueba01082021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prueba01082021_3.addFeatures(features_Prueba01082021_3);
var lyr_Prueba01082021_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prueba01082021_3, 
                style: style_Prueba01082021_3,
                interactive: true,
    title: 'Prueba01082021<br />\
    <img src="styles/legend/Prueba01082021_3_0.png" /> <  -1.00 Std Dev<br />\
    <img src="styles/legend/Prueba01082021_3_1.png" />  -1.00 Std Dev -  -0.50 Std Dev <br />\
    <img src="styles/legend/Prueba01082021_3_2.png" />  -0.50 Std Dev -  0.00 Std Dev <br />\
    <img src="styles/legend/Prueba01082021_3_3.png" />  0.00 Std Dev -  0.50 Std Dev <br />\
    <img src="styles/legend/Prueba01082021_3_4.png" />  0.50 Std Dev -  1.00 Std Dev <br />\
    <img src="styles/legend/Prueba01082021_3_5.png" /> â‰¥  1.00 Std Dev<br />'
        });
var format_LimiteProvincial_4 = new ol.format.GeoJSON();
var features_LimiteProvincial_4 = format_LimiteProvincial_4.readFeatures(json_LimiteProvincial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteProvincial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProvincial_4.addFeatures(features_LimiteProvincial_4);
var lyr_LimiteProvincial_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteProvincial_4, 
                style: style_LimiteProvincial_4,
                interactive: true,
                title: '<img src="styles/legend/LimiteProvincial_4.png" /> Limite Provincial'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_Prueba01082021_3.setVisible(true);lyr_LimiteProvincial_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleHybrid_2,lyr_Prueba01082021_3,lyr_LimiteProvincial_4];
lyr_Prueba01082021_3.set('fieldAliases', {'DN': 'DN', 'Prueba': 'Prueba', 'Tr20': 'Tr20', 'Coordx': 'Coordx', 'Coordy': 'Coordy', });
lyr_LimiteProvincial_4.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'nam': 'nam', 'gna': 'gna', 'vlj': 'vlj', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Prueba01082021_3.set('fieldImages', {'DN': 'Range', 'Prueba': 'TextEdit', 'Tr20': 'TextEdit', 'Coordx': 'TextEdit', 'Coordy': 'TextEdit', });
lyr_LimiteProvincial_4.set('fieldImages', {'gid': 'Range', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'nam': 'TextEdit', 'gna': 'TextEdit', 'vlj': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Prueba01082021_3.set('fieldLabels', {'DN': 'no label', 'Prueba': 'inline label', 'Tr20': 'inline label', 'Coordx': 'inline label', 'Coordy': 'inline label', });
lyr_LimiteProvincial_4.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'nam': 'header label', 'gna': 'no label', 'vlj': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_LimiteProvincial_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});