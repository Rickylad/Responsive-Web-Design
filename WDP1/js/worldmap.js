
var map;
// Get lattitude and longitude of the map
var canberraandSydney = new google.maps.LatLng(38.973368, -101.602834);
// Initialise the map
function initMap() {
    // Define the properties for Canberra and Sydney map
    var canberraandSydneyMap = {
        center: canberraandSydney,
        zoom: 4.5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra and Sydney
    map = new google.maps.Map(
        document.getElementById("googleMap"), canberraandSydneyMap);

    // Add markers functions
    // addCanberraCentreMarker(map);
    addIBMMarker(map);
    addAmazonMarker(map);
    addGoogleMarker(map);
    addMicrosoftMarker(map);
    addOracleMarker(map);
    addSASMarker(map);

}

// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap);

// function addCanberraCentreMarker(map) {
//     // Canberra Centre
//     var canberraandSydney = new google.maps.LatLng(-35.2792284, 149.1321033);
//     var markerCanberraCentre = new google.maps.Marker({
//         position: canberraandSydney,
//     });

//     markerCanberraCentre.setMap(map);

//     var infoCanberraCentre = new google.maps.InfoWindow({
//         content: "Canberra Centre"
//     });

//     google.maps.event.addListener(markerCanberraCentre, 'click', function () {
//         infoCanberraCentre.open(map, markerCanberraCentre);
//     });
// }

function addIBMMarker(map) {
    var IBMAustralia =
        new google.maps.LatLng(41.128850, -73.713608);
    var IBMAustralia = new google.maps.Marker({
        position: IBMAustralia,
    });

    IBMAustralia.setMap(map);

    var contentIBMAustralia =
        ' <h1>IBM Australia</h1>' +
        ' <img src="./images/IBM.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p>For more than a century<b>IBM</b> has been dedicated ' +
        'to every client"s success and to creating ' +
        'innovations that matter for the world. <br>' +
        '<a href="https://www.ibm.com/au-en/analytics/machine-learning">IBM</a>' +
        ' </p>';
    var infoIBMAustralia = new google.maps.InfoWindow({
        content: contentIBMAustralia
    });

    google.maps.event.addListener(IBMAustralia, 'click',
        function () {
            infoIBMAustralia.open(map, IBMAustralia);
        });
}
function addAmazonMarker(map) {
    var AmazonAustralia =
        new google.maps.LatLng(47.622230, -122.336462);
    var AmazonAustralia = new google.maps.Marker({
        position: AmazonAustralia,
    });

    AmazonAustralia.setMap(map);

    var contentAmazonAustralia =
        ' <h1>Amazon Australia</h1>' +
        ' <img src="./images/amazon.png" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>AWS</b> has the broadest and deepest set of ' +
        'machine learning and AI services for your business.' +
        '<br>' +
        '<a href="https://aws.amazon.com/machine-learning/">Amazon</a>' +
        ' </p>';
         

    var infoAmazonAustralia = new google.maps.InfoWindow({
        content: contentAmazonAustralia
    });

    google.maps.event.addListener(AmazonAustralia, 'click',
        function () {
            infoAmazonAustralia.open(map, AmazonAustralia);
        });
}
function addGoogleMarker(map) {
    var  GoogleAustralia =
        new google.maps.LatLng(47.649039, -122.350295);
    var  GoogleAustralia = new google.maps.Marker({
        position:  GoogleAustralia,
    });

    GoogleAustralia.setMap(map);

    var contentGoogleAustralia =
        ' <h1>Google Australia</h1>' +
        ' <img src="./images/google.png" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Google Cloud’s</b> AI Hub provides enterprise-grade sharing capabilities,' +
        'including end-to-end AI pipelines and out-of-the-box algorithms,' +
        'that let your organization privately host AI content to foster reuse and collaboration among internal developers and users. <br>' +
        '<a href="https://cloud.google.com/products/ai/">Google</a>' +
        ' </p>';
        
    var infoGoogleAustralia = new google.maps.InfoWindow({
        content: contentGoogleAustralia
    });

    google.maps.event.addListener(GoogleAustralia, 'click',
        function () {
            infoGoogleAustralia.open(map, GoogleAustralia);
        });
}
function addMicrosoftMarker(map) {
    var MicrosoftAustralia =
        new google.maps.LatLng(47.642271, -122.137077);
    var MicrosoftAustralia = new google.maps.Marker({
        position: MicrosoftAustralia,
    });

    MicrosoftAustralia.setMap(map);

    var contentMicrosoftAustralia =
        ' <h1>Microsoft Australia</h1>' +
        ' <img src="./images/microsoft.png" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p<b>Microsoft Azure</b> builds models rapidly and ' +
        'operationalise at scale from cloud to edge.' +
        'Streamline the building, training and deployment of machine learning models.  <br>' +
        '<a href="https://azure.microsoft.com/en-au/services/machine-learning-service/">Microsoft</a>' +
        ' </p>';
    var infoMicrosoftAustralia = new google.maps.InfoWindow({
        content: contentMicrosoftAustralia
    });

    google.maps.event.addListener(MicrosoftAustralia, 'click',
        function () {
            infoMicrosoftAustralia.open(map, MicrosoftAustralia);
        });
}
function addOracleMarker(map) {
    var OracleAustralia =
        new google.maps.LatLng(35.861893, -78.835796);
    var OracleAustralia = new google.maps.Marker({
        position: OracleAustralia,
    });

    OracleAustralia.setMap(map);

    var contentOracleAustralia =
        ' <h1>Oracle Australia</h1>' +
        ' <img src="./images/oracle.png" ' +
        '      style="float:left; width:25%; height:80px; margin-right:10px;">' +
        ' <p><b>Oracle</b> Machine Learning Notebooks with SQL allow ' +
        'Data Scientists to collaborate using Oracle Autonomous Database.' +
        '<br>' +
        '<a href="https://www.oracle.com/database/technologies/datawarehouse-bigdata/oml-notebooks.html">Oracle</a>' +
        ' </p>';
    var infoOracleAustralia = new google.maps.InfoWindow({
        content: contentOracleAustralia
    });

    google.maps.event.addListener(OracleAustralia, 'click',
        function () {
            infoOracleAustralia.open(map, OracleAustralia);
        });
}
function addSASMarker(map) {
    var SASAustralia =
        new google.maps.LatLng(35.823319, -78.753061);
    var SASAustralia = new google.maps.Marker({
        position: SASAustralia,
    });

    SASAustralia.setMap(map);

    var contentSASAustralia =
        ' <h1>SAS Australia</h1>' +
        ' <img src="./images/sas.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>SAS</b> Supports the end-to-end data mining and ' +
        ' machine learning process with a comprehensive visual ' +
        '– and programming – interface. <br>' +
        '<a href="https://www.sas.com/en_us/software/visual-data-mining-machine-learning.html">SAS</a>' +
        ' </p>';
    var infoSASAustralia = new google.maps.InfoWindow({
        content: contentSASAustralia
    });

    google.maps.event.addListener(SASAustralia, 'click',
        function () {
            infoSASAustralia.open(map, SASAustralia);
        });
}