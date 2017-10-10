const data = (() => {
    
    const meteorites = [
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              130.75,
              33.725
            ]
          },
          "id": "16988",
          "mass": "472",
          "name": "Nogata",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "33.725000",
          "reclong": "130.750000",
          "year": "0861-01-01T00:00:00.000",
          "value": 472,
          "dateYear": 861,
          "log2Mass": 8.88264304936184,
          "dateNormal": 0,
          "massNormal": 0.000020478261759924425,
          "logMassNormal": 0.3632220666392614
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.73333,
              50.18333
            ]
          },
          "id": "7823",
          "mass": "107000",
          "name": "Elbogen",
          "nametype": "Valid",
          "recclass": "Iron, IID",
          "reclat": "50.183330",
          "reclong": "12.733330",
          "year": "1400-01-01T00:00:00.000",
          "value": 107000,
          "dateYear": 1400,
          "log2Mass": 16.707251271063235,
          "dateNormal": 0.4678819444444444,
          "massNormal": 0.004652130637049158,
          "logMassNormal": 0.6831798036703718
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.51667,
              45.48333
            ]
          },
          "id": "22614",
          "mass": "103.3",
          "name": "Rivolta de Bassi",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "45.483330",
          "reclong": "9.516670",
          "year": "1491-01-01T00:00:00.000",
          "value": 103.3,
          "dateYear": 1491,
          "log2Mass": 6.690696443977697,
          "dateNormal": 0.546875,
          "massNormal": 0.000004447826280340273,
          "logMassNormal": 0.2735907067448951
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              7.35,
              47.86667
            ]
          },
          "id": "10039",
          "mass": "127000",
          "name": "Ensisheim",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "47.866670",
          "reclong": "7.350000",
          "year": "1492-01-01T00:00:00.000",
          "value": 127000,
          "dateYear": 1492,
          "log2Mass": 16.954468971434252,
          "dateNormal": 0.5477430555555556,
          "massNormal": 0.005521695892247647,
          "logMassNormal": 0.6932888358063662
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.2,
              39.8
            ]
          },
          "id": "5295",
          "mass": "15000",
          "name": "Castrovillari",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "39.800000",
          "reclong": "16.200000",
          "year": "1583-01-01T00:00:00.000",
          "value": 15000,
          "dateYear": 1583,
          "log2Mass": 13.872674880270605,
          "dateNormal": 0.6267361111111112,
          "massNormal": 0.000652130463136107,
          "logMassNormal": 0.5672705310598365
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75,
              31
            ]
          },
          "id": "12069",
          "mass": "1967",
          "name": "Jalandhar",
          "nametype": "Valid",
          "recclass": "Iron",
          "reclat": "31.000000",
          "reclong": "75.000000",
          "year": "1621-01-01T00:00:00.000",
          "value": 1967,
          "dateYear": 1621,
          "log2Mass": 10.94178124227853,
          "dateNormal": 0.6597222222222222,
          "massNormal": 0.0000854782645860115,
          "logMassNormal": 0.44742272918651615
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -3.95,
              50.38333
            ]
          },
          "id": "23732",
          "mass": "10400",
          "name": "Stretchleigh",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "50.383330",
          "reclong": "-3.950000",
          "year": "1623-01-01T00:00:00.000",
          "value": 10400,
          "dateYear": 1623,
          "log2Mass": 13.344295907915816,
          "dateNormal": 0.6614583333333334,
          "massNormal": 0.00045213045444045453,
          "logMassNormal": 0.5456644729033936
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.51667,
              51.65
            ]
          },
          "id": "11855",
          "mass": "29000",
          "name": "Hatford",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "51.650000",
          "reclong": "-1.516670",
          "year": "1628-01-01T00:00:00.000",
          "value": 29000,
          "dateYear": 1628,
          "log2Mass": 14.82376527978966,
          "dateNormal": 0.6657986111111112,
          "massNormal": 0.0012608261417750496,
          "logMassNormal": 0.6061617730645337
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              136.93333,
              35.07833
            ]
          },
          "id": "16692",
          "mass": "1040",
          "name": "Minamino",
          "nametype": "Valid",
          "recclass": "L",
          "reclat": "35.078330",
          "reclong": "136.933330",
          "year": "1632-01-01T00:00:00.000",
          "value": 1040,
          "dateYear": 1632,
          "log2Mass": 10.022367813028454,
          "dateNormal": 0.6692708333333334,
          "massNormal": 0.00004517391500756152,
          "logMassNormal": 0.4098267969834209
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              6.86667,
              44.08333
            ]
          },
          "id": "16805",
          "mass": "17000",
          "name": "Mount Vaisi",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "44.083330",
          "reclong": "6.866670",
          "year": "1637-01-01T00:00:00.000",
          "value": 17000,
          "dateYear": 1637,
          "log2Mass": 14.053247125912426,
          "dateNormal": 0.6736111111111112,
          "massNormal": 0.0007390869886559561,
          "logMassNormal": 0.5746543495781802
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8,
              48.5
            ]
          },
          "id": "18033",
          "mass": "4500",
          "name": "Ortenau",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "48.500000",
          "reclong": "8.000000",
          "year": "1671-01-01T00:00:00.000",
          "value": 4500,
          "dateYear": 1671,
          "log2Mass": 12.1357092861044,
          "dateNormal": 0.703125,
          "massNormal": 0.0001956087041569002,
          "logMassNormal": 0.4962438975130041
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              137.78333,
              34.71667
            ]
          },
          "id": "23187",
          "mass": "695",
          "name": "Sasagase",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "34.716670",
          "reclong": "137.783330",
          "year": "1688-01-01T00:00:00.000",
          "value": 695,
          "dateYear": 1688,
          "log2Mass": 9.44086916761087,
          "dateNormal": 0.7178819444444444,
          "massNormal": 0.00003017391435538758,
          "logMassNormal": 0.386048610855399
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              15.05,
              53.35
            ]
          },
          "id": "23457",
          "mass": "7000",
          "name": "Schellin",
          "nametype": "Valid",
          "recclass": "L",
          "reclat": "53.350000",
          "reclong": "15.050000",
          "year": "1715-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 1715,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.7413194444444444,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              14.11667,
              50.53333
            ]
          },
          "id": "18849",
          "mass": "39",
          "name": "Ploschkovitz",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "50.533330",
          "reclong": "14.116670",
          "year": "1723-01-01T00:00:00.000",
          "value": 39,
          "dateYear": 1723,
          "log2Mass": 5.285402218862249,
          "dateNormal": 0.7482638888888888,
          "massNormal": 0.0000016521739848771298,
          "logMassNormal": 0.2161265184570044
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              26.53333,
              43.5
            ]
          },
          "id": "22396",
          "mass": "24700",
          "name": "Rasgrad",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "43.500000",
          "reclong": "26.533330",
          "year": "1740-01-01T00:00:00.000",
          "value": 24700,
          "dateYear": 1740,
          "log2Mass": 14.592223421359403,
          "dateNormal": 0.7630208333333334,
          "massNormal": 0.0010738696119073745,
          "logMassNormal": 0.5966937451515382
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              130.2,
              33.28333
            ]
          },
          "id": "17994",
          "mass": "14360",
          "name": "Ogi",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "33.283330",
          "reclong": "130.200000",
          "year": "1741-01-01T00:00:00.000",
          "value": 14360,
          "dateYear": 1741,
          "log2Mass": 13.809768128710413,
          "dateNormal": 0.7638888888888888,
          "massNormal": 0.0006243043749697554,
          "logMassNormal": 0.5646981975572652
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.33333,
              46.1
            ]
          },
          "id": "11916",
          "mass": "49000",
          "name": "Hraschina",
          "nametype": "Valid",
          "recclass": "Iron, IID",
          "reclat": "46.100000",
          "reclong": "16.333330",
          "year": "1751-01-01T00:00:00.000",
          "value": 49000,
          "dateYear": 1751,
          "log2Mass": 15.580494128777294,
          "dateNormal": 0.7725694444444444,
          "massNormal": 0.002130391396973539,
          "logMassNormal": 0.6371053351200398
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              14.65,
              49.4
            ]
          },
          "id": "23776",
          "mass": "7540",
          "name": "Tabor",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "49.400000",
          "reclong": "14.650000",
          "year": "1753-01-01T00:00:00.000",
          "value": 7540,
          "dateYear": 1753,
          "log2Mass": 12.880348808156027,
          "dateNormal": 0.7743055555555556,
          "massNormal": 0.00032778262294707054,
          "logMassNormal": 0.526693112301647
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5,
              46.21667
            ]
          },
          "id": "14757",
          "mass": "14000",
          "name": "Luponnas",
          "nametype": "Valid",
          "recclass": "H3-5",
          "reclat": "46.216670",
          "reclong": "5.000000",
          "year": "1753-01-01T00:00:00.000",
          "value": 14000,
          "dateYear": 1753,
          "log2Mass": 13.77313920671969,
          "dateNormal": 0.7743055555555556,
          "massNormal": 0.0006086522003761827,
          "logMassNormal": 0.5632003964331737
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.01667,
              44.65
            ]
          },
          "id": "453",
          "mass": "2000",
          "name": "Albareto",
          "nametype": "Valid",
          "recclass": "L/LL4",
          "reclat": "44.650000",
          "reclong": "11.016670",
          "year": "1766-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1766,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.7855902777777778,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.48333,
              47.85
            ]
          },
          "id": "14724",
          "mass": "3500",
          "name": "Lucé",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "47.850000",
          "reclong": "0.483330",
          "year": "1768-01-01T00:00:00.000",
          "value": 3500,
          "dateYear": 1768,
          "log2Mass": 11.77313920671969,
          "dateNormal": 0.7873263888888888,
          "massNormal": 0.00015213044139697571,
          "logMassNormal": 0.4814179664467843
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.13333,
              48.18333
            ]
          },
          "id": "15446",
          "mass": "19000",
          "name": "Mauerkirchen",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "48.183330",
          "reclong": "13.133330",
          "year": "1768-01-01T00:00:00.000",
          "value": 19000,
          "dateYear": 1768,
          "log2Mass": 14.213711798105672,
          "dateNormal": 0.7873263888888888,
          "massNormal": 0.000826043514175805,
          "logMassNormal": 0.5812159449876467
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.05,
              41.71667
            ]
          },
          "id": "23495",
          "mass": "4000",
          "name": "Sena",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "41.716670",
          "reclong": "-0.050000",
          "year": "1773-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1773,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.7916666666666666,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.8,
              50.35
            ]
          },
          "id": "22642",
          "mass": "2900",
          "name": "Rodach",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "50.350000",
          "reclong": "10.800000",
          "year": "1775-01-01T00:00:00.000",
          "value": 2900,
          "dateYear": 1775,
          "log2Mass": 11.501837184902296,
          "dateNormal": 0.7934027777777778,
          "massNormal": 0.00012604348374102103,
          "logMassNormal": 0.47032409714456086
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.21667,
              48.9
            ]
          },
          "id": "7775",
          "mass": "3000",
          "name": "Eichstädt",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "48.900000",
          "reclong": "11.216670",
          "year": "1785-01-01T00:00:00.000",
          "value": 3000,
          "dateYear": 1785,
          "log2Mass": 11.550746785383243,
          "dateNormal": 0.8020833333333334,
          "massNormal": 0.0001303913100170135,
          "logMassNormal": 0.4723240701330585
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.075,
              50.625
            ]
          },
          "id": "12291",
          "mass": "1500",
          "name": "Kharkov",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "50.625000",
          "reclong": "35.075000",
          "year": "1787-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1787,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.8038194444444444,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.05,
              43.95
            ]
          },
          "id": "4942",
          "mass": "6400",
          "name": "Barbotan",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.950000",
          "reclong": "-0.050000",
          "year": "1790-01-01T00:00:00.000",
          "value": 6400,
          "dateYear": 1790,
          "log2Mass": 12.643856189774725,
          "dateNormal": 0.8064236111111112,
          "massNormal": 0.0002782174034007567,
          "logMassNormal": 0.5170226417991136
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.6,
              43.11667
            ]
          },
          "id": "23586",
          "mass": "3700",
          "name": "Siena",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "43.116670",
          "reclong": "11.600000",
          "year": "1794-01-01T00:00:00.000",
          "value": 3700,
          "dateYear": 1794,
          "log2Mass": 11.853309555403674,
          "dateNormal": 0.8098958333333334,
          "massNormal": 0.0001608260939489606,
          "logMassNormal": 0.48469622941090046
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              80.83333,
              9.33333
            ]
          },
          "id": "16851",
          "mass": "25.5",
          "name": "Mulletiwu",
          "nametype": "Valid",
          "recclass": "L",
          "reclat": "9.333330",
          "reclong": "80.833330",
          "year": "1795-01-01T00:00:00.000",
          "value": 25.5,
          "dateYear": 1795,
          "log2Mass": 4.672425341971495,
          "dateNormal": 0.8107638888888888,
          "massNormal": 0.0000010652174376181494,
          "logMassNormal": 0.19106114919820757
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -8,
              38.5
            ]
          },
          "id": "18876",
          "mass": "4500",
          "name": "Portugal",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "38.500000",
          "reclong": "-8.000000",
          "year": "1796-01-01T00:00:00.000",
          "value": 4500,
          "dateYear": 1796,
          "log2Mass": 12.1357092861044,
          "dateNormal": 0.8116319444444444,
          "massNormal": 0.0001956087041569002,
          "logMassNormal": 0.4962438975130041
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.16667,
              49.78333
            ]
          },
          "id": "5063",
          "mass": "1850",
          "name": "Bjelaja Zerkov",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "49.783330",
          "reclong": "30.166670",
          "year": "1796-01-01T00:00:00.000",
          "value": 1850,
          "dateYear": 1796,
          "log2Mass": 10.853309555403674,
          "dateNormal": 0.8116319444444444,
          "massNormal": 0.00008039130784310035,
          "logMassNormal": 0.4438050144177058
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.91667,
              25.36667
            ]
          },
          "id": "5011",
          "mass": "3700",
          "name": "Benares (a)",
          "nametype": "Valid",
          "recclass": "LL4",
          "reclat": "25.366670",
          "reclong": "82.916670",
          "year": "1798-01-01T00:00:00.000",
          "value": 3700,
          "dateYear": 1798,
          "log2Mass": 11.853309555403674,
          "dateNormal": 0.8133680555555556,
          "massNormal": 0.0001608260939489606,
          "logMassNormal": 0.48469622941090046
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              4.63333,
              46.05
            ]
          },
          "id": "23111",
          "mass": "9000",
          "name": "Salles",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "46.050000",
          "reclong": "4.633330",
          "year": "1798-01-01T00:00:00.000",
          "value": 9000,
          "dateYear": 1798,
          "log2Mass": 13.1357092861044,
          "dateNormal": 0.8133680555555556,
          "massNormal": 0.0003912608865765603,
          "logMassNormal": 0.5371351125061987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              57,
              -20
            ]
          },
          "id": "15447",
          "mass": "220",
          "name": "Mauritius",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-20.000000",
          "reclong": "57.000000",
          "year": "1801-01-01T00:00:00.000",
          "value": 220,
          "dateYear": 1801,
          "log2Mass": 7.78135971352466,
          "dateNormal": 0.8159722222222222,
          "massNormal": 0.000009521739544423458,
          "logMassNormal": 0.31818925298512063
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5.38333,
              43.86667
            ]
          },
          "id": "2320",
          "mass": "3200",
          "name": "Apt",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "43.866670",
          "reclong": "5.383330",
          "year": "1803-01-01T00:00:00.000",
          "value": 3200,
          "dateYear": 1803,
          "log2Mass": 11.643856189774725,
          "dateNormal": 0.8177083333333334,
          "massNormal": 0.00013908696256899837,
          "logMassNormal": 0.4761314268059189
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.63333,
              48.76667
            ]
          },
          "id": "12434",
          "mass": "37000",
          "name": "L'Aigle",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "48.766670",
          "reclong": "0.633330",
          "year": "1803-01-01T00:00:00.000",
          "value": 37000,
          "dateYear": 1803,
          "log2Mass": 15.175237650291036,
          "dateNormal": 0.8177083333333334,
          "massNormal": 0.0016086522438544454,
          "logMassNormal": 0.6205339053308732
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.61667,
              48.13333
            ]
          },
          "id": "15443",
          "mass": "1600",
          "name": "Mässing",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "48.133330",
          "reclong": "12.616670",
          "year": "1803-01-01T00:00:00.000",
          "value": 1600,
          "dateYear": 1803,
          "log2Mass": 10.643856189774725,
          "dateNormal": 0.8177083333333334,
          "massNormal": 0.00006952174215311922,
          "logMassNormal": 0.4352402118127242
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -4.23333,
              55.9
            ]
          },
          "id": "11884",
          "mass": "4500",
          "name": "High Possil",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "55.900000",
          "reclong": "-4.233330",
          "year": "1804-01-01T00:00:00.000",
          "value": 4500,
          "dateYear": 1804,
          "log2Mass": 12.1357092861044,
          "dateNormal": 0.8185763888888888,
          "massNormal": 0.0001956087041569002,
          "logMassNormal": 0.4962438975130041
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -102,
              23
            ]
          },
          "id": "5093",
          "mass": "56",
          "name": "Bocas",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "23.000000",
          "reclong": "-102.000000",
          "year": "1804-01-01T00:00:00.000",
          "value": 56,
          "dateYear": 1804,
          "log2Mass": 5.807354922057604,
          "dateNormal": 0.8185763888888888,
          "massNormal": 0.000002391304451795846,
          "logMassNormal": 0.2374697986596448
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.65,
              49.86667
            ]
          },
          "id": "6603",
          "mass": "100",
          "name": "Darmstadt",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "49.866670",
          "reclong": "8.650000",
          "year": "1804-01-01T00:00:00.000",
          "value": 100,
          "dateYear": 1804,
          "log2Mass": 6.643856189774724,
          "dateNormal": 0.8185763888888888,
          "massNormal": 0.000004304348013232522,
          "logMassNormal": 0.27167535183994546
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              112.3,
              51.2
            ]
          },
          "id": "7718",
          "mass": "3891",
          "name": "Doroninsk",
          "nametype": "Valid",
          "recclass": "H5-7",
          "reclat": "51.200000",
          "reclong": "112.300000",
          "year": "1805-01-01T00:00:00.000",
          "value": 3891,
          "dateYear": 1805,
          "log2Mass": 11.925925264972856,
          "dateNormal": 0.8194444444444444,
          "massNormal": 0.00016913044213610618,
          "logMassNormal": 0.48766557400277727
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.03333,
              42.45
            ]
          },
          "id": "2345",
          "mass": "41",
          "name": "Asco",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "42.450000",
          "reclong": "9.033330",
          "year": "1805-01-01T00:00:00.000",
          "value": 41,
          "dateYear": 1805,
          "log2Mass": 5.357552004618084,
          "dateNormal": 0.8194444444444444,
          "massNormal": 0.0000017391305103969786,
          "logMassNormal": 0.2190768108580592
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              4.08333,
              44.11667
            ]
          },
          "id": "448",
          "mass": "6000",
          "name": "Alais",
          "nametype": "Valid",
          "recclass": "CI1",
          "reclat": "44.116670",
          "reclong": "4.083330",
          "year": "1806-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1806,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.8203125,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.2,
              54.5
            ]
          },
          "id": "24004",
          "mass": "65500",
          "name": "Timochin",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "54.500000",
          "reclong": "35.200000",
          "year": "1807-01-01T00:00:00.000",
          "value": 65500,
          "dateYear": 1807,
          "log2Mass": 15.999207286199537,
          "dateNormal": 0.8211805555555556,
          "massNormal": 0.0028477827325122927,
          "logMassNormal": 0.6542270248606721
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.83333,
              28.78333
            ]
          },
          "id": "16740",
          "mass": "70",
          "name": "Moradabad",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "28.783330",
          "reclong": "78.833330",
          "year": "1808-01-01T00:00:00.000",
          "value": 70,
          "dateYear": 1808,
          "log2Mass": 6.129283016944966,
          "dateNormal": 0.8220486111111112,
          "massNormal": 0.0000030000001304347883,
          "logMassNormal": 0.2506338296000335
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              14.85,
              50.2
            ]
          },
          "id": "14661",
          "mass": "12800",
          "name": "Lissa",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "50.200000",
          "reclong": "14.850000",
          "year": "1808-01-01T00:00:00.000",
          "value": 12800,
          "dateYear": 1808,
          "log2Mass": 13.643856189774725,
          "dateNormal": 0.8220486111111112,
          "massNormal": 0.0005564782850642733,
          "logMassNormal": 0.5579138567923082
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.05,
              44.86667
            ]
          },
          "id": "5110",
          "mass": "1676",
          "name": "Borgo San Donino",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "44.866670",
          "reclong": "10.050000",
          "year": "1808-01-01T00:00:00.000",
          "value": 1676,
          "dateYear": 1808,
          "log2Mass": 10.710806433699352,
          "dateNormal": 0.8220486111111112,
          "massNormal": 0.00007282609012287349,
          "logMassNormal": 0.43797788863089293
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              15.56667,
              49.28333
            ]
          },
          "id": "23713",
          "mass": "52000",
          "name": "Stannern",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "49.283330",
          "reclong": "15.566670",
          "year": "1808-01-01T00:00:00.000",
          "value": 52000,
          "dateYear": 1808,
          "log2Mass": 15.66622400280318,
          "dateNormal": 0.8220486111111112,
          "massNormal": 0.0022608261852533123,
          "logMassNormal": 0.6406109338301718
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              34,
              55
            ]
          },
          "id": "12306",
          "mass": "195",
          "name": "Kikino",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "55.000000",
          "reclong": "34.000000",
          "year": "1809-01-01T00:00:00.000",
          "value": 195,
          "dateYear": 1809,
          "log2Mass": 7.60733031374961,
          "dateNormal": 0.8229166666666666,
          "massNormal": 0.000008434782975425346,
          "logMassNormal": 0.3110729793837824
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.56667,
              47.93333
            ]
          },
          "id": "5329",
          "mass": "27000",
          "name": "Charsonville",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "47.933330",
          "reclong": "1.566670",
          "year": "1810-01-01T00:00:00.000",
          "value": 27000,
          "dateYear": 1810,
          "log2Mass": 14.720671786825555,
          "dateNormal": 0.8237847222222222,
          "massNormal": 0.0011738696162552006,
          "logMassNormal": 0.601946154879339
        },
        {
          ":@computed_region_cbhk_fwbd": "37",
          ":@computed_region_nnqa_25f4": "637",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -79.25,
              36.5
            ]
          },
          "id": "5296",
          "mass": "1360",
          "name": "Caswell County",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "36.500000",
          "reclong": "-79.250000",
          "year": "1810-01-01T00:00:00.000",
          "value": 1360,
          "dateYear": 1810,
          "log2Mass": 10.409390936137703,
          "dateNormal": 0.8237847222222222,
          "massNormal": 0.000059086959090737354,
          "logMassNormal": 0.42565264271781883
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -8.33333,
              52.45
            ]
          },
          "id": "16737",
          "mass": "3520",
          "name": "Mooresfort",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "52.450000",
          "reclong": "-8.333330",
          "year": "1810-01-01T00:00:00.000",
          "value": 3520,
          "dateYear": 1810,
          "log2Mass": 11.78135971352466,
          "dateNormal": 0.8237847222222222,
          "massNormal": 0.0001530000066521742,
          "logMassNormal": 0.4817541129578993
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              33.5,
              50.75
            ]
          },
          "id": "12370",
          "mass": "6000",
          "name": "Kuleschovka",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "50.750000",
          "reclong": "33.500000",
          "year": "1811-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1811,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.8246527777777778,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -3.8,
              41.68333
            ]
          },
          "id": "5029",
          "mass": "1440",
          "name": "Berlanguillas",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "41.683330",
          "reclong": "-3.800000",
          "year": "1811-01-01T00:00:00.000",
          "value": 1440,
          "dateYear": 1811,
          "log2Mass": 10.491853096329674,
          "dateNormal": 0.8246527777777778,
          "massNormal": 0.0000625652201115313,
          "logMassNormal": 0.42902462063903196
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.95,
              13.33333
            ]
          },
          "id": "18902",
          "mass": "100",
          "name": "Punganaru",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "13.333330",
          "reclong": "78.950000",
          "year": "1811-01-01T00:00:00.000",
          "value": 100,
          "dateYear": 1811,
          "log2Mass": 6.643856189774724,
          "dateNormal": 0.8246527777777778,
          "massNormal": 0.000004304348013232522,
          "logMassNormal": 0.27167535183994546
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.86667,
              55.46667
            ]
          },
          "id": "5114",
          "mass": "500",
          "name": "Borodino",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "55.466670",
          "reclong": "35.866670",
          "year": "1812-01-01T00:00:00.000",
          "value": 500,
          "dateYear": 1812,
          "log2Mass": 8.965784284662087,
          "dateNormal": 0.8255208333333334,
          "massNormal": 0.00002169565311720231,
          "logMassNormal": 0.36662181276672356
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.05,
              46.68333
            ]
          },
          "id": "5325",
          "mass": "31500",
          "name": "Chantonnay",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.683330",
          "reclong": "1.050000",
          "year": "1812-01-01T00:00:00.000",
          "value": 31500,
          "dateYear": 1812,
          "log2Mass": 14.943064208162003,
          "dateNormal": 0.8255208333333334,
          "massNormal": 0.001369521798674861,
          "logMassNormal": 0.6110400511930648
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.25,
              52.21667
            ]
          },
          "id": "10049",
          "mass": "2250",
          "name": "Erxleben",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "52.216670",
          "reclong": "11.250000",
          "year": "1812-01-01T00:00:00.000",
          "value": 2250,
          "dateYear": 1812,
          "log2Mass": 11.1357092861044,
          "dateNormal": 0.8255208333333334,
          "massNormal": 0.00009778261294707013,
          "logMassNormal": 0.4553526825198094
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27.7,
              61.2
            ]
          },
          "id": "14756",
          "mass": "885",
          "name": "Luotolax",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "61.200000",
          "reclong": "27.700000",
          "year": "1813-01-01T00:00:00.000",
          "value": 885,
          "dateYear": 1813,
          "log2Mass": 9.78953364497036,
          "dateNormal": 0.8263888888888888,
          "massNormal": 0.00003843478427977323,
          "logMassNormal": 0.4003059249595957
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -8.78333,
              52.56667
            ]
          },
          "id": "14652",
          "mass": "50000",
          "name": "Limerick",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "52.566670",
          "reclong": "-8.783330",
          "year": "1813-01-01T00:00:00.000",
          "value": 50000,
          "dateYear": 1813,
          "log2Mass": 15.609640474436812,
          "dateNormal": 0.8263888888888888,
          "massNormal": 0.0021738696597334633,
          "logMassNormal": 0.6382971646066691
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.56667,
              13.78333
            ]
          },
          "id": "11464",
          "mass": "28",
          "name": "Gurram Konda",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "13.783330",
          "reclong": "78.566670",
          "year": "1814-01-01T00:00:00.000",
          "value": 28,
          "dateYear": 1814,
          "log2Mass": 4.807354922057604,
          "dateNormal": 0.8272569444444444,
          "massNormal": 0.0000011739130945179606,
          "logMassNormal": 0.19657858366645012
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              38,
              48.6
            ]
          },
          "id": "4917",
          "mass": "18000",
          "name": "Bachmut",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "48.600000",
          "reclong": "38.000000",
          "year": "1814-01-01T00:00:00.000",
          "value": 18000,
          "dateYear": 1814,
          "log2Mass": 14.1357092861044,
          "dateNormal": 0.8272569444444444,
          "massNormal": 0.0007825652514158805,
          "logMassNormal": 0.5780263274993934
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.61667,
              44.21667
            ]
          },
          "id": "392",
          "mass": "30000",
          "name": "Agen",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.216670",
          "reclong": "0.616670",
          "year": "1814-01-01T00:00:00.000",
          "value": 30000,
          "dateYear": 1814,
          "log2Mass": 14.872674880270605,
          "dateNormal": 0.8272569444444444,
          "massNormal": 0.0013043044045349741,
          "logMassNormal": 0.6081617460530312
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.63333,
              30.3
            ]
          },
          "id": "7750",
          "mass": "13200",
          "name": "Durala",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "30.300000",
          "reclong": "76.633330",
          "year": "1815-01-01T00:00:00.000",
          "value": 13200,
          "dateYear": 1815,
          "log2Mass": 13.688250309133178,
          "dateNormal": 0.828125,
          "massNormal": 0.000573869590168243,
          "logMassNormal": 0.5597291862714283
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5.36667,
              47.71667
            ]
          },
          "id": "5331",
          "mass": "4000",
          "name": "Chassigny",
          "nametype": "Valid",
          "recclass": "Martian (chassignite)",
          "reclat": "47.716670",
          "reclong": "5.366670",
          "year": "1815-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1815,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.828125,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35,
              55
            ]
          },
          "id": "23645",
          "mass": "2750",
          "name": "Slobodka",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "55.000000",
          "reclong": "35.000000",
          "year": "1818-01-01T00:00:00.000",
          "value": 2750,
          "dateYear": 1818,
          "log2Mass": 11.425215903299385,
          "dateNormal": 0.8307291666666666,
          "massNormal": 0.00011952174432703237,
          "logMassNormal": 0.4671909598454821
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              23.56667,
              41.05
            ]
          },
          "id": "23501",
          "mass": "8500",
          "name": "Seres",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "41.050000",
          "reclong": "23.566670",
          "year": "1818-01-01T00:00:00.000",
          "value": 8500,
          "dateYear": 1818,
          "log2Mass": 13.053247125912426,
          "dateNormal": 0.8307291666666666,
          "massNormal": 0.00036952175519659806,
          "logMassNormal": 0.5337631345849856
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.45,
              45.43333
            ]
          },
          "id": "12202",
          "mass": "5000",
          "name": "Jonzac",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "45.433330",
          "reclong": "-0.450000",
          "year": "1819-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1819,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.8315972222222222,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.13333,
              50.93333
            ]
          },
          "id": "18853",
          "mass": "3000",
          "name": "Pohlitz",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "50.933330",
          "reclong": "12.133330",
          "year": "1819-01-01T00:00:00.000",
          "value": 3000,
          "dateYear": 1819,
          "log2Mass": 11.550746785383243,
          "dateNormal": 0.8315972222222222,
          "massNormal": 0.0001303913100170135,
          "logMassNormal": 0.4723240701330585
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              26.43333,
              56
            ]
          },
          "id": "14670",
          "mass": "5213",
          "name": "Lixna",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "56.000000",
          "reclong": "26.433330",
          "year": "1820-01-01T00:00:00.000",
          "value": 5213,
          "dateYear": 1820,
          "log2Mass": 12.347898144596012,
          "dateNormal": 0.8324652777777778,
          "massNormal": 0.00022660870550472633,
          "logMassNormal": 0.5049205577447452
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              4.3,
              44.71667
            ]
          },
          "id": "12214",
          "mass": "91000",
          "name": "Juvinas",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "44.716670",
          "reclong": "4.300000",
          "year": "1821-01-01T00:00:00.000",
          "value": 91000,
          "dateYear": 1821,
          "log2Mass": 16.47357892486078,
          "dateNormal": 0.8333333333333334,
          "massNormal": 0.003956478432890367,
          "logMassNormal": 0.673624657523843
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              6.46667,
              48.18333
            ]
          },
          "id": "10041",
          "mass": "277",
          "name": "Épinal",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "48.183330",
          "reclong": "6.466670",
          "year": "1822-01-01T00:00:00.000",
          "value": 277,
          "dateYear": 1822,
          "log2Mass": 8.113742166049189,
          "dateNormal": 0.8342013888888888,
          "massNormal": 0.000012000000521739153,
          "logMassNormal": 0.33178077531126643
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              80.81667,
              25.95
            ]
          },
          "id": "10839",
          "mass": "4000",
          "name": "Futtehpur",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "25.950000",
          "reclong": "80.816670",
          "year": "1822-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1822,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.8342013888888888,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.33333,
              27.08333
            ]
          },
          "id": "12221",
          "mass": "89",
          "name": "Kadonah",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "27.083330",
          "reclong": "78.333330",
          "year": "1822-01-01T00:00:00.000",
          "value": 89,
          "dateYear": 1822,
          "log2Mass": 6.475733430966398,
          "dateNormal": 0.8342013888888888,
          "massNormal": 0.000003826087122873353,
          "logMassNormal": 0.2648006079642652
        },
        {
          "fall": "Fell",
          "id": "5383",
          "mass": "48.6",
          "name": "Clohars",
          "nametype": "Valid",
          "recclass": "L4",
          "year": "1822-01-01T00:00:00.000",
          "value": 48.6,
          "dateYear": 1822,
          "log2Mass": 5.602884408718419,
          "dateNormal": 0.8342013888888888,
          "massNormal": 0.000002069565307372405,
          "logMassNormal": 0.2291087509389233
        },
        {
          ":@computed_region_cbhk_fwbd": "49",
          ":@computed_region_nnqa_25f4": "1683",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -69.48333,
              44.08333
            ]
          },
          "id": "16984",
          "mass": "2300",
          "name": "Nobleborough",
          "nametype": "Valid",
          "recclass": "Eucrite-pmict",
          "reclat": "44.083330",
          "reclong": "-69.483330",
          "year": "1823-01-01T00:00:00.000",
          "value": 2300,
          "dateYear": 1823,
          "log2Mass": 11.167418145831737,
          "dateNormal": 0.8350694444444444,
          "massNormal": 0.00009995652608506636,
          "logMassNormal": 0.45664929632010903
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              33.88333,
              51.33333
            ]
          },
          "id": "5117",
          "mass": "614",
          "name": "Botschetschki",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "51.333330",
          "reclong": "33.883330",
          "year": "1823-01-01T00:00:00.000",
          "value": 614,
          "dateYear": 1823,
          "log2Mass": 9.262094845370179,
          "dateNormal": 0.8350694444444444,
          "massNormal": 0.0000266521750718337,
          "logMassNormal": 0.3787383116093922
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.28333,
              44.76667
            ]
          },
          "id": "22586",
          "mass": "1000",
          "name": "Renazzo",
          "nametype": "Valid",
          "recclass": "CR2",
          "reclat": "44.766670",
          "reclong": "11.283330",
          "year": "1824-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1824,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.8359375,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          ":@computed_region_cbhk_fwbd": "4",
          ":@computed_region_nnqa_25f4": "1657",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -157.86667,
              21.3
            ]
          },
          "id": "11904",
          "mass": "2420",
          "name": "Honolulu",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "21.300000",
          "reclong": "-157.866670",
          "year": "1825-01-01T00:00:00.000",
          "value": 2420,
          "dateYear": 1825,
          "log2Mass": 11.240791332161956,
          "dateNormal": 0.8368055555555556,
          "massNormal": 0.00010517391761625729,
          "logMassNormal": 0.45964961505707375
        },
        {
          ":@computed_region_cbhk_fwbd": "45",
          ":@computed_region_nnqa_25f4": "419",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -77.16667,
              38.41667
            ]
          },
          "id": "16904",
          "mass": "7500",
          "name": "Nanjemoy",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "38.416670",
          "reclong": "-77.166670",
          "year": "1825-01-01T00:00:00.000",
          "value": 7500,
          "dateYear": 1825,
          "log2Mass": 12.872674880270605,
          "dateNormal": 0.8368055555555556,
          "massNormal": 0.00032604349243667356,
          "logMassNormal": 0.5263793160666419
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.98333,
              48.53333
            ]
          },
          "id": "18176",
          "mass": "40000",
          "name": "Pavlograd",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "48.533330",
          "reclong": "35.983330",
          "year": "1826-01-01T00:00:00.000",
          "value": 40000,
          "dateYear": 1826,
          "log2Mass": 15.287712379549449,
          "dateNormal": 0.8376736111111112,
          "massNormal": 0.0017390870321342187,
          "logMassNormal": 0.6251331336662803
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.4,
              44.3
            ]
          },
          "id": "10846",
          "mass": "132.69999999999999",
          "name": "Galapian",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "44.300000",
          "reclong": "0.400000",
          "year": "1826-01-01T00:00:00.000",
          "value": 132.7,
          "dateYear": 1826,
          "log2Mass": 7.052024560482831,
          "dateNormal": 0.8376736111111112,
          "massNormal": 0.000005726087205482052,
          "logMassNormal": 0.28836585243999263
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              14.7,
              37.28333
            ]
          },
          "id": "16696",
          "mass": "42",
          "name": "Mineo",
          "nametype": "Valid",
          "recclass": "Pallasite",
          "reclat": "37.283330",
          "reclong": "14.700000",
          "year": "1826-01-01T00:00:00.000",
          "value": 42,
          "dateYear": 1826,
          "log2Mass": 5.392317422778761,
          "dateNormal": 0.8376736111111112,
          "massNormal": 0.0000017826087731569032,
          "logMassNormal": 0.22049841104639575
        },
        {
          ":@computed_region_cbhk_fwbd": "39",
          ":@computed_region_nnqa_25f4": "2115",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -86.5,
              36.4
            ]
          },
          "id": "7728",
          "mass": "5000",
          "name": "Drake Creek",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "36.400000",
          "reclong": "-86.500000",
          "year": "1827-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1827,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.8385416666666666,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              83.61667,
              25.9
            ]
          },
          "id": "16629",
          "mass": "350",
          "name": "Mhow",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "25.900000",
          "reclong": "83.616670",
          "year": "1827-01-01T00:00:00.000",
          "value": 350,
          "dateYear": 1827,
          "log2Mass": 8.451211111832329,
          "dateNormal": 0.8385416666666666,
          "massNormal": 0.000015173913703213639,
          "logMassNormal": 0.3455802905268116
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              23.2,
              53.1
            ]
          },
          "id": "5042",
          "mass": "4000",
          "name": "Bialystok",
          "nametype": "Valid",
          "recclass": "Eucrite-pmict",
          "reclat": "53.100000",
          "reclong": "23.200000",
          "year": "1827-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1827,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.8385416666666666,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          ":@computed_region_cbhk_fwbd": "40",
          ":@computed_region_nnqa_25f4": "2764",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -77.5,
              37.46667
            ]
          },
          "id": "22603",
          "mass": "1800",
          "name": "Richmond",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "37.466670",
          "reclong": "-77.500000",
          "year": "1828-01-01T00:00:00.000",
          "value": 1800,
          "dateYear": 1828,
          "log2Mass": 10.813781191217037,
          "dateNormal": 0.8394097222222222,
          "massNormal": 0.00007821739470510412,
          "logMassNormal": 0.4421886515794207
        },
        {
          ":@computed_region_nnqa_25f4": "2491",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -74,
              40.25
            ]
          },
          "id": "6634",
          "mass": "28",
          "name": "Deal",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "40.250000",
          "reclong": "-74.000000",
          "year": "1829-01-01T00:00:00.000",
          "value": 28,
          "dateYear": 1829,
          "log2Mass": 4.807354922057604,
          "dateNormal": 0.8402777777777778,
          "massNormal": 0.0000011739130945179606,
          "logMassNormal": 0.19657858366645012
        },
        {
          ":@computed_region_cbhk_fwbd": "31",
          ":@computed_region_nnqa_25f4": "1470",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -83.96667,
              33.01667
            ]
          },
          "id": "10164",
          "mass": "16300",
          "name": "Forsyth",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "33.016670",
          "reclong": "-83.966670",
          "year": "1829-01-01T00:00:00.000",
          "value": 16300,
          "dateYear": 1829,
          "log2Mass": 13.992584344005802,
          "dateNormal": 0.8402777777777778,
          "massNormal": 0.000708652204724009,
          "logMassNormal": 0.5721737747211512
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              40.9,
              54.03333
            ]
          },
          "id": "12355",
          "mass": "2440",
          "name": "Krasnoi-Ugol",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "54.033330",
          "reclong": "40.900000",
          "year": "1829-01-01T00:00:00.000",
          "value": 2440,
          "dateYear": 1829,
          "log2Mass": 11.252665432450248,
          "dateNormal": 0.8402777777777778,
          "massNormal": 0.00010604348287145578,
          "logMassNormal": 0.4601351614448131
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -3.43333,
              56.4
            ]
          },
          "id": "18797",
          "mass": "2",
          "name": "Perth",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "56.400000",
          "reclong": "-3.433330",
          "year": "1830-01-01T00:00:00.000",
          "value": 2,
          "dateYear": 1830,
          "log2Mass": 1,
          "dateNormal": 0.8411458333333334,
          "massNormal": 4.347826275992447e-8,
          "logMassNormal": 0.040891214993194674
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.11667,
              51.9
            ]
          },
          "id": "12740",
          "mass": "1060",
          "name": "Launton",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "51.900000",
          "reclong": "-1.116670",
          "year": "1830-01-01T00:00:00.000",
          "value": 1060,
          "dateYear": 1830,
          "log2Mass": 10.049848549450562,
          "dateNormal": 0.8411458333333334,
          "massNormal": 0.000046043480262760014,
          "logMassNormal": 0.4109505176846286
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.63333,
              49.36667
            ]
          },
          "id": "5072",
          "mass": "470",
          "name": "Blansko",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "49.366670",
          "reclong": "16.633330",
          "year": "1833-01-01T00:00:00.000",
          "value": 470,
          "dateYear": 1833,
          "log2Mass": 8.876516946565,
          "dateNormal": 0.84375,
          "massNormal": 0.000020391305234404577,
          "logMassNormal": 0.36297156285272536
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.5,
              29.48333
            ]
          },
          "id": "5330",
          "mass": "12000",
          "name": "Charwallas",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "29.483330",
          "reclong": "75.500000",
          "year": "1834-01-01T00:00:00.000",
          "value": 12000,
          "dateYear": 1834,
          "log2Mass": 13.550746785383243,
          "dateNormal": 0.8446180555555556,
          "massNormal": 0.0005216956748563337,
          "logMassNormal": 0.5541065001194478
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              25.5,
              50.83333
            ]
          },
          "id": "18002",
          "mass": "12000",
          "name": "Okniny",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "50.833330",
          "reclong": "25.500000",
          "year": "1834-01-01T00:00:00.000",
          "value": 12000,
          "dateYear": 1834,
          "log2Mass": 13.550746785383243,
          "dateNormal": 0.8446180555555556,
          "massNormal": 0.0005216956748563337,
          "logMassNormal": 0.5541065001194478
        },
        {
          ":@computed_region_cbhk_fwbd": "39",
          ":@computed_region_nnqa_25f4": "2007",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -87.33333,
              36.16667
            ]
          },
          "id": "5328",
          "mass": "4300",
          "name": "Charlotte",
          "nametype": "Valid",
          "recclass": "Iron, IVA",
          "reclat": "36.166670",
          "reclong": "-87.333330",
          "year": "1835-01-01T00:00:00.000",
          "value": 4300,
          "dateYear": 1835,
          "log2Mass": 12.070120944476823,
          "dateNormal": 0.8454861111111112,
          "massNormal": 0.00018691305160491528,
          "logMassNormal": 0.4935619105344638
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.78333,
              51.78333
            ]
          },
          "id": "461",
          "mass": "700",
          "name": "Aldsworth",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "51.783330",
          "reclong": "-1.783330",
          "year": "1835-01-01T00:00:00.000",
          "value": 700,
          "dateYear": 1835,
          "log2Mass": 9.451211111832329,
          "dateNormal": 0.8454861111111112,
          "massNormal": 0.000030391305669187204,
          "logMassNormal": 0.38647150552000625
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -36.66667,
              -5.2
            ]
          },
          "id": "15370",
          "mass": "1500",
          "name": "Macau",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-5.200000",
          "reclong": "-36.666670",
          "year": "1836-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1836,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.8463541666666666,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.86667,
              45.36667
            ]
          },
          "id": "15438",
          "mass": "1000",
          "name": "Mascombes",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "45.366670",
          "reclong": "1.866670",
          "year": "1836-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1836,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.8463541666666666,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5.16667,
              44.38333
            ]
          },
          "id": "4893",
          "mass": "800",
          "name": "Aubres",
          "nametype": "Valid",
          "recclass": "Aubrite",
          "reclat": "44.383330",
          "reclong": "5.166670",
          "year": "1836-01-01T00:00:00.000",
          "value": 800,
          "dateYear": 1836,
          "log2Mass": 9.643856189774725,
          "dateNormal": 0.8463541666666666,
          "massNormal": 0.00003473913194517965,
          "logMassNormal": 0.39434899681952956
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.1,
              46.25
            ]
          },
          "id": "10051",
          "mass": "1500",
          "name": "Esnandes",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.250000",
          "reclong": "-1.100000",
          "year": "1837-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1837,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.8472222222222222,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              18.71667,
              49.26667
            ]
          },
          "id": "11207",
          "mass": "10500",
          "name": "Gross-Divina",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "49.266670",
          "reclong": "18.716670",
          "year": "1837-01-01T00:00:00.000",
          "value": 10500,
          "dateYear": 1837,
          "log2Mass": 13.358101707440847,
          "dateNormal": 0.8472222222222222,
          "massNormal": 0.000456478280716447,
          "logMassNormal": 0.5462290088199245
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              79.96667,
              27.25
            ]
          },
          "id": "12222",
          "mass": "230",
          "name": "Kaee",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "27.250000",
          "reclong": "79.966670",
          "year": "1838-01-01T00:00:00.000",
          "value": 230,
          "dateYear": 1838,
          "log2Mass": 7.845490050944375,
          "dateNormal": 0.8480902777777778,
          "massNormal": 0.000009956522172022704,
          "logMassNormal": 0.3208116204001363
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              19.38333,
              -33.13333
            ]
          },
          "id": "5397",
          "mass": "5200",
          "name": "Cold Bokkeveld",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "-33.133330",
          "reclong": "19.383330",
          "year": "1838-01-01T00:00:00.000",
          "value": 5200,
          "dateYear": 1838,
          "log2Mass": 12.344295907915816,
          "dateNormal": 0.8480902777777778,
          "massNormal": 0.0002260434880888473,
          "logMassNormal": 0.5047732579101989
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              77.95,
              29.71667
            ]
          },
          "id": "427",
          "mass": "1800",
          "name": "Akbarpur",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "29.716670",
          "reclong": "77.950000",
          "year": "1838-01-01T00:00:00.000",
          "value": 1800,
          "dateYear": 1838,
          "log2Mass": 10.813781191217037,
          "dateNormal": 0.8480902777777778,
          "massNormal": 0.00007821739470510412,
          "logMassNormal": 0.4421886515794207
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.01667,
              20.26667
            ]
          },
          "id": "5320",
          "mass": "8800",
          "name": "Chandakapur",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "20.266670",
          "reclong": "76.016670",
          "year": "1838-01-01T00:00:00.000",
          "value": 8800,
          "dateYear": 1838,
          "log2Mass": 13.103287808412022,
          "dateNormal": 0.8480902777777778,
          "massNormal": 0.0003825652340245754,
          "logMassNormal": 0.5358093588914827
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.58333,
              47.63333
            ]
          },
          "id": "16729",
          "mass": "500",
          "name": "Montlivault",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "47.633330",
          "reclong": "1.583330",
          "year": "1838-01-01T00:00:00.000",
          "value": 500,
          "dateYear": 1838,
          "log2Mass": 8.965784284662087,
          "dateNormal": 0.8480902777777778,
          "massNormal": 0.00002169565311720231,
          "logMassNormal": 0.36662181276672356
        },
        {
          ":@computed_region_cbhk_fwbd": "18",
          ":@computed_region_nnqa_25f4": "2171",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -92.08333,
              37.91667
            ]
          },
          "id": "14664",
          "mass": "491",
          "name": "Little Piney",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "37.916670",
          "reclong": "-92.083330",
          "year": "1839-01-01T00:00:00.000",
          "value": 491,
          "dateYear": 1839,
          "log2Mass": 8.939579214314692,
          "dateNormal": 0.8489583333333334,
          "massNormal": 0.00002130434875236299,
          "logMassNormal": 0.36555025560123644
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.3,
              45.08333
            ]
          },
          "id": "5308",
          "mass": "6460",
          "name": "Cereseto",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "45.083330",
          "reclong": "8.300000",
          "year": "1840-01-01T00:00:00.000",
          "value": 6460,
          "dateYear": 1840,
          "log2Mass": 12.657318449581288,
          "dateNormal": 0.8498263888888888,
          "massNormal": 0.00028082609916635213,
          "logMassNormal": 0.5175731299591579
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              81.01667,
              47.21667
            ]
          },
          "id": "12256",
          "mass": "3000",
          "name": "Karakol",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "47.216670",
          "reclong": "81.016670",
          "year": "1840-01-01T00:00:00.000",
          "value": 3000,
          "dateYear": 1840,
          "log2Mass": 11.550746785383243,
          "dateNormal": 0.8498263888888888,
          "massNormal": 0.0001303913100170135,
          "logMassNormal": 0.4723240701330585
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              2.91667,
              47.93333
            ]
          },
          "id": "5332",
          "mass": "30000",
          "name": "Château-Renard",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "47.933330",
          "reclong": "2.916670",
          "year": "1841-01-01T00:00:00.000",
          "value": 30000,
          "dateYear": 1841,
          "log2Mass": 14.872674880270605,
          "dateNormal": 0.8506944444444444,
          "massNormal": 0.0013043044045349741,
          "logMassNormal": 0.6081617460530312
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.5,
              46.95
            ]
          },
          "id": "23082",
          "mass": "5500",
          "name": "St. Christophe-la-Chartreuse",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.950000",
          "reclong": "-1.500000",
          "year": "1841-01-01T00:00:00.000",
          "value": 5500,
          "dateYear": 1841,
          "log2Mass": 12.425215903299385,
          "dateNormal": 0.8506944444444444,
          "massNormal": 0.00023908696691682464,
          "logMassNormal": 0.5080821748386768
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              15.5,
              51.93333
            ]
          },
          "id": "11426",
          "mass": "1000",
          "name": "Grüneberg",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "51.933330",
          "reclong": "15.500000",
          "year": "1841-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1841,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.8506944444444444,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3.23333,
              44.33333
            ]
          },
          "id": "4900",
          "mass": "2000",
          "name": "Aumieres",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "44.333330",
          "reclong": "3.233330",
          "year": "1842-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1842,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.8515625,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -2.5,
              42.38333
            ]
          },
          "id": "4946",
          "mass": "3200",
          "name": "Barea",
          "nametype": "Valid",
          "recclass": "Mesosiderite-A1",
          "reclat": "42.383330",
          "reclong": "-2.500000",
          "year": "1842-01-01T00:00:00.000",
          "value": 3200,
          "dateYear": 1842,
          "log2Mass": 11.643856189774725,
          "dateNormal": 0.8515625,
          "massNormal": 0.00013908696256899837,
          "logMassNormal": 0.4761314268059189
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.1,
              46.18333
            ]
          },
          "id": "16640",
          "mass": "10000",
          "name": "Milena",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.183330",
          "reclong": "16.100000",
          "year": "1842-01-01T00:00:00.000",
          "value": 10000,
          "dateYear": 1842,
          "log2Mass": 13.287712379549449,
          "dateNormal": 0.8515625,
          "massNormal": 0.00043473914933648476,
          "logMassNormal": 0.5433507036798909
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.8,
              51.6
            ]
          },
          "id": "12332",
          "mass": "3250",
          "name": "Klein-Wenden",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "51.600000",
          "reclong": "10.800000",
          "year": "1843-01-01T00:00:00.000",
          "value": 3250,
          "dateYear": 1843,
          "log2Mass": 11.66622400280318,
          "dateNormal": 0.8524305555555556,
          "massNormal": 0.0001412608757069946,
          "logMassNormal": 0.477046073857393
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.1,
              20.96667
            ]
          },
          "id": "15403",
          "mass": "50",
          "name": "Manegaon",
          "nametype": "Valid",
          "recclass": "Diogenite",
          "reclat": "20.966670",
          "reclong": "76.100000",
          "year": "1843-01-01T00:00:00.000",
          "value": 50,
          "dateYear": 1843,
          "log2Mass": 5.643856189774724,
          "dateNormal": 0.8524305555555556,
          "massNormal": 0.000002130434875236299,
          "logMassNormal": 0.2307841368467508
        },
        {
          ":@computed_region_cbhk_fwbd": "33",
          ":@computed_region_nnqa_25f4": "657",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -80.28333,
              34.16667
            ]
          },
          "id": "5059",
          "mass": "6000",
          "name": "Bishopville",
          "nametype": "Valid",
          "recclass": "Aubrite",
          "reclat": "34.166670",
          "reclong": "-80.283330",
          "year": "1843-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1843,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.8524305555555556,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -7.66667,
              54.66667
            ]
          },
          "id": "12309",
          "mass": "140",
          "name": "Killeter",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "54.666670",
          "reclong": "-7.666670",
          "year": "1844-01-01T00:00:00.000",
          "value": 140,
          "dateYear": 1844,
          "log2Mass": 7.129283016944966,
          "dateNormal": 0.8532986111111112,
          "massNormal": 0.000006043478523629501,
          "logMassNormal": 0.2915250445932282
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              2.81667,
              44.38333
            ]
          },
          "id": "10078",
          "mass": "1500",
          "name": "Favars",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.383330",
          "reclong": "2.816670",
          "year": "1844-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1844,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.8532986111111112,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -100.86667,
              21.16667
            ]
          },
          "id": "5451",
          "mass": "1200",
          "name": "Cosina",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "21.166670",
          "reclong": "-100.866670",
          "year": "1844-01-01T00:00:00.000",
          "value": 1200,
          "dateYear": 1844,
          "log2Mass": 10.228818690495881,
          "dateNormal": 0.8532986111111112,
          "massNormal": 0.00005213043704914944,
          "logMassNormal": 0.41826882419947514
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.43333,
              47.16667
            ]
          },
          "id": "12748",
          "mass": "3000",
          "name": "Le Pressoir",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "47.166670",
          "reclong": "0.433330",
          "year": "1845-01-01T00:00:00.000",
          "value": 3000,
          "dateYear": 1845,
          "log2Mass": 11.550746785383243,
          "dateNormal": 0.8541666666666666,
          "massNormal": 0.0001303913100170135,
          "logMassNormal": 0.4723240701330585
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.86667,
              48.53333
            ]
          },
          "id": "12749",
          "mass": "780",
          "name": "Le Teilleul",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "48.533330",
          "reclong": "-0.866670",
          "year": "1845-01-01T00:00:00.000",
          "value": 780,
          "dateYear": 1845,
          "log2Mass": 9.60733031374961,
          "dateNormal": 0.8541666666666666,
          "massNormal": 0.00003386956668998116,
          "logMassNormal": 0.3928554093701718
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.46667,
              48.11667
            ]
          },
          "id": "23460",
          "mass": "8000",
          "name": "Schönenberg",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "48.116670",
          "reclong": "10.466670",
          "year": "1846-01-01T00:00:00.000",
          "value": 8000,
          "dateYear": 1846,
          "log2Mass": 12.965784284662087,
          "dateNormal": 0.8550347222222222,
          "massNormal": 0.0003477826238166358,
          "logMassNormal": 0.5301866727395023
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.35,
              43.26667
            ]
          },
          "id": "16726",
          "mass": "3130",
          "name": "Monte Milone",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "43.266670",
          "reclong": "13.350000",
          "year": "1846-01-01T00:00:00.000",
          "value": 3130,
          "dateYear": 1846,
          "log2Mass": 11.61194694181998,
          "dateNormal": 0.8550347222222222,
          "massNormal": 0.00013604348417580367,
          "logMassNormal": 0.47482661888753025
        },
        {
          ":@computed_region_cbhk_fwbd": "18",
          ":@computed_region_nnqa_25f4": "2695",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -89.58333,
              37.26667
            ]
          },
          "id": "5260",
          "mass": "2300",
          "name": "Cape Girardeau",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "37.266670",
          "reclong": "-89.583330",
          "year": "1846-01-01T00:00:00.000",
          "value": 2300,
          "dateYear": 1846,
          "log2Mass": 11.167418145831737,
          "dateNormal": 0.8550347222222222,
          "massNormal": 0.00009995652608506636,
          "logMassNormal": 0.45664929632010903
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.3,
              50.6
            ]
          },
          "id": "5133",
          "mass": "39000",
          "name": "Braunau",
          "nametype": "Valid",
          "recclass": "Iron, IIAB",
          "reclat": "50.600000",
          "reclong": "16.300000",
          "year": "1847-01-01T00:00:00.000",
          "value": 39000,
          "dateYear": 1847,
          "log2Mass": 15.251186503524336,
          "dateNormal": 0.8559027777777778,
          "massNormal": 0.0016956087693742942,
          "logMassNormal": 0.6236395462169226
        },
        {
          ":@computed_region_cbhk_fwbd": "16",
          ":@computed_region_nnqa_25f4": "287",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -91.6,
              41.9
            ]
          },
          "id": "15424",
          "mass": "28400",
          "name": "Marion (Iowa)",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "41.900000",
          "reclong": "-91.600000",
          "year": "1847-01-01T00:00:00.000",
          "value": 28400,
          "dateYear": 1847,
          "log2Mass": 14.793603309279407,
          "dateNormal": 0.8559027777777778,
          "massNormal": 0.0012347391841190949,
          "logMassNormal": 0.6049284134437805
        },
        {
          ":@computed_region_cbhk_fwbd": "49",
          ":@computed_region_nnqa_25f4": "414",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -68.75,
              44.38333
            ]
          },
          "id": "5293",
          "mass": "94",
          "name": "Castine",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "44.383330",
          "reclong": "-68.750000",
          "year": "1848-01-01T00:00:00.000",
          "value": 94,
          "dateYear": 1848,
          "log2Mass": 6.554588851677638,
          "dateNormal": 0.8567708333333334,
          "massNormal": 0.000004043478436672976,
          "logMassNormal": 0.2680251019259473
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.6,
              14.88333
            ]
          },
          "id": "6699",
          "mass": "1800",
          "name": "Dharwar",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "14.883330",
          "reclong": "75.600000",
          "year": "1848-01-01T00:00:00.000",
          "value": 1800,
          "dateYear": 1848,
          "log2Mass": 10.813781191217037,
          "dateNormal": 0.8567708333333334,
          "massNormal": 0.00007821739470510412,
          "logMassNormal": 0.4421886515794207
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.86667,
              59.73333
            ]
          },
          "id": "23621",
          "mass": "850",
          "name": "Ski",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "59.733330",
          "reclong": "10.866670",
          "year": "1848-01-01T00:00:00.000",
          "value": 850,
          "dateYear": 1848,
          "log2Mass": 9.731319031025064,
          "dateNormal": 0.8567708333333334,
          "massNormal": 0.00003691304508317587,
          "logMassNormal": 0.39792545866501283
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.15,
              44.5
            ]
          },
          "id": "15429",
          "mass": "3000",
          "name": "Marmande",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "44.500000",
          "reclong": "0.150000",
          "year": "1848-01-01T00:00:00.000",
          "value": 3000,
          "dateYear": 1848,
          "log2Mass": 11.550746785383243,
          "dateNormal": 0.8567708333333334,
          "massNormal": 0.0001303913100170135,
          "logMassNormal": 0.4723240701330585
        },
        {
          ":@computed_region_cbhk_fwbd": "37",
          ":@computed_region_nnqa_25f4": "636",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -80.5,
              35.25
            ]
          },
          "id": "16720",
          "mass": "8600",
          "name": "Monroe",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "35.250000",
          "reclong": "-80.500000",
          "year": "1849-01-01T00:00:00.000",
          "value": 8600,
          "dateYear": 1849,
          "log2Mass": 13.070120944476823,
          "dateNormal": 0.8576388888888888,
          "massNormal": 0.0003738695814725905,
          "logMassNormal": 0.5344531255276584
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              141.61667,
              38.98333
            ]
          },
          "id": "12286",
          "mass": "135000",
          "name": "Kesen",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "38.983330",
          "reclong": "141.616670",
          "year": "1850-01-01T00:00:00.000",
          "value": 135000,
          "dateYear": 1850,
          "log2Mass": 17.042599881712917,
          "dateNormal": 0.8585069444444444,
          "massNormal": 0.005869521994327043,
          "logMassNormal": 0.696892615806117
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              87.3,
              23.1
            ]
          },
          "id": "23521",
          "mass": "4000",
          "name": "Shalka",
          "nametype": "Valid",
          "recclass": "Diogenite",
          "reclat": "23.100000",
          "reclong": "87.300000",
          "year": "1850-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1850,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.8585069444444444,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.38333,
              51.91667
            ]
          },
          "id": "11466",
          "mass": "1000",
          "name": "Gütersloh",
          "nametype": "Valid",
          "recclass": "H3/4",
          "reclat": "51.916670",
          "reclong": "8.383330",
          "year": "1851-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1851,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.859375,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.25,
              46.6
            ]
          },
          "id": "22363",
          "mass": "65",
          "name": "Quincay",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.600000",
          "reclong": "0.250000",
          "year": "1851-01-01T00:00:00.000",
          "value": 65,
          "dateYear": 1851,
          "log2Mass": 6.022367813028454,
          "dateNormal": 0.859375,
          "massNormal": 0.000002782608816635166,
          "logMassNormal": 0.24626193701064217
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.75,
              41.63333
            ]
          },
          "id": "17959",
          "mass": "5000",
          "name": "Nulles",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "41.633330",
          "reclong": "0.750000",
          "year": "1851-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1851,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.859375,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              24.28333,
              48.15
            ]
          },
          "id": "5113",
          "mass": "7000",
          "name": "Borkut",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "48.150000",
          "reclong": "24.283330",
          "year": "1852-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 1852,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.8602430555555556,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.83333,
              26.78333
            ]
          },
          "id": "5181",
          "mass": "1500",
          "name": "Bustee",
          "nametype": "Valid",
          "recclass": "Aubrite",
          "reclat": "26.783330",
          "reclong": "82.833330",
          "year": "1852-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1852,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.8602430555555556,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              25.73333,
              46.5
            ]
          },
          "id": "16628",
          "mass": "22700",
          "name": "Mezö-Madaras",
          "nametype": "Valid",
          "recclass": "L3.7",
          "reclat": "46.500000",
          "reclong": "25.733330",
          "year": "1852-01-01T00:00:00.000",
          "value": 22700,
          "dateYear": 1852,
          "log2Mass": 14.47040467706564,
          "dateNormal": 0.8602430555555556,
          "massNormal": 0.0009869130863875255,
          "logMassNormal": 0.5917124286884209
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              84.78333,
              26.75
            ]
          },
          "id": "23476",
          "mass": "6930",
          "name": "Segowlie",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "26.750000",
          "reclong": "84.783330",
          "year": "1853-01-01T00:00:00.000",
          "value": 6930,
          "dateYear": 1853,
          "log2Mass": 12.758639637024576,
          "dateNormal": 0.8611111111111112,
          "massNormal": 0.00030126088266351663,
          "logMassNormal": 0.5217162764182672
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.56667,
              37.31667
            ]
          },
          "id": "10917",
          "mass": "18000",
          "name": "Girgenti",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "37.316670",
          "reclong": "13.566670",
          "year": "1853-01-01T00:00:00.000",
          "value": 18000,
          "dateYear": 1853,
          "log2Mass": 14.1357092861044,
          "dateNormal": 0.8611111111111112,
          "massNormal": 0.0007825652514158805,
          "logMassNormal": 0.5780263274993934
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              39.5,
              -4
            ]
          },
          "id": "7752",
          "mass": "577",
          "name": "Duruma",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-4.000000",
          "reclong": "39.500000",
          "year": "1853-01-01T00:00:00.000",
          "value": 577,
          "dateYear": 1853,
          "log2Mass": 9.172427508645482,
          "dateNormal": 0.8611111111111112,
          "massNormal": 0.000025043479349716493,
          "logMassNormal": 0.3750717052655154
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.9,
              52.75
            ]
          },
          "id": "14655",
          "mass": "1862",
          "name": "Linum",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "52.750000",
          "reclong": "12.900000",
          "year": "1854-01-01T00:00:00.000",
          "value": 1862,
          "dateYear": 1854,
          "log2Mass": 10.862637357558794,
          "dateNormal": 0.8619791666666666,
          "massNormal": 0.00008091304699621943,
          "logMassNormal": 0.4441864395810448
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3.75,
              51.05
            ]
          },
          "id": "23083",
          "mass": "700",
          "name": "St. Denis Westrem",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "51.050000",
          "reclong": "3.750000",
          "year": "1855-01-01T00:00:00.000",
          "value": 700,
          "dateYear": 1855,
          "log2Mass": 9.451211111832329,
          "dateNormal": 0.8628472222222222,
          "massNormal": 0.000030391305669187204,
          "logMassNormal": 0.38647150552000625
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.08333,
              27.43333
            ]
          },
          "id": "22792",
          "mass": "1250",
          "name": "Sabetmahet",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "27.433330",
          "reclong": "82.083330",
          "year": "1855-01-01T00:00:00.000",
          "value": 1250,
          "dateYear": 1855,
          "log2Mass": 10.287712379549449,
          "dateNormal": 0.8628472222222222,
          "massNormal": 0.00005430435018714566,
          "logMassNormal": 0.4206770587003069
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.1,
              53.4
            ]
          },
          "id": "5135",
          "mass": "7250",
          "name": "Bremervörde",
          "nametype": "Valid",
          "recclass": "H/L3.9",
          "reclat": "53.400000",
          "reclong": "9.100000",
          "year": "1855-01-01T00:00:00.000",
          "value": 7250,
          "dateYear": 1855,
          "log2Mass": 12.82376527978966,
          "dateNormal": 0.8628472222222222,
          "massNormal": 0.0003151739267466925,
          "logMassNormal": 0.5243793430781443
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              23,
              58.5
            ]
          },
          "id": "17989",
          "mass": "6000",
          "name": "Oesel",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "58.500000",
          "reclong": "23.000000",
          "year": "1855-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1855,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.8628472222222222,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          ":@computed_region_cbhk_fwbd": "39",
          ":@computed_region_nnqa_25f4": "2017",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -86.63333,
              35.3
            ]
          },
          "id": "18801",
          "mass": "1800",
          "name": "Petersburg",
          "nametype": "Valid",
          "recclass": "Eucrite-pmict",
          "reclat": "35.300000",
          "reclong": "-86.633330",
          "year": "1855-01-01T00:00:00.000",
          "value": 1800,
          "dateYear": 1855,
          "log2Mass": 10.813781191217037,
          "dateNormal": 0.8628472222222222,
          "massNormal": 0.00007821739470510412,
          "logMassNormal": 0.4421886515794207
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -103.5,
              25
            ]
          },
          "id": "4907",
          "mass": "146",
          "name": "Avilez",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "25.000000",
          "reclong": "-103.500000",
          "year": "1855-01-01T00:00:00.000",
          "value": 146,
          "dateYear": 1855,
          "log2Mass": 7.189824558880018,
          "dateNormal": 0.8628472222222222,
          "massNormal": 0.000006304348100189048,
          "logMassNormal": 0.2940006618005139
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -5.86667,
              43.4
            ]
          },
          "id": "18058",
          "mass": "205",
          "name": "Oviedo",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.400000",
          "reclong": "-5.866670",
          "year": "1856-01-01T00:00:00.000",
          "value": 205,
          "dateYear": 1856,
          "log2Mass": 7.679480099505446,
          "dateNormal": 0.8637152777777778,
          "massNormal": 0.000008869565603024592,
          "logMassNormal": 0.31402327178483724
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.35,
              9.23333
            ]
          },
          "id": "18108",
          "mass": "77600",
          "name": "Parnallee",
          "nametype": "Valid",
          "recclass": "LL3.6",
          "reclat": "9.233330",
          "reclong": "78.350000",
          "year": "1857-01-01T00:00:00.000",
          "value": 77600,
          "dateYear": 1857,
          "log2Mass": 16.243769031961854,
          "dateNormal": 0.8645833333333334,
          "massNormal": 0.003373869711907379,
          "logMassNormal": 0.6642274517857499
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              21.3,
              47.35
            ]
          },
          "id": "12218",
          "mass": "3000",
          "name": "Kaba",
          "nametype": "Valid",
          "recclass": "CV3",
          "reclat": "47.350000",
          "reclong": "21.300000",
          "year": "1857-01-01T00:00:00.000",
          "value": 3000,
          "dateYear": 1857,
          "log2Mass": 11.550746785383243,
          "dateNormal": 0.8645833333333334,
          "massNormal": 0.0001303913100170135,
          "logMassNormal": 0.4723240701330585
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              95.18333,
              17.76667
            ]
          },
          "id": "22358",
          "mass": "6045",
          "name": "Quenggouk",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "17.766670",
          "reclong": "95.183330",
          "year": "1857-01-01T00:00:00.000",
          "value": 6045,
          "dateYear": 1857,
          "log2Mass": 12.561526624136485,
          "dateNormal": 0.8645833333333334,
          "massNormal": 0.00026278262012098346,
          "logMassNormal": 0.513656085830304
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3.25,
              48.35
            ]
          },
          "id": "12769",
          "mass": "125",
          "name": "Les Ormes",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "48.350000",
          "reclong": "3.250000",
          "year": "1857-01-01T00:00:00.000",
          "value": 125,
          "dateYear": 1857,
          "log2Mass": 6.965784284662087,
          "dateNormal": 0.8645833333333334,
          "massNormal": 0.000005391304582230634,
          "logMassNormal": 0.2848393827803342
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              41.98333,
              45.05
            ]
          },
          "id": "23717",
          "mass": "1500",
          "name": "Stavropol",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "45.050000",
          "reclong": "41.983330",
          "year": "1857-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1857,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.8645833333333334,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -84.1,
              10
            ]
          },
          "id": "11875",
          "mass": "1000",
          "name": "Heredia",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "10.000000",
          "reclong": "-84.100000",
          "year": "1857-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1857,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.8645833333333334,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              23.58333,
              46.06667
            ]
          },
          "id": "17995",
          "mass": "16250",
          "name": "Ohaba",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "46.066670",
          "reclong": "23.583330",
          "year": "1857-01-01T00:00:00.000",
          "value": 16250,
          "dateYear": 1857,
          "log2Mass": 13.988152097690541,
          "dateNormal": 0.8645833333333334,
          "massNormal": 0.0007064782915860127,
          "logMassNormal": 0.571992534784171
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.58333,
              43.08333
            ]
          },
          "id": "4903",
          "mass": "50000",
          "name": "Ausson",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "43.083330",
          "reclong": "0.583330",
          "year": "1858-01-01T00:00:00.000",
          "value": 50000,
          "dateYear": 1858,
          "log2Mass": 15.609640474436812,
          "dateNormal": 0.8654513888888888,
          "massNormal": 0.0021738696597334633,
          "logMassNormal": 0.6382971646066691
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.16667,
              38.11667
            ]
          },
          "id": "16715",
          "mass": "144000",
          "name": "Molina",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "38.116670",
          "reclong": "-1.166670",
          "year": "1858-01-01T00:00:00.000",
          "value": 144000,
          "dateYear": 1858,
          "log2Mass": 17.1357092861044,
          "dateNormal": 0.8654513888888888,
          "massNormal": 0.006260826359166363,
          "logMassNormal": 0.7006999724789775
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              21.66667,
              45.13333
            ]
          },
          "id": "12231",
          "mass": "577",
          "name": "Kakowa",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "45.133330",
          "reclong": "21.666670",
          "year": "1858-01-01T00:00:00.000",
          "value": 577,
          "dateYear": 1858,
          "log2Mass": 9.172427508645482,
          "dateNormal": 0.8654513888888888,
          "massNormal": 0.000025043479349716493,
          "logMassNormal": 0.3750717052655154
        },
        {
          ":@computed_region_cbhk_fwbd": "35",
          ":@computed_region_nnqa_25f4": "1855",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -86.16667,
              38.25
            ]
          },
          "id": "11842",
          "mass": "680",
          "name": "Harrison County",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.250000",
          "reclong": "-86.166670",
          "year": "1859-01-01T00:00:00.000",
          "value": 680,
          "dateYear": 1859,
          "log2Mass": 9.409390936137703,
          "dateNormal": 0.8663194444444444,
          "massNormal": 0.000029521740413988713,
          "logMassNormal": 0.3847614277246241
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              120.7,
              15.08333
            ]
          },
          "id": "18093",
          "mass": "10500",
          "name": "Pampanga",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "15.083330",
          "reclong": "120.700000",
          "year": "1859-01-01T00:00:00.000",
          "value": 10500,
          "dateYear": 1859,
          "log2Mass": 13.358101707440847,
          "dateNormal": 0.8663194444444444,
          "massNormal": 0.000456478280716447,
          "logMassNormal": 0.5462290088199245
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.23333,
              43.21667
            ]
          },
          "id": "5034",
          "mass": "2000",
          "name": "Beuste",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "43.216670",
          "reclong": "-0.233330",
          "year": "1859-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1859,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.8663194444444444,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          ":@computed_region_cbhk_fwbd": "47",
          ":@computed_region_nnqa_25f4": "2030",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -73.83333,
              42.53333
            ]
          },
          "id": "5032",
          "mass": "13.9",
          "name": "Bethlehem",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "42.533330",
          "reclong": "-73.833330",
          "year": "1859-01-01T00:00:00.000",
          "value": 13.9,
          "dateYear": 1859,
          "log2Mass": 3.797012977836145,
          "dateNormal": 0.8663194444444444,
          "massNormal": 5.608695896030256e-7,
          "logMassNormal": 0.15526447400864815
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.75,
              44.88333
            ]
          },
          "id": "463",
          "mass": "908",
          "name": "Alessandria",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.883330",
          "reclong": "8.750000",
          "year": "1860-01-01T00:00:00.000",
          "value": 908,
          "dateYear": 1860,
          "log2Mass": 9.826548487290914,
          "dateNormal": 0.8671875,
          "massNormal": 0.00003943478432325149,
          "logMassNormal": 0.4018195068348647
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.73333,
              47.36667
            ]
          },
          "id": "23663",
          "mass": "54",
          "name": "Sologne",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "47.366670",
          "reclong": "1.733330",
          "year": "1860-01-01T00:00:00.000",
          "value": 54,
          "dateYear": 1860,
          "log2Mass": 5.754887502163468,
          "dateNormal": 0.8671875,
          "massNormal": 0.000002304347926275997,
          "logMassNormal": 0.2353243421126155
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.38333,
              29.68333
            ]
          },
          "id": "12382",
          "mass": "5",
          "name": "Kusiali",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "29.683330",
          "reclong": "78.383330",
          "year": "1860-01-01T00:00:00.000",
          "value": 5,
          "dateYear": 1860,
          "log2Mass": 2.321928094887362,
          "dateNormal": 0.8671875,
          "massNormal": 1.7391305103969787e-7,
          "logMassNormal": 0.09494646092677805
        },
        {
          ":@computed_region_cbhk_fwbd": "38",
          ":@computed_region_nnqa_25f4": "2615",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -81.76667,
              40
            ]
          },
          "id": "16953",
          "mass": "230000",
          "name": "New Concord",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "40.000000",
          "reclong": "-81.766670",
          "year": "1860-01-01T00:00:00.000",
          "value": 230000,
          "dateYear": 1860,
          "log2Mass": 17.811274335606463,
          "dateNormal": 0.8671875,
          "massNormal": 0.009999956956519868,
          "logMassNormal": 0.7283246481600546
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              77.88333,
              26.95
            ]
          },
          "id": "12294",
          "mass": "450",
          "name": "Kheragur",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "26.950000",
          "reclong": "77.883330",
          "year": "1860-01-01T00:00:00.000",
          "value": 450,
          "dateYear": 1860,
          "log2Mass": 8.813781191217037,
          "dateNormal": 0.8671875,
          "massNormal": 0.000019521739979206086,
          "logMassNormal": 0.3604062215930314
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.46667,
              32.23333
            ]
          },
          "id": "7640",
          "mass": "32000",
          "name": "Dhurmsala",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "32.233330",
          "reclong": "76.466670",
          "year": "1860-01-01T00:00:00.000",
          "value": 32000,
          "dateYear": 1860,
          "log2Mass": 14.965784284662087,
          "dateNormal": 0.8671875,
          "massNormal": 0.0013912609300548232,
          "logMassNormal": 0.6119691027258917
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.66667,
              41.25
            ]
          },
          "id": "5251",
          "mass": "945",
          "name": "Cañellas",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "41.250000",
          "reclong": "1.666670",
          "year": "1861-01-01T00:00:00.000",
          "value": 945,
          "dateYear": 1861,
          "log2Mass": 9.884170519108435,
          "dateNormal": 0.8680555555555556,
          "massNormal": 0.0000410434800453687,
          "logMassNormal": 0.4041757417262597
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              77.8,
              29.01667
            ]
          },
          "id": "15469",
          "mass": "22",
          "name": "Meerut",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "29.016670",
          "reclong": "77.800000",
          "year": "1861-01-01T00:00:00.000",
          "value": 22,
          "dateYear": 1861,
          "log2Mass": 4.459431618637297,
          "dateNormal": 0.8680555555555556,
          "massNormal": 9.130435179584138e-7,
          "logMassNormal": 0.18235157706514787
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              84.08333,
              27.08333
            ]
          },
          "id": "5183",
          "mass": "29000",
          "name": "Butsura",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "27.083330",
          "reclong": "84.083330",
          "year": "1861-01-01T00:00:00.000",
          "value": 29000,
          "dateYear": 1861,
          "log2Mass": 14.82376527978966,
          "dateNormal": 0.8680555555555556,
          "massNormal": 0.0012608261417750496,
          "logMassNormal": 0.6061617730645337
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              45.38333,
              43.66667
            ]
          },
          "id": "11206",
          "mass": "3500",
          "name": "Grosnaja",
          "nametype": "Valid",
          "recclass": "CV3",
          "reclat": "43.666670",
          "reclong": "45.383330",
          "year": "1861-01-01T00:00:00.000",
          "value": 3500,
          "dateYear": 1861,
          "log2Mass": 11.77313920671969,
          "dateNormal": 0.8680555555555556,
          "massNormal": 0.00015213044139697571,
          "logMassNormal": 0.4814179664467843
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.15,
              53.18333
            ]
          },
          "id": "15485",
          "mass": "10500",
          "name": "Menow",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "53.183330",
          "reclong": "13.150000",
          "year": "1862-01-01T00:00:00.000",
          "value": 10500,
          "dateYear": 1862,
          "log2Mass": 13.358101707440847,
          "dateNormal": 0.8689236111111112,
          "massNormal": 0.000456478280716447,
          "logMassNormal": 0.5462290088199245
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -6,
              37.41667
            ]
          },
          "id": "23508",
          "mass": "180",
          "name": "Sevilla",
          "nametype": "Valid",
          "recclass": "LL4",
          "reclat": "37.416670",
          "reclong": "-6.000000",
          "year": "1862-01-01T00:00:00.000",
          "value": 180,
          "dateYear": 1862,
          "log2Mass": 7.491853096329675,
          "dateNormal": 0.8689236111111112,
          "massNormal": 0.00000778260903402648,
          "logMassNormal": 0.30635097565944797
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.18333,
              23.36667
            ]
          },
          "id": "18899",
          "mass": "560",
          "name": "Pulsora",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "23.366670",
          "reclong": "75.183330",
          "year": "1863-01-01T00:00:00.000",
          "value": 560,
          "dateYear": 1863,
          "log2Mass": 9.129283016944967,
          "dateNormal": 0.8697916666666666,
          "massNormal": 0.000024304348882797777,
          "logMassNormal": 0.3733074745796176
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              86.7,
              23.05
            ]
          },
          "id": "15402",
          "mass": "1700",
          "name": "Manbhoom",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "23.050000",
          "reclong": "86.700000",
          "year": "1863-01-01T00:00:00.000",
          "value": 1700,
          "dateYear": 1863,
          "log2Mass": 10.731319031025064,
          "dateNormal": 0.8697916666666666,
          "massNormal": 0.00007386956842911168,
          "logMassNormal": 0.4388166736582075
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              90.16667,
              24.33333
            ]
          },
          "id": "23584",
          "mass": "3200",
          "name": "Shytal",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "24.333330",
          "reclong": "90.166670",
          "year": "1863-01-01T00:00:00.000",
          "value": 3200,
          "dateYear": 1863,
          "log2Mass": 11.643856189774725,
          "dateNormal": 0.8697916666666666,
          "massNormal": 0.00013908696256899837,
          "logMassNormal": 0.4761314268059189
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              25.78333,
              46.45
            ]
          },
          "id": "5178",
          "mass": "5000",
          "name": "Buschhof",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.450000",
          "reclong": "25.783330",
          "year": "1863-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1863,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.8697916666666666,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              25.73333,
              58.66667
            ]
          },
          "id": "18822",
          "mass": "23250",
          "name": "Pillistfer",
          "nametype": "Valid",
          "recclass": "EL6",
          "reclat": "58.666670",
          "reclong": "25.733330",
          "year": "1863-01-01T00:00:00.000",
          "value": 23250,
          "dateYear": 1863,
          "log2Mass": 14.504943095770118,
          "dateNormal": 0.8697916666666666,
          "massNormal": 0.001010826130905484,
          "logMassNormal": 0.5931247465931907
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.38333,
              43.88333
            ]
          },
          "id": "18026",
          "mass": "14000",
          "name": "Orgueil",
          "nametype": "Valid",
          "recclass": "CI1",
          "reclat": "43.883330",
          "reclong": "1.383330",
          "year": "1864-01-01T00:00:00.000",
          "value": 14000,
          "dateYear": 1864,
          "log2Mass": 13.77313920671969,
          "dateNormal": 0.8706597222222222,
          "massNormal": 0.0006086522003761827,
          "logMassNormal": 0.5632003964331737
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              25.3,
              50.75
            ]
          },
          "id": "7659",
          "mass": "1600",
          "name": "Dolgovoli",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "50.750000",
          "reclong": "25.300000",
          "year": "1864-01-01T00:00:00.000",
          "value": 1600,
          "dateYear": 1864,
          "log2Mass": 10.643856189774725,
          "dateNormal": 0.8706597222222222,
          "massNormal": 0.00006952174215311922,
          "logMassNormal": 0.4352402118127242
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              21.5,
              56.5
            ]
          },
          "id": "16945",
          "mass": "10250",
          "name": "Nerft",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "56.500000",
          "reclong": "21.500000",
          "year": "1864-01-01T00:00:00.000",
          "value": 10250,
          "dateYear": 1864,
          "log2Mass": 13.32333628928017,
          "dateNormal": 0.8706597222222222,
          "massNormal": 0.0004456087150264659,
          "logMassNormal": 0.544807408631588
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              84.83333,
              24.55
            ]
          },
          "id": "23530",
          "mass": "5000",
          "name": "Shergotty",
          "nametype": "Valid",
          "recclass": "Martian (shergottite)",
          "reclat": "24.550000",
          "reclong": "84.833330",
          "year": "1865-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1865,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.8715277777777778,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3.66667,
              36.16667
            ]
          },
          "id": "4899",
          "mass": "50000",
          "name": "Aumale",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "36.166670",
          "reclong": "3.666670",
          "year": "1865-01-01T00:00:00.000",
          "value": 50000,
          "dateYear": 1865,
          "log2Mass": 15.609640474436812,
          "dateNormal": 0.8715277777777778,
          "massNormal": 0.0021738696597334633,
          "logMassNormal": 0.6382971646066691
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              84.21667,
              26.71667
            ]
          },
          "id": "23760",
          "mass": "7235",
          "name": "Supuhee",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "26.716670",
          "reclong": "84.216670",
          "year": "1865-01-01T00:00:00.000",
          "value": 7235,
          "dateYear": 1865,
          "log2Mass": 12.820777301419087,
          "dateNormal": 0.8715277777777778,
          "massNormal": 0.0003145217528052936,
          "logMassNormal": 0.5242571610121982
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -8.03333,
              52.55
            ]
          },
          "id": "7745",
          "mass": "2270",
          "name": "Dundrum",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "52.550000",
          "reclong": "-8.033330",
          "year": "1865-01-01T00:00:00.000",
          "value": 2270,
          "dateYear": 1865,
          "log2Mass": 11.148476582178278,
          "dateNormal": 0.8715277777777778,
          "massNormal": 0.00009865217820226862,
          "logMassNormal": 0.45587475276844813
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              89.05,
              24.23333
            ]
          },
          "id": "10948",
          "mass": "1600",
          "name": "Gopalpur",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "24.233330",
          "reclong": "89.050000",
          "year": "1865-01-01T00:00:00.000",
          "value": 1600,
          "dateYear": 1865,
          "log2Mass": 10.643856189774725,
          "dateNormal": 0.8715277777777778,
          "massNormal": 0.00006952174215311922,
          "logMassNormal": 0.4352402118127242
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              77.01667,
              12.63333
            ]
          },
          "id": "16841",
          "mass": "4400",
          "name": "Muddoor",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "12.633330",
          "reclong": "77.016670",
          "year": "1865-01-01T00:00:00.000",
          "value": 4400,
          "dateYear": 1865,
          "log2Mass": 12.103287808412022,
          "dateNormal": 0.8715277777777778,
          "massNormal": 0.00019126087788090773,
          "logMassNormal": 0.49491814389828803
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              135.33333,
              35.16667
            ]
          },
          "id": "23667",
          "mass": "17100",
          "name": "Sone",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "35.166670",
          "reclong": "135.333330",
          "year": "1866-01-01T00:00:00.000",
          "value": 17100,
          "dateYear": 1866,
          "log2Mass": 14.061708704660623,
          "dateNormal": 0.8723958333333334,
          "massNormal": 0.0007434348149319485,
          "logMassNormal": 0.5750003538139545
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.33333,
              18.75
            ]
          },
          "id": "12072",
          "mass": "22",
          "name": "Jamkheir",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "18.750000",
          "reclong": "75.333330",
          "year": "1866-01-01T00:00:00.000",
          "value": 22,
          "dateYear": 1866,
          "log2Mass": 4.459431618637297,
          "dateNormal": 0.8723958333333334,
          "massNormal": 9.130435179584138e-7,
          "logMassNormal": 0.18235157706514787
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.66667,
              26.71667
            ]
          },
          "id": "18858",
          "mass": "350",
          "name": "Pokhra",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "26.716670",
          "reclong": "82.666670",
          "year": "1866-01-01T00:00:00.000",
          "value": 350,
          "dateYear": 1866,
          "log2Mass": 8.451211111832329,
          "dateNormal": 0.8723958333333334,
          "massNormal": 0.000015173913703213639,
          "logMassNormal": 0.3455802905268116
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3.93333,
              48.45
            ]
          },
          "id": "23092",
          "mass": "8300",
          "name": "St. Mesmin",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "48.450000",
          "reclong": "3.933330",
          "year": "1866-01-01T00:00:00.000",
          "value": 8300,
          "dateYear": 1866,
          "log2Mass": 13.018895621121649,
          "dateNormal": 0.8723958333333334,
          "massNormal": 0.00036082610264461315,
          "logMassNormal": 0.532358459817246
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              22.4,
              48.9
            ]
          },
          "id": "12335",
          "mass": "500000",
          "name": "Knyahinya",
          "nametype": "Valid",
          "recclass": "L/LL5",
          "reclat": "48.900000",
          "reclong": "22.400000",
          "year": "1866-01-01T00:00:00.000",
          "value": 500000,
          "dateYear": 1866,
          "log2Mass": 18.931568569324174,
          "dateNormal": 0.8723958333333334,
          "massNormal": 0.021739087901699473,
          "logMassNormal": 0.7741348405266418
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -5.15,
              43.38333
            ]
          },
          "id": "5252",
          "mass": "34000",
          "name": "Cangas de Onis",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.383330",
          "reclong": "-5.150000",
          "year": "1866-01-01T00:00:00.000",
          "value": 34000,
          "dateYear": 1866,
          "log2Mass": 15.053247125912426,
          "dateNormal": 0.8723958333333334,
          "massNormal": 0.001478217455574672,
          "logMassNormal": 0.6155455645713749
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5.41667,
              36.18333
            ]
          },
          "id": "23778",
          "mass": "9000",
          "name": "Tadjera",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "36.183330",
          "reclong": "5.416670",
          "year": "1867-01-01T00:00:00.000",
          "value": 9000,
          "dateYear": 1867,
          "log2Mass": 13.1357092861044,
          "dateNormal": 0.8732638888888888,
          "massNormal": 0.0003912608865765603,
          "logMassNormal": 0.5371351125061987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.81667,
              28.01667
            ]
          },
          "id": "12296",
          "mass": "100",
          "name": "Khetri",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "28.016670",
          "reclong": "75.816670",
          "year": "1867-01-01T00:00:00.000",
          "value": 100,
          "dateYear": 1867,
          "log2Mass": 6.643856189774724,
          "dateNormal": 0.8732638888888888,
          "massNormal": 0.000004304348013232522,
          "logMassNormal": 0.27167535183994546
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              140.35,
              38.4
            ]
          },
          "id": "18045",
          "mass": "6510",
          "name": "Otomi",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "38.400000",
          "reclong": "140.350000",
          "year": "1867-01-01T00:00:00.000",
          "value": 6510,
          "dateYear": 1867,
          "log2Mass": 12.668441828052998,
          "dateNormal": 0.8732638888888888,
          "massNormal": 0.00028300001230434834,
          "logMassNormal": 0.5180279784196954
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.5,
              45.2
            ]
          },
          "id": "16762",
          "mass": "9150",
          "name": "Motta di Conti",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "45.200000",
          "reclong": "8.500000",
          "year": "1868-01-01T00:00:00.000",
          "value": 9150,
          "dateYear": 1868,
          "log2Mass": 13.159556028058768,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.00039778262599054896,
          "logMassNormal": 0.5381102347583421
        },
        {
          ":@computed_region_cbhk_fwbd": "29",
          ":@computed_region_nnqa_25f4": "99",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -87.83333,
              34.48333
            ]
          },
          "id": "10177",
          "mass": "650",
          "name": "Frankfort (stone)",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "34.483330",
          "reclong": "-87.833330",
          "year": "1868-01-01T00:00:00.000",
          "value": 650,
          "dateYear": 1868,
          "log2Mass": 9.344295907915816,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.00002821739253119098,
          "logMassNormal": 0.3820996129306149
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              77.33333,
              26.83333
            ]
          },
          "id": "16759",
          "mass": "1500",
          "name": "Moti-ka-nagla",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "26.833330",
          "reclong": "77.333330",
          "year": "1868-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1868,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              24.56667,
              -28.2
            ]
          },
          "id": "5513",
          "mass": "1064",
          "name": "Daniel's Kuil",
          "nametype": "Valid",
          "recclass": "EL6",
          "reclat": "-28.200000",
          "reclong": "24.566670",
          "year": "1868-01-01T00:00:00.000",
          "value": 1064,
          "dateYear": 1868,
          "log2Mass": 10.055282435501189,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.00004621739331379971,
          "logMassNormal": 0.4111727158873733
        },
        {
          ":@computed_region_cbhk_fwbd": "29",
          ":@computed_region_nnqa_25f4": "103",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -87.06667,
              34.4
            ]
          },
          "id": "5514",
          "mass": "2000",
          "name": "Danville",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "34.400000",
          "reclong": "-87.066670",
          "year": "1868-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1868,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              21.26667,
              52.76667
            ]
          },
          "id": "18901",
          "mass": "250000",
          "name": "Pultusk",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "52.766670",
          "reclong": "21.266670",
          "year": "1868-01-01T00:00:00.000",
          "value": 250000,
          "dateYear": 1868,
          "log2Mass": 17.931568569324174,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.010869522211718358,
          "logMassNormal": 0.7332436255334471
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.85,
              43.15
            ]
          },
          "id": "23188",
          "mass": "4000",
          "name": "Sauguis",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "43.150000",
          "reclong": "-0.850000",
          "year": "1868-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1868,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              15.6,
              45.68333
            ]
          },
          "id": "23626",
          "mass": "1708",
          "name": "Slavetic",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "45.683330",
          "reclong": "15.600000",
          "year": "1868-01-01T00:00:00.000",
          "value": 1708,
          "dateYear": 1868,
          "log2Mass": 10.73809225962049,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.00007421739453119107,
          "logMassNormal": 0.43909363920490113
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              6.15,
              47.11667
            ]
          },
          "id": "18030",
          "mass": "6000",
          "name": "Ornans",
          "nametype": "Valid",
          "recclass": "CO3.4",
          "reclat": "47.116670",
          "reclong": "6.150000",
          "year": "1868-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1868,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              104.91667,
              11.58333
            ]
          },
          "id": "18851",
          "mass": "96",
          "name": "Pnompehn",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "11.583330",
          "reclong": "104.916670",
          "year": "1868-01-01T00:00:00.000",
          "value": 96,
          "dateYear": 1868,
          "log2Mass": 6.584962500721156,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.000004130434962192824,
          "logMassNormal": 0.2692671173391137
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              71.8,
              29.53333
            ]
          },
          "id": "14675",
          "mass": "1000",
          "name": "Lodran",
          "nametype": "Valid",
          "recclass": "Lodranite",
          "reclat": "29.533330",
          "reclong": "71.800000",
          "year": "1868-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1868,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.8741319444444444,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              7.46472,
              49.32694
            ]
          },
          "id": "12353",
          "mass": "16500",
          "name": "Krähenberg",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "49.326940",
          "reclong": "7.464720",
          "year": "1869-01-01T00:00:00.000",
          "value": 16500,
          "dateYear": 1869,
          "log2Mass": 14.010178404020541,
          "dateNormal": 0.875,
          "massNormal": 0.0007173478572759938,
          "logMassNormal": 0.5728932172118171
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -44.31667,
              -22.96667
            ]
          },
          "id": "2302",
          "mass": "1500",
          "name": "Angra dos Reis (stone)",
          "nametype": "Valid",
          "recclass": "Angrite",
          "reclat": "-22.966670",
          "reclong": "-44.316670",
          "year": "1869-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1869,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.875,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -3.08333,
              48.11667
            ]
          },
          "id": "12284",
          "mass": "80000",
          "name": "Kernouve",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "48.116670",
          "reclong": "-3.083330",
          "year": "1869-01-01T00:00:00.000",
          "value": 80000,
          "dateYear": 1869,
          "log2Mass": 16.28771237954945,
          "dateNormal": 0.875,
          "massNormal": 0.0034782175425311975,
          "logMassNormal": 0.666024348659475
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              111.53333,
              -7.08333
            ]
          },
          "id": "24011",
          "mass": "20000",
          "name": "Tjabe",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-7.083330",
          "reclong": "111.533330",
          "year": "1869-01-01T00:00:00.000",
          "value": 20000,
          "dateYear": 1869,
          "log2Mass": 14.287712379549449,
          "dateNormal": 0.875,
          "massNormal": 0.0008695217769357295,
          "logMassNormal": 0.5842419186730856
        },
        {
          ":@computed_region_cbhk_fwbd": "31",
          ":@computed_region_nnqa_25f4": "1567",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -84.76667,
              32.03333
            ]
          },
          "id": "14753",
          "mass": "340",
          "name": "Lumpkin",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "32.033330",
          "reclong": "-84.766670",
          "year": "1869-01-01T00:00:00.000",
          "value": 340,
          "dateYear": 1869,
          "log2Mass": 8.409390936137703,
          "dateNormal": 0.875,
          "massNormal": 0.000014739131075614395,
          "logMassNormal": 0.3438702127314295
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              17.66667,
              59.85
            ]
          },
          "id": "11878",
          "mass": "20000",
          "name": "Hessle",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "59.850000",
          "reclong": "17.666670",
          "year": "1869-01-01T00:00:00.000",
          "value": 20000,
          "dateYear": 1869,
          "log2Mass": 14.287712379549449,
          "dateNormal": 0.875,
          "massNormal": 0.0008695217769357295,
          "logMassNormal": 0.5842419186730856
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.16667,
              37.98333
            ]
          },
          "id": "5185",
          "mass": "25000",
          "name": "Cabezo de Mayo",
          "nametype": "Valid",
          "recclass": "L/LL6",
          "reclat": "37.983330",
          "reclong": "-1.166670",
          "year": "1870-01-01T00:00:00.000",
          "value": 25000,
          "dateYear": 1870,
          "log2Mass": 14.609640474436812,
          "dateNormal": 0.8758680555555556,
          "massNormal": 0.0010869130907353519,
          "logMassNormal": 0.5974059496134744
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              83.48333,
              18.68333
            ]
          },
          "id": "16935",
          "mass": "4500",
          "name": "Nedagolla",
          "nametype": "Valid",
          "recclass": "Iron, ungrouped",
          "reclat": "18.683330",
          "reclong": "83.483330",
          "year": "1870-01-01T00:00:00.000",
          "value": 4500,
          "dateYear": 1870,
          "log2Mass": 12.1357092861044,
          "dateNormal": 0.8758680555555556,
          "massNormal": 0.0001956087041569002,
          "logMassNormal": 0.4962438975130041
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              7.7,
              52.28333
            ]
          },
          "id": "11992",
          "mass": "2000",
          "name": "Ibbenbüren",
          "nametype": "Valid",
          "recclass": "Diogenite",
          "reclat": "52.283330",
          "reclong": "7.700000",
          "year": "1870-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1870,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.8758680555555556,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              107.6,
              -6.91667
            ]
          },
          "id": "4935",
          "mass": "11500",
          "name": "Bandong",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "-6.916670",
          "reclong": "107.600000",
          "year": "1871-01-01T00:00:00.000",
          "value": 11500,
          "dateYear": 1871,
          "log2Mass": 13.4893462407191,
          "dateNormal": 0.8767361111111112,
          "massNormal": 0.0004999565434763714,
          "logMassNormal": 0.5515957572468871
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5.58333,
              44.28333
            ]
          },
          "id": "12408",
          "mass": "3833",
          "name": "Laborel",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.283330",
          "reclong": "5.583330",
          "year": "1871-01-01T00:00:00.000",
          "value": 3833,
          "dateYear": 1871,
          "log2Mass": 11.904258282800518,
          "dateNormal": 0.8767361111111112,
          "massNormal": 0.00016660870289603055,
          "logMassNormal": 0.48677958477651445
        },
        {
          ":@computed_region_cbhk_fwbd": "49",
          ":@computed_region_nnqa_25f4": "1727",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -69.2,
              44.36667
            ]
          },
          "id": "23472",
          "mass": "5400",
          "name": "Searsmont",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.366670",
          "reclong": "-69.200000",
          "year": "1871-01-01T00:00:00.000",
          "value": 5400,
          "dateYear": 1871,
          "log2Mass": 12.398743691938193,
          "dateNormal": 0.8767361111111112,
          "massNormal": 0.0002347391406408322,
          "logMassNormal": 0.506999693952561
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.55,
              42.3
            ]
          },
          "id": "22641",
          "mass": "400",
          "name": "Roda",
          "nametype": "Valid",
          "recclass": "Diogenite",
          "reclat": "42.300000",
          "reclong": "0.550000",
          "year": "1871-01-01T00:00:00.000",
          "value": 400,
          "dateYear": 1871,
          "log2Mass": 8.643856189774725,
          "dateNormal": 0.8767361111111112,
          "massNormal": 0.00001734782684120986,
          "logMassNormal": 0.35345778182633486
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              26.95,
              58.03333
            ]
          },
          "id": "23898",
          "mass": "28500",
          "name": "Tennasilm",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "58.033330",
          "reclong": "26.950000",
          "year": "1872-01-01T00:00:00.000",
          "value": 28500,
          "dateYear": 1872,
          "log2Mass": 14.798674298826828,
          "dateNormal": 0.8776041666666666,
          "massNormal": 0.0012390870103950874,
          "logMassNormal": 0.6051357723675923
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82,
              26.25
            ]
          },
          "id": "7757",
          "mass": "300",
          "name": "Dyalpur",
          "nametype": "Valid",
          "recclass": "Ureilite",
          "reclat": "26.250000",
          "reclong": "82.000000",
          "year": "1872-01-01T00:00:00.000",
          "value": 300,
          "dateYear": 1872,
          "log2Mass": 8.228818690495881,
          "dateNormal": 0.8776041666666666,
          "massNormal": 0.000013000000565217416,
          "logMassNormal": 0.3364863942130858
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.93333,
              42.13333
            ]
          },
          "id": "18034",
          "mass": "3400",
          "name": "Orvinio",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "42.133330",
          "reclong": "12.933330",
          "year": "1872-01-01T00:00:00.000",
          "value": 3400,
          "dateYear": 1872,
          "log2Mass": 11.731319031025064,
          "dateNormal": 0.8776041666666666,
          "massNormal": 0.00014778261512098326,
          "logMassNormal": 0.4797078886514022
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.06667,
              47.7
            ]
          },
          "id": "12455",
          "mass": "51700",
          "name": "Lancé",
          "nametype": "Valid",
          "recclass": "CO3.5",
          "reclat": "47.700000",
          "reclong": "1.066670",
          "year": "1872-01-01T00:00:00.000",
          "value": 51700,
          "dateYear": 1872,
          "log2Mass": 15.65787666008966,
          "dateNormal": 0.8776041666666666,
          "massNormal": 0.002247782706425335,
          "logMassNormal": 0.6402696008446512
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              37.13333,
              36.23333
            ]
          },
          "id": "462",
          "mass": "3200",
          "name": "Aleppo",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "36.233330",
          "reclong": "37.133330",
          "year": "1873-01-01T00:00:00.000",
          "value": 3200,
          "dateYear": 1873,
          "log2Mass": 11.643856189774725,
          "dateNormal": 0.8784722222222222,
          "massNormal": 0.00013908696256899837,
          "logMassNormal": 0.4761314268059189
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              72.38333,
              31.3
            ]
          },
          "id": "12085",
          "mass": "5900",
          "name": "Jhung",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "31.300000",
          "reclong": "72.383330",
          "year": "1873-01-01T00:00:00.000",
          "value": 5900,
          "dateYear": 1873,
          "log2Mass": 12.526499239136566,
          "dateNormal": 0.8784722222222222,
          "massNormal": 0.00025647827202079443,
          "logMassNormal": 0.5122237734996229
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              72.3,
              29.53333
            ]
          },
          "id": "12288",
          "mass": "13600",
          "name": "Khairpur",
          "nametype": "Valid",
          "recclass": "EL6",
          "reclat": "29.533330",
          "reclong": "72.300000",
          "year": "1873-01-01T00:00:00.000",
          "value": 13600,
          "dateYear": 1873,
          "log2Mass": 13.731319031025064,
          "dateNormal": 0.8784722222222222,
          "massNormal": 0.0005912608952722128,
          "logMassNormal": 0.5614903186377915
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -51.86667,
              -29.2
            ]
          },
          "id": "23161",
          "mass": "400",
          "name": "Santa Barbara",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "-29.200000",
          "reclong": "-51.866670",
          "year": "1873-01-01T00:00:00.000",
          "value": 400,
          "dateYear": 1873,
          "log2Mass": 8.643856189774725,
          "dateNormal": 0.8784722222222222,
          "massNormal": 0.00001734782684120986,
          "logMassNormal": 0.35345778182633486
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -3.3,
              48.4
            ]
          },
          "id": "12282",
          "mass": "5000",
          "name": "Kerilis",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "48.400000",
          "reclong": "-3.300000",
          "year": "1874-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1874,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.8793402777777778,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              36.6,
              50.61667
            ]
          },
          "id": "23509",
          "mass": "101000",
          "name": "Sevrukovo",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "50.616670",
          "reclong": "36.600000",
          "year": "1874-01-01T00:00:00.000",
          "value": 101000,
          "dateYear": 1874,
          "log2Mass": 16.62399576741388,
          "dateNormal": 0.8793402777777778,
          "massNormal": 0.004391261060489611,
          "logMassNormal": 0.6797753849712793
        },
        {
          ":@computed_region_cbhk_fwbd": "37",
          ":@computed_region_nnqa_25f4": "648",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -78.06667,
              36.08333
            ]
          },
          "id": "5291",
          "mass": "7300",
          "name": "Castalia",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "36.083330",
          "reclong": "-78.066670",
          "year": "1874-01-01T00:00:00.000",
          "value": 7300,
          "dateYear": 1874,
          "log2Mass": 12.833680748654741,
          "dateNormal": 0.8793402777777778,
          "massNormal": 0.0003173478398846887,
          "logMassNormal": 0.5247847986472647
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.45,
              36.88333
            ]
          },
          "id": "10080",
          "mass": "380",
          "name": "Feid Chair",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "36.883330",
          "reclong": "8.450000",
          "year": "1875-01-01T00:00:00.000",
          "value": 380,
          "dateYear": 1875,
          "log2Mass": 8.569855608330949,
          "dateNormal": 0.8802083333333334,
          "massNormal": 0.000016478261586011374,
          "logMassNormal": 0.350431808140896
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.21667,
              26.98333
            ]
          },
          "id": "16892",
          "mass": "20",
          "name": "Nagaria",
          "nametype": "Valid",
          "recclass": "Eucrite-cm",
          "reclat": "26.983330",
          "reclong": "78.216670",
          "year": "1875-01-01T00:00:00.000",
          "value": 20,
          "dateYear": 1875,
          "log2Mass": 4.321928094887363,
          "dateNormal": 0.8802083333333334,
          "massNormal": 8.260869924385649e-7,
          "logMassNormal": 0.17672889091316743
        },
        {
          ":@computed_region_cbhk_fwbd": "16",
          ":@computed_region_nnqa_25f4": "284",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -91.86667,
              41.8
            ]
          },
          "id": "11901",
          "mass": "230000",
          "name": "Homestead",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "41.800000",
          "reclong": "-91.866670",
          "year": "1875-01-01T00:00:00.000",
          "value": 230000,
          "dateYear": 1875,
          "log2Mass": 17.811274335606463,
          "dateNormal": 0.8802083333333334,
          "massNormal": 0.009999956956519868,
          "logMassNormal": 0.7283246481600546
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5.13333,
              44.6
            ]
          },
          "id": "16747",
          "mass": "1300",
          "name": "Mornans",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.600000",
          "reclong": "5.133330",
          "year": "1875-01-01T00:00:00.000",
          "value": 1300,
          "dateYear": 1875,
          "log2Mass": 10.344295907915816,
          "dateNormal": 0.8802083333333334,
          "massNormal": 0.00005647826332514188,
          "logMassNormal": 0.4229908279238096
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.58333,
              20.91667
            ]
          },
          "id": "23616",
          "mass": "1600",
          "name": "Sitathali",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "20.916670",
          "reclong": "82.583330",
          "year": "1875-01-01T00:00:00.000",
          "value": 1600,
          "dateYear": 1875,
          "log2Mass": 10.643856189774725,
          "dateNormal": 0.8802083333333334,
          "massNormal": 0.00006952174215311922,
          "logMassNormal": 0.4352402118127242
        },
        {
          ":@computed_region_cbhk_fwbd": "35",
          ":@computed_region_nnqa_25f4": "150",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -86.28333,
              41.08333
            ]
          },
          "id": "22637",
          "mass": "340",
          "name": "Rochester",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "41.083330",
          "reclong": "-86.283330",
          "year": "1876-01-01T00:00:00.000",
          "value": 340,
          "dateYear": 1876,
          "log2Mass": 8.409390936137703,
          "dateNormal": 0.8810763888888888,
          "massNormal": 0.000014739131075614395,
          "logMassNormal": 0.3438702127314295
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.8,
              12.85
            ]
          },
          "id": "12207",
          "mass": "680",
          "name": "Judesegeri",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "12.850000",
          "reclong": "76.800000",
          "year": "1876-01-01T00:00:00.000",
          "value": 680,
          "dateYear": 1876,
          "log2Mass": 9.409390936137703,
          "dateNormal": 0.8810763888888888,
          "massNormal": 0.000029521740413988713,
          "logMassNormal": 0.3847614277246241
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              14.95,
              59.93333
            ]
          },
          "id": "23712",
          "mass": "34000",
          "name": "Ställdalen",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "59.933330",
          "reclong": "14.950000",
          "year": "1876-01-01T00:00:00.000",
          "value": 34000,
          "dateYear": 1876,
          "log2Mass": 15.053247125912426,
          "dateNormal": 0.8810763888888888,
          "massNormal": 0.001478217455574672,
          "logMassNormal": 0.6155455645713749
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -2.51667,
              52.76667
            ]
          },
          "id": "22773",
          "mass": "3500",
          "name": "Rowton",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "52.766670",
          "reclong": "-2.516670",
          "year": "1876-01-01T00:00:00.000",
          "value": 3500,
          "dateYear": 1876,
          "log2Mass": 11.77313920671969,
          "dateNormal": 0.8810763888888888,
          "massNormal": 0.00015213044139697571,
          "logMassNormal": 0.4814179664467843
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.91667,
              50.3
            ]
          },
          "id": "11986",
          "mass": "112",
          "name": "Hungen",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "50.300000",
          "reclong": "8.916670",
          "year": "1877-01-01T00:00:00.000",
          "value": 112,
          "dateYear": 1877,
          "log2Mass": 6.807354922057604,
          "dateNormal": 0.8819444444444444,
          "massNormal": 0.000004826087166351616,
          "logMassNormal": 0.2783610136528395
        },
        {
          ":@computed_region_cbhk_fwbd": "36",
          ":@computed_region_nnqa_25f4": "244",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -84.25,
              38.4
            ]
          },
          "id": "5500",
          "mass": "6000",
          "name": "Cynthiana",
          "nametype": "Valid",
          "recclass": "L/LL4",
          "reclat": "38.400000",
          "reclong": "-84.250000",
          "year": "1877-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1877,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.8819444444444444,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              24.4,
              55.7
            ]
          },
          "id": "12173",
          "mass": "30",
          "name": "Jodzie",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "55.700000",
          "reclong": "24.400000",
          "year": "1877-01-01T00:00:00.000",
          "value": 30,
          "dateYear": 1877,
          "log2Mass": 4.906890595608519,
          "dateNormal": 0.8819444444444444,
          "massNormal": 0.0000012608696200378096,
          "logMassNormal": 0.200648718293113
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27.3,
              -27.7
            ]
          },
          "id": "5474",
          "mass": "3650",
          "name": "Cronstad",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-27.700000",
          "reclong": "27.300000",
          "year": "1877-01-01T00:00:00.000",
          "value": 3650,
          "dateYear": 1877,
          "log2Mass": 11.833680748654741,
          "dateNormal": 0.8819444444444444,
          "massNormal": 0.00015865218081096438,
          "logMassNormal": 0.48389358365407
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              74.83333,
              20.88333
            ]
          },
          "id": "5037",
          "mass": "18",
          "name": "Bhagur",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "20.883330",
          "reclong": "74.833330",
          "year": "1877-01-01T00:00:00.000",
          "value": 18,
          "dateYear": 1877,
          "log2Mass": 4.169925001442312,
          "dateNormal": 0.8819444444444444,
          "massNormal": 7.39130466918716e-7,
          "logMassNormal": 0.1705132997394752
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              21.86667,
              43.66667
            ]
          },
          "id": "23661",
          "mass": "80000",
          "name": "Soko-Banja",
          "nametype": "Valid",
          "recclass": "LL4",
          "reclat": "43.666670",
          "reclong": "21.866670",
          "year": "1877-01-01T00:00:00.000",
          "value": 80000,
          "dateYear": 1877,
          "log2Mass": 16.28771237954945,
          "dateNormal": 0.8819444444444444,
          "massNormal": 0.0034782175425311975,
          "logMassNormal": 0.666024348659475
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.53333,
              26.8
            ]
          },
          "id": "11824",
          "mass": "1000",
          "name": "Haraiya",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "26.800000",
          "reclong": "82.533330",
          "year": "1878-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1878,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.8828125,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              17.11667,
              49.6
            ]
          },
          "id": "23989",
          "mass": "28000",
          "name": "Tieschitz",
          "nametype": "Valid",
          "recclass": "H/L3.6",
          "reclat": "49.600000",
          "reclong": "17.116670",
          "year": "1878-01-01T00:00:00.000",
          "value": 28000,
          "dateYear": 1878,
          "log2Mass": 14.77313920671969,
          "dateNormal": 0.8828125,
          "massNormal": 0.0012173478790151251,
          "logMassNormal": 0.6040916114263684
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.06667,
              55.05
            ]
          },
          "id": "15489",
          "mass": "4000",
          "name": "Mern",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "55.050000",
          "reclong": "12.066670",
          "year": "1878-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1878,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.8828125,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -101.28333,
              20.66667
            ]
          },
          "id": "12394",
          "mass": "399",
          "name": "La Charca",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "20.666670",
          "reclong": "-101.283330",
          "year": "1878-01-01T00:00:00.000",
          "value": 399,
          "dateYear": 1878,
          "log2Mass": 8.640244936222345,
          "dateNormal": 0.8828125,
          "massNormal": 0.000017304348578449937,
          "logMassNormal": 0.35331011328092954
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              37.03333,
              52.98333
            ]
          },
          "id": "22376",
          "mass": "9000",
          "name": "Rakovka",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "52.983330",
          "reclong": "37.033330",
          "year": "1878-01-01T00:00:00.000",
          "value": 9000,
          "dateYear": 1878,
          "log2Mass": 13.1357092861044,
          "dateNormal": 0.8828125,
          "massNormal": 0.0003912608865765603,
          "logMassNormal": 0.5371351125061987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              83.96667,
              26.91667
            ]
          },
          "id": "5511",
          "mass": "5650",
          "name": "Dandapur",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "26.916670",
          "reclong": "83.966670",
          "year": "1878-01-01T00:00:00.000",
          "value": 5650,
          "dateYear": 1878,
          "log2Mass": 12.464035152189913,
          "dateNormal": 0.8828125,
          "massNormal": 0.0002456087063308133,
          "logMassNormal": 0.5096695410909337
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.76667,
              50.66667
            ]
          },
          "id": "10936",
          "mass": "1750",
          "name": "Gnadenfrei",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "50.666670",
          "reclong": "16.766670",
          "year": "1879-01-01T00:00:00.000",
          "value": 1750,
          "dateYear": 1879,
          "log2Mass": 10.77313920671969,
          "dateNormal": 0.8836805555555556,
          "massNormal": 0.00007604348156710789,
          "logMassNormal": 0.44052675145358966
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -44.33333,
              -3.4
            ]
          },
          "id": "12056",
          "mass": "2024",
          "name": "Itapicuru-Mirim",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-3.400000",
          "reclong": "-44.333330",
          "year": "1879-01-01T00:00:00.000",
          "value": 2024,
          "dateYear": 1879,
          "log2Mass": 10.98299357469431,
          "dateNormal": 0.8836805555555556,
          "massNormal": 0.0000879565255633272,
          "logMassNormal": 0.4491079515317008
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.75,
              47.08333
            ]
          },
          "id": "12392",
          "mass": "2800",
          "name": "La Bécasse",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "47.083330",
          "reclong": "1.750000",
          "year": "1879-01-01T00:00:00.000",
          "value": 2800,
          "dateYear": 1879,
          "log2Mass": 11.451211111832329,
          "dateNormal": 0.8836805555555556,
          "massNormal": 0.00012169565746502858,
          "logMassNormal": 0.4682539355063956
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -59.83333,
              -32.36667
            ]
          },
          "id": "16989",
          "mass": "4000",
          "name": "Nogoya",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "-32.366670",
          "reclong": "-59.833330",
          "year": "1879-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1879,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.8836805555555556,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          ":@computed_region_cbhk_fwbd": "16",
          ":@computed_region_nnqa_25f4": "277",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -94.83333,
              43.41667
            ]
          },
          "id": "10059",
          "mass": "320000",
          "name": "Estherville",
          "nametype": "Valid",
          "recclass": "Mesosiderite-A3/4",
          "reclat": "43.416670",
          "reclong": "-94.833330",
          "year": "1879-01-01T00:00:00.000",
          "value": 320000,
          "dateYear": 1879,
          "log2Mass": 18.28771237954945,
          "dateNormal": 0.8836805555555556,
          "massNormal": 0.01391300060491307,
          "logMassNormal": 0.7478067786458644
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              142.95,
              -25.73333
            ]
          },
          "id": "23897",
          "mass": "160000",
          "name": "Tenham",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-25.733330",
          "reclong": "142.950000",
          "year": "1879-01-01T00:00:00.000",
          "value": 160000,
          "dateYear": 1879,
          "log2Mass": 17.28771237954945,
          "dateNormal": 0.8836805555555556,
          "massNormal": 0.006956478563325155,
          "logMassNormal": 0.7069155636526697
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              73.98333,
              17.83333
            ]
          },
          "id": "12236",
          "mass": "4500",
          "name": "Kalumbi",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "17.833330",
          "reclong": "73.983330",
          "year": "1879-01-01T00:00:00.000",
          "value": 4500,
          "dateYear": 1879,
          "log2Mass": 12.1357092861044,
          "dateNormal": 0.8836805555555556,
          "massNormal": 0.0001956087041569002,
          "logMassNormal": 0.4962438975130041
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              17.98333,
              52.2
            ]
          },
          "id": "22398",
          "mass": "910",
          "name": "Ratyn",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "52.200000",
          "reclong": "17.983330",
          "year": "1880-01-01T00:00:00.000",
          "value": 910,
          "dateYear": 1880,
          "log2Mass": 9.829722735086058,
          "dateNormal": 0.8845486111111112,
          "massNormal": 0.000039521740848771344,
          "logMassNormal": 0.40194930568389764
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              6.08333,
              50.775
            ]
          },
          "id": "1",
          "mass": "21",
          "name": "Aachen",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "50.775000",
          "reclong": "6.083330",
          "year": "1880-01-01T00:00:00.000",
          "value": 21,
          "dateYear": 1880,
          "log2Mass": 4.392317422778761,
          "dateNormal": 0.8845486111111112,
          "massNormal": 8.695652551984893e-7,
          "logMassNormal": 0.17960719605320108
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.5,
              14.5
            ]
          },
          "id": "5344",
          "mass": "72",
          "name": "Chetrinahatti",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "14.500000",
          "reclong": "76.500000",
          "year": "1880-01-01T00:00:00.000",
          "value": 72,
          "dateYear": 1880,
          "log2Mass": 6.169925001442312,
          "dateNormal": 0.8845486111111112,
          "massNormal": 0.0000030869566559546373,
          "logMassNormal": 0.25229572972586456
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              134.9,
              35.38333
            ]
          },
          "id": "23789",
          "mass": "720",
          "name": "Takenouchi",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "35.383330",
          "reclong": "134.900000",
          "year": "1880-01-01T00:00:00.000",
          "value": 720,
          "dateYear": 1880,
          "log2Mass": 9.491853096329674,
          "dateNormal": 0.8845486111111112,
          "massNormal": 0.00003126087092438569,
          "logMassNormal": 0.3881334056458373
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              85.56667,
              26.58333
            ]
          },
          "id": "2294",
          "mass": "2700",
          "name": "Andhara",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "26.583330",
          "reclong": "85.566670",
          "year": "1880-01-01T00:00:00.000",
          "value": 2700,
          "dateYear": 1880,
          "log2Mass": 11.398743691938193,
          "dateNormal": 0.8845486111111112,
          "massNormal": 0.00011734783118903614,
          "logMassNormal": 0.4661084789593663
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -99.3,
              21.05
            ]
          },
          "id": "18068",
          "mass": "3400",
          "name": "Pacula",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "21.050000",
          "reclong": "-99.300000",
          "year": "1881-01-01T00:00:00.000",
          "value": 3400,
          "dateYear": 1881,
          "log2Mass": 11.731319031025064,
          "dateNormal": 0.8854166666666666,
          "massNormal": 0.00014778261512098326,
          "logMassNormal": 0.4797078886514022
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              18.71667,
              -32.86667
            ]
          },
          "id": "18832",
          "mass": "37",
          "name": "Piquetberg",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "-32.866670",
          "reclong": "18.716670",
          "year": "1881-01-01T00:00:00.000",
          "value": 37,
          "dateYear": 1881,
          "log2Mass": 5.20945336562895,
          "dateNormal": 0.8854166666666666,
          "massNormal": 0.0000015652174593572808,
          "logMassNormal": 0.213020877570955
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.16667,
              54.56667
            ]
          },
          "id": "16632",
          "mass": "1600",
          "name": "Middlesbrough",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "54.566670",
          "reclong": "-1.166670",
          "year": "1881-01-01T00:00:00.000",
          "value": 1600,
          "dateYear": 1881,
          "log2Mass": 10.643856189774725,
          "dateNormal": 0.8854166666666666,
          "massNormal": 0.00006952174215311922,
          "logMassNormal": 0.4352402118127242
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.58333,
              46.35
            ]
          },
          "id": "11208",
          "mass": "8000",
          "name": "Grossliebenthal",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.350000",
          "reclong": "30.583330",
          "year": "1881-01-01T00:00:00.000",
          "value": 8000,
          "dateYear": 1881,
          "log2Mass": 12.965784284662087,
          "dateNormal": 0.8854166666666666,
          "massNormal": 0.0003477826238166358,
          "logMassNormal": 0.5301866727395023
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              43,
              52.03333
            ]
          },
          "id": "18177",
          "mass": "2000",
          "name": "Pavlovka",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "52.033330",
          "reclong": "43.000000",
          "year": "1882-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1882,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.8862847222222222,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              88.45,
              25.8
            ]
          },
          "id": "18834",
          "mass": "842",
          "name": "Pirgunje",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "25.800000",
          "reclong": "88.450000",
          "year": "1882-01-01T00:00:00.000",
          "value": 842,
          "dateYear": 1882,
          "log2Mass": 9.717676423066395,
          "dateNormal": 0.8862847222222222,
          "massNormal": 0.00003656521898109648,
          "logMassNormal": 0.397367595849907
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              130.2,
              33.18333
            ]
          },
          "id": "10836",
          "mass": "11620",
          "name": "Fukutomi",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "33.183330",
          "reclong": "130.200000",
          "year": "1882-01-01T00:00:00.000",
          "value": 11620,
          "dateYear": 1882,
          "log2Mass": 13.50432244829189,
          "dateNormal": 0.8862847222222222,
          "massNormal": 0.0005051739350075624,
          "logMassNormal": 0.5522081525705288
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              24.03333,
              46.8
            ]
          },
          "id": "16709",
          "mass": "300000",
          "name": "Mocs",
          "nametype": "Valid",
          "recclass": "L5-6",
          "reclat": "46.800000",
          "reclong": "24.033330",
          "year": "1882-01-01T00:00:00.000",
          "value": 300000,
          "dateYear": 1882,
          "log2Mass": 18.194602975157967,
          "dateNormal": 0.8862847222222222,
          "massNormal": 0.013043435349714581,
          "logMassNormal": 0.743999421973004
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.15,
              45.26667
            ]
          },
          "id": "466",
          "mass": "228000",
          "name": "Alfianello",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "45.266670",
          "reclong": "10.150000",
          "year": "1883-01-01T00:00:00.000",
          "value": 228000,
          "dateYear": 1883,
          "log2Mass": 17.79867429882683,
          "dateNormal": 0.8871527777777778,
          "massNormal": 0.009913000431000019,
          "logMassNormal": 0.7278094173471764
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.05,
              44.75
            ]
          },
          "id": "23081",
          "mass": "360",
          "name": "St. Caprais-de-Quinsac",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "44.750000",
          "reclong": "0.050000",
          "year": "1883-01-01T00:00:00.000",
          "value": 360,
          "dateYear": 1883,
          "log2Mass": 8.491853096329674,
          "dateNormal": 0.8871527777777778,
          "massNormal": 0.000015608696330812882,
          "logMassNormal": 0.3472421906526426
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              111.41667,
              -7.45
            ]
          },
          "id": "16966",
          "mass": "1393",
          "name": "Ngawi",
          "nametype": "Valid",
          "recclass": "LL3.6",
          "reclat": "-7.450000",
          "reclong": "111.416670",
          "year": "1883-01-01T00:00:00.000",
          "value": 1393,
          "dateYear": 1883,
          "log2Mass": 10.443979542601253,
          "dateNormal": 0.8871527777777778,
          "massNormal": 0.00006052174176181486,
          "logMassNormal": 0.4270670128610349
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              111.5,
              -7.5
            ]
          },
          "id": "7652",
          "mass": "166000",
          "name": "Djati-Pengilon",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-7.500000",
          "reclong": "111.500000",
          "year": "1884-01-01T00:00:00.000",
          "value": 166000,
          "dateYear": 1884,
          "log2Mass": 17.340823716009012,
          "dateNormal": 0.8880208333333334,
          "massNormal": 0.007217348139884702,
          "logMassNormal": 0.7090873507304136
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76,
              29.58333
            ]
          },
          "id": "18835",
          "mass": "1161",
          "name": "Pirthalla",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "29.583330",
          "reclong": "76.000000",
          "year": "1884-01-01T00:00:00.000",
          "value": 1161,
          "dateYear": 1884,
          "log2Mass": 10.181152256865566,
          "dateNormal": 0.8880208333333334,
          "massNormal": 0.000050434784801512384,
          "logMassNormal": 0.4163196858139391
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -101.68333,
              24.68333
            ]
          },
          "id": "15453",
          "mass": "4000",
          "name": "Mazapil",
          "nametype": "Valid",
          "recclass": "Iron, IAB-sLL",
          "reclat": "24.683330",
          "reclong": "-101.683330",
          "year": "1885-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1885,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.8888888888888888,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              79.05,
              27.28333
            ]
          },
          "id": "5321",
          "mass": "1100",
          "name": "Chandpur",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "27.283330",
          "reclong": "79.050000",
          "year": "1885-01-01T00:00:00.000",
          "value": 1100,
          "dateYear": 1885,
          "log2Mass": 10.103287808412022,
          "dateNormal": 0.8888888888888888,
          "massNormal": 0.00004778261077315699,
          "logMassNormal": 0.4131357139118987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              79.2,
              12.28333
            ]
          },
          "id": "16902",
          "mass": "4500",
          "name": "Nammianthal",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "12.283330",
          "reclong": "79.200000",
          "year": "1886-01-01T00:00:00.000",
          "value": 4500,
          "dateYear": 1886,
          "log2Mass": 12.1357092861044,
          "dateNormal": 0.8897569444444444,
          "massNormal": 0.0001956087041569002,
          "logMassNormal": 0.4962438975130041
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.55,
              43.03333
            ]
          },
          "id": "2353",
          "mass": "2000",
          "name": "Assisi",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.033330",
          "reclong": "12.550000",
          "year": "1886-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1886,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.8897569444444444,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              46,
              54.81667
            ]
          },
          "id": "17933",
          "mass": "1900",
          "name": "Novo-Urei",
          "nametype": "Valid",
          "recclass": "Ureilite",
          "reclat": "54.816670",
          "reclong": "46.000000",
          "year": "1886-01-01T00:00:00.000",
          "value": 1900,
          "dateYear": 1886,
          "log2Mass": 10.89178370321831,
          "dateNormal": 0.8897569444444444,
          "massNormal": 0.00008256522098109656,
          "logMassNormal": 0.445378269067674
        },
        {
          ":@computed_region_cbhk_fwbd": "48",
          ":@computed_region_nnqa_25f4": "2455",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -80.08333,
              40.5
            ]
          },
          "id": "5128",
          "mass": "762",
          "name": "Bradford Woods",
          "nametype": "Valid",
          "recclass": "L",
          "reclat": "40.500000",
          "reclong": "-80.083330",
          "year": "1886-01-01T00:00:00.000",
          "value": 762,
          "dateYear": 1886,
          "log2Mass": 9.573647187493322,
          "dateNormal": 0.8897569444444444,
          "massNormal": 0.00003308695796030252,
          "logMassNormal": 0.39147806541278296
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              130.63333,
              32.03333
            ]
          },
          "id": "12390",
          "mass": "45000",
          "name": "Kyushu",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "32.033330",
          "reclong": "130.633330",
          "year": "1886-01-01T00:00:00.000",
          "value": 45000,
          "dateYear": 1886,
          "log2Mass": 15.45763738099176,
          "dateNormal": 0.8897569444444444,
          "massNormal": 0.0019564783459338412,
          "logMassNormal": 0.6320815734329768
        },
        {
          ":@computed_region_cbhk_fwbd": "15",
          ":@computed_region_nnqa_25f4": "1029",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -93.5,
              35.5
            ]
          },
          "id": "5186",
          "mass": "48500",
          "name": "Cabin Creek",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "35.500000",
          "reclong": "-93.500000",
          "year": "1886-01-01T00:00:00.000",
          "value": 48500,
          "dateYear": 1886,
          "log2Mass": 15.565697126849214,
          "dateNormal": 0.8897569444444444,
          "massNormal": 0.0021086522655935766,
          "logMassNormal": 0.6365002677329439
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.1,
              52
            ]
          },
          "id": "4948",
          "mass": "17",
          "name": "Barntrup",
          "nametype": "Valid",
          "recclass": "LL4",
          "reclat": "52.000000",
          "reclong": "9.100000",
          "year": "1886-01-01T00:00:00.000",
          "value": 17,
          "dateYear": 1886,
          "log2Mass": 4.087462841250339,
          "dateNormal": 0.8897569444444444,
          "massNormal": 6.956522041587915e-7,
          "logMassNormal": 0.167141321818262
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -80,
              43
            ]
          },
          "id": "6621",
          "mass": "340",
          "name": "De Cewsville",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "43.000000",
          "reclong": "-80.000000",
          "year": "1887-01-01T00:00:00.000",
          "value": 340,
          "dateYear": 1887,
          "log2Mass": 8.409390936137703,
          "dateNormal": 0.890625,
          "massNormal": 0.000014739131075614395,
          "logMassNormal": 0.3438702127314295
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.56667,
              24.45
            ]
          },
          "id": "12451",
          "mass": "372",
          "name": "Lalitpur",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "24.450000",
          "reclong": "78.566670",
          "year": "1887-01-01T00:00:00.000",
          "value": 372,
          "dateYear": 1887,
          "log2Mass": 8.539158811108031,
          "dateNormal": 0.890625,
          "massNormal": 0.00001613043548393198,
          "logMassNormal": 0.34917657880605113
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              108.58333,
              11.25
            ]
          },
          "id": "18809",
          "mass": "500",
          "name": "Phu Hong",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "11.250000",
          "reclong": "108.583330",
          "year": "1887-01-01T00:00:00.000",
          "value": 500,
          "dateYear": 1887,
          "log2Mass": 8.965784284662087,
          "dateNormal": 0.890625,
          "massNormal": 0.00002169565311720231,
          "logMassNormal": 0.36662181276672356
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27.16667,
              50.13333
            ]
          },
          "id": "5043",
          "mass": "1900",
          "name": "Bielokrynitschie",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "50.133330",
          "reclong": "27.166670",
          "year": "1887-01-01T00:00:00.000",
          "value": 1900,
          "dateYear": 1887,
          "log2Mass": 10.89178370321831,
          "dateNormal": 0.890625,
          "massNormal": 0.00008256522098109656,
          "logMassNormal": 0.445378269067674
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              55.26667,
              57.78333
            ]
          },
          "id": "17979",
          "mass": "500000",
          "name": "Ochansk",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "57.783330",
          "reclong": "55.266670",
          "year": "1887-01-01T00:00:00.000",
          "value": 500000,
          "dateYear": 1887,
          "log2Mass": 18.931568569324174,
          "dateNormal": 0.890625,
          "massNormal": 0.021739087901699473,
          "logMassNormal": 0.7741348405266418
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              44.16667,
              1.16667
            ]
          },
          "id": "10044",
          "mass": "20000",
          "name": "Ergheo",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "1.166670",
          "reclong": "44.166670",
          "year": "1889-01-01T00:00:00.000",
          "value": 20000,
          "dateYear": 1889,
          "log2Mass": 14.287712379549449,
          "dateNormal": 0.8923611111111112,
          "massNormal": 0.0008695217769357295,
          "logMassNormal": 0.5842419186730856
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              20.44167,
              43.83333
            ]
          },
          "id": "12078",
          "mass": "34000",
          "name": "Jelica",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "43.833330",
          "reclong": "20.441670",
          "year": "1889-01-01T00:00:00.000",
          "value": 34000,
          "dateYear": 1889,
          "log2Mass": 15.053247125912426,
          "dateNormal": 0.8923611111111112,
          "massNormal": 0.001478217455574672,
          "logMassNormal": 0.6155455645713749
        },
        {
          ":@computed_region_cbhk_fwbd": "37",
          ":@computed_region_nnqa_25f4": "2331",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -81.41667,
              36.1
            ]
          },
          "id": "10088",
          "mass": "220",
          "name": "Ferguson",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "36.100000",
          "reclong": "-81.416670",
          "year": "1889-01-01T00:00:00.000",
          "value": 220,
          "dateYear": 1889,
          "log2Mass": 7.78135971352466,
          "dateNormal": 0.8923611111111112,
          "massNormal": 0.000009521739544423458,
          "logMassNormal": 0.31818925298512063
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.96667,
              48.06667
            ]
          },
          "id": "16634",
          "mass": "8000",
          "name": "Mighei",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "48.066670",
          "reclong": "30.966670",
          "year": "1889-01-01T00:00:00.000",
          "value": 8000,
          "dateYear": 1889,
          "log2Mass": 12.965784284662087,
          "dateNormal": 0.8923611111111112,
          "massNormal": 0.0003477826238166358,
          "logMassNormal": 0.5301866727395023
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.03333,
              56.21667
            ]
          },
          "id": "14755",
          "mass": "11000",
          "name": "Lundsgård",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "56.216670",
          "reclong": "13.033330",
          "year": "1889-01-01T00:00:00.000",
          "value": 11000,
          "dateYear": 1889,
          "log2Mass": 13.425215903299385,
          "dateNormal": 0.8923611111111112,
          "massNormal": 0.0004782174120964092,
          "logMassNormal": 0.5489733898318715
        },
        {
          ":@computed_region_cbhk_fwbd": "16",
          ":@computed_region_nnqa_25f4": "1785",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -93.66667,
              43.25
            ]
          },
          "id": "10119",
          "mass": "152000",
          "name": "Forest City",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.250000",
          "reclong": "-93.666670",
          "year": "1890-01-01T00:00:00.000",
          "value": 152000,
          "dateYear": 1890,
          "log2Mass": 17.213711798105674,
          "dateNormal": 0.8932291666666666,
          "massNormal": 0.006608652461245759,
          "logMassNormal": 0.7038895899672308
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.81667,
              28.95
            ]
          },
          "id": "11852",
          "mass": "1250",
          "name": "Hassi-Jekna",
          "nametype": "Valid",
          "recclass": "Iron, IAB-sHL",
          "reclat": "28.950000",
          "reclong": "0.816670",
          "year": "1890-01-01T00:00:00.000",
          "value": 1250,
          "dateYear": 1890,
          "log2Mass": 10.287712379549449,
          "dateNormal": 0.8932291666666666,
          "massNormal": 0.00005430435018714566,
          "logMassNormal": 0.4206770587003069
        },
        {
          ":@computed_region_cbhk_fwbd": "17",
          ":@computed_region_nnqa_25f4": "1300",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -97.03333,
              39.75
            ]
          },
          "id": "10074",
          "mass": "89400",
          "name": "Farmington",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "39.750000",
          "reclong": "-97.033330",
          "year": "1890-01-01T00:00:00.000",
          "value": 89400,
          "dateYear": 1890,
          "log2Mass": 16.447987210958043,
          "dateNormal": 0.8932291666666666,
          "massNormal": 0.0038869132124744873,
          "logMassNormal": 0.6725781812486018
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              109.5,
              30.80833
            ]
          },
          "id": "12087",
          "mass": "600000",
          "name": "Jianshi",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "30.808330",
          "reclong": "109.500000",
          "year": "1890-01-01T00:00:00.000",
          "value": 600000,
          "dateYear": 1890,
          "log2Mass": 19.194602975157967,
          "dateNormal": 0.8932291666666666,
          "massNormal": 0.02608691417769192,
          "logMassNormal": 0.7848906369661987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.51667,
              12.38333
            ]
          },
          "id": "12230",
          "mass": "350",
          "name": "Kakangari",
          "nametype": "Valid",
          "recclass": "K3",
          "reclat": "12.383330",
          "reclong": "78.516670",
          "year": "1890-01-01T00:00:00.000",
          "value": 350,
          "dateYear": 1890,
          "log2Mass": 8.451211111832329,
          "dateNormal": 0.8932291666666666,
          "massNormal": 0.000015173913703213639,
          "logMassNormal": 0.3455802905268116
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              23,
              56.66667
            ]
          },
          "id": "16703",
          "mass": "5800",
          "name": "Misshof",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "56.666670",
          "reclong": "23.000000",
          "year": "1890-01-01T00:00:00.000",
          "value": 5800,
          "dateYear": 1890,
          "log2Mass": 12.501837184902296,
          "dateNormal": 0.8932291666666666,
          "massNormal": 0.000252130445744802,
          "logMassNormal": 0.5112153121377555
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.61667,
              42.53333
            ]
          },
          "id": "5403",
          "mass": "5000",
          "name": "Collescipoli",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "42.533330",
          "reclong": "12.616670",
          "year": "1890-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1890,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.8932291666666666,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.15,
              48.01667
            ]
          },
          "id": "23087",
          "mass": "4000",
          "name": "St. Germain-du-Pinel",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "48.016670",
          "reclong": "-1.150000",
          "year": "1890-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1890,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.8932291666666666,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              83.66667,
              21.25
            ]
          },
          "id": "16927",
          "mass": "105",
          "name": "Nawapali",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "21.250000",
          "reclong": "83.666670",
          "year": "1890-01-01T00:00:00.000",
          "value": 105,
          "dateYear": 1890,
          "log2Mass": 6.714245517666122,
          "dateNormal": 0.8932291666666666,
          "massNormal": 0.000004521739327032144,
          "logMassNormal": 0.27455365697997913
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              20.23333,
              43.76667
            ]
          },
          "id": "11440",
          "mass": "1915",
          "name": "Guêa",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "43.766670",
          "reclong": "20.233330",
          "year": "1891-01-01T00:00:00.000",
          "value": 1915,
          "dateYear": 1891,
          "log2Mass": 10.903128676812319,
          "dateNormal": 0.8940972222222222,
          "massNormal": 0.00008321739492249544,
          "logMassNormal": 0.4458421788219987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              46.66667,
              39.75
            ]
          },
          "id": "12027",
          "mass": "27000",
          "name": "Indarch",
          "nametype": "Valid",
          "recclass": "EH4",
          "reclat": "39.750000",
          "reclong": "46.666670",
          "year": "1891-01-01T00:00:00.000",
          "value": 27000,
          "dateYear": 1891,
          "log2Mass": 14.720671786825555,
          "dateNormal": 0.8940972222222222,
          "massNormal": 0.0011738696162552006,
          "logMassNormal": 0.601946154879339
        },
        {
          ":@computed_region_cbhk_fwbd": "21",
          ":@computed_region_nnqa_25f4": "662",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -98.31667,
              45.41667
            ]
          },
          "id": "4974",
          "mass": "21000",
          "name": "Bath",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "45.416670",
          "reclong": "-98.316670",
          "year": "1892-01-01T00:00:00.000",
          "value": 21000,
          "dateYear": 1892,
          "log2Mass": 14.358101707440847,
          "dateNormal": 0.8949652777777778,
          "massNormal": 0.0009130000396956538,
          "logMassNormal": 0.5871202238131192
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.33333,
              27.7
            ]
          },
          "id": "4936",
          "mass": "15000",
          "name": "Bansur",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "27.700000",
          "reclong": "76.333330",
          "year": "1892-01-01T00:00:00.000",
          "value": 15000,
          "dateYear": 1892,
          "log2Mass": 13.872674880270605,
          "dateNormal": 0.8949652777777778,
          "massNormal": 0.000652130463136107,
          "logMassNormal": 0.5672705310598365
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -6.01667,
              38.73333
            ]
          },
          "id": "11439",
          "mass": "39000",
          "name": "Guareña",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "38.733330",
          "reclong": "-6.016670",
          "year": "1892-01-01T00:00:00.000",
          "value": 39000,
          "dateYear": 1892,
          "log2Mass": 15.251186503524336,
          "dateNormal": 0.8949652777777778,
          "massNormal": 0.0016956087693742942,
          "logMassNormal": 0.6236395462169226
        },
        {
          ":@computed_region_cbhk_fwbd": "37",
          ":@computed_region_nnqa_25f4": "2332",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -78.13333,
              35.63333
            ]
          },
          "id": "5476",
          "mass": "167",
          "name": "Cross Roads",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "35.633330",
          "reclong": "-78.133330",
          "year": "1892-01-01T00:00:00.000",
          "value": 167,
          "dateYear": 1892,
          "log2Mass": 7.383704292474052,
          "dateNormal": 0.8949652777777778,
          "massNormal": 0.000007217391618147461,
          "logMassNormal": 0.3019286396697309
        },
        {
          ":@computed_region_cbhk_fwbd": "38",
          ":@computed_region_nnqa_25f4": "2566",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -83.85,
              39.11667
            ]
          },
          "id": "18888",
          "mass": "900",
          "name": "Pricetown",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "39.116670",
          "reclong": "-83.850000",
          "year": "1893-01-01T00:00:00.000",
          "value": 900,
          "dateYear": 1893,
          "log2Mass": 9.813781191217037,
          "dateNormal": 0.8958333333333334,
          "massNormal": 0.0000390869582211721,
          "logMassNormal": 0.401297436586226
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -117.33333,
              51.16667
            ]
          },
          "id": "4986",
          "mass": "14000",
          "name": "Beaver Creek",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "51.166670",
          "reclong": "-117.333330",
          "year": "1893-01-01T00:00:00.000",
          "value": 14000,
          "dateYear": 1893,
          "log2Mass": 13.77313920671969,
          "dateNormal": 0.8958333333333334,
          "massNormal": 0.0006086522003761827,
          "logMassNormal": 0.5632003964331737
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              71.46667,
              20.83333
            ]
          },
          "id": "5039",
          "mass": "100",
          "name": "Bherai",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "20.833330",
          "reclong": "71.466670",
          "year": "1893-01-01T00:00:00.000",
          "value": 100,
          "dateYear": 1893,
          "log2Mass": 6.643856189774724,
          "dateNormal": 0.8958333333333334,
          "massNormal": 0.000004304348013232522,
          "logMassNormal": 0.27167535183994546
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.03333,
              21.95
            ]
          },
          "id": "5111",
          "mass": "8600",
          "name": "Bori",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "21.950000",
          "reclong": "78.033330",
          "year": "1894-01-01T00:00:00.000",
          "value": 8600,
          "dateYear": 1894,
          "log2Mass": 13.070120944476823,
          "dateNormal": 0.8967013888888888,
          "massNormal": 0.0003738695814725905,
          "logMassNormal": 0.5344531255276584
        },
        {
          ":@computed_region_cbhk_fwbd": "1",
          ":@computed_region_nnqa_25f4": "385",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -96.85,
              47.81667
            ]
          },
          "id": "10107",
          "mass": "17600",
          "name": "Fisher",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "47.816670",
          "reclong": "-96.850000",
          "year": "1894-01-01T00:00:00.000",
          "value": 17600,
          "dateYear": 1894,
          "log2Mass": 14.103287808412022,
          "dateNormal": 0.8967013888888888,
          "massNormal": 0.0007651739463119107,
          "logMassNormal": 0.5767005738846773
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.83333,
              38
            ]
          },
          "id": "14708",
          "mass": "25",
          "name": "Los Martinez",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.000000",
          "reclong": "-0.833330",
          "year": "1894-01-01T00:00:00.000",
          "value": 25,
          "dateYear": 1894,
          "log2Mass": 4.643856189774724,
          "dateNormal": 0.8967013888888888,
          "massNormal": 0.0000010434783062381873,
          "logMassNormal": 0.1898929218535561
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              29.86667,
              47.21667
            ]
          },
          "id": "23190",
          "mass": "2500",
          "name": "Savtschenskoje",
          "nametype": "Valid",
          "recclass": "LL4",
          "reclat": "47.216670",
          "reclong": "29.866670",
          "year": "1894-01-01T00:00:00.000",
          "value": 2500,
          "dateYear": 1894,
          "log2Mass": 11.287712379549449,
          "dateNormal": 0.8967013888888888,
          "massNormal": 0.00010865217863705124,
          "logMassNormal": 0.4615682736935016
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.6,
              25.38333
            ]
          },
          "id": "5060",
          "mass": "1039",
          "name": "Bishunpur",
          "nametype": "Valid",
          "recclass": "LL3.15",
          "reclat": "25.383330",
          "reclong": "82.600000",
          "year": "1895-01-01T00:00:00.000",
          "value": 1039,
          "dateYear": 1895,
          "log2Mass": 10.020979938904212,
          "dateNormal": 0.8975694444444444,
          "massNormal": 0.000045130436744801596,
          "logMassNormal": 0.409770045124223
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              150.51667,
              -23.38333
            ]
          },
          "id": "22640",
          "mass": "1641",
          "name": "Rockhampton",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "-23.383330",
          "reclong": "150.516670",
          "year": "1895-01-01T00:00:00.000",
          "value": 1641,
          "dateYear": 1895,
          "log2Mass": 10.680359523513713,
          "dateNormal": 0.8975694444444444,
          "massNormal": 0.00007130435092627612,
          "logMassNormal": 0.4367328774806135
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              19.5,
              49.16667
            ]
          },
          "id": "16893",
          "mass": "6100",
          "name": "Nagy-Borové",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "49.166670",
          "reclong": "19.500000",
          "year": "1895-01-01T00:00:00.000",
          "value": 6100,
          "dateYear": 1895,
          "log2Mass": 12.57459352733761,
          "dateNormal": 0.8975694444444444,
          "massNormal": 0.00026517392457277934,
          "logMassNormal": 0.5141904073783964
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.25,
              27.66667
            ]
          },
          "id": "2290",
          "mass": "6400",
          "name": "Ambapur Nagla",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "27.666670",
          "reclong": "78.250000",
          "year": "1895-01-01T00:00:00.000",
          "value": 6400,
          "dateYear": 1895,
          "log2Mass": 12.643856189774725,
          "dateNormal": 0.8975694444444444,
          "massNormal": 0.0002782174034007567,
          "logMassNormal": 0.5170226417991136
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              4.73333,
              50.36667
            ]
          },
          "id": "12772",
          "mass": "2000",
          "name": "Lesves",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "50.366670",
          "reclong": "4.733330",
          "year": "1896-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1896,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.8984375,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          ":@computed_region_cbhk_fwbd": "17",
          ":@computed_region_nnqa_25f4": "1947",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -95.21667,
              38.6
            ]
          },
          "id": "18046",
          "mass": "840",
          "name": "Ottawa",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "38.600000",
          "reclong": "-95.216670",
          "year": "1896-01-01T00:00:00.000",
          "value": 840,
          "dateYear": 1896,
          "log2Mass": 9.714245517666123,
          "dateNormal": 0.8984375,
          "massNormal": 0.000036478262455576625,
          "logMassNormal": 0.3972273019595632
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -103.66667,
              20.06667
            ]
          },
          "id": "4884",
          "mass": "94.2",
          "name": "Atemajac",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "20.066670",
          "reclong": "-103.666670",
          "year": "1896-01-01T00:00:00.000",
          "value": 94.2,
          "dateYear": 1896,
          "log2Mass": 6.5576551547254205,
          "dateNormal": 0.8984375,
          "massNormal": 0.00000405217408922496,
          "logMassNormal": 0.2681504867831085
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -3.71667,
              40.41667
            ]
          },
          "id": "15382",
          "mass": "400",
          "name": "Madrid",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "40.416670",
          "reclong": "-3.716670",
          "year": "1896-01-01T00:00:00.000",
          "value": 400,
          "dateYear": 1896,
          "log2Mass": 8.643856189774725,
          "dateNormal": 0.8984375,
          "massNormal": 0.00001734782684120986,
          "logMassNormal": 0.35345778182633486
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              130.43333,
              33.6
            ]
          },
          "id": "11883",
          "mass": "750",
          "name": "Higashi-koen",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "33.600000",
          "reclong": "130.433330",
          "year": "1897-01-01T00:00:00.000",
          "value": 750,
          "dateYear": 1897,
          "log2Mass": 9.550746785383243,
          "dateNormal": 0.8993055555555556,
          "massNormal": 0.00003256521880718343,
          "logMassNormal": 0.39054164014666914
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.1,
              50.58333
            ]
          },
          "id": "16626",
          "mass": "870",
          "name": "Meuselbach",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "50.583330",
          "reclong": "11.100000",
          "year": "1897-01-01T00:00:00.000",
          "value": 870,
          "dateYear": 1897,
          "log2Mass": 9.76487159073609,
          "dateNormal": 0.8993055555555556,
          "massNormal": 0.00003778261033837436,
          "logMassNormal": 0.3992974635977284
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.3,
              32.08333
            ]
          },
          "id": "12246",
          "mass": "400",
          "name": "Kangra Valley",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "32.083330",
          "reclong": "76.300000",
          "year": "1897-01-01T00:00:00.000",
          "value": 400,
          "dateYear": 1897,
          "log2Mass": 8.643856189774725,
          "dateNormal": 0.8993055555555556,
          "massNormal": 0.00001734782684120986,
          "logMassNormal": 0.35345778182633486
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              68.53333,
              27.35
            ]
          },
          "id": "10851",
          "mass": "6400",
          "name": "Gambat",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "27.350000",
          "reclong": "68.533330",
          "year": "1897-01-01T00:00:00.000",
          "value": 6400,
          "dateYear": 1897,
          "log2Mass": 12.643856189774725,
          "dateNormal": 0.8993055555555556,
          "massNormal": 0.0002782174034007567,
          "logMassNormal": 0.5170226417991136
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              131.56667,
              34.2
            ]
          },
          "id": "16982",
          "mass": "467",
          "name": "Nio",
          "nametype": "Valid",
          "recclass": "H3-4",
          "reclat": "34.200000",
          "reclong": "131.566670",
          "year": "1897-01-01T00:00:00.000",
          "value": 467,
          "dateYear": 1897,
          "log2Mass": 8.867278739709661,
          "dateNormal": 0.8993055555555556,
          "massNormal": 0.000020260870446124802,
          "logMassNormal": 0.3625938013500521
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5.11667,
              43.75
            ]
          },
          "id": "12456",
          "mass": "7000",
          "name": "Lancon",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "43.750000",
          "reclong": "5.116670",
          "year": "1897-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 1897,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.8993055555555556,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          ":@computed_region_cbhk_fwbd": "19",
          ":@computed_region_nnqa_25f4": "471",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -99.38333,
              42.71667
            ]
          },
          "id": "15419",
          "mass": "340",
          "name": "Mariaville",
          "nametype": "Valid",
          "recclass": "Iron",
          "reclat": "42.716670",
          "reclong": "-99.383330",
          "year": "1898-01-01T00:00:00.000",
          "value": 340,
          "dateYear": 1898,
          "log2Mass": 8.409390936137703,
          "dateNormal": 0.9001736111111112,
          "massNormal": 0.000014739131075614395,
          "logMassNormal": 0.3438702127314295
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.66667,
              39
            ]
          },
          "id": "22360",
          "mass": "10750",
          "name": "Quesa",
          "nametype": "Valid",
          "recclass": "Iron, IAB-ung",
          "reclat": "39.000000",
          "reclong": "-0.666670",
          "year": "1898-01-01T00:00:00.000",
          "value": 10750,
          "dateYear": 1898,
          "log2Mass": 13.392049039364185,
          "dateNormal": 0.9001736111111112,
          "massNormal": 0.0004673478464064281,
          "logMassNormal": 0.5476171564680471
        },
        {
          ":@computed_region_cbhk_fwbd": "49",
          ":@computed_region_nnqa_25f4": "1723",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -70.75,
              44.61667
            ]
          },
          "id": "2295",
          "mass": "3200",
          "name": "Andover",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "44.616670",
          "reclong": "-70.750000",
          "year": "1898-01-01T00:00:00.000",
          "value": 3200,
          "dateYear": 1898,
          "log2Mass": 11.643856189774725,
          "dateNormal": 0.9001736111111112,
          "massNormal": 0.00013908696256899837,
          "logMassNormal": 0.4761314268059189
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5.93333,
              61.73333
            ]
          },
          "id": "16707",
          "mass": "100.7",
          "name": "Mjelleim",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "61.733330",
          "reclong": "5.933330",
          "year": "1898-01-01T00:00:00.000",
          "value": 100.7,
          "dateYear": 1898,
          "log2Mass": 6.653919873119422,
          "dateNormal": 0.9001736111111112,
          "massNormal": 0.00000433478279716447,
          "logMassNormal": 0.27208686807921695
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27.51667,
              37.86667
            ]
          },
          "id": "15386",
          "mass": "5000",
          "name": "Magnesia",
          "nametype": "Valid",
          "recclass": "Iron, IAB-sHL",
          "reclat": "37.866670",
          "reclong": "27.516670",
          "year": "1899-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1899,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.9010416666666666,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              25.8,
              60.4
            ]
          },
          "id": "5064",
          "mass": "330000",
          "name": "Bjurböle",
          "nametype": "Valid",
          "recclass": "L/LL4",
          "reclat": "60.400000",
          "reclong": "25.800000",
          "year": "1899-01-01T00:00:00.000",
          "value": 330000,
          "dateYear": 1899,
          "log2Mass": 18.3321064989079,
          "dateNormal": 0.9010416666666666,
          "massNormal": 0.014347783232512314,
          "logMassNormal": 0.7496221081249843
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -100.81667,
              19.86667
            ]
          },
          "id": "22390",
          "mass": "300",
          "name": "Rancho de la Presa",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "19.866670",
          "reclong": "-100.816670",
          "year": "1899-01-01T00:00:00.000",
          "value": 300,
          "dateYear": 1899,
          "log2Mass": 8.228818690495881,
          "dateNormal": 0.9010416666666666,
          "massNormal": 0.000013000000565217416,
          "logMassNormal": 0.3364863942130858
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.45,
              21.86667
            ]
          },
          "id": "7707",
          "mass": "230",
          "name": "Donga Kohrod",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "21.866670",
          "reclong": "82.450000",
          "year": "1899-01-01T00:00:00.000",
          "value": 230,
          "dateYear": 1899,
          "log2Mass": 7.845490050944375,
          "dateNormal": 0.9010416666666666,
          "massNormal": 0.000009956522172022704,
          "logMassNormal": 0.3208116204001363
        },
        {
          ":@computed_region_cbhk_fwbd": "50",
          ":@computed_region_nnqa_25f4": "429",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -85.88333,
              42.53333
            ]
          },
          "id": "2276",
          "mass": "32000",
          "name": "Allegan",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "42.533330",
          "reclong": "-85.883330",
          "year": "1899-01-01T00:00:00.000",
          "value": 32000,
          "dateYear": 1899,
          "log2Mass": 14.965784284662087,
          "dateNormal": 0.9010416666666666,
          "massNormal": 0.0013912609300548232,
          "logMassNormal": 0.6119691027258917
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.5,
              -10.66667
            ]
          },
          "id": "18792",
          "mass": "165",
          "name": "Peramiho",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "-10.666670",
          "reclong": "35.500000",
          "year": "1899-01-01T00:00:00.000",
          "value": 165,
          "dateYear": 1899,
          "log2Mass": 7.366322214245816,
          "dateNormal": 0.9010416666666666,
          "massNormal": 0.000007130435092627613,
          "logMassNormal": 0.3012178653718715
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              31.81667,
              50.95
            ]
          },
          "id": "465",
          "mass": "9251",
          "name": "Alexandrovsky",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "50.950000",
          "reclong": "31.816670",
          "year": "1900-01-01T00:00:00.000",
          "value": 9251,
          "dateYear": 1900,
          "log2Mass": 13.175393608892442,
          "dateNormal": 0.9019097222222222,
          "massNormal": 0.0004021739305293013,
          "logMassNormal": 0.5387578526811839
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              151.61667,
              -29.46667
            ]
          },
          "id": "10033",
          "mass": "127",
          "name": "Emmaville",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "-29.466670",
          "reclong": "151.616670",
          "year": "1900-01-01T00:00:00.000",
          "value": 127,
          "dateYear": 1900,
          "log2Mass": 6.9886846867721655,
          "dateNormal": 0.9019097222222222,
          "massNormal": 0.000005478261107750483,
          "logMassNormal": 0.28577580804644803
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              32.85,
              52.26667
            ]
          },
          "id": "12765",
          "mass": "700",
          "name": "Leonovka",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "52.266670",
          "reclong": "32.850000",
          "year": "1900-01-01T00:00:00.000",
          "value": 700,
          "dateYear": 1900,
          "log2Mass": 9.451211111832329,
          "dateNormal": 0.9019097222222222,
          "massNormal": 0.000030391305669187204,
          "logMassNormal": 0.38647150552000625
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16,
              -18
            ]
          },
          "id": "18055",
          "mass": "121.5",
          "name": "Ovambo",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-18.000000",
          "reclong": "16.000000",
          "year": "1900-01-01T00:00:00.000",
          "value": 121.5,
          "dateYear": 1900,
          "log2Mass": 6.924812503605781,
          "dateNormal": 0.9019097222222222,
          "massNormal": 0.0000052391306625708985,
          "logMassNormal": 0.2831639968725067
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              7.31667,
              50.95
            ]
          },
          "id": "10163",
          "mass": "240",
          "name": "Forsbach",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "50.950000",
          "reclong": "7.316670",
          "year": "1900-01-01T00:00:00.000",
          "value": 240,
          "dateYear": 1900,
          "log2Mass": 7.906890595608519,
          "dateNormal": 0.9019097222222222,
          "massNormal": 0.000010391304799621948,
          "logMassNormal": 0.32332236327269703
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              22.03333,
              47.88333
            ]
          },
          "id": "17990",
          "mass": "3750",
          "name": "Ofehértó",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "47.883330",
          "reclong": "22.033330",
          "year": "1900-01-01T00:00:00.000",
          "value": 3750,
          "dateYear": 1900,
          "log2Mass": 11.872674880270605,
          "dateNormal": 0.9019097222222222,
          "massNormal": 0.00016300000708695684,
          "logMassNormal": 0.4854881010734472
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -4.38333,
              13.85
            ]
          },
          "id": "16968",
          "mass": "37500",
          "name": "N'Goureyma",
          "nametype": "Valid",
          "recclass": "Iron, ungrouped",
          "reclat": "13.850000",
          "reclong": "-4.383330",
          "year": "1900-01-01T00:00:00.000",
          "value": 37500,
          "dateYear": 1900,
          "log2Mass": 15.194602975157968,
          "dateNormal": 0.9019097222222222,
          "massNormal": 0.0016303913752344077,
          "logMassNormal": 0.62132577699342
        },
        {
          ":@computed_region_cbhk_fwbd": "29",
          ":@computed_region_nnqa_25f4": "1631",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -87.16667,
              32.53333
            ]
          },
          "id": "10081",
          "mass": "3200",
          "name": "Felix",
          "nametype": "Valid",
          "recclass": "CO3.3",
          "reclat": "32.533330",
          "reclong": "-87.166670",
          "year": "1900-01-01T00:00:00.000",
          "value": 3200,
          "dateYear": 1900,
          "log2Mass": 11.643856189774725,
          "dateNormal": 0.9019097222222222,
          "massNormal": 0.00013908696256899837,
          "logMassNormal": 0.4761314268059189
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              6.81667,
              46.55
            ]
          },
          "id": "5341",
          "mass": "705",
          "name": "Chervettaz",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "46.550000",
          "reclong": "6.816670",
          "year": "1901-01-01T00:00:00.000",
          "value": 705,
          "dateYear": 1901,
          "log2Mass": 9.461479447286155,
          "dateNormal": 0.9027777777777778,
          "massNormal": 0.000030608696982986824,
          "logMassNormal": 0.38689139023267094
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              69.55,
              26.21667
            ]
          },
          "id": "23611",
          "mass": "8400",
          "name": "Sindhri",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "26.216670",
          "reclong": "69.550000",
          "year": "1901-01-01T00:00:00.000",
          "value": 8400,
          "dateYear": 1901,
          "log2Mass": 13.036173612553485,
          "dateNormal": 0.9027777777777778,
          "massNormal": 0.0003651739289206056,
          "logMassNormal": 0.5330649778795359
        },
        {
          "fall": "Fell",
          "id": "12079",
          "mass": "450",
          "name": "Jemlapur",
          "nametype": "Valid",
          "recclass": "L6",
          "year": "1901-01-01T00:00:00.000",
          "value": 450,
          "dateYear": 1901,
          "log2Mass": 8.813781191217037,
          "dateNormal": 0.9027777777777778,
          "massNormal": 0.000019521739979206086,
          "logMassNormal": 0.3604062215930314
        },
        {
          ":@computed_region_cbhk_fwbd": "17",
          ":@computed_region_nnqa_25f4": "1255",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -99.25,
              40
            ]
          },
          "id": "18808",
          "mass": "57900",
          "name": "Phillips County (stone)",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "40.000000",
          "reclong": "-99.250000",
          "year": "1901-01-01T00:00:00.000",
          "value": 57900,
          "dateYear": 1901,
          "log2Mass": 15.821275727763961,
          "dateNormal": 0.9027777777777778,
          "massNormal": 0.002517347935536867,
          "logMassNormal": 0.6469511872506087
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              22.68333,
              61.18333
            ]
          },
          "id": "11989",
          "mass": "14000",
          "name": "Hvittis",
          "nametype": "Valid",
          "recclass": "EL6",
          "reclat": "61.183330",
          "reclong": "22.683330",
          "year": "1901-01-01T00:00:00.000",
          "value": 14000,
          "dateYear": 1901,
          "log2Mass": 13.77313920671969,
          "dateNormal": 0.9027777777777778,
          "massNormal": 0.0006086522003761827,
          "logMassNormal": 0.5632003964331737
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.8,
              14.18333
            ]
          },
          "id": "12241",
          "mass": "1293",
          "name": "Kamsagar",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "14.183330",
          "reclong": "75.800000",
          "year": "1902-01-01T00:00:00.000",
          "value": 1293,
          "dateYear": 1902,
          "log2Mass": 10.336506559810255,
          "dateNormal": 0.9036458333333334,
          "massNormal": 0.00005617391548582241,
          "logMassNormal": 0.4226723120157682
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -64.95,
              -33.16667
            ]
          },
          "id": "370",
          "mass": "780",
          "name": "Achiras",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-33.166670",
          "reclong": "-64.950000",
          "year": "1902-01-01T00:00:00.000",
          "value": 780,
          "dateYear": 1902,
          "log2Mass": 9.60733031374961,
          "dateNormal": 0.9036458333333334,
          "massNormal": 0.00003386956668998116,
          "logMassNormal": 0.3928554093701718
        },
        {
          ":@computed_region_cbhk_fwbd": "36",
          ":@computed_region_nnqa_25f4": "1921",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -83.75,
              38.25
            ]
          },
          "id": "4975",
          "mass": "86000",
          "name": "Bath Furnace",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.250000",
          "reclong": "-83.750000",
          "year": "1902-01-01T00:00:00.000",
          "value": 86000,
          "dateYear": 1902,
          "log2Mass": 16.392049039364185,
          "dateNormal": 0.9036458333333334,
          "massNormal": 0.0037390871190907445,
          "logMassNormal": 0.6702908014476312
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -6.21667,
              54.61667
            ]
          },
          "id": "5477",
          "mass": "4255",
          "name": "Crumlin",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "54.616670",
          "reclong": "-6.216670",
          "year": "1902-01-01T00:00:00.000",
          "value": 4255,
          "dateYear": 1902,
          "log2Mass": 12.054943416573325,
          "dateNormal": 0.9036458333333334,
          "massNormal": 0.00018495652978071868,
          "logMassNormal": 0.49294128297789663
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              141.7,
              -29.8
            ]
          },
          "id": "16766",
          "mass": "11300",
          "name": "Mount Browne",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-29.800000",
          "reclong": "141.700000",
          "year": "1902-01-01T00:00:00.000",
          "value": 11300,
          "dateYear": 1902,
          "log2Mass": 13.464035152189913,
          "dateNormal": 0.9036458333333334,
          "massNormal": 0.0004912608909243865,
          "logMassNormal": 0.5505607560841284
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27,
              38.5
            ]
          },
          "id": "5265",
          "mass": "8",
          "name": "Caratash",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "38.500000",
          "reclong": "27.000000",
          "year": "1902-01-01T00:00:00.000",
          "value": 8,
          "dateYear": 1902,
          "log2Mass": 3,
          "dateNormal": 0.9036458333333334,
          "massNormal": 3.043478393194713e-7,
          "logMassNormal": 0.12267364497958404
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.5,
              61.5
            ]
          },
          "id": "15426",
          "mass": "45000",
          "name": "Marjalahti",
          "nametype": "Valid",
          "recclass": "Pallasite, PMG",
          "reclat": "61.500000",
          "reclong": "30.500000",
          "year": "1902-01-01T00:00:00.000",
          "value": 45000,
          "dateYear": 1902,
          "log2Mass": 15.45763738099176,
          "dateNormal": 0.9036458333333334,
          "massNormal": 0.0019564783459338412,
          "logMassNormal": 0.6320815734329768
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              7.21817,
              46.81867
            ]
          },
          "id": "15486",
          "mass": "28.9",
          "name": "Menziswyl",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "46.818670",
          "reclong": "7.218170",
          "year": "1903-01-01T00:00:00.000",
          "value": 28.9,
          "dateYear": 1903,
          "log2Mass": 4.8529975876133165,
          "dateNormal": 0.9045138888888888,
          "massNormal": 0.0000012130435310018926,
          "logMassNormal": 0.19844496771655123
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27.41667,
              -32.01667
            ]
          },
          "id": "23090",
          "mass": "13780",
          "name": "St. Mark's",
          "nametype": "Valid",
          "recclass": "EH5",
          "reclat": "-32.016670",
          "reclong": "27.416670",
          "year": "1903-01-01T00:00:00.000",
          "value": 13780,
          "dateYear": 1903,
          "log2Mass": 13.750288267591653,
          "dateNormal": 0.9045138888888888,
          "massNormal": 0.0005990869825689992,
          "logMassNormal": 0.5622659937684927
        },
        {
          ":@computed_region_cbhk_fwbd": "37",
          ":@computed_region_nnqa_25f4": "2388",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -83.03333,
              35.03333
            ]
          },
          "id": "22597",
          "mass": "668",
          "name": "Rich Mountain",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "35.033330",
          "reclong": "-83.033330",
          "year": "1903-01-01T00:00:00.000",
          "value": 668,
          "dateYear": 1903,
          "log2Mass": 9.383704292474052,
          "dateNormal": 0.9045138888888888,
          "massNormal": 0.00002900000126086962,
          "logMassNormal": 0.38371106965612023
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              21.9,
              -32.5
            ]
          },
          "id": "12065",
          "mass": "48000",
          "name": "Jackalsfontein",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-32.500000",
          "reclong": "21.900000",
          "year": "1903-01-01T00:00:00.000",
          "value": 48000,
          "dateYear": 1903,
          "log2Mass": 15.550746785383243,
          "dateNormal": 0.9045138888888888,
          "massNormal": 0.0020869131342136143,
          "logMassNormal": 0.6358889301058372
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              90.33333,
              23.5
            ]
          },
          "id": "7658",
          "mass": "3840",
          "name": "Dokachi",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "23.500000",
          "reclong": "90.333330",
          "year": "1903-01-01T00:00:00.000",
          "value": 3840,
          "dateYear": 1903,
          "log2Mass": 11.906890595608518,
          "dateNormal": 0.9045138888888888,
          "massNormal": 0.00016691305073535004,
          "logMassNormal": 0.48688722324547573
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              135.2,
              35.08333
            ]
          },
          "id": "18000",
          "mass": "4742",
          "name": "Okano",
          "nametype": "Valid",
          "recclass": "Iron, IIAB",
          "reclat": "35.083330",
          "reclong": "135.200000",
          "year": "1904-01-01T00:00:00.000",
          "value": 4742,
          "dateYear": 1904,
          "log2Mass": 12.211279947482009,
          "dateNormal": 0.9053819444444444,
          "massNormal": 0.0002061304437448019,
          "logMassNormal": 0.49933407367457383
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              24.7,
              42.9
            ]
          },
          "id": "11450",
          "mass": "5700",
          "name": "Gumoschnik",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "42.900000",
          "reclong": "24.700000",
          "year": "1904-01-01T00:00:00.000",
          "value": 5700,
          "dateYear": 1904,
          "log2Mass": 12.476746203939467,
          "dateNormal": 0.9053819444444444,
          "massNormal": 0.0002477826194688095,
          "logMassNormal": 0.5101893114408143
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -80.16667,
              44.05
            ]
          },
          "id": "23529",
          "mass": "18600",
          "name": "Shelburne",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "44.050000",
          "reclong": "-80.166670",
          "year": "1904-01-01T00:00:00.000",
          "value": 18600,
          "dateYear": 1904,
          "log2Mass": 14.183015000882756,
          "dateNormal": 0.9053819444444444,
          "massNormal": 0.0008086522090718351,
          "logMassNormal": 0.5799607156528019
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              84.08333,
              52.73333
            ]
          },
          "id": "4947",
          "mass": "23.2",
          "name": "Barnaul",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "52.733330",
          "reclong": "84.083330",
          "year": "1904-01-01T00:00:00.000",
          "value": 23.2,
          "dateYear": 1904,
          "log2Mass": 4.53605290024021,
          "dateNormal": 0.9053819444444444,
          "massNormal": 9.65217433270323e-7,
          "logMassNormal": 0.18548471436422667
        },
        {
          ":@computed_region_cbhk_fwbd": "17",
          ":@computed_region_nnqa_25f4": "1290",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -101.1,
              38.5
            ]
          },
          "id": "16711",
          "mass": "35000",
          "name": "Modoc (1905)",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.500000",
          "reclong": "-101.100000",
          "year": "1905-01-01T00:00:00.000",
          "value": 35000,
          "dateYear": 1905,
          "log2Mass": 15.095067301607054,
          "dateNormal": 0.90625,
          "massNormal": 0.0015216957183345964,
          "logMassNormal": 0.6172556423667571
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              34.76667,
              47.85
            ]
          },
          "id": "24019",
          "mass": "600",
          "name": "Tomakovka",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "47.850000",
          "reclong": "34.766670",
          "year": "1905-01-01T00:00:00.000",
          "value": 600,
          "dateYear": 1905,
          "log2Mass": 9.228818690495881,
          "dateNormal": 0.90625,
          "massNormal": 0.000026043479393194756,
          "logMassNormal": 0.37737760920628044
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.6,
              47.7
            ]
          },
          "id": "16700",
          "mass": "550",
          "name": "Minnichhof",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "47.700000",
          "reclong": "16.600000",
          "year": "1905-01-01T00:00:00.000",
          "value": 550,
          "dateYear": 1905,
          "log2Mass": 9.103287808412022,
          "dateNormal": 0.90625,
          "massNormal": 0.00002386956625519853,
          "logMassNormal": 0.372244498918704
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              86.9,
              22.08333
            ]
          },
          "id": "5041",
          "mass": "2500",
          "name": "Bholghati",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "22.083330",
          "reclong": "86.900000",
          "year": "1905-01-01T00:00:00.000",
          "value": 2500,
          "dateYear": 1905,
          "log2Mass": 11.287712379549449,
          "dateNormal": 0.90625,
          "massNormal": 0.00010865217863705124,
          "logMassNormal": 0.4615682736935016
        },
        {
          "fall": "Found",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0,
              0
            ]
          },
          "id": "50693",
          "mass": "256.8",
          "name": "Northwest Africa 5815",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "0.000000",
          "reclong": "0.000000",
          "value": 256.8,
          "dateYear": null,
          "log2Mass": 8.00450139223494,
          "dateNormal": null,
          "massNormal": 0.00001112173961398868,
          "logMassNormal": 0.3273137873432051
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              67.16667,
              27.8
            ]
          },
          "id": "12262",
          "mass": "22000",
          "name": "Karkh",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "27.800000",
          "reclong": "67.166670",
          "year": "1905-01-01T00:00:00.000",
          "value": 22000,
          "dateYear": 1905,
          "log2Mass": 14.425215903299385,
          "dateNormal": 0.90625,
          "massNormal": 0.0009564783024555784,
          "logMassNormal": 0.5898646048250661
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "2018",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -95.95,
              30.75
            ]
          },
          "id": "12321",
          "mass": "97.7",
          "name": "Kirbyville",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "30.750000",
          "reclong": "-95.950000",
          "year": "1906-01-01T00:00:00.000",
          "value": 97.7,
          "dateYear": 1906,
          "log2Mass": 6.610286657081023,
          "dateNormal": 0.9071180555555556,
          "massNormal": 0.0000042043480088846965,
          "logMassNormal": 0.27030265286134625
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              18.56667,
              -33.75
            ]
          },
          "id": "7642",
          "mass": "1000",
          "name": "Diep River",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-33.750000",
          "reclong": "18.566670",
          "year": "1906-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1906,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.9071180555555556,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              45,
              41.11667
            ]
          },
          "id": "12373",
          "mass": "3719",
          "name": "Kulp",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "41.116670",
          "reclong": "45.000000",
          "year": "1906-01-01T00:00:00.000",
          "value": 3719,
          "dateYear": 1906,
          "log2Mass": 11.860699032611988,
          "dateNormal": 0.9071180555555556,
          "massNormal": 0.00016165218094139918,
          "logMassNormal": 0.48499839411211293
        },
        {
          ":@computed_region_cbhk_fwbd": "20",
          ":@computed_region_nnqa_25f4": "2164",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -97.33333,
              36.83333
            ]
          },
          "id": "5068",
          "mass": "2381",
          "name": "Blackwell",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "36.833330",
          "reclong": "-97.333330",
          "year": "1906-01-01T00:00:00.000",
          "value": 2381,
          "dateYear": 1906,
          "log2Mass": 11.217351905270334,
          "dateNormal": 0.9071180555555556,
          "massNormal": 0.00010347826536862023,
          "logMassNormal": 0.4586911484127312
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              77,
              56.8
            ]
          },
          "id": "12363",
          "mass": "845.2",
          "name": "Krutikha",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "56.800000",
          "reclong": "77.000000",
          "year": "1906-01-01T00:00:00.000",
          "value": 845.2,
          "dateYear": 1906,
          "log2Mass": 9.723148957047579,
          "dateNormal": 0.9071180555555556,
          "massNormal": 0.00003670434942192824,
          "logMassNormal": 0.3975913744134892
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              138.38333,
              36.85
            ]
          },
          "id": "12305",
          "mass": "331",
          "name": "Kijima (1906)",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "36.850000",
          "reclong": "138.383330",
          "year": "1906-01-01T00:00:00.000",
          "value": 331,
          "dateYear": 1906,
          "log2Mass": 8.370687406807217,
          "dateNormal": 0.9071180555555556,
          "massNormal": 0.000014347826710775075,
          "logMassNormal": 0.34228757839258117
        },
        {
          ":@computed_region_cbhk_fwbd": "29",
          ":@computed_region_nnqa_25f4": "1585",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -87.5,
              34.58333
            ]
          },
          "id": "12760",
          "mass": "877",
          "name": "Leighton",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "34.583330",
          "reclong": "-87.500000",
          "year": "1907-01-01T00:00:00.000",
          "value": 877,
          "dateYear": 1907,
          "log2Mass": 9.776433032444734,
          "dateNormal": 0.9079861111111112,
          "massNormal": 0.00003808695817769383,
          "logMassNormal": 0.3997702249962678
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              83.48333,
              25.85
            ]
          },
          "id": "5315",
          "mass": "8200",
          "name": "Chainpur",
          "nametype": "Valid",
          "recclass": "LL3.4",
          "reclat": "25.850000",
          "reclong": "83.483330",
          "year": "1907-01-01T00:00:00.000",
          "value": 8200,
          "dateYear": 1907,
          "log2Mass": 13.001408194392809,
          "dateNormal": 0.9079861111111112,
          "massNormal": 0.0003564782763686207,
          "logMassNormal": 0.5316433776911994
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.38333,
              5.38333
            ]
          },
          "id": "4928",
          "mass": "1000",
          "name": "Bali",
          "nametype": "Valid",
          "recclass": "CV3",
          "reclat": "5.383330",
          "reclong": "16.383330",
          "year": "1907-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1907,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.9079861111111112,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              29,
              40
            ]
          },
          "id": "7661",
          "mass": "438",
          "name": "Domanitch",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "40.000000",
          "reclong": "29.000000",
          "year": "1907-01-01T00:00:00.000",
          "value": 438,
          "dateYear": 1907,
          "log2Mass": 8.774787059601174,
          "dateNormal": 0.9079861111111112,
          "massNormal": 0.000019000000826086992,
          "logMassNormal": 0.35881170417365416
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              115.5,
              -7
            ]
          },
          "id": "12245",
          "mass": "1630",
          "name": "Kangean",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-7.000000",
          "reclong": "115.500000",
          "year": "1908-01-01T00:00:00.000",
          "value": 1630,
          "dateYear": 1908,
          "log2Mass": 10.67065624911844,
          "dateNormal": 0.9088541666666666,
          "massNormal": 0.00007082609003591696,
          "logMassNormal": 0.43633609880117846
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.83333,
              49.86667
            ]
          },
          "id": "12227",
          "mass": "1900",
          "name": "Kagarlyk",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "49.866670",
          "reclong": "30.833330",
          "year": "1908-01-01T00:00:00.000",
          "value": 1900,
          "dateYear": 1908,
          "log2Mass": 10.89178370321831,
          "dateNormal": 0.9088541666666666,
          "massNormal": 0.00008256522098109656,
          "logMassNormal": 0.445378269067674
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              22,
              56
            ]
          },
          "id": "17935",
          "mass": "1001",
          "name": "Novy-Projekt",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "56.000000",
          "reclong": "22.000000",
          "year": "1908-01-01T00:00:00.000",
          "value": 1001,
          "dateYear": 1908,
          "log2Mass": 9.967226258835993,
          "dateNormal": 0.9088541666666666,
          "massNormal": 0.00004347826275992447,
          "logMassNormal": 0.40757199183587806
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.5,
              46
            ]
          },
          "id": "4906",
          "mass": "1230",
          "name": "Avce",
          "nametype": "Valid",
          "recclass": "Iron, IIAB",
          "reclat": "46.000000",
          "reclong": "13.500000",
          "year": "1908-01-01T00:00:00.000",
          "value": 1230,
          "dateYear": 1908,
          "log2Mass": 10.264442600226602,
          "dateNormal": 0.9088541666666666,
          "massNormal": 0.00005343478493194717,
          "logMassNormal": 0.41972552915117217
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -44.21667,
              -19.46667
            ]
          },
          "id": "23504",
          "mass": "350",
          "name": "Sete Lagoas",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-19.466670",
          "reclong": "-44.216670",
          "year": "1908-01-01T00:00:00.000",
          "value": 350,
          "dateYear": 1908,
          "log2Mass": 8.451211111832329,
          "dateNormal": 0.9088541666666666,
          "massNormal": 0.000015173913703213639,
          "logMassNormal": 0.3455802905268116
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              174.4,
              -39.63333
            ]
          },
          "id": "16713",
          "mass": "4500",
          "name": "Mokoia",
          "nametype": "Valid",
          "recclass": "CV3",
          "reclat": "-39.633330",
          "reclong": "174.400000",
          "year": "1908-01-01T00:00:00.000",
          "value": 4500,
          "dateYear": 1908,
          "log2Mass": 12.1357092861044,
          "dateNormal": 0.9088541666666666,
          "massNormal": 0.0001956087041569002,
          "logMassNormal": 0.4962438975130041
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "3063",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -98.83333,
              31.83333
            ]
          },
          "id": "5071",
          "mass": "5100",
          "name": "Blanket",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "31.833330",
          "reclong": "-98.833330",
          "year": "1909-01-01T00:00:00.000",
          "value": 5100,
          "dateYear": 1909,
          "log2Mass": 12.31628153174622,
          "dateNormal": 0.9097222222222222,
          "massNormal": 0.00022169566181285487,
          "logMassNormal": 0.5036277160313478
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              136.88333,
              35.53333
            ]
          },
          "id": "10914",
          "mass": "14290",
          "name": "Gifu",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "35.533330",
          "reclong": "136.883330",
          "year": "1909-01-01T00:00:00.000",
          "value": 14290,
          "dateYear": 1909,
          "log2Mass": 13.802718295983178,
          "dateNormal": 0.9097222222222222,
          "massNormal": 0.0006212608965765607,
          "logMassNormal": 0.5644099213315499
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              120.45583,
              17.74333
            ]
          },
          "id": "18072",
          "mass": "515",
          "name": "Paitan",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "17.743330",
          "reclong": "120.455830",
          "year": "1910-01-01T00:00:00.000",
          "value": 515,
          "dateYear": 1910,
          "log2Mass": 9.00842862207058,
          "dateNormal": 0.9105902777777778,
          "massNormal": 0.000022347827058601175,
          "logMassNormal": 0.36836559153593657
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.66667,
              27.33333
            ]
          },
          "id": "11870",
          "mass": "6100",
          "name": "Hedjaz",
          "nametype": "Valid",
          "recclass": "L3.7-6",
          "reclat": "27.333330",
          "reclong": "35.666670",
          "year": "1910-01-01T00:00:00.000",
          "value": 6100,
          "dateYear": 1910,
          "log2Mass": 12.57459352733761,
          "dateNormal": 0.9105902777777778,
          "massNormal": 0.00026517392457277934,
          "logMassNormal": 0.5141904073783964
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.03333,
              21.86667
            ]
          },
          "id": "12435",
          "mass": "212.5",
          "name": "Lakangaon",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "21.866670",
          "reclong": "76.033330",
          "year": "1910-01-01T00:00:00.000",
          "value": 212.5,
          "dateYear": 1910,
          "log2Mass": 7.731319031025064,
          "dateNormal": 0.9105902777777778,
          "massNormal": 0.000009195652573724026,
          "logMassNormal": 0.3161430286786235
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.8,
              31.61667
            ]
          },
          "id": "4949",
          "mass": "4500",
          "name": "Baroti",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "31.616670",
          "reclong": "76.800000",
          "year": "1910-01-01T00:00:00.000",
          "value": 4500,
          "dateYear": 1910,
          "log2Mass": 12.1357092861044,
          "dateNormal": 0.9105902777777778,
          "massNormal": 0.0001956087041569002,
          "logMassNormal": 0.4962438975130041
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.63333,
              52.86667
            ]
          },
          "id": "11429",
          "mass": "690",
          "name": "Grzempach",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "52.866670",
          "reclong": "16.633330",
          "year": "1910-01-01T00:00:00.000",
          "value": 690,
          "dateYear": 1910,
          "log2Mass": 9.430452551665532,
          "dateNormal": 0.9105902777777778,
          "massNormal": 0.00002995652304158796,
          "logMassNormal": 0.3856226627732766
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27.2,
              61.65
            ]
          },
          "id": "23093",
          "mass": "17000",
          "name": "St. Michel",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "61.650000",
          "reclong": "27.200000",
          "year": "1910-01-01T00:00:00.000",
          "value": 17000,
          "dateYear": 1910,
          "log2Mass": 14.053247125912426,
          "dateNormal": 0.9105902777777778,
          "massNormal": 0.0007390869886559561,
          "logMassNormal": 0.5746543495781802
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              136.70033,
              35.2945
            ]
          },
          "id": "11848",
          "mass": "1110.5999999999999",
          "name": "Hashima",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "35.294500",
          "reclong": "136.700330",
          "year": "1910-01-01T00:00:00.000",
          "value": 1110.6,
          "dateYear": 1910,
          "log2Mass": 10.117123585704368,
          "dateNormal": 0.9105902777777778,
          "massNormal": 0.000048243480358412185,
          "logMassNormal": 0.41370147565575793
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              81.53333,
              25.1
            ]
          },
          "id": "12298",
          "mass": "9700",
          "name": "Khohar",
          "nametype": "Valid",
          "recclass": "L3.6",
          "reclat": "25.100000",
          "reclong": "81.533330",
          "year": "1910-01-01T00:00:00.000",
          "value": 9700,
          "dateYear": 1910,
          "log2Mass": 13.243769031961852,
          "dateNormal": 0.9105902777777778,
          "massNormal": 0.0004216956705085074,
          "logMassNormal": 0.5415538068061658
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              83.25,
              25.68333
            ]
          },
          "id": "16701",
          "mass": "8510",
          "name": "Mirzapur",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "25.683330",
          "reclong": "83.250000",
          "year": "1910-01-01T00:00:00.000",
          "value": 8510,
          "dateYear": 1910,
          "log2Mass": 13.054943416573325,
          "dateNormal": 0.9105902777777778,
          "massNormal": 0.0003699565378241973,
          "logMassNormal": 0.5338324979710913
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              44.5,
              40.3
            ]
          },
          "id": "10043",
          "mass": "107.2",
          "name": "Erevan",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "40.300000",
          "reclong": "44.500000",
          "year": "1911-01-01T00:00:00.000",
          "value": 107.2,
          "dateYear": 1911,
          "log2Mass": 6.74416109557041,
          "dateNormal": 0.9114583333333334,
          "massNormal": 0.000004617391505103978,
          "logMassNormal": 0.275776941307709
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.35,
              31.31667
            ]
          },
          "id": "16898",
          "mass": "10000",
          "name": "Nakhla",
          "nametype": "Valid",
          "recclass": "Martian (nakhlite)",
          "reclat": "31.316670",
          "reclong": "30.350000",
          "year": "1911-01-01T00:00:00.000",
          "value": 10000,
          "dateYear": 1911,
          "log2Mass": 13.287712379549449,
          "dateNormal": 0.9114583333333334,
          "massNormal": 0.00043473914933648476,
          "logMassNormal": 0.5433507036798909
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              84.76667,
              51.46667
            ]
          },
          "id": "6649",
          "mass": "16400",
          "name": "Demina",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "51.466670",
          "reclong": "84.766670",
          "year": "1911-01-01T00:00:00.000",
          "value": 16400,
          "dateYear": 1911,
          "log2Mass": 14.001408194392809,
          "dateNormal": 0.9114583333333334,
          "massNormal": 0.0007130000310000014,
          "logMassNormal": 0.5725345926843941
        },
        {
          ":@computed_region_cbhk_fwbd": "41",
          ":@computed_region_nnqa_25f4": "2971",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -89.6,
              43.58333
            ]
          },
          "id": "12308",
          "mass": "772",
          "name": "Kilbourn",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.583330",
          "reclong": "-89.600000",
          "year": "1911-01-01T00:00:00.000",
          "value": 772,
          "dateYear": 1911,
          "log2Mass": 9.59245703726808,
          "dateNormal": 0.9114583333333334,
          "massNormal": 0.00003352174058790177,
          "logMassNormal": 0.3922472230239123
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.7,
              -28.56667
            ]
          },
          "id": "16983",
          "mass": "17200",
          "name": "N'Kandhla",
          "nametype": "Valid",
          "recclass": "Iron, IID",
          "reclat": "-28.566670",
          "reclong": "30.700000",
          "year": "1912-01-01T00:00:00.000",
          "value": 17200,
          "dateYear": 1912,
          "log2Mass": 14.070120944476823,
          "dateNormal": 0.9123263888888888,
          "massNormal": 0.0007477826412079409,
          "logMassNormal": 0.5753443405208531
        },
        {
          ":@computed_region_cbhk_fwbd": "7",
          ":@computed_region_nnqa_25f4": "990",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -110.18333,
              34.9
            ]
          },
          "id": "11894",
          "mass": "220000",
          "name": "Holbrook",
          "nametype": "Valid",
          "recclass": "L/LL6",
          "reclat": "34.900000",
          "reclong": "-110.183330",
          "year": "1912-01-01T00:00:00.000",
          "value": 220000,
          "dateYear": 1912,
          "log2Mass": 17.747143998186747,
          "dateNormal": 0.9123263888888888,
          "massNormal": 0.009565174328920623,
          "logMassNormal": 0.7257022807450388
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              28.36667,
              -25.66667
            ]
          },
          "id": "12756",
          "mass": "460",
          "name": "Leeuwfontein",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-25.666670",
          "reclong": "28.366670",
          "year": "1912-01-01T00:00:00.000",
          "value": 460,
          "dateYear": 1912,
          "log2Mass": 8.845490050944376,
          "dateNormal": 0.9123263888888888,
          "massNormal": 0.00001995652260680533,
          "logMassNormal": 0.36170283539333103
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              74.83333,
              33.71667
            ]
          },
          "id": "23583",
          "mass": "5000",
          "name": "Shupiyan",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "33.716670",
          "reclong": "74.833330",
          "year": "1912-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1912,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.9123263888888888,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              139.95667,
              36.04167
            ]
          },
          "id": "12240",
          "mass": "448",
          "name": "Kamiomi",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "36.041670",
          "reclong": "139.956670",
          "year": "1913-01-01T00:00:00.000",
          "value": 448,
          "dateYear": 1913,
          "log2Mass": 8.807354922057604,
          "dateNormal": 0.9131944444444444,
          "massNormal": 0.000019434783453686238,
          "logMassNormal": 0.36014344363922884
        },
        {
          ":@computed_region_cbhk_fwbd": "37",
          ":@computed_region_nnqa_25f4": "2431",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -79.38333,
              35.41667
            ]
          },
          "id": "16736",
          "mass": "1880",
          "name": "Moore County",
          "nametype": "Valid",
          "recclass": "Eucrite-cm",
          "reclat": "35.416670",
          "reclong": "-79.383330",
          "year": "1913-01-01T00:00:00.000",
          "value": 1880,
          "dateYear": 1913,
          "log2Mass": 10.876516946565,
          "dateNormal": 0.9131944444444444,
          "massNormal": 0.00008169565572589807,
          "logMassNormal": 0.4447539928391147
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              136.3,
              35.66667
            ]
          },
          "id": "23103",
          "mass": "4180",
          "name": "Sakauchi",
          "nametype": "Valid",
          "recclass": "Iron",
          "reclat": "35.666670",
          "reclong": "136.300000",
          "year": "1913-01-01T00:00:00.000",
          "value": 4180,
          "dateYear": 1913,
          "log2Mass": 12.029287226968245,
          "dateNormal": 0.9131944444444444,
          "massNormal": 0.00018169566007372436,
          "logMassNormal": 0.49189217021284914
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.2,
              30.4
            ]
          },
          "id": "4937",
          "mass": "14",
          "name": "Banswal",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "30.400000",
          "reclong": "78.200000",
          "year": "1913-01-01T00:00:00.000",
          "value": 14,
          "dateYear": 1913,
          "log2Mass": 3.807354922057604,
          "dateNormal": 0.9131944444444444,
          "massNormal": 5.65217415879018e-7,
          "logMassNormal": 0.15568736867325547
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              118.61667,
              43.48333
            ]
          },
          "id": "18077",
          "mass": "18000",
          "name": "Palinshih",
          "nametype": "Valid",
          "recclass": "Iron",
          "reclat": "43.483330",
          "reclong": "118.616670",
          "year": "1914-01-01T00:00:00.000",
          "value": 18000,
          "dateYear": 1914,
          "log2Mass": 14.1357092861044,
          "dateNormal": 0.9140625,
          "massNormal": 0.0007825652514158805,
          "logMassNormal": 0.5780263274993934
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              22.30833,
              48.16667
            ]
          },
          "id": "12325",
          "mass": "1550",
          "name": "Kisvarsány",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "48.166670",
          "reclong": "22.308330",
          "year": "1914-01-01T00:00:00.000",
          "value": 1550,
          "dateYear": 1914,
          "log2Mass": 10.5980525001616,
          "dateNormal": 0.9140625,
          "massNormal": 0.000067347829015123,
          "logMassNormal": 0.43336724329327236
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              22.025,
              47.55
            ]
          },
          "id": "17970",
          "mass": "1100",
          "name": "Nyirábrany",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "47.550000",
          "reclong": "22.025000",
          "year": "1914-01-01T00:00:00.000",
          "value": 1100,
          "dateYear": 1914,
          "log2Mass": 10.103287808412022,
          "dateNormal": 0.9140625,
          "massNormal": 0.00004778261077315699,
          "logMassNormal": 0.4131357139118987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -2.71667,
              53.58333
            ]
          },
          "id": "2318",
          "mass": "15000",
          "name": "Appley Bridge",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "53.583330",
          "reclong": "-2.716670",
          "year": "1914-01-01T00:00:00.000",
          "value": 15000,
          "dateYear": 1914,
          "log2Mass": 13.872674880270605,
          "dateNormal": 0.9140625,
          "massNormal": 0.000652130463136107,
          "logMassNormal": 0.5672705310598365
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.03333,
              10.83333
            ]
          },
          "id": "12384",
          "mass": "45000",
          "name": "Kuttippuram",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "10.833330",
          "reclong": "76.033330",
          "year": "1914-01-01T00:00:00.000",
          "value": 45000,
          "dateYear": 1914,
          "log2Mass": 15.45763738099176,
          "dateNormal": 0.9140625,
          "massNormal": 0.0019564783459338412,
          "logMassNormal": 0.6320815734329768
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              34.5,
              51.13333
            ]
          },
          "id": "22791",
          "mass": "13000",
          "name": "Ryechki",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "51.133330",
          "reclong": "34.500000",
          "year": "1914-01-01T00:00:00.000",
          "value": 13000,
          "dateYear": 1914,
          "log2Mass": 13.66622400280318,
          "dateNormal": 0.9140625,
          "massNormal": 0.0005651739376162582,
          "logMassNormal": 0.5588285038437824
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.38333,
              43.73333
            ]
          },
          "id": "23101",
          "mass": "14000",
          "name": "Saint-Sauveur",
          "nametype": "Valid",
          "recclass": "EH5",
          "reclat": "43.733330",
          "reclong": "1.383330",
          "year": "1914-01-01T00:00:00.000",
          "value": 14000,
          "dateYear": 1914,
          "log2Mass": 13.77313920671969,
          "dateNormal": 0.9140625,
          "massNormal": 0.0006086522003761827,
          "logMassNormal": 0.5632003964331737
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              106.88333,
              -6.23333
            ]
          },
          "id": "15470",
          "mass": "24750",
          "name": "Meester-Cornelis",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-6.233330",
          "reclong": "106.883330",
          "year": "1915-01-01T00:00:00.000",
          "value": 24750,
          "dateYear": 1915,
          "log2Mass": 14.595140904741697,
          "dateNormal": 0.9149305555555556,
          "massNormal": 0.0010760435250453707,
          "logMassNormal": 0.5968130445917627
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              32.48333,
              30.9
            ]
          },
          "id": "23606",
          "mass": "1455",
          "name": "Sinai",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "30.900000",
          "reclong": "32.483330",
          "year": "1916-01-01T00:00:00.000",
          "value": 1455,
          "dateYear": 1916,
          "log2Mass": 10.506803437795647,
          "dateNormal": 0.9157986111111112,
          "massNormal": 0.00006321739405293018,
          "logMassNormal": 0.4296359582661387
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              84.28333,
              25.93333
            ]
          },
          "id": "23741",
          "mass": "1710.5",
          "name": "Sultanpur",
          "nametype": "Valid",
          "recclass": "L/LL6",
          "reclat": "25.933330",
          "reclong": "84.283330",
          "year": "1916-01-01T00:00:00.000",
          "value": 1710.5,
          "dateYear": 1916,
          "log2Mass": 10.7402023887679,
          "dateNormal": 0.9157986111111112,
          "massNormal": 0.00007432609018809087,
          "logMassNormal": 0.43917992494953123
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              116.13333,
              38.66667
            ]
          },
          "id": "22589",
          "mass": "355",
          "name": "Renqiu",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.666670",
          "reclong": "116.133330",
          "year": "1916-01-01T00:00:00.000",
          "value": 355,
          "dateYear": 1916,
          "log2Mass": 8.471675214392045,
          "dateNormal": 0.9157986111111112,
          "massNormal": 0.000015391305017013263,
          "logMassNormal": 0.3464170925442237
        },
        {
          ":@computed_region_cbhk_fwbd": "18",
          ":@computed_region_nnqa_25f4": "2216",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -93.5,
              36.75
            ]
          },
          "id": "4977",
          "mass": "611",
          "name": "Baxter",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "36.750000",
          "reclong": "-93.500000",
          "year": "1916-01-01T00:00:00.000",
          "value": 611,
          "dateYear": 1916,
          "log2Mass": 9.25502856981873,
          "dateNormal": 0.9157986111111112,
          "massNormal": 0.000026521740283553925,
          "logMassNormal": 0.37844936301661675
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              131.63333,
              44.55
            ]
          },
          "id": "5098",
          "mass": "256000",
          "name": "Boguslavka",
          "nametype": "Valid",
          "recclass": "Iron, IIAB",
          "reclat": "44.550000",
          "reclong": "131.633330",
          "year": "1916-01-01T00:00:00.000",
          "value": 256000,
          "dateYear": 1916,
          "log2Mass": 17.96578428466209,
          "dateNormal": 0.9157986111111112,
          "massNormal": 0.011130391788277905,
          "logMassNormal": 0.7346427477054758
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              87.76667,
              24.16667
            ]
          },
          "id": "22385",
          "mass": "100",
          "name": "Rampurhat",
          "nametype": "Valid",
          "recclass": "LL",
          "reclat": "24.166670",
          "reclong": "87.766670",
          "year": "1916-01-01T00:00:00.000",
          "value": 100,
          "dateYear": 1916,
          "log2Mass": 6.643856189774724,
          "dateNormal": 0.9157986111111112,
          "massNormal": 0.000004304348013232522,
          "logMassNormal": 0.27167535183994546
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.78333,
              28.26667
            ]
          },
          "id": "7777",
          "mass": "840",
          "name": "Ekh Khera",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "28.266670",
          "reclong": "78.783330",
          "year": "1916-01-01T00:00:00.000",
          "value": 840,
          "dateYear": 1916,
          "log2Mass": 9.714245517666123,
          "dateNormal": 0.9157986111111112,
          "massNormal": 0.000036478262455576625,
          "logMassNormal": 0.3972273019595632
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              122.33333,
              11.75
            ]
          },
          "id": "5200",
          "mass": "2400",
          "name": "Calivo",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "11.750000",
          "reclong": "122.333330",
          "year": "1916-01-01T00:00:00.000",
          "value": 2400,
          "dateYear": 1916,
          "log2Mass": 11.228818690495881,
          "dateNormal": 0.9157986111111112,
          "massNormal": 0.0001043043523610588,
          "logMassNormal": 0.4591600391926698
        },
        {
          ":@computed_region_cbhk_fwbd": "41",
          ":@computed_region_nnqa_25f4": "877",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -90.28333,
              44.9
            ]
          },
          "id": "5395",
          "mass": "104000",
          "name": "Colby (Wisconsin)",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "44.900000",
          "reclong": "-90.283330",
          "year": "1917-01-01T00:00:00.000",
          "value": 104000,
          "dateYear": 1917,
          "log2Mass": 16.66622400280318,
          "dateNormal": 0.9166666666666666,
          "massNormal": 0.004521695848769385,
          "logMassNormal": 0.6815021488233663
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.26667,
              10.2
            ]
          },
          "id": "5465",
          "mass": "1460",
          "name": "Cranganore",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "10.200000",
          "reclong": "76.266670",
          "year": "1917-01-01T00:00:00.000",
          "value": 1460,
          "dateYear": 1917,
          "log2Mass": 10.51175265376738,
          "dateNormal": 0.9166666666666666,
          "massNormal": 0.0000634347853667298,
          "logMassNormal": 0.42983833772048663
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27.13333,
              38.3
            ]
          },
          "id": "23473",
          "mass": "240",
          "name": "Sediköy",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.300000",
          "reclong": "27.133330",
          "year": "1917-01-01T00:00:00.000",
          "value": 240,
          "dateYear": 1917,
          "log2Mass": 7.906890595608519,
          "dateNormal": 0.9166666666666666,
          "massNormal": 0.000010391304799621948,
          "logMassNormal": 0.32332236327269703
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              68.53333,
              27.88333
            ]
          },
          "id": "10860",
          "mass": "380",
          "name": "Garhi Yasin",
          "nametype": "Valid",
          "recclass": "Iron, IIE",
          "reclat": "27.883330",
          "reclong": "68.533330",
          "year": "1917-01-01T00:00:00.000",
          "value": 380,
          "dateYear": 1917,
          "log2Mass": 8.569855608330949,
          "dateNormal": 0.9166666666666666,
          "massNormal": 0.000016478261586011374,
          "logMassNormal": 0.350431808140896
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -3.25,
              56.58333
            ]
          },
          "id": "23729",
          "mass": "13400",
          "name": "Strathmore",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "56.583330",
          "reclong": "-3.250000",
          "year": "1917-01-01T00:00:00.000",
          "value": 13400,
          "dateYear": 1917,
          "log2Mass": 13.709945380232497,
          "dateNormal": 0.9166666666666666,
          "massNormal": 0.000582565242720228,
          "logMassNormal": 0.5606163240880432
        },
        {
          ":@computed_region_cbhk_fwbd": "18",
          ":@computed_region_nnqa_25f4": "525",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -94.4,
              39.08333
            ]
          },
          "id": "12028",
          "mass": "880",
          "name": "Independence",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "39.083330",
          "reclong": "-94.400000",
          "year": "1917-01-01T00:00:00.000",
          "value": 880,
          "dateYear": 1917,
          "log2Mass": 9.78135971352466,
          "dateNormal": 0.9166666666666666,
          "massNormal": 0.00003821739296597361,
          "logMassNormal": 0.39997168297151
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              103.5,
              35.66667
            ]
          },
          "id": "16903",
          "mass": "52900",
          "name": "Nan Yang Pao",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "35.666670",
          "reclong": "103.500000",
          "year": "1917-01-01T00:00:00.000",
          "value": 52900,
          "dateYear": 1917,
          "log2Mass": 15.69098010188875,
          "dateNormal": 0.9166666666666666,
          "massNormal": 0.0022999566217372443,
          "logMassNormal": 0.6416232408002726
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              87.08333,
              23.98333
            ]
          },
          "id": "22387",
          "mass": "290.39999999999998",
          "name": "Ranchapur",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "23.983330",
          "reclong": "87.083330",
          "year": "1917-01-01T00:00:00.000",
          "value": 290.4,
          "dateYear": 1917,
          "log2Mass": 8.181897643108389,
          "dateNormal": 0.9166666666666666,
          "massNormal": 0.00001258260924272214,
          "logMassNormal": 0.334567735576658
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              46.55,
              52.55
            ]
          },
          "id": "23176",
          "mass": "200000",
          "name": "Saratov",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "52.550000",
          "reclong": "46.550000",
          "year": "1918-01-01T00:00:00.000",
          "value": 200000,
          "dateYear": 1918,
          "log2Mass": 17.609640474436812,
          "dateNormal": 0.9175347222222222,
          "massNormal": 0.008695609073722134,
          "logMassNormal": 0.7200795945930584
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              136.23333,
              35.43333
            ]
          },
          "id": "23801",
          "mass": "905",
          "name": "Tané",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "35.433330",
          "reclong": "136.233330",
          "year": "1918-01-01T00:00:00.000",
          "value": 905,
          "dateYear": 1918,
          "log2Mass": 9.821773981970567,
          "dateNormal": 0.9175347222222222,
          "massNormal": 0.00003930434953497172,
          "logMassNormal": 0.40162427151132424
        },
        {
          ":@computed_region_cbhk_fwbd": "15",
          ":@computed_region_nnqa_25f4": "10",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -92.26667,
              36.21667
            ]
          },
          "id": "16994",
          "mass": "1050",
          "name": "Norfork",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "36.216670",
          "reclong": "-92.266670",
          "year": "1918-01-01T00:00:00.000",
          "value": 1050,
          "dateYear": 1918,
          "log2Mass": 10.036173612553485,
          "dateNormal": 0.9175347222222222,
          "massNormal": 0.00004560869763516077,
          "logMassNormal": 0.4103913328999519
        },
        {
          ":@computed_region_cbhk_fwbd": "3",
          ":@computed_region_nnqa_25f4": "569",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -102.31667,
              46.88333
            ]
          },
          "id": "22599",
          "mass": "90000",
          "name": "Richardton",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "46.883330",
          "reclong": "-102.316670",
          "year": "1918-01-01T00:00:00.000",
          "value": 90000,
          "dateYear": 1918,
          "log2Mass": 16.457637380991763,
          "dateNormal": 0.9175347222222222,
          "massNormal": 0.0039130001701304425,
          "logMassNormal": 0.6729727884261716
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              37.61667,
              57.35
            ]
          },
          "id": "10926",
          "mass": "152000",
          "name": "Glasatovo",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "57.350000",
          "reclong": "37.616670",
          "year": "1918-01-01T00:00:00.000",
          "value": 152000,
          "dateYear": 1918,
          "log2Mass": 17.213711798105674,
          "dateNormal": 0.9175347222222222,
          "massNormal": 0.006608652461245759,
          "logMassNormal": 0.7038895899672308
        },
        {
          ":@computed_region_cbhk_fwbd": "45",
          ":@computed_region_nnqa_25f4": "424",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -76.38333,
              38.16667
            ]
          },
          "id": "23091",
          "mass": "24.3",
          "name": "St. Mary's County",
          "nametype": "Valid",
          "recclass": "LL3.3",
          "reclat": "38.166670",
          "reclong": "-76.383330",
          "year": "1919-01-01T00:00:00.000",
          "value": 24.3,
          "dateYear": 1919,
          "log2Mass": 4.602884408718419,
          "dateNormal": 0.9184027777777778,
          "massNormal": 0.00000101304352230624,
          "logMassNormal": 0.18821753594572863
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              71.8,
              32.1
            ]
          },
          "id": "379",
          "mass": "4239",
          "name": "Adhi Kot",
          "nametype": "Valid",
          "recclass": "EH4",
          "reclat": "32.100000",
          "reclong": "71.800000",
          "year": "1919-01-01T00:00:00.000",
          "value": 4239,
          "dateYear": 1919,
          "log2Mass": 12.049508251055096,
          "dateNormal": 0.9184027777777778,
          "massNormal": 0.0001842608775765599,
          "logMassNormal": 0.4927190324561671
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              115.7,
              38.2
            ]
          },
          "id": "22394",
          "mass": "4910",
          "name": "Raoyang",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.200000",
          "reclong": "115.700000",
          "year": "1919-01-01T00:00:00.000",
          "value": 4910,
          "dateYear": 1919,
          "log2Mass": 12.261507309202056,
          "dateNormal": 0.9184027777777778,
          "massNormal": 0.00021343479188846922,
          "logMassNormal": 0.5013879315212092
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              20.33333,
              43.83889
            ]
          },
          "id": "5187",
          "mass": "212",
          "name": "Cacak",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "43.838890",
          "reclong": "20.333330",
          "year": "1919-01-01T00:00:00.000",
          "value": 212,
          "dateYear": 1919,
          "log2Mass": 7.727920454563199,
          "dateNormal": 0.9184027777777778,
          "massNormal": 0.000009173913442344062,
          "logMassNormal": 0.3160040567578505
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              111.36667,
              -6.73333
            ]
          },
          "id": "22585",
          "mass": "10000",
          "name": "Rembang",
          "nametype": "Valid",
          "recclass": "Iron, IVA",
          "reclat": "-6.733330",
          "reclong": "111.366670",
          "year": "1919-01-01T00:00:00.000",
          "value": 10000,
          "dateYear": 1919,
          "log2Mass": 13.287712379549449,
          "dateNormal": 0.9184027777777778,
          "massNormal": 0.00043473914933648476,
          "logMassNormal": 0.5433507036798909
        },
        {
          ":@computed_region_cbhk_fwbd": "36",
          ":@computed_region_nnqa_25f4": "1426",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -84.35,
              36.83333
            ]
          },
          "id": "5496",
          "mass": "17000",
          "name": "Cumberland Falls",
          "nametype": "Valid",
          "recclass": "Aubrite",
          "reclat": "36.833330",
          "reclong": "-84.350000",
          "year": "1919-01-01T00:00:00.000",
          "value": 17000,
          "dateYear": 1919,
          "log2Mass": 14.053247125912426,
          "dateNormal": 0.9184027777777778,
          "massNormal": 0.0007390869886559561,
          "logMassNormal": 0.5746543495781802
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              48,
              5
            ]
          },
          "id": "5169",
          "mass": "120000",
          "name": "Bur-Gheluai",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "5.000000",
          "reclong": "48.000000",
          "year": "1919-01-01T00:00:00.000",
          "value": 120000,
          "dateYear": 1919,
          "log2Mass": 16.872674880270605,
          "dateNormal": 0.9184027777777778,
          "massNormal": 0.005217348052928176,
          "logMassNormal": 0.6899441760394206
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              138.38333,
              37.05
            ]
          },
          "id": "12381",
          "mass": "4460",
          "name": "Kushiike",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "37.050000",
          "reclong": "138.383330",
          "year": "1920-01-01T00:00:00.000",
          "value": 4460,
          "dateYear": 1920,
          "log2Mass": 12.122827994807666,
          "dateNormal": 0.9192708333333334,
          "massNormal": 0.0001938695736465032,
          "logMassNormal": 0.4957171658611994
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              80.625,
              25.25417
            ]
          },
          "id": "4883",
          "mass": "1280",
          "name": "Atarra",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "25.254170",
          "reclong": "80.625000",
          "year": "1920-01-01T00:00:00.000",
          "value": 1280,
          "dateYear": 1920,
          "log2Mass": 10.321928094887362,
          "dateNormal": 0.9192708333333334,
          "massNormal": 0.000055608698069943396,
          "logMassNormal": 0.42207618087233545
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -64.55,
              -30.86667
            ]
          },
          "id": "417",
          "mass": "1440",
          "name": "Aguila Blanca",
          "nametype": "Valid",
          "recclass": "L",
          "reclat": "-30.866670",
          "reclong": "-64.550000",
          "year": "1920-01-01T00:00:00.000",
          "value": 1440,
          "dateYear": 1920,
          "log2Mass": 10.491853096329674,
          "dateNormal": 0.9192708333333334,
          "massNormal": 0.0000625652201115313,
          "logMassNormal": 0.42902462063903196
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              7.53333,
              49.98333
            ]
          },
          "id": "23603",
          "mass": "1222",
          "name": "Simmern",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "49.983330",
          "reclong": "7.533330",
          "year": "1920-01-01T00:00:00.000",
          "value": 1222,
          "dateYear": 1920,
          "log2Mass": 10.25502856981873,
          "dateNormal": 0.9192708333333334,
          "massNormal": 0.00005308695882986778,
          "logMassNormal": 0.41934057800981145
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              81.98333,
              25.48333
            ]
          },
          "id": "15492",
          "mass": "71400",
          "name": "Merua",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "25.483330",
          "reclong": "81.983330",
          "year": "1920-01-01T00:00:00.000",
          "value": 71400,
          "dateYear": 1920,
          "log2Mass": 16.123636453803826,
          "dateNormal": 0.9192708333333334,
          "massNormal": 0.003104304482795847,
          "logMassNormal": 0.6593150847046033
        },
        {
          ":@computed_region_cbhk_fwbd": "31",
          ":@computed_region_nnqa_25f4": "207",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -83.51667,
              31.95
            ]
          },
          "id": "18837",
          "mass": "3760",
          "name": "Pitts",
          "nametype": "Valid",
          "recclass": "Iron, IAB-ung",
          "reclat": "31.950000",
          "reclong": "-83.516670",
          "year": "1921-01-01T00:00:00.000",
          "value": 3760,
          "dateYear": 1921,
          "log2Mass": 11.876516946565,
          "dateNormal": 0.9201388888888888,
          "massNormal": 0.00016343478971455607,
          "logMassNormal": 0.48564520783230936
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              74.86667,
              25.66667
            ]
          },
          "id": "23115",
          "mass": "2462",
          "name": "Samelia",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "25.666670",
          "reclong": "74.866670",
          "year": "1921-01-01T00:00:00.000",
          "value": 2462,
          "dateYear": 1921,
          "log2Mass": 11.265615046484458,
          "dateNormal": 0.9201388888888888,
          "massNormal": 0.00010700000465217411,
          "logMassNormal": 0.4606646868963648
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              87.5775,
              25.85
            ]
          },
          "id": "23534",
          "mass": "3679.7",
          "name": "Shikarpur",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "25.850000",
          "reclong": "87.577500",
          "year": "1921-01-01T00:00:00.000",
          "value": 3679.7,
          "dateYear": 1921,
          "log2Mass": 11.84537243514142,
          "dateNormal": 0.9201388888888888,
          "massNormal": 0.00015994348521493413,
          "logMassNormal": 0.48437167091982974
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.5,
              33.88333
            ]
          },
          "id": "5035",
          "mass": "1100",
          "name": "Beyrout",
          "nametype": "Valid",
          "recclass": "LL3.8",
          "reclat": "33.883330",
          "reclong": "35.500000",
          "year": "1921-01-01T00:00:00.000",
          "value": 1100,
          "dateYear": 1921,
          "log2Mass": 10.103287808412022,
          "dateNormal": 0.9201388888888888,
          "massNormal": 0.00004778261077315699,
          "logMassNormal": 0.4131357139118987
        },
        {
          ":@computed_region_cbhk_fwbd": "50",
          ":@computed_region_nnqa_25f4": "361",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -83.95,
              44.51667
            ]
          },
          "id": "22766",
          "mass": "10600",
          "name": "Rose City",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.516670",
          "reclong": "-83.950000",
          "year": "1921-01-01T00:00:00.000",
          "value": 10600,
          "dateYear": 1921,
          "log2Mass": 13.371776644337924,
          "dateNormal": 0.9201388888888888,
          "massNormal": 0.00046082610699243944,
          "logMassNormal": 0.5467881936046013
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.78333,
              28.38333
            ]
          },
          "id": "11829",
          "mass": "315",
          "name": "Haripura",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "28.383330",
          "reclong": "75.783330",
          "year": "1921-01-01T00:00:00.000",
          "value": 315,
          "dateYear": 1921,
          "log2Mass": 8.29920801838728,
          "dateNormal": 0.9201388888888888,
          "massNormal": 0.000013652174506616283,
          "logMassNormal": 0.3393646993531194
        },
        {
          ":@computed_region_cbhk_fwbd": "40",
          ":@computed_region_nnqa_25f4": "921",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -76.7,
              37.83333
            ]
          },
          "id": "23525",
          "mass": "1265",
          "name": "Sharps",
          "nametype": "Valid",
          "recclass": "H3.4",
          "reclat": "37.833330",
          "reclong": "-76.700000",
          "year": "1921-01-01T00:00:00.000",
          "value": 1265,
          "dateYear": 1921,
          "log2Mass": 10.304921669581672,
          "dateNormal": 0.9201388888888888,
          "massNormal": 0.00005495652412854453,
          "logMassNormal": 0.4213807674788948
        },
        {
          ":@computed_region_cbhk_fwbd": "32",
          ":@computed_region_nnqa_25f4": "495",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -88.66667,
              34.5
            ]
          },
          "id": "4926",
          "mass": "345",
          "name": "Baldwyn",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "34.500000",
          "reclong": "-88.666670",
          "year": "1922-01-01T00:00:00.000",
          "value": 345,
          "dateYear": 1922,
          "log2Mass": 8.430452551665532,
          "dateNormal": 0.9210069444444444,
          "massNormal": 0.000014956522389414018,
          "logMassNormal": 0.3447314477800819
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              14.96667,
              38.13333
            ]
          },
          "id": "18118",
          "mass": "12",
          "name": "Patti",
          "nametype": "Valid",
          "recclass": "Iron",
          "reclat": "38.133330",
          "reclong": "14.966670",
          "year": "1922-01-01T00:00:00.000",
          "value": 12,
          "dateYear": 1922,
          "log2Mass": 3.584962500721156,
          "dateNormal": 0.9210069444444444,
          "massNormal": 4.782608903591691e-7,
          "logMassNormal": 0.14659347235952963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.78333,
              55.46667
            ]
          },
          "id": "11869",
          "mass": "3500",
          "name": "Hedeskoga",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "55.466670",
          "reclong": "13.783330",
          "year": "1922-01-01T00:00:00.000",
          "value": 3500,
          "dateYear": 1922,
          "log2Mass": 11.77313920671969,
          "dateNormal": 0.9210069444444444,
          "massNormal": 0.00015213044139697571,
          "logMassNormal": 0.4814179664467843
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              106.58333,
              -6.66667
            ]
          },
          "id": "24012",
          "mass": "16500",
          "name": "Tjerebon",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "-6.666670",
          "reclong": "106.583330",
          "year": "1922-01-01T00:00:00.000",
          "value": 16500,
          "dateYear": 1922,
          "log2Mass": 14.010178404020541,
          "dateNormal": 0.9210069444444444,
          "massNormal": 0.0007173478572759938,
          "logMassNormal": 0.5728932172118171
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "807",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -97.76667,
              30.83333
            ]
          },
          "id": "10111",
          "mass": "3640",
          "name": "Florence",
          "nametype": "Valid",
          "recclass": "H3",
          "reclat": "30.833330",
          "reclong": "-97.766670",
          "year": "1922-01-01T00:00:00.000",
          "value": 3640,
          "dateYear": 1922,
          "log2Mass": 11.829722735086058,
          "dateNormal": 0.9210069444444444,
          "massNormal": 0.00015821739818336513,
          "logMassNormal": 0.483731735670287
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              140.06167,
              38.12167
            ]
          },
          "id": "16890",
          "mass": "1810",
          "name": "Nagai",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.121670",
          "reclong": "140.061670",
          "year": "1922-01-01T00:00:00.000",
          "value": 1810,
          "dateYear": 1922,
          "log2Mass": 10.821773981970567,
          "dateNormal": 0.9210069444444444,
          "massNormal": 0.00007865217733270336,
          "logMassNormal": 0.44251548650451894
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              5.3,
              13.76667
            ]
          },
          "id": "5056",
          "mass": "560",
          "name": "Birni N'konni",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "13.766670",
          "reclong": "5.300000",
          "year": "1923-01-01T00:00:00.000",
          "value": 560,
          "dateYear": 1923,
          "log2Mass": 9.129283016944967,
          "dateNormal": 0.921875,
          "massNormal": 0.000024304348882797777,
          "logMassNormal": 0.3733074745796176
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.9625,
              43.39056
            ]
          },
          "id": "16727",
          "mass": "149000",
          "name": "Montferré",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.390560",
          "reclong": "1.962500",
          "year": "1923-01-01T00:00:00.000",
          "value": 149000,
          "dateYear": 1923,
          "log2Mass": 17.184952805124247,
          "dateNormal": 0.921875,
          "massNormal": 0.0064782176729659855,
          "logMassNormal": 0.7027135998022396
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              100.08333,
              13.73333
            ]
          },
          "id": "16899",
          "mass": "23200",
          "name": "Nakhon Pathom",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "13.733330",
          "reclong": "100.083330",
          "year": "1923-01-01T00:00:00.000",
          "value": 23200,
          "dateYear": 1923,
          "log2Mass": 14.501837184902296,
          "dateNormal": 0.921875,
          "massNormal": 0.0010086522177674877,
          "logMassNormal": 0.5929977421241449
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              38.41667,
              9.06667
            ]
          },
          "id": "11895",
          "mass": "1415",
          "name": "Holetta",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "9.066670",
          "reclong": "38.416670",
          "year": "1923-01-01T00:00:00.000",
          "value": 1415,
          "dateYear": 1923,
          "log2Mass": 10.466586337719244,
          "dateNormal": 0.921875,
          "massNormal": 0.0000614782635425332,
          "logMassNormal": 0.4279914321805117
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.3,
              52.05
            ]
          },
          "id": "2346",
          "mass": "1300",
          "name": "Ashdon",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "52.050000",
          "reclong": "0.300000",
          "year": "1923-01-01T00:00:00.000",
          "value": 1300,
          "dateYear": 1923,
          "log2Mass": 10.344295907915816,
          "dateNormal": 0.921875,
          "massNormal": 0.00005647826332514188,
          "logMassNormal": 0.4229908279238096
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -36.76667,
              -8.38333
            ]
          },
          "id": "23502",
          "mass": "1800",
          "name": "Serra de Magé",
          "nametype": "Valid",
          "recclass": "Eucrite-cm",
          "reclat": "-8.383330",
          "reclong": "-36.766670",
          "year": "1923-01-01T00:00:00.000",
          "value": 1800,
          "dateYear": 1923,
          "log2Mass": 10.813781191217037,
          "dateNormal": 0.921875,
          "massNormal": 0.00007821739470510412,
          "logMassNormal": 0.4421886515794207
        },
        {
          ":@computed_region_cbhk_fwbd": "15",
          ":@computed_region_nnqa_25f4": "955",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -90.66667,
              36.48333
            ]
          },
          "id": "23736",
          "mass": "3500",
          "name": "Success",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "36.483330",
          "reclong": "-90.666670",
          "year": "1924-01-01T00:00:00.000",
          "value": 3500,
          "dateYear": 1924,
          "log2Mass": 11.77313920671969,
          "dateNormal": 0.9227430555555556,
          "massNormal": 0.00015213044139697571,
          "logMassNormal": 0.4814179664467843
        },
        {
          ":@computed_region_cbhk_fwbd": "9",
          ":@computed_region_nnqa_25f4": "1072",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -104.9,
              40.35
            ]
          },
          "id": "12198",
          "mass": "40300",
          "name": "Johnstown",
          "nametype": "Valid",
          "recclass": "Diogenite",
          "reclat": "40.350000",
          "reclong": "-104.900000",
          "year": "1924-01-01T00:00:00.000",
          "value": 40300,
          "dateYear": 1924,
          "log2Mass": 15.298492218302693,
          "dateNormal": 0.9227430555555556,
          "massNormal": 0.0017521305109621961,
          "logMassNormal": 0.6255739343703312
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              116.75,
              34.6
            ]
          },
          "id": "10086",
          "mass": "82",
          "name": "Fenghsien-Ku",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "34.600000",
          "reclong": "116.750000",
          "year": "1924-01-01T00:00:00.000",
          "value": 82,
          "dateYear": 1924,
          "log2Mass": 6.357552004618084,
          "dateNormal": 0.9227430555555556,
          "massNormal": 0.000003521739283553882,
          "logMassNormal": 0.2599680258512539
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -3.65,
              11.65
            ]
          },
          "id": "5028",
          "mass": "18000",
          "name": "Béréba",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "11.650000",
          "reclong": "-3.650000",
          "year": "1924-01-01T00:00:00.000",
          "value": 18000,
          "dateYear": 1924,
          "log2Mass": 14.1357092861044,
          "dateNormal": 0.9227430555555556,
          "massNormal": 0.0007825652514158805,
          "logMassNormal": 0.5780263274993934
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -7.06667,
              38.71667
            ]
          },
          "id": "18013",
          "mass": "150000",
          "name": "Olivenza",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "38.716670",
          "reclong": "-7.066670",
          "year": "1924-01-01T00:00:00.000",
          "value": 150000,
          "dateYear": 1924,
          "log2Mass": 17.194602975157967,
          "dateNormal": 0.9227430555555556,
          "massNormal": 0.00652169593572591,
          "logMassNormal": 0.7031082069798092
        },
        {
          ":@computed_region_cbhk_fwbd": "40",
          ":@computed_region_nnqa_25f4": "2839",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -78.08333,
              36.78333
            ]
          },
          "id": "10123",
          "mass": "6067",
          "name": "Forksville",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "36.783330",
          "reclong": "-78.083330",
          "year": "1924-01-01T00:00:00.000",
          "value": 6067,
          "dateYear": 1924,
          "log2Mass": 12.566767596032916,
          "dateNormal": 0.9227430555555556,
          "massNormal": 0.00026373914190170185,
          "logMassNormal": 0.5138703955388942
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -61.53333,
              -37.33333
            ]
          },
          "id": "12395",
          "mass": "2000",
          "name": "La Colina",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-37.333330",
          "reclong": "-61.533330",
          "year": "1924-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1924,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.9227430555555556,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -61.7,
              -33.9
            ]
          },
          "id": "23165",
          "mass": "5500",
          "name": "Santa Isabel",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-33.900000",
          "reclong": "-61.700000",
          "year": "1924-01-01T00:00:00.000",
          "value": 5500,
          "dateYear": 1924,
          "log2Mass": 12.425215903299385,
          "dateNormal": 0.9227430555555556,
          "massNormal": 0.00023908696691682464,
          "logMassNormal": 0.5080821748386768
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              90.21667,
              24.5
            ]
          },
          "id": "16874",
          "mass": "4703",
          "name": "Muraid",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "24.500000",
          "reclong": "90.216670",
          "year": "1924-01-01T00:00:00.000",
          "value": 4703,
          "dateYear": 1924,
          "log2Mass": 12.199365616857982,
          "dateNormal": 0.9227430555555556,
          "massNormal": 0.00020443479149716485,
          "logMassNormal": 0.4988468822195267
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.23333,
              47.75
            ]
          },
          "id": "12465",
          "mass": "7000",
          "name": "Lanzenkirchen",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "47.750000",
          "reclong": "16.233330",
          "year": "1925-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 1925,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.9236111111111112,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -7.46667,
              41.93333
            ]
          },
          "id": "5334",
          "mass": "2945",
          "name": "Chaves",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "41.933330",
          "reclong": "-7.466670",
          "year": "1925-01-01T00:00:00.000",
          "value": 2945,
          "dateYear": 1925,
          "log2Mass": 11.524051918717824,
          "dateNormal": 0.9236111111111112,
          "massNormal": 0.00012800000556521763,
          "logMassNormal": 0.4712324846010282
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              4,
              51.75
            ]
          },
          "id": "10019",
          "mass": "1470",
          "name": "Ellemeet",
          "nametype": "Valid",
          "recclass": "Diogenite",
          "reclat": "51.750000",
          "reclong": "4.000000",
          "year": "1925-01-01T00:00:00.000",
          "value": 1470,
          "dateYear": 1925,
          "log2Mass": 10.521600439723727,
          "dateNormal": 0.9236111111111112,
          "massNormal": 0.00006386956799432904,
          "logMassNormal": 0.4302410256532346
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.38333,
              19.08333
            ]
          },
          "id": "424",
          "mass": "24000",
          "name": "Aïr",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "19.083330",
          "reclong": "8.383330",
          "year": "1925-01-01T00:00:00.000",
          "value": 24000,
          "dateYear": 1925,
          "log2Mass": 14.550746785383243,
          "dateNormal": 0.9236111111111112,
          "massNormal": 0.0010434348279754274,
          "logMassNormal": 0.5949977151126425
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              141.86667,
              43.33333
            ]
          },
          "id": "17960",
          "mass": "363",
          "name": "Numakai",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "43.333330",
          "reclong": "141.866670",
          "year": "1925-01-01T00:00:00.000",
          "value": 363,
          "dateYear": 1925,
          "log2Mass": 8.50382573799575,
          "dateNormal": 0.9236111111111112,
          "massNormal": 0.000015739131119092657,
          "logMassNormal": 0.3477317665170466
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              28.7,
              -30.11667
            ]
          },
          "id": "22357",
          "mass": "7000",
          "name": "Queen's Mercy",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-30.116670",
          "reclong": "28.700000",
          "year": "1925-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 1925,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.9236111111111112,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          "fall": "Fell",
          "id": "15418",
          "mass": "114",
          "name": "Maria Linden",
          "nametype": "Valid",
          "recclass": "L4",
          "year": "1925-01-01T00:00:00.000",
          "value": 114,
          "dateYear": 1925,
          "log2Mass": 6.832890014164741,
          "dateNormal": 0.9236111111111112,
          "massNormal": 0.000004913043691871465,
          "logMassNormal": 0.27940517459406344
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -65.28333,
              -32.75
            ]
          },
          "id": "22587",
          "mass": "300",
          "name": "Renca",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "-32.750000",
          "reclong": "-65.283330",
          "year": "1925-01-01T00:00:00.000",
          "value": 300,
          "dateYear": 1925,
          "log2Mass": 8.228818690495881,
          "dateNormal": 0.9236111111111112,
          "massNormal": 0.000013000000565217416,
          "logMassNormal": 0.3364863942130858
        },
        {
          ":@computed_region_cbhk_fwbd": "18",
          ":@computed_region_nnqa_25f4": "2122",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -91.5,
              39.8
            ]
          },
          "id": "18079",
          "mass": "135",
          "name": "Palmyra",
          "nametype": "Valid",
          "recclass": "L3",
          "reclat": "39.800000",
          "reclong": "-91.500000",
          "year": "1926-01-01T00:00:00.000",
          "value": 135,
          "dateYear": 1926,
          "log2Mass": 7.076815597050831,
          "dateNormal": 0.9244791666666666,
          "massNormal": 0.0000058260872098298785,
          "logMassNormal": 0.2893795880461989
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              139.75,
              35.73333
            ]
          },
          "id": "12343",
          "mass": "238",
          "name": "Komagome",
          "nametype": "Valid",
          "recclass": "Iron",
          "reclat": "35.733330",
          "reclong": "139.750000",
          "year": "1926-01-01T00:00:00.000",
          "value": 238,
          "dateYear": 1926,
          "log2Mass": 7.894817763307944,
          "dateNormal": 0.9244791666666666,
          "massNormal": 0.000010304348274102098,
          "logMassNormal": 0.32282869049151747
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              68.41667,
              26.75
            ]
          },
          "id": "12067",
          "mass": "973",
          "name": "Jajh deh Kot Lalu",
          "nametype": "Valid",
          "recclass": "EL6",
          "reclat": "26.750000",
          "reclong": "68.416670",
          "year": "1926-01-01T00:00:00.000",
          "value": 973,
          "dateYear": 1926,
          "log2Mass": 9.926295994781112,
          "dateNormal": 0.9244791666666666,
          "massNormal": 0.000042260871402646586,
          "logMassNormal": 0.4058983036086817
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.15,
              24.95
            ]
          },
          "id": "14721",
          "mass": "9241",
          "name": "Lua",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "24.950000",
          "reclong": "75.150000",
          "year": "1926-01-01T00:00:00.000",
          "value": 9241,
          "dateYear": 1926,
          "log2Mass": 13.173833263682058,
          "dateNormal": 0.9244791666666666,
          "massNormal": 0.0004017391479017021,
          "logMassNormal": 0.5386940482697226
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -5.4,
              38.18333
            ]
          },
          "id": "17997",
          "mass": "5850",
          "name": "Ojuelos Altos",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.183330",
          "reclong": "-5.400000",
          "year": "1926-01-01T00:00:00.000",
          "value": 5850,
          "dateYear": 1926,
          "log2Mass": 12.51422090935813,
          "dateNormal": 0.9244791666666666,
          "massNormal": 0.0002543043588827982,
          "logMassNormal": 0.5117216976768955
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              23.5,
              44.41667
            ]
          },
          "id": "23670",
          "mass": "958",
          "name": "Sopot",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "44.416670",
          "reclong": "23.500000",
          "year": "1927-01-01T00:00:00.000",
          "value": 958,
          "dateYear": 1927,
          "log2Mass": 9.90388184573618,
          "dateNormal": 0.9253472222222222,
          "massNormal": 0.00004160869746124772,
          "logMassNormal": 0.4049817618211959
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              62.08333,
              45.21667
            ]
          },
          "id": "15401",
          "mass": "1000",
          "name": "Mamra Springs",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "45.216670",
          "reclong": "62.083330",
          "year": "1927-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1927,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.9253472222222222,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.05,
              52.28333
            ]
          },
          "id": "17988",
          "mass": "1400",
          "name": "Oesede",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "52.283330",
          "reclong": "8.050000",
          "year": "1927-01-01T00:00:00.000",
          "value": 1400,
          "dateYear": 1927,
          "log2Mass": 10.451211111832329,
          "dateNormal": 0.9253472222222222,
          "massNormal": 0.00006082608960113433,
          "logMassNormal": 0.42736272051320096
        },
        {
          ":@computed_region_cbhk_fwbd": "34",
          ":@computed_region_nnqa_25f4": "1762",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -89.68333,
              38.2
            ]
          },
          "id": "23998",
          "mass": "74800",
          "name": "Tilden",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.200000",
          "reclong": "-89.683330",
          "year": "1927-01-01T00:00:00.000",
          "value": 74800,
          "dateYear": 1927,
          "log2Mass": 16.190750649662363,
          "dateNormal": 0.9253472222222222,
          "massNormal": 0.0032521305761795904,
          "logMassNormal": 0.66205946571655
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              150.68889,
              -34.05
            ]
          },
          "id": "16912",
          "mass": "367.5",
          "name": "Narellan",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-34.050000",
          "reclong": "150.688890",
          "year": "1928-01-01T00:00:00.000",
          "value": 367.5,
          "dateYear": 1928,
          "log2Mass": 8.521600439723727,
          "dateNormal": 0.9262152777777778,
          "massNormal": 0.000015934783301512317,
          "logMassNormal": 0.34845859566684523
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              77,
              19.25
            ]
          },
          "id": "16908",
          "mass": "17000",
          "name": "Naoki",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "19.250000",
          "reclong": "77.000000",
          "year": "1928-01-01T00:00:00.000",
          "value": 17000,
          "dateYear": 1928,
          "log2Mass": 14.053247125912426,
          "dateNormal": 0.9262152777777778,
          "massNormal": 0.0007390869886559561,
          "logMassNormal": 0.5746543495781802
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.4,
              58.88333
            ]
          },
          "id": "18042",
          "mass": "246",
          "name": "Oterøy",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "58.883330",
          "reclong": "9.400000",
          "year": "1928-01-01T00:00:00.000",
          "value": 246,
          "dateYear": 1928,
          "log2Mass": 7.94251450533924,
          "dateNormal": 0.9262152777777778,
          "massNormal": 0.000010652174376181494,
          "logMassNormal": 0.3247790682243941
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -57.95,
              -31.18333
            ]
          },
          "id": "12053",
          "mass": "3050",
          "name": "Isthilart",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-31.183330",
          "reclong": "-57.950000",
          "year": "1928-01-01T00:00:00.000",
          "value": 3050,
          "dateYear": 1928,
          "log2Mass": 11.57459352733761,
          "dateNormal": 0.9262152777777778,
          "massNormal": 0.0001325652231550097,
          "logMassNormal": 0.47329919238520174
        },
        {
          ":@computed_region_cbhk_fwbd": "37",
          ":@computed_region_nnqa_25f4": "2373",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -82.48333,
              35.96667
            ]
          },
          "id": "4925",
          "mass": "3700",
          "name": "Bald Mountain",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "35.966670",
          "reclong": "-82.483330",
          "year": "1929-01-01T00:00:00.000",
          "value": 3700,
          "dateYear": 1929,
          "log2Mass": 11.853309555403674,
          "dateNormal": 0.9270833333333334,
          "massNormal": 0.0001608260939489606,
          "logMassNormal": 0.48469622941090046
        },
        {
          ":@computed_region_cbhk_fwbd": "17",
          ":@computed_region_nnqa_25f4": "1285",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -101.2,
              39.8
            ]
          },
          "id": "4984",
          "mass": "16000",
          "name": "Beardsley",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "39.800000",
          "reclong": "-101.200000",
          "year": "1929-01-01T00:00:00.000",
          "value": 16000,
          "dateYear": 1929,
          "log2Mass": 13.965784284662087,
          "dateNormal": 0.9270833333333334,
          "massNormal": 0.0006956087258960316,
          "logMassNormal": 0.571077887732697
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              25,
              55.66667
            ]
          },
          "id": "18069",
          "mass": "3858",
          "name": "Padvarninkai",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "55.666670",
          "reclong": "25.000000",
          "year": "1929-01-01T00:00:00.000",
          "value": 3858,
          "dateYear": 1929,
          "log2Mass": 11.913637428049103,
          "dateNormal": 0.9270833333333334,
          "massNormal": 0.00016769565946502866,
          "logMassNormal": 0.4871631094213268
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.66667,
              28.2
            ]
          },
          "id": "22593",
          "mass": "3332",
          "name": "Rewari",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "28.200000",
          "reclong": "76.666670",
          "year": "1929-01-01T00:00:00.000",
          "value": 3332,
          "dateYear": 1929,
          "log2Mass": 11.702172685365548,
          "dateNormal": 0.9270833333333334,
          "massNormal": 0.0001448260932533084,
          "logMassNormal": 0.4785160591647729
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.33333,
              56.75
            ]
          },
          "id": "12297",
          "mass": "6109",
          "name": "Khmelevka",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "56.750000",
          "reclong": "75.333330",
          "year": "1929-01-01T00:00:00.000",
          "value": 6109,
          "dateYear": 1929,
          "log2Mass": 12.576720525080246,
          "dateNormal": 0.9270833333333334,
          "massNormal": 0.00026556522893761864,
          "logMassNormal": 0.5142773829003806
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              44.45,
              35.13333
            ]
          },
          "id": "23887",
          "mass": "6000",
          "name": "Tauk",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "35.133330",
          "reclong": "44.450000",
          "year": "1929-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1929,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.9270833333333334,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -2.1,
              39.56667
            ]
          },
          "id": "18015",
          "mass": "40000",
          "name": "Olmedilla de Alarcón",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "39.566670",
          "reclong": "-2.100000",
          "year": "1929-01-01T00:00:00.000",
          "value": 40000,
          "dateYear": 1929,
          "log2Mass": 15.287712379549449,
          "dateNormal": 0.9270833333333334,
          "massNormal": 0.0017390870321342187,
          "logMassNormal": 0.6251331336662803
        },
        {
          ":@computed_region_cbhk_fwbd": "15",
          ":@computed_region_nnqa_25f4": "11",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -92.05,
              35.4
            ]
          },
          "id": "16645",
          "mass": "16700",
          "name": "Miller (Arkansas)",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "35.400000",
          "reclong": "-92.050000",
          "year": "1930-01-01T00:00:00.000",
          "value": 16700,
          "dateYear": 1930,
          "log2Mass": 14.027560482248777,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.0007260435098279787,
          "logMassNormal": 0.5736039915096763
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              33.51667,
              -3.13333
            ]
          },
          "id": "15395",
          "mass": "470",
          "name": "Malampaka",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "-3.133330",
          "reclong": "33.516670",
          "year": "1930-01-01T00:00:00.000",
          "value": 470,
          "dateYear": 1930,
          "log2Mass": 8.876516946565,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.000020391305234404577,
          "logMassNormal": 0.36297156285272536
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -65.23333,
              -31.6
            ]
          },
          "id": "398",
          "mass": "1620",
          "name": "Aguada",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-31.600000",
          "reclong": "-65.233330",
          "year": "1930-01-01T00:00:00.000",
          "value": 1620,
          "dateYear": 1930,
          "log2Mass": 10.661778097771988,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.00007039130740831771,
          "logMassNormal": 0.43597306040572853
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.16667,
              52.95
            ]
          },
          "id": "18009",
          "mass": "16570",
          "name": "Oldenburg (1930)",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "52.950000",
          "reclong": "8.166670",
          "year": "1930-01-01T00:00:00.000",
          "value": 16570,
          "dateYear": 1930,
          "log2Mass": 14.016285982108814,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.0007203913356691885,
          "logMassNormal": 0.5731429635005123
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              139.91667,
              -35.08333
            ]
          },
          "id": "12264",
          "mass": "41730",
          "name": "Karoonda",
          "nametype": "Valid",
          "recclass": "CK4",
          "reclat": "-35.083330",
          "reclong": "139.916670",
          "year": "1930-01-01T00:00:00.000",
          "value": 41730,
          "dateYear": 1930,
          "log2Mass": 15.348797300150757,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.0018143044267088881,
          "logMassNormal": 0.6276309702874306
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              15.86667,
              56.65
            ]
          },
          "id": "14650",
          "mass": "6862",
          "name": "Lillaverke",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "56.650000",
          "reclong": "15.866670",
          "year": "1930-01-01T00:00:00.000",
          "value": 6862,
          "dateYear": 1930,
          "log2Mass": 12.744413410557655,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.00029830436079584177,
          "logMassNormal": 0.5211345487332665
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              52.48333,
              54.23333
            ]
          },
          "id": "5112",
          "mass": "1342",
          "name": "Boriskino",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "54.233330",
          "reclong": "52.483330",
          "year": "1930-01-01T00:00:00.000",
          "value": 1342,
          "dateYear": 1930,
          "log2Mass": 10.390168956200183,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.00005830435036105871,
          "logMassNormal": 0.4248666326035988
        },
        {
          ":@computed_region_cbhk_fwbd": "15",
          ":@computed_region_nnqa_25f4": "1023",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -90.5,
              36.06667
            ]
          },
          "id": "18101",
          "mass": "408000",
          "name": "Paragould",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "36.066670",
          "reclong": "-90.500000",
          "year": "1930-01-01T00:00:00.000",
          "value": 408000,
          "dateYear": 1930,
          "log2Mass": 18.638209626633582,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.017739087727786422,
          "logMassNormal": 0.7621390369309046
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "2018",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -96.11667,
              30.7
            ]
          },
          "id": "18846",
          "mass": "2085",
          "name": "Plantersville",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "30.700000",
          "reclong": "-96.116670",
          "year": "1930-01-01T00:00:00.000",
          "value": 2085,
          "dateYear": 1930,
          "log2Mass": 11.025831668332026,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.0000906086995916826,
          "logMassNormal": 0.45085965322853927
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              145.6,
              -40.975
            ]
          },
          "id": "16738",
          "mass": "8887.5",
          "name": "Moorleah",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-40.975000",
          "reclong": "145.600000",
          "year": "1930-01-01T00:00:00.000",
          "value": 8887.5,
          "dateYear": 1930,
          "log2Mass": 13.11756193939414,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.00038636958201606876,
          "logMassNormal": 0.5363930454503135
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              127.5,
              35
            ]
          },
          "id": "11467",
          "mass": "1320",
          "name": "Gyokukei",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "35.000000",
          "reclong": "127.500000",
          "year": "1930-01-01T00:00:00.000",
          "value": 1320,
          "dateYear": 1930,
          "log2Mass": 10.366322214245816,
          "dateNormal": 0.9279513888888888,
          "massNormal": 0.00005734782858034037,
          "logMassNormal": 0.42389151035145556
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              26.16667,
              42.51667
            ]
          },
          "id": "12344",
          "mass": "90",
          "name": "Konovo",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "42.516670",
          "reclong": "26.166670",
          "year": "1931-01-01T00:00:00.000",
          "value": 90,
          "dateYear": 1931,
          "log2Mass": 6.491853096329675,
          "dateNormal": 0.9288194444444444,
          "massNormal": 0.000003869565385633278,
          "logMassNormal": 0.26545976066625326
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.41667,
              32.95
            ]
          },
          "id": "23884",
          "mass": "12000",
          "name": "Tatahouine",
          "nametype": "Valid",
          "recclass": "Diogenite",
          "reclat": "32.950000",
          "reclong": "10.416670",
          "year": "1931-01-01T00:00:00.000",
          "value": 12000,
          "dateYear": 1931,
          "log2Mass": 13.550746785383243,
          "dateNormal": 0.9288194444444444,
          "massNormal": 0.0005216956748563337,
          "logMassNormal": 0.5541065001194478
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -4.31944,
              53.03639
            ]
          },
          "id": "18865",
          "mass": "157",
          "name": "Pontlyfni",
          "nametype": "Valid",
          "recclass": "Winonaite",
          "reclat": "53.036390",
          "reclong": "-4.319440",
          "year": "1931-01-01T00:00:00.000",
          "value": 157,
          "dateYear": 1931,
          "log2Mass": 7.294620748891627,
          "dateNormal": 0.9288194444444444,
          "massNormal": 0.000006782608990548217,
          "logMassNormal": 0.2982859053367463
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.33333,
              55.2
            ]
          },
          "id": "12385",
          "mass": "4047",
          "name": "Kuznetzovo",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "55.200000",
          "reclong": "75.333330",
          "year": "1932-01-01T00:00:00.000",
          "value": 4047,
          "dateYear": 1932,
          "log2Mass": 11.982637133669424,
          "dateNormal": 0.9296875,
          "massNormal": 0.0001759130511266544,
          "logMassNormal": 0.48998459121831445
        },
        {
          ":@computed_region_cbhk_fwbd": "18",
          ":@computed_region_nnqa_25f4": "2697",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -94.3,
              38.5
            ]
          },
          "id": "2329",
          "mass": "5070",
          "name": "Archie",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "38.500000",
          "reclong": "-94.300000",
          "year": "1932-01-01T00:00:00.000",
          "value": 5070,
          "dateYear": 1932,
          "log2Mass": 12.307770031890703,
          "dateNormal": 0.9296875,
          "massNormal": 0.00022039131393005712,
          "logMassNormal": 0.5032796704608412
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -6.3,
              32.33333
            ]
          },
          "id": "7723",
          "mass": "1161",
          "name": "Douar Mghila",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "32.333330",
          "reclong": "-6.300000",
          "year": "1932-01-01T00:00:00.000",
          "value": 1161,
          "dateYear": 1932,
          "log2Mass": 10.181152256865566,
          "dateNormal": 0.9296875,
          "massNormal": 0.000050434784801512384,
          "logMassNormal": 0.4163196858139391
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.94083,
              48.3025
            ]
          },
          "id": "18883",
          "mass": "2125",
          "name": "Prambachkirchen",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "48.302500",
          "reclong": "13.940830",
          "year": "1932-01-01T00:00:00.000",
          "value": 2125,
          "dateYear": 1932,
          "log2Mass": 11.053247125912426,
          "dateNormal": 0.9296875,
          "massNormal": 0.00009234783010207956,
          "logMassNormal": 0.4519807045985962
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              83.11667,
              25.55
            ]
          },
          "id": "12289",
          "mass": "3698",
          "name": "Khanpur",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "25.550000",
          "reclong": "83.116670",
          "year": "1932-01-01T00:00:00.000",
          "value": 3698,
          "dateYear": 1932,
          "log2Mass": 11.852529509404196,
          "dateNormal": 0.9296875,
          "massNormal": 0.00016073913742344076,
          "logMassNormal": 0.4846643323822312
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              36,
              16
            ]
          },
          "id": "12299",
          "mass": "3200",
          "name": "Khor Temiki",
          "nametype": "Valid",
          "recclass": "Aubrite",
          "reclat": "16.000000",
          "reclong": "36.000000",
          "year": "1932-01-01T00:00:00.000",
          "value": 3200,
          "dateYear": 1932,
          "log2Mass": 11.643856189774725,
          "dateNormal": 0.9296875,
          "massNormal": 0.00013908696256899837,
          "logMassNormal": 0.4761314268059189
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -58.61667,
              -33
            ]
          },
          "id": "11432",
          "mass": "22000",
          "name": "Gualeguaychú",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-33.000000",
          "reclong": "-58.616670",
          "year": "1932-01-01T00:00:00.000",
          "value": 22000,
          "dateYear": 1932,
          "log2Mass": 14.425215903299385,
          "dateNormal": 0.9296875,
          "massNormal": 0.0009564783024555784,
          "logMassNormal": 0.5898646048250661
        },
        {
          ":@computed_region_cbhk_fwbd": "19",
          ":@computed_region_nnqa_25f4": "2351",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -103.66667,
              42.58333
            ]
          },
          "id": "23614",
          "mass": "4100",
          "name": "Sioux County",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "42.583330",
          "reclong": "-103.666670",
          "year": "1933-01-01T00:00:00.000",
          "value": 4100,
          "dateYear": 1933,
          "log2Mass": 12.001408194392809,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.0001782173990529304,
          "logMassNormal": 0.4907521626980047
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              118.5,
              31.41667
            ]
          },
          "id": "18879",
          "mass": "665",
          "name": "Po-wang Chen",
          "nametype": "Valid",
          "recclass": "LL",
          "reclat": "31.416670",
          "reclong": "118.500000",
          "year": "1933-01-01T00:00:00.000",
          "value": 665,
          "dateYear": 1933,
          "log2Mass": 9.377210530388552,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.000028869566472589845,
          "logMassNormal": 0.3834455318345674
        },
        {
          ":@computed_region_cbhk_fwbd": "33",
          ":@computed_region_nnqa_25f4": "2582",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -81.88333,
              35.03333
            ]
          },
          "id": "5340",
          "mass": "8400",
          "name": "Cherokee Springs",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "35.033330",
          "reclong": "-81.883330",
          "year": "1933-01-01T00:00:00.000",
          "value": 8400,
          "dateYear": 1933,
          "log2Mass": 13.036173612553485,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.0003651739289206056,
          "logMassNormal": 0.5330649778795359
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              66.08333,
              55.5
            ]
          },
          "id": "18799",
          "mass": "3393",
          "name": "Pesyanoe",
          "nametype": "Valid",
          "recclass": "Aubrite",
          "reclat": "55.500000",
          "reclong": "66.083330",
          "year": "1933-01-01T00:00:00.000",
          "value": 3393,
          "dateYear": 1933,
          "log2Mass": 11.728345714710976,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.0001474782672816638,
          "logMassNormal": 0.47958630613476
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              45.66667,
              48.6
            ]
          },
          "id": "22590",
          "mass": "7000",
          "name": "Repeev Khutor",
          "nametype": "Valid",
          "recclass": "Iron, IIF",
          "reclat": "48.600000",
          "reclong": "45.666670",
          "year": "1933-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 1933,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              151,
              -3
            ]
          },
          "id": "7758",
          "mass": "188",
          "name": "Dyarrl Island",
          "nametype": "Valid",
          "recclass": "Mesosiderite-A1",
          "reclat": "-3.000000",
          "reclong": "151.000000",
          "year": "1933-01-01T00:00:00.000",
          "value": 188,
          "dateYear": 1933,
          "log2Mass": 7.554588851677638,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.000008130435136105875,
          "logMassNormal": 0.30891631691914195
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              106,
              -6.33333
            ]
          },
          "id": "4938",
          "mass": "629",
          "name": "Banten",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "-6.333330",
          "reclong": "106.000000",
          "year": "1933-01-01T00:00:00.000",
          "value": 629,
          "dateYear": 1933,
          "log2Mass": 9.296916206879288,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.000027304349013232565,
          "logMassNormal": 0.38016219938921697
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              26.76667,
              -29.45
            ]
          },
          "id": "15400",
          "mass": "807",
          "name": "Malvern",
          "nametype": "Valid",
          "recclass": "Eucrite-pmict",
          "reclat": "-29.450000",
          "reclong": "26.766670",
          "year": "1933-01-01T00:00:00.000",
          "value": 807,
          "dateYear": 1933,
          "log2Mass": 9.656424863277781,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.00003504347978449912,
          "logMassNormal": 0.39486294514992226
        },
        {
          ":@computed_region_cbhk_fwbd": "29",
          ":@computed_region_nnqa_25f4": "3134",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -87,
              34.75
            ]
          },
          "id": "4885",
          "mass": "265",
          "name": "Athens",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "34.750000",
          "reclong": "-87.000000",
          "year": "1933-01-01T00:00:00.000",
          "value": 265,
          "dateYear": 1933,
          "log2Mass": 8.049848549450562,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.00001147826136862006,
          "logMassNormal": 0.32916808769823924
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              39.43333,
              56.63333
            ]
          },
          "id": "18798",
          "mass": "66000",
          "name": "Pervomaisky",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "56.633330",
          "reclong": "39.433330",
          "year": "1933-01-01T00:00:00.000",
          "value": 66000,
          "dateYear": 1933,
          "log2Mass": 16.01017840402054,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.002869521863892255,
          "logMassNormal": 0.6546756471982064
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              105.48333,
              12
            ]
          },
          "id": "18811",
          "mass": "7800",
          "name": "Phum Sambo",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "12.000000",
          "reclong": "105.483330",
          "year": "1933-01-01T00:00:00.000",
          "value": 7800,
          "dateYear": 1933,
          "log2Mass": 12.929258408636972,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.0003390869712646509,
          "logMassNormal": 0.5286930852901445
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -58.05,
              -30.78333
            ]
          },
          "id": "5316",
          "mass": "18300",
          "name": "Chajari",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "-30.783330",
          "reclong": "-58.050000",
          "year": "1933-01-01T00:00:00.000",
          "value": 18300,
          "dateYear": 1933,
          "log2Mass": 14.159556028058768,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.0007956087302438578,
          "logMassNormal": 0.5790014497515368
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              59.31667,
              52.13333
            ]
          },
          "id": "5140",
          "mass": "219",
          "name": "Brient",
          "nametype": "Valid",
          "recclass": "Eucrite-pmict",
          "reclat": "52.133330",
          "reclong": "59.316670",
          "year": "1933-01-01T00:00:00.000",
          "value": 219,
          "dateYear": 1933,
          "log2Mass": 7.774787059601174,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.000009478261281663534,
          "logMassNormal": 0.31792048918045945
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              102.46667,
              42.91667
            ]
          },
          "id": "17936",
          "mass": "250",
          "name": "Noyan-Bogdo",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "42.916670",
          "reclong": "102.466670",
          "year": "1933-01-01T00:00:00.000",
          "value": 250,
          "dateYear": 1933,
          "log2Mass": 7.965784284662087,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.000010826087427221193,
          "logMassNormal": 0.32573059777352886
        },
        {
          ":@computed_region_cbhk_fwbd": "11",
          ":@computed_region_nnqa_25f4": "1994",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -103.4,
              36.21667
            ]
          },
          "id": "18110",
          "mass": "5100",
          "name": "Pasamonte",
          "nametype": "Valid",
          "recclass": "Eucrite-pmict",
          "reclat": "36.216670",
          "reclong": "-103.400000",
          "year": "1933-01-01T00:00:00.000",
          "value": 5100,
          "dateYear": 1933,
          "log2Mass": 12.31628153174622,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.00022169566181285487,
          "logMassNormal": 0.5036277160313478
        },
        {
          ":@computed_region_cbhk_fwbd": "11",
          ":@computed_region_nnqa_25f4": "611",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -104,
              32.21667
            ]
          },
          "id": "15393",
          "mass": "150",
          "name": "Malaga",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "32.216670",
          "reclong": "-104.000000",
          "year": "1933-01-01T00:00:00.000",
          "value": 150,
          "dateYear": 1933,
          "log2Mass": 7.22881869049588,
          "dateNormal": 0.9305555555555556,
          "massNormal": 0.000006478261151228746,
          "logMassNormal": 0.2955951792198911
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.5,
              28.48333
            ]
          },
          "id": "4922",
          "mass": "10322",
          "name": "Bahjoi",
          "nametype": "Valid",
          "recclass": "Iron, IAB-sLL",
          "reclat": "28.483330",
          "reclong": "78.500000",
          "year": "1934-01-01T00:00:00.000",
          "value": 10322,
          "dateYear": 1934,
          "log2Mass": 13.33343491528405,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.00044873914994518043,
          "logMassNormal": 0.5452203537186485
        },
        {
          ":@computed_region_cbhk_fwbd": "15",
          ":@computed_region_nnqa_25f4": "70",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -94.16667,
              36.05
            ]
          },
          "id": "10079",
          "mass": "2360",
          "name": "Fayetteville",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "36.050000",
          "reclong": "-94.166670",
          "year": "1934-01-01T00:00:00.000",
          "value": 2360,
          "dateYear": 1934,
          "log2Mass": 11.204571144249204,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.00010256522185066182,
          "logMassNormal": 0.4581685275660395
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              17.56667,
              49.23333
            ]
          },
          "id": "23455",
          "mass": "412",
          "name": "Sazovice",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "49.233330",
          "reclong": "17.566670",
          "year": "1934-01-01T00:00:00.000",
          "value": 412,
          "dateYear": 1934,
          "log2Mass": 8.686500527183219,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.000017869565994328955,
          "logMassNormal": 0.3552015605955479
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              79.41667,
              13.63333
            ]
          },
          "id": "24009",
          "mass": "230",
          "name": "Tirupati",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "13.633330",
          "reclong": "79.416670",
          "year": "1934-01-01T00:00:00.000",
          "value": 230,
          "dateYear": 1934,
          "log2Mass": 7.845490050944375,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.000009956522172022704,
          "logMassNormal": 0.3208116204001363
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              31.6,
              -17.65
            ]
          },
          "id": "15405",
          "mass": "22300",
          "name": "Mangwendi",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "-17.650000",
          "reclong": "31.600000",
          "year": "1934-01-01T00:00:00.000",
          "value": 22300,
          "dateYear": 1934,
          "log2Mass": 14.44475608969503,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.0009695217812835557,
          "logMassNormal": 0.5906636267879776
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -49.8,
              -26.1
            ]
          },
          "id": "22611",
          "mass": "1310",
          "name": "Rio Negro",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "-26.100000",
          "reclong": "-49.800000",
          "year": "1934-01-01T00:00:00.000",
          "value": 1310,
          "dateYear": 1934,
          "log2Mass": 10.355351096424812,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.000056913045952741126,
          "logMassNormal": 0.4234428880139212
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -64.55,
              -30.88333
            ]
          },
          "id": "5264",
          "mass": "750",
          "name": "Capilla del Monte",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-30.883330",
          "reclong": "-64.550000",
          "year": "1934-01-01T00:00:00.000",
          "value": 750,
          "dateYear": 1934,
          "log2Mass": 9.550746785383243,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.00003256521880718343,
          "logMassNormal": 0.39054164014666914
        },
        {
          ":@computed_region_cbhk_fwbd": "37",
          ":@computed_region_nnqa_25f4": "2439",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -77.53333,
              35.55
            ]
          },
          "id": "10075",
          "mass": "56000",
          "name": "Farmville",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "35.550000",
          "reclong": "-77.533330",
          "year": "1934-01-01T00:00:00.000",
          "value": 56000,
          "dateYear": 1934,
          "log2Mass": 15.77313920671969,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.0024347392362930103,
          "logMassNormal": 0.6449828264195631
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3.73333,
              50.31667
            ]
          },
          "id": "11472",
          "mass": "9000",
          "name": "Hainaut",
          "nametype": "Valid",
          "recclass": "H3-6",
          "reclat": "50.316670",
          "reclong": "3.733330",
          "year": "1934-01-01T00:00:00.000",
          "value": 9000,
          "dateYear": 1934,
          "log2Mass": 13.1357092861044,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.0003912608865765603,
          "logMassNormal": 0.5371351125061987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              36.53333,
              0.26667
            ]
          },
          "id": "22782",
          "mass": "67",
          "name": "Rumuruti",
          "nametype": "Valid",
          "recclass": "R3.8-6",
          "reclat": "0.266670",
          "reclong": "36.533330",
          "year": "1934-01-01T00:00:00.000",
          "value": 67,
          "dateYear": 1934,
          "log2Mass": 6.066089190457772,
          "dateNormal": 0.9314236111111112,
          "massNormal": 0.000002869565342155015,
          "logMassNormal": 0.24804975725490302
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              91,
              23.325
            ]
          },
          "id": "18793",
          "mass": "23474",
          "name": "Perpeti",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "23.325000",
          "reclong": "91.000000",
          "year": "1935-01-01T00:00:00.000",
          "value": 23474,
          "dateYear": 1935,
          "log2Mass": 14.518776079461722,
          "dateNormal": 0.9322916666666666,
          "massNormal": 0.001020565261763707,
          "logMassNormal": 0.5936903941033214
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              19.91667,
              52
            ]
          },
          "id": "14718",
          "mass": "59000",
          "name": "Łowicz",
          "nametype": "Valid",
          "recclass": "Mesosiderite-A3",
          "reclat": "52.000000",
          "reclong": "19.916670",
          "year": "1935-01-01T00:00:00.000",
          "value": 59000,
          "dateYear": 1935,
          "log2Mass": 15.848427334023928,
          "dateNormal": 0.9322916666666666,
          "massNormal": 0.002565174024572784,
          "logMassNormal": 0.6480614494195955
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.63333,
              52.45
            ]
          },
          "id": "16976",
          "mass": "3996",
          "name": "Nikolaevka",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "52.450000",
          "reclong": "78.633330",
          "year": "1935-01-01T00:00:00.000",
          "value": 3996,
          "dateYear": 1935,
          "log2Mass": 11.964340867792417,
          "dateNormal": 0.9322916666666666,
          "massNormal": 0.00017369565972589826,
          "logMassNormal": 0.48923643467676514
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              111.53333,
              -7.75
            ]
          },
          "id": "15380",
          "mass": "400",
          "name": "Madiun",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-7.750000",
          "reclong": "111.533330",
          "year": "1935-01-01T00:00:00.000",
          "value": 400,
          "dateYear": 1935,
          "log2Mass": 8.643856189774725,
          "dateNormal": 0.9322916666666666,
          "massNormal": 0.00001734782684120986,
          "logMassNormal": 0.35345778182633486
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              133.16667,
              44.86667
            ]
          },
          "id": "23745",
          "mass": "637",
          "name": "Sungach",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.866670",
          "reclong": "133.166670",
          "year": "1935-01-01T00:00:00.000",
          "value": 637,
          "dateYear": 1935,
          "log2Mass": 9.3151495622563,
          "dateNormal": 0.9322916666666666,
          "massNormal": 0.000027652175115311963,
          "logMassNormal": 0.3809077834439857
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              91.18333,
              23.15
            ]
          },
          "id": "18171",
          "mass": "37350",
          "name": "Patwar",
          "nametype": "Valid",
          "recclass": "Mesosiderite-A1",
          "reclat": "23.150000",
          "reclong": "91.183330",
          "year": "1935-01-01T00:00:00.000",
          "value": 37350,
          "dateYear": 1935,
          "log2Mass": 15.188820622563961,
          "dateNormal": 0.9322916666666666,
          "massNormal": 0.0016238696358204189,
          "logMassNormal": 0.6210893295703319
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              165.9,
              -21.73333
            ]
          },
          "id": "16922",
          "mass": "347",
          "name": "Nassirah",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-21.733330",
          "reclong": "165.900000",
          "year": "1936-01-01T00:00:00.000",
          "value": 347,
          "dateYear": 1936,
          "log2Mass": 8.43879185257826,
          "dateNormal": 0.9331597222222222,
          "massNormal": 0.000015043478914933865,
          "logMassNormal": 0.34507245192659725
        },
        {
          ":@computed_region_cbhk_fwbd": "20",
          ":@computed_region_nnqa_25f4": "2201",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -97.58333,
              35.95
            ]
          },
          "id": "5470",
          "mass": "78.400000000000006",
          "name": "Crescent",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "35.950000",
          "reclong": "-97.583330",
          "year": "1936-01-01T00:00:00.000",
          "value": 78.4,
          "dateYear": 1936,
          "log2Mass": 6.292781749227846,
          "dateNormal": 0.9331597222222222,
          "massNormal": 0.000003365217537618154,
          "logMassNormal": 0.25731949141292754
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.93333,
              58.2
            ]
          },
          "id": "11995",
          "mass": "3973",
          "name": "Ichkala",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "58.200000",
          "reclong": "82.933330",
          "year": "1936-01-01T00:00:00.000",
          "value": 3973,
          "dateYear": 1936,
          "log2Mass": 11.956013078088098,
          "dateNormal": 0.9331597222222222,
          "massNormal": 0.00017269565968242,
          "logMassNormal": 0.48889590123754767
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              31.95,
              -28.83333
            ]
          },
          "id": "15372",
          "mass": "1995",
          "name": "Macibini",
          "nametype": "Valid",
          "recclass": "Eucrite-pmict",
          "reclat": "-28.833330",
          "reclong": "31.950000",
          "year": "1936-01-01T00:00:00.000",
          "value": 1995,
          "dateYear": 1936,
          "log2Mass": 10.962173031109709,
          "dateNormal": 0.9331597222222222,
          "massNormal": 0.00008669565594328939,
          "logMassNormal": 0.44825657420770765
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              23.5,
              46.71667
            ]
          },
          "id": "23888",
          "mass": "21000",
          "name": "Tauti",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.716670",
          "reclong": "23.500000",
          "year": "1937-01-01T00:00:00.000",
          "value": 21000,
          "dateYear": 1937,
          "log2Mass": 14.358101707440847,
          "dateNormal": 0.9340277777777778,
          "massNormal": 0.0009130000396956538,
          "logMassNormal": 0.5871202238131192
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              72.01667,
              25.38333
            ]
          },
          "id": "22392",
          "mass": "3224.5",
          "name": "Rangala",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "25.383330",
          "reclong": "72.016670",
          "year": "1937-01-01T00:00:00.000",
          "value": 3224.5,
          "dateYear": 1937,
          "log2Mass": 11.654859754207394,
          "dateNormal": 0.9340277777777778,
          "massNormal": 0.00014015218000661651,
          "logMassNormal": 0.47658137592482663
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -53.05,
              -29.03333
            ]
          },
          "id": "18905",
          "mass": "300000",
          "name": "Putinga",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-29.033330",
          "reclong": "-53.050000",
          "year": "1937-01-01T00:00:00.000",
          "value": 300000,
          "dateYear": 1937,
          "log2Mass": 18.194602975157967,
          "dateNormal": 0.9340277777777778,
          "massNormal": 0.013043435349714581,
          "logMassNormal": 0.743999421973004
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              73.36667,
              42.45
            ]
          },
          "id": "12253",
          "mass": "3500",
          "name": "Kaptal-Aryk",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "42.450000",
          "reclong": "73.366670",
          "year": "1937-01-01T00:00:00.000",
          "value": 3500,
          "dateYear": 1937,
          "log2Mass": 11.77313920671969,
          "dateNormal": 0.9340277777777778,
          "massNormal": 0.00015213044139697571,
          "logMassNormal": 0.4814179664467843
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              97,
              19
            ]
          },
          "id": "14764",
          "mass": "540",
          "name": "Mabwe-Khoywa",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "19.000000",
          "reclong": "97.000000",
          "year": "1937-01-01T00:00:00.000",
          "value": 540,
          "dateYear": 1937,
          "log2Mass": 9.076815597050832,
          "dateNormal": 0.9340277777777778,
          "massNormal": 0.00002343478362759929,
          "logMassNormal": 0.37116201803258825
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              53.25,
              55.43333
            ]
          },
          "id": "12229",
          "mass": "200000",
          "name": "Kainsaz",
          "nametype": "Valid",
          "recclass": "CO3.2",
          "reclat": "55.433330",
          "reclong": "53.250000",
          "year": "1937-01-01T00:00:00.000",
          "value": 200000,
          "dateYear": 1937,
          "log2Mass": 17.609640474436812,
          "dateNormal": 0.9340277777777778,
          "massNormal": 0.008695609073722134,
          "logMassNormal": 0.7200795945930584
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              124.28333,
              8.06667
            ]
          },
          "id": "18098",
          "mass": "2130",
          "name": "Pantar",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "8.066670",
          "reclong": "124.283330",
          "year": "1938-01-01T00:00:00.000",
          "value": 2130,
          "dateYear": 1938,
          "log2Mass": 11.056637715113201,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.0000925652214158792,
          "logMassNormal": 0.4521193499105587
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              32.43333,
              -8.41667
            ]
          },
          "id": "12063",
          "mass": "704.5",
          "name": "Ivuna",
          "nametype": "Valid",
          "recclass": "CI1",
          "reclat": "-8.416670",
          "reclong": "32.433330",
          "year": "1938-01-01T00:00:00.000",
          "value": 704.5,
          "dateYear": 1938,
          "log2Mass": 9.460455896309636,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.000030586957851606864,
          "logMassNormal": 0.38684953598963356
        },
        {
          ":@computed_region_cbhk_fwbd": "34",
          ":@computed_region_nnqa_25f4": "1869",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -89.15,
              39.08333
            ]
          },
          "id": "5021",
          "mass": "1770.5",
          "name": "Benld",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "39.083330",
          "reclong": "-89.150000",
          "year": "1938-01-01T00:00:00.000",
          "value": 1770.5,
          "dateYear": 1938,
          "log2Mass": 10.789941128390916,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.00007693478595368635,
          "logMassNormal": 0.4412138024449465
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              77.03333,
              52.3
            ]
          },
          "id": "18175",
          "mass": "142.5",
          "name": "Pavlodar (stone)",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "52.300000",
          "reclong": "77.033330",
          "year": "1938-01-01T00:00:00.000",
          "value": 142.5,
          "dateYear": 1938,
          "log2Mass": 7.154818109052104,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.000006152174180529312,
          "logMassNormal": 0.2925692055344522
        },
        {
          ":@computed_region_cbhk_fwbd": "11",
          ":@computed_region_nnqa_25f4": "1989",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -108,
              36.8
            ]
          },
          "id": "4913",
          "mass": "2830",
          "name": "Aztec",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "36.800000",
          "reclong": "-108.000000",
          "year": "1938-01-01T00:00:00.000",
          "value": 2830,
          "dateYear": 1938,
          "log2Mass": 11.466586337719244,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.00012300000534782633,
          "logMassNormal": 0.4688826471737064
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              136.76667,
              35.36667
            ]
          },
          "id": "12266",
          "mass": "710",
          "name": "Kasamatsu",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "35.366670",
          "reclong": "136.766670",
          "year": "1938-01-01T00:00:00.000",
          "value": 710,
          "dateYear": 1938,
          "log2Mass": 9.471675214392045,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.00003082608829678645,
          "logMassNormal": 0.3873083075374184
        },
        {
          ":@computed_region_cbhk_fwbd": "48",
          ":@computed_region_nnqa_25f4": "2459",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -79.73333,
              40.93333
            ]
          },
          "id": "5349",
          "mass": "303",
          "name": "Chicora",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "40.933330",
          "reclong": "-79.733330",
          "year": "1938-01-01T00:00:00.000",
          "value": 303,
          "dateYear": 1938,
          "log2Mass": 8.243173983472952,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.00001313043535349719,
          "logMassNormal": 0.33707339958450144
        },
        {
          ":@computed_region_cbhk_fwbd": "34",
          ":@computed_region_nnqa_25f4": "1795",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -89.00417,
              40.48
            ]
          },
          "id": "5076",
          "mass": "67.8",
          "name": "Bloomington",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "40.480000",
          "reclong": "-89.004170",
          "year": "1938-01-01T00:00:00.000",
          "value": 67.8,
          "dateYear": 1938,
          "log2Mass": 6.083213368248981,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.0000029043479523629542,
          "logMassNormal": 0.24874998569054504
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              31.7,
              51.15
            ]
          },
          "id": "12368",
          "mass": "2250",
          "name": "Kukschin",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "51.150000",
          "reclong": "31.700000",
          "year": "1938-01-01T00:00:00.000",
          "value": 2250,
          "dateYear": 1938,
          "log2Mass": 11.1357092861044,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.00009778261294707013,
          "logMassNormal": 0.4553526825198094
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              51.56667,
              52.45
            ]
          },
          "id": "12743",
          "mass": "800",
          "name": "Lavrentievka",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "52.450000",
          "reclong": "51.566670",
          "year": "1938-01-01T00:00:00.000",
          "value": 800,
          "dateYear": 1938,
          "log2Mass": 9.643856189774725,
          "dateNormal": 0.9348958333333334,
          "massNormal": 0.00003473913194517965,
          "logMassNormal": 0.39434899681952956
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.86667,
              20.88333
            ]
          },
          "id": "2298",
          "mass": "17900",
          "name": "Andura",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "20.883330",
          "reclong": "76.866670",
          "year": "1939-01-01T00:00:00.000",
          "value": 17900,
          "dateYear": 1939,
          "log2Mass": 14.127671967038982,
          "dateNormal": 0.9357638888888888,
          "massNormal": 0.000778217425139888,
          "logMassNormal": 0.5776976717575205
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -99.33333,
              24.16667
            ]
          },
          "id": "23164",
          "mass": "60",
          "name": "Santa Cruz",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "24.166670",
          "reclong": "-99.333330",
          "year": "1939-01-01T00:00:00.000",
          "value": 60,
          "dateYear": 1939,
          "log2Mass": 5.906890595608519,
          "dateNormal": 0.9357638888888888,
          "massNormal": 0.0000025652175028355436,
          "logMassNormal": 0.2415399332863077
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13,
              56.03333
            ]
          },
          "id": "7776",
          "mass": "3336",
          "name": "Ekeby",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "56.033330",
          "reclong": "13.000000",
          "year": "1939-01-01T00:00:00.000",
          "value": 3336,
          "dateYear": 1939,
          "log2Mass": 11.703903573444663,
          "dateNormal": 0.9357638888888888,
          "massNormal": 0.0001450000063043481,
          "logMassNormal": 0.47858683728134516
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              94.91667,
              21.20833
            ]
          },
          "id": "17969",
          "mass": "737.6",
          "name": "Nyaung",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "21.208330",
          "reclong": "94.916670",
          "year": "1939-01-01T00:00:00.000",
          "value": 737.6,
          "dateYear": 1939,
          "log2Mass": 9.526694845541975,
          "dateNormal": 0.9357638888888888,
          "massNormal": 0.000032026088348960365,
          "logMassNormal": 0.3895581271036165
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              107.7,
              -7.25
            ]
          },
          "id": "10924",
          "mass": "1303",
          "name": "Glanggang",
          "nametype": "Valid",
          "recclass": "H5-6",
          "reclat": "-7.250000",
          "reclong": "107.700000",
          "year": "1939-01-01T00:00:00.000",
          "value": 1303,
          "dateYear": 1939,
          "log2Mass": 10.347621368568134,
          "dateNormal": 0.9357638888888888,
          "massNormal": 0.000056608698113421656,
          "logMassNormal": 0.42312681005029495
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              107.33333,
              -7.23333
            ]
          },
          "id": "23481",
          "mass": "1590",
          "name": "Selakopi",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-7.233330",
          "reclong": "107.333330",
          "year": "1939-01-01T00:00:00.000",
          "value": 1590,
          "dateYear": 1939,
          "log2Mass": 10.634811050171718,
          "dateNormal": 0.9357638888888888,
          "massNormal": 0.00006908695952551997,
          "logMassNormal": 0.4348703450645742
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -82.26,
              42.52
            ]
          },
          "id": "7731",
          "mass": "47700",
          "name": "Dresden (Ontario)",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "42.520000",
          "reclong": "-82.260000",
          "year": "1939-01-01T00:00:00.000",
          "value": 47700,
          "dateYear": 1939,
          "log2Mass": 15.541701645780236,
          "dateNormal": 0.9357638888888888,
          "massNormal": 0.002073869655385637,
          "logMassNormal": 0.6355190633576872
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "3190",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -96,
              29.45
            ]
          },
          "id": "12275",
          "mass": "6937",
          "name": "Kendleton",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "29.450000",
          "reclong": "-96.000000",
          "year": "1939-01-01T00:00:00.000",
          "value": 6937,
          "dateYear": 1939,
          "log2Mass": 12.760096169244092,
          "dateNormal": 0.9357638888888888,
          "massNormal": 0.0003015652305028361,
          "logMassNormal": 0.5217758357904
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              34,
              50.83333
            ]
          },
          "id": "5342",
          "mass": "1700",
          "name": "Chervony Kut",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "50.833330",
          "reclong": "34.000000",
          "year": "1939-01-01T00:00:00.000",
          "value": 1700,
          "dateYear": 1939,
          "log2Mass": 10.731319031025064,
          "dateNormal": 0.9357638888888888,
          "massNormal": 0.00007386956842911168,
          "logMassNormal": 0.4388166736582075
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              79,
              22.25
            ]
          },
          "id": "23487",
          "mass": "691",
          "name": "Semarkona",
          "nametype": "Valid",
          "recclass": "LL3.00",
          "reclat": "22.250000",
          "reclong": "79.000000",
          "year": "1940-01-01T00:00:00.000",
          "value": 691,
          "dateYear": 1940,
          "log2Mass": 9.432541900388259,
          "dateNormal": 0.9366319444444444,
          "massNormal": 0.000030000001304347883,
          "logMassNormal": 0.38570809878109336
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.9,
              26.45
            ]
          },
          "id": "22384",
          "mass": "3766",
          "name": "Ramnagar",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "26.450000",
          "reclong": "82.900000",
          "year": "1940-01-01T00:00:00.000",
          "value": 3766,
          "dateYear": 1940,
          "log2Mass": 11.878817284614229,
          "dateNormal": 0.9366319444444444,
          "massNormal": 0.00016369565929111562,
          "logMassNormal": 0.4857392714500374
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              90.65,
              22.68333
            ]
          },
          "id": "5040",
          "mass": "1047",
          "name": "Bhola",
          "nametype": "Valid",
          "recclass": "LL3-6",
          "reclat": "22.683330",
          "reclong": "90.650000",
          "year": "1940-01-01T00:00:00.000",
          "value": 1047,
          "dateYear": 1940,
          "log2Mass": 10.032045726930809,
          "dateNormal": 0.9366319444444444,
          "massNormal": 0.000045478262846880994,
          "logMassNormal": 0.4102225386414877
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              112.01667,
              -7.75
            ]
          },
          "id": "12270",
          "mass": "3300",
          "name": "Kediri",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "-7.750000",
          "reclong": "112.016670",
          "year": "1940-01-01T00:00:00.000",
          "value": 3300,
          "dateYear": 1940,
          "log2Mass": 11.688250309133178,
          "dateNormal": 0.9366319444444444,
          "massNormal": 0.00014343478884499083,
          "logMassNormal": 0.4779467562850389
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              81.89167,
              19.03333
            ]
          },
          "id": "10042",
          "mass": "113",
          "name": "Erakot",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "19.033330",
          "reclong": "81.891670",
          "year": "1940-01-01T00:00:00.000",
          "value": 113,
          "dateYear": 1940,
          "log2Mass": 6.820178962415188,
          "dateNormal": 0.9366319444444444,
          "massNormal": 0.0000048695654291115405,
          "logMassNormal": 0.27888540424418284
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              29.25,
              4.66667
            ]
          },
          "id": "15421",
          "mass": "3200",
          "name": "Maridi",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "4.666670",
          "reclong": "29.250000",
          "year": "1941-01-01T00:00:00.000",
          "value": 3200,
          "dateYear": 1941,
          "log2Mass": 11.643856189774725,
          "dateNormal": 0.9375,
          "massNormal": 0.00013908696256899837,
          "logMassNormal": 0.4761314268059189
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              108.1,
              15.71667
            ]
          },
          "id": "18812",
          "mass": "11000",
          "name": "Phuoc-Binh",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "15.716670",
          "reclong": "108.100000",
          "year": "1941-01-01T00:00:00.000",
          "value": 11000,
          "dateYear": 1941,
          "log2Mass": 13.425215903299385,
          "dateNormal": 0.9375,
          "massNormal": 0.0004782174120964092,
          "logMassNormal": 0.5489733898318715
        },
        {
          ":@computed_region_cbhk_fwbd": "48",
          ":@computed_region_nnqa_25f4": "2495",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -78.08333,
              40.91667
            ]
          },
          "id": "5065",
          "mass": "705",
          "name": "Black Moshannan Park",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "40.916670",
          "reclong": "-78.083330",
          "year": "1941-01-01T00:00:00.000",
          "value": 705,
          "dateYear": 1941,
          "log2Mass": 9.461479447286155,
          "dateNormal": 0.9375,
          "massNormal": 0.000030608696982986824,
          "logMassNormal": 0.38689139023267094
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -49.93333,
              -26.16667
            ]
          },
          "id": "15383",
          "mass": "600",
          "name": "Mafra",
          "nametype": "Valid",
          "recclass": "L3-4",
          "reclat": "-26.166670",
          "reclong": "-49.933330",
          "year": "1941-01-01T00:00:00.000",
          "value": 600,
          "dateYear": 1941,
          "log2Mass": 9.228818690495881,
          "dateNormal": 0.9375,
          "massNormal": 0.000026043479393194756,
          "logMassNormal": 0.37737760920628044
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              146.85833,
              -33.35
            ]
          },
          "id": "10120",
          "mass": "26000",
          "name": "Forest Vale",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-33.350000",
          "reclong": "146.858330",
          "year": "1942-01-01T00:00:00.000",
          "value": 26000,
          "dateYear": 1942,
          "log2Mass": 14.66622400280318,
          "dateNormal": 0.9383680555555556,
          "massNormal": 0.0011303913534952761,
          "logMassNormal": 0.5997197188369771
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30,
              -1.21667
            ]
          },
          "id": "15454",
          "mass": "4975",
          "name": "Maziba",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-1.216670",
          "reclong": "30.000000",
          "year": "1942-01-01T00:00:00.000",
          "value": 4975,
          "dateYear": 1942,
          "log2Mass": 12.280480810318373,
          "dateNormal": 0.9383680555555556,
          "massNormal": 0.0002162608789678643,
          "logMassNormal": 0.5021637810345302
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              14.015,
              66.34833
            ]
          },
          "id": "18860",
          "mass": "253.6",
          "name": "Pollen",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "66.348330",
          "reclong": "14.015000",
          "year": "1942-01-01T00:00:00.000",
          "value": 253.6,
          "dateYear": 1942,
          "log2Mass": 7.986410935252045,
          "dateNormal": 0.9383680555555556,
          "massNormal": 0.000010982609173156921,
          "logMassNormal": 0.32657404657739236
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              81.46667,
              26.03333
            ]
          },
          "id": "12238",
          "mass": "2770",
          "name": "Kamalpur",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "26.033330",
          "reclong": "81.466670",
          "year": "1942-01-01T00:00:00.000",
          "value": 2770,
          "dateYear": 1942,
          "log2Mass": 11.43567026093655,
          "dateNormal": 0.9383680555555556,
          "massNormal": 0.00012039130958223086,
          "logMassNormal": 0.4676184512312392
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              33.63333,
              4.7
            ]
          },
          "id": "12251",
          "mass": "11355",
          "name": "Kapoeta",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "4.700000",
          "reclong": "33.633330",
          "year": "1942-01-01T00:00:00.000",
          "value": 11355,
          "dateYear": 1942,
          "log2Mass": 13.47104008559425,
          "dateNormal": 0.9383680555555556,
          "massNormal": 0.0004936521953761824,
          "logMassNormal": 0.5508471963219781
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              39.71667,
              9.53333
            ]
          },
          "id": "2304",
          "mass": "6500",
          "name": "Ankober",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "9.533330",
          "reclong": "39.716670",
          "year": "1942-01-01T00:00:00.000",
          "value": 6500,
          "dateYear": 1942,
          "log2Mass": 12.66622400280318,
          "dateNormal": 0.9383680555555556,
          "massNormal": 0.0002825652296767491,
          "logMassNormal": 0.5179372888505877
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              85.4,
              26.2
            ]
          },
          "id": "18109",
          "mass": "800",
          "name": "Parsa",
          "nametype": "Valid",
          "recclass": "EH3",
          "reclat": "26.200000",
          "reclong": "85.400000",
          "year": "1942-01-01T00:00:00.000",
          "value": 800,
          "dateYear": 1942,
          "log2Mass": 9.643856189774725,
          "dateNormal": 0.9383680555555556,
          "massNormal": 0.00003473913194517965,
          "logMassNormal": 0.39434899681952956
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.58333,
              10.01667
            ]
          },
          "id": "5165",
          "mass": "357",
          "name": "Bununu",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "10.016670",
          "reclong": "9.583330",
          "year": "1942-01-01T00:00:00.000",
          "value": 357,
          "dateYear": 1942,
          "log2Mass": 8.479780264029099,
          "dateNormal": 0.9383680555555556,
          "massNormal": 0.00001547826154253311,
          "logMassNormal": 0.346748517871463
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              28.41667,
              -26.16667
            ]
          },
          "id": "5023",
          "mass": "3880",
          "name": "Benoni",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-26.166670",
          "reclong": "28.416670",
          "year": "1943-01-01T00:00:00.000",
          "value": 3880,
          "dateYear": 1943,
          "log2Mass": 11.92184093707449,
          "dateNormal": 0.9392361111111112,
          "massNormal": 0.00016865218124574702,
          "logMassNormal": 0.4874985608725825
        },
        {
          ":@computed_region_cbhk_fwbd": "20",
          ":@computed_region_nnqa_25f4": "608",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -99.33333,
              35.88333
            ]
          },
          "id": "12755",
          "mass": "51500",
          "name": "Leedey",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "35.883330",
          "reclong": "-99.333330",
          "year": "1943-01-01T00:00:00.000",
          "value": 51500,
          "dateYear": 1943,
          "log2Mass": 15.652284811845306,
          "dateNormal": 0.9392361111111112,
          "massNormal": 0.00223908705387335,
          "logMassNormal": 0.6400409433758821
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              127.26667,
              33.43333
            ]
          },
          "id": "7754",
          "mass": "2117",
          "name": "Duwun",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "33.433330",
          "reclong": "127.266670",
          "year": "1943-01-01T00:00:00.000",
          "value": 2117,
          "dateYear": 1943,
          "log2Mass": 11.047805554007589,
          "dateNormal": 0.9392361111111112,
          "massNormal": 0.00009200000400000017,
          "logMassNormal": 0.4517581921119345
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.23333,
              57.81667
            ]
          },
          "id": "11479",
          "mass": "1456",
          "name": "Hallingeberg",
          "nametype": "Valid",
          "recclass": "L3.4",
          "reclat": "57.816670",
          "reclong": "16.233330",
          "year": "1944-01-01T00:00:00.000",
          "value": 1456,
          "dateYear": 1944,
          "log2Mass": 10.507794640198696,
          "dateNormal": 0.9401041666666666,
          "massNormal": 0.0000632608723156901,
          "logMassNormal": 0.4296764897367036
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              33.5,
              -11.5
            ]
          },
          "id": "16820",
          "mass": "1100",
          "name": "Mtola",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "-11.500000",
          "reclong": "33.500000",
          "year": "1944-01-01T00:00:00.000",
          "value": 1100,
          "dateYear": 1944,
          "log2Mass": 10.103287808412022,
          "dateNormal": 0.9401041666666666,
          "massNormal": 0.00004778261077315699,
          "logMassNormal": 0.4131357139118987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              17.53333,
              46.23333
            ]
          },
          "id": "16636",
          "mass": "224.2",
          "name": "Mike",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.233330",
          "reclong": "17.533330",
          "year": "1944-01-01T00:00:00.000",
          "value": 224.2,
          "dateYear": 1944,
          "log2Mass": 7.808642467918064,
          "dateNormal": 0.9401041666666666,
          "massNormal": 0.00000970434824801514,
          "logMassNormal": 0.31930487796062784
        },
        {
          ":@computed_region_cbhk_fwbd": "20",
          ":@computed_region_nnqa_25f4": "602",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -96.15,
              34.31667
            ]
          },
          "id": "4888",
          "mass": "1384.2",
          "name": "Atoka",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "34.316670",
          "reclong": "-96.150000",
          "year": "1945-01-01T00:00:00.000",
          "value": 1384.2,
          "dateYear": 1945,
          "log2Mass": 10.434836694516777,
          "dateNormal": 0.9409722222222222,
          "massNormal": 0.000060139133049527526,
          "logMassNormal": 0.4266931506943624
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              37.66667,
              0
            ]
          },
          "id": "15491",
          "mass": "6000",
          "name": "Meru",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "0.000000",
          "reclong": "37.666670",
          "year": "1945-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1945,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.9409722222222222,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              113.56694,
              31.47556
            ]
          },
          "id": "52412",
          "mass": "23000",
          "name": "Fuhe",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "31.475560",
          "reclong": "113.566940",
          "year": "1945-01-01T00:00:00.000",
          "value": 23000,
          "dateYear": 1945,
          "log2Mass": 14.4893462407191,
          "dateNormal": 0.9409722222222222,
          "massNormal": 0.0009999565652155029,
          "logMassNormal": 0.5924869722400817
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              33.63333,
              1.7
            ]
          },
          "id": "23671",
          "mass": "2050",
          "name": "Soroti",
          "nametype": "Valid",
          "recclass": "Iron, ungrouped",
          "reclat": "1.700000",
          "reclong": "33.633330",
          "year": "1945-01-01T00:00:00.000",
          "value": 2050,
          "dateYear": 1945,
          "log2Mass": 11.001408194392809,
          "dateNormal": 0.9409722222222222,
          "massNormal": 0.00008908696039508523,
          "logMassNormal": 0.44986094770481
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "3062",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -103.11667,
              30.125
            ]
          },
          "id": "18786",
          "mass": "70000",
          "name": "Peña Blanca Spring",
          "nametype": "Valid",
          "recclass": "Aubrite",
          "reclat": "30.125000",
          "reclong": "-103.116670",
          "year": "1946-01-01T00:00:00.000",
          "value": 70000,
          "dateYear": 1946,
          "log2Mass": 16.095067301607052,
          "dateNormal": 0.9418402777777778,
          "massNormal": 0.003043434914931953,
          "logMassNormal": 0.6581468573599517
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.76667,
              47.83333
            ]
          },
          "id": "12364",
          "mass": "50000",
          "name": "Krymka",
          "nametype": "Valid",
          "recclass": "LL3.2",
          "reclat": "47.833330",
          "reclong": "30.766670",
          "year": "1946-01-01T00:00:00.000",
          "value": 50000,
          "dateYear": 1946,
          "log2Mass": 15.609640474436812,
          "dateNormal": 0.9418402777777778,
          "massNormal": 0.0021738696597334633,
          "logMassNormal": 0.6382971646066691
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              56.08333,
              54.33333
            ]
          },
          "id": "12357",
          "mass": "4000",
          "name": "Krasnyi Klyuch",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "54.333330",
          "reclong": "56.083330",
          "year": "1946-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1946,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.9418402777777778,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              29.23333,
              40.2
            ]
          },
          "id": "5177",
          "mass": "25000",
          "name": "Bursa",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "40.200000",
          "reclong": "29.233330",
          "year": "1946-01-01T00:00:00.000",
          "value": 25000,
          "dateYear": 1946,
          "log2Mass": 14.609640474436812,
          "dateNormal": 0.9418402777777778,
          "massNormal": 0.0010869130907353519,
          "logMassNormal": 0.5974059496134744
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              4.98333,
              22.83333
            ]
          },
          "id": "23483",
          "mass": "150",
          "name": "Seldebourak",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "22.833330",
          "reclong": "4.983330",
          "year": "1947-01-01T00:00:00.000",
          "value": 150,
          "dateYear": 1947,
          "log2Mass": 7.22881869049588,
          "dateNormal": 0.9427083333333334,
          "massNormal": 0.000006478261151228746,
          "logMassNormal": 0.2955951792198911
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              134.65333,
              46.16
            ]
          },
          "id": "23593",
          "mass": "23000000",
          "name": "Sikhote-Alin",
          "nametype": "Valid",
          "recclass": "Iron, IIAB",
          "reclat": "46.160000",
          "reclong": "134.653330",
          "year": "1947-01-01T00:00:00.000",
          "value": 23000000,
          "dateYear": 1947,
          "log2Mass": 24.455130525381186,
          "dateNormal": 0.9427083333333334,
          "massNormal": 1,
          "logMassNormal": 1
        },
        {
          ":@computed_region_cbhk_fwbd": "19",
          ":@computed_region_nnqa_25f4": "462",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -96.47167,
              40.78167
            ]
          },
          "id": "7760",
          "mass": "10000",
          "name": "Eagle",
          "nametype": "Valid",
          "recclass": "EL6",
          "reclat": "40.781670",
          "reclong": "-96.471670",
          "year": "1947-01-01T00:00:00.000",
          "value": 10000,
          "dateYear": 1947,
          "log2Mass": 13.287712379549449,
          "dateNormal": 0.9427083333333334,
          "massNormal": 0.00043473914933648476,
          "logMassNormal": 0.5433507036798909
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.73333,
              58.85
            ]
          },
          "id": "12461",
          "mass": "2300",
          "name": "Långhalsen",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "58.850000",
          "reclong": "16.733330",
          "year": "1947-01-01T00:00:00.000",
          "value": 2300,
          "dateYear": 1947,
          "log2Mass": 11.167418145831737,
          "dateNormal": 0.9427083333333334,
          "massNormal": 0.00009995652608506636,
          "logMassNormal": 0.45664929632010903
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -5.33333,
              42.475
            ]
          },
          "id": "22584",
          "mass": "17300",
          "name": "Reliegos",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "42.475000",
          "reclong": "-5.333330",
          "year": "1947-01-01T00:00:00.000",
          "value": 17300,
          "dateYear": 1947,
          "log2Mass": 14.078484417411449,
          "dateNormal": 0.9427083333333334,
          "massNormal": 0.0007521304674839333,
          "logMassNormal": 0.5756863330907127
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.91667,
              9.6
            ]
          },
          "id": "10919",
          "mass": "480",
          "name": "Git-Git",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "9.600000",
          "reclong": "9.916670",
          "year": "1947-01-01T00:00:00.000",
          "value": 480,
          "dateYear": 1947,
          "log2Mass": 8.906890595608518,
          "dateNormal": 0.9427083333333334,
          "massNormal": 0.00002082608786200382,
          "logMassNormal": 0.3642135782658917
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -66.15,
              -44.11667
            ]
          },
          "id": "24140",
          "mass": "20000",
          "name": "Uzcudun",
          "nametype": "Valid",
          "recclass": "L",
          "reclat": "-44.116670",
          "reclong": "-66.150000",
          "year": "1948-01-01T00:00:00.000",
          "value": 20000,
          "dateYear": 1948,
          "log2Mass": 14.287712379549449,
          "dateNormal": 0.9435763888888888,
          "massNormal": 0.0008695217769357295,
          "logMassNormal": 0.5842419186730856
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              72.08333,
              34.23333
            ]
          },
          "id": "15414",
          "mass": "4500",
          "name": "Mardan",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "34.233330",
          "reclong": "72.083330",
          "year": "1948-01-01T00:00:00.000",
          "value": 4500,
          "dateYear": 1948,
          "log2Mass": 12.1357092861044,
          "dateNormal": 0.9435763888888888,
          "massNormal": 0.0001956087041569002,
          "logMassNormal": 0.4962438975130041
        },
        {
          ":@computed_region_cbhk_fwbd": "17",
          ":@computed_region_nnqa_25f4": "1252",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -99.86667,
              39.68333
            ]
          },
          "id": "17922",
          "mass": "1100000",
          "name": "Norton County",
          "nametype": "Valid",
          "recclass": "Aubrite",
          "reclat": "39.683330",
          "reclong": "-99.866670",
          "year": "1948-01-01T00:00:00.000",
          "value": 1100000,
          "dateYear": 1948,
          "log2Mass": 20.06907209307411,
          "dateNormal": 0.9435763888888888,
          "massNormal": 0.04782604555765416,
          "logMassNormal": 0.8206487416718169
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.98333,
              9.91667
            ]
          },
          "id": "11443",
          "mass": "968",
          "name": "Guidder",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "9.916670",
          "reclong": "13.983330",
          "year": "1949-01-01T00:00:00.000",
          "value": 968,
          "dateYear": 1949,
          "log2Mass": 9.918863237274595,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.00004204348008884696,
          "logMassNormal": 0.4055943691234904
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              61.36667,
              55.78333
            ]
          },
          "id": "12377",
          "mass": "200000",
          "name": "Kunashak",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "55.783330",
          "reclong": "61.366670",
          "year": "1949-01-01T00:00:00.000",
          "value": 200000,
          "dateYear": 1949,
          "log2Mass": 17.609640474436812,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.008695609073722134,
          "logMassNormal": 0.7200795945930584
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3.25,
              45.76667
            ]
          },
          "id": "16627",
          "mass": "1300",
          "name": "Mezel",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "45.766670",
          "reclong": "3.250000",
          "year": "1949-01-01T00:00:00.000",
          "value": 1300,
          "dateYear": 1949,
          "log2Mass": 10.344295907915816,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.00005647826332514188,
          "logMassNormal": 0.4229908279238096
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              22.66667,
              2
            ]
          },
          "id": "454",
          "mass": "625",
          "name": "Alberta",
          "nametype": "Valid",
          "recclass": "L",
          "reclat": "2.000000",
          "reclong": "22.666670",
          "year": "1949-01-01T00:00:00.000",
          "value": 625,
          "dateYear": 1949,
          "log2Mass": 9.287712379549449,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.00002713043596219287,
          "logMassNormal": 0.3797858437071122
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              38.76667,
              -10.26667
            ]
          },
          "id": "22783",
          "mass": "6000",
          "name": "Rupota",
          "nametype": "Valid",
          "recclass": "L4-6",
          "reclat": "-10.266670",
          "reclong": "38.766670",
          "year": "1949-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1949,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              95.16667,
              44.83333
            ]
          },
          "id": "390",
          "mass": "910",
          "name": "Adzhi-Bogdo (stone)",
          "nametype": "Valid",
          "recclass": "LL3-6",
          "reclat": "44.833330",
          "reclong": "95.166670",
          "year": "1949-01-01T00:00:00.000",
          "value": 910,
          "dateYear": 1949,
          "log2Mass": 9.829722735086058,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.000039521740848771344,
          "logMassNormal": 0.40194930568389764
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              7.15,
              12.9
            ]
          },
          "id": "12260",
          "mass": "180",
          "name": "Karewar",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "12.900000",
          "reclong": "7.150000",
          "year": "1949-01-01T00:00:00.000",
          "value": 180,
          "dateYear": 1949,
          "log2Mass": 7.491853096329675,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.00000778260903402648,
          "logMassNormal": 0.30635097565944797
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -67.55,
              45.95
            ]
          },
          "id": "5026",
          "mass": "2840",
          "name": "Benton",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "45.950000",
          "reclong": "-67.550000",
          "year": "1949-01-01T00:00:00.000",
          "value": 2840,
          "dateYear": 1949,
          "log2Mass": 11.471675214392045,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.00012343478797542556,
          "logMassNormal": 0.46909073752380775
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.05,
              29.51667
            ]
          },
          "id": "426",
          "mass": "779",
          "name": "Akaba",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "29.516670",
          "reclong": "35.050000",
          "year": "1949-01-01T00:00:00.000",
          "value": 779,
          "dateYear": 1949,
          "log2Mass": 9.605479518061669,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.00003382608842722124,
          "logMassNormal": 0.3927797280857877
        },
        {
          ":@computed_region_cbhk_fwbd": "4",
          ":@computed_region_nnqa_25f4": "1657",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -157.78333,
              21.3
            ]
          },
          "id": "18082",
          "mass": "682",
          "name": "Palolo Valley",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "21.300000",
          "reclong": "-157.783330",
          "year": "1949-01-01T00:00:00.000",
          "value": 682,
          "dateYear": 1949,
          "log2Mass": 9.413627929024173,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.00002960869693950856,
          "logMassNormal": 0.38493468351166943
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -4.1,
              53.01667
            ]
          },
          "id": "4993",
          "mass": "794",
          "name": "Beddgelert",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "53.016670",
          "reclong": "-4.100000",
          "year": "1949-01-01T00:00:00.000",
          "value": 794,
          "dateYear": 1949,
          "log2Mass": 9.632995197142957,
          "dateNormal": 0.9444444444444444,
          "massNormal": 0.0000344782623686201,
          "logMassNormal": 0.39390487763478443
        },
        {
          ":@computed_region_cbhk_fwbd": "36",
          ":@computed_region_nnqa_25f4": "237",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -88.1,
              36.6
            ]
          },
          "id": "16882",
          "mass": "12600",
          "name": "Murray",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "36.600000",
          "reclong": "-88.100000",
          "year": "1950-01-01T00:00:00.000",
          "value": 12600,
          "dateYear": 1950,
          "log2Mass": 13.621136113274641,
          "dateNormal": 0.9453125,
          "massNormal": 0.0005477826325122883,
          "logMassNormal": 0.5569848052594815
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.91667,
              12.91667
            ]
          },
          "id": "10870",
          "mass": "725",
          "name": "Geidam",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "12.916670",
          "reclong": "11.916670",
          "year": "1950-01-01T00:00:00.000",
          "value": 725,
          "dateYear": 1950,
          "log2Mass": 9.501837184902296,
          "dateNormal": 0.9453125,
          "massNormal": 0.000031478262238185315,
          "logMassNormal": 0.3885416671581715
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -48.56667,
              -19.53333
            ]
          },
          "id": "18116",
          "mass": "2121",
          "name": "Patrimonio",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-19.533330",
          "reclong": "-48.566670",
          "year": "1950-01-01T00:00:00.000",
          "value": 2121,
          "dateYear": 1950,
          "log2Mass": 11.050528905530555,
          "dateNormal": 0.9453125,
          "massNormal": 0.00009217391705103987,
          "logMassNormal": 0.45186955326456224
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              86.36667,
              25.91667
            ]
          },
          "id": "15379",
          "mass": "1000",
          "name": "Madhipura",
          "nametype": "Valid",
          "recclass": "L",
          "reclat": "25.916670",
          "reclong": "86.366670",
          "year": "1950-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1950,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.9453125,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          ":@computed_region_cbhk_fwbd": "18",
          ":@computed_region_nnqa_25f4": "2223",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -90.23333,
              38.7
            ]
          },
          "id": "23089",
          "mass": "1000",
          "name": "St. Louis",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "38.700000",
          "reclong": "-90.233330",
          "year": "1950-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1950,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.9453125,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -60.66667,
              -31.41667
            ]
          },
          "id": "2340",
          "mass": "7450",
          "name": "Arroyo Aguiar",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-31.416670",
          "reclong": "-60.666670",
          "year": "1950-01-01T00:00:00.000",
          "value": 7450,
          "dateYear": 1950,
          "log2Mass": 12.863024710236886,
          "dateNormal": 0.9453125,
          "massNormal": 0.00032386957929867735,
          "logMassNormal": 0.5259847088890721
        },
        {
          ":@computed_region_cbhk_fwbd": "13",
          ":@computed_region_nnqa_25f4": "2985",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -112.13333,
              41.68333
            ]
          },
          "id": "10861",
          "mass": "102",
          "name": "Garland",
          "nametype": "Valid",
          "recclass": "Diogenite-pm",
          "reclat": "41.683330",
          "reclong": "-112.133330",
          "year": "1950-01-01T00:00:00.000",
          "value": 102,
          "dateYear": 1950,
          "log2Mass": 6.672425341971495,
          "dateNormal": 0.9453125,
          "massNormal": 0.000004391304538752371,
          "logMassNormal": 0.27284357918459695
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              70.6,
              33.4
            ]
          },
          "id": "23908",
          "mass": "342",
          "name": "Thal",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "33.400000",
          "reclong": "70.600000",
          "year": "1950-01-01T00:00:00.000",
          "value": 342,
          "dateYear": 1950,
          "log2Mass": 8.417852514885897,
          "dateNormal": 0.9453125,
          "massNormal": 0.000014826087601134244,
          "logMassNormal": 0.3442162169672037
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -8.25,
              38.01667
            ]
          },
          "id": "16725",
          "mass": "4885",
          "name": "Monte das Fortes",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "38.016670",
          "reclong": "-8.250000",
          "year": "1950-01-01T00:00:00.000",
          "value": 4885,
          "dateYear": 1950,
          "log2Mass": 12.254142846855748,
          "dateNormal": 0.9453125,
          "massNormal": 0.0002123478353194711,
          "logMassNormal": 0.5010867897080971
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              37.66667,
              47.83333
            ]
          },
          "id": "7824",
          "mass": "54640",
          "name": "Elenovka",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "47.833330",
          "reclong": "37.666670",
          "year": "1951-01-01T00:00:00.000",
          "value": 54640,
          "dateYear": 1951,
          "log2Mass": 15.737669863177453,
          "dateNormal": 0.9461805555555556,
          "massNormal": 0.002375608798939513,
          "logMassNormal": 0.6435324418671099
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              44.63333,
              45.81667
            ]
          },
          "id": "15409",
          "mass": "3555",
          "name": "Manych",
          "nametype": "Valid",
          "recclass": "LL3.4",
          "reclat": "45.816670",
          "reclong": "44.633330",
          "year": "1951-01-01T00:00:00.000",
          "value": 3555,
          "dateYear": 1951,
          "log2Mass": 11.795633844506778,
          "dateNormal": 0.9461805555555556,
          "massNormal": 0.00015452174584877157,
          "logMassNormal": 0.4823377995167301
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.23333,
              56.18333
            ]
          },
          "id": "2",
          "mass": "720",
          "name": "Aarhus",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "56.183330",
          "reclong": "10.233330",
          "year": "1951-01-01T00:00:00.000",
          "value": 720,
          "dateYear": 1951,
          "log2Mass": 9.491853096329674,
          "dateNormal": 0.9461805555555556,
          "massNormal": 0.00003126087092438569,
          "logMassNormal": 0.3881334056458373
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              18.44167,
              42.45833
            ]
          },
          "id": "7736",
          "mass": "1900",
          "name": "Dubrovnik",
          "nametype": "Valid",
          "recclass": "L3-6",
          "reclat": "42.458330",
          "reclong": "18.441670",
          "year": "1951-01-01T00:00:00.000",
          "value": 1900,
          "dateYear": 1951,
          "log2Mass": 10.89178370321831,
          "dateNormal": 0.9461805555555556,
          "massNormal": 0.00008256522098109656,
          "logMassNormal": 0.445378269067674
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              29.5,
              -6.83333
            ]
          },
          "id": "12232",
          "mass": "950",
          "name": "Kalaba",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-6.833330",
          "reclong": "29.500000",
          "year": "1951-01-01T00:00:00.000",
          "value": 950,
          "dateYear": 1951,
          "log2Mass": 9.89178370321831,
          "dateNormal": 0.9461805555555556,
          "massNormal": 0.00004126087135916832,
          "logMassNormal": 0.4044870540744793
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -49.95083,
              -21.46028
            ]
          },
          "id": "4905",
          "mass": "9330",
          "name": "Avanhandava",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-21.460280",
          "reclong": "-49.950830",
          "year": "1952-01-01T00:00:00.000",
          "value": 9330,
          "dateYear": 1952,
          "log2Mass": 13.187661365739121,
          "dateNormal": 0.9470486111111112,
          "massNormal": 0.00040560871328733535,
          "logMassNormal": 0.5392594961638858
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.43333,
              7.05
            ]
          },
          "id": "10848",
          "mass": "36.1",
          "name": "Galim (a)",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "7.050000",
          "reclong": "12.433330",
          "year": "1952-01-01T00:00:00.000",
          "value": 36.1,
          "dateYear": 1952,
          "log2Mass": 5.173926931999809,
          "dateNormal": 0.9470486111111112,
          "massNormal": 0.0000015260870228733488,
          "logMassNormal": 0.21156815853548433
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              120.66667,
              32.33333
            ]
          },
          "id": "16697",
          "mass": "5500",
          "name": "Min-Fan-Zhun",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "32.333330",
          "reclong": "120.666670",
          "year": "1952-01-01T00:00:00.000",
          "value": 5500,
          "dateYear": 1952,
          "log2Mass": 12.425215903299385,
          "dateNormal": 0.9470486111111112,
          "massNormal": 0.00023908696691682464,
          "logMassNormal": 0.5080821748386768
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.43333,
              7.05
            ]
          },
          "id": "10849",
          "mass": "28",
          "name": "Galim (b)",
          "nametype": "Valid",
          "recclass": "EH3/4-an",
          "reclat": "7.050000",
          "reclong": "12.433330",
          "year": "1952-01-01T00:00:00.000",
          "value": 28,
          "dateYear": 1952,
          "log2Mass": 4.807354922057604,
          "dateNormal": 0.9470486111111112,
          "massNormal": 0.0000011739130945179606,
          "logMassNormal": 0.19657858366645012
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -113,
              54.21667
            ]
          },
          "id": "6",
          "mass": "107000",
          "name": "Abee",
          "nametype": "Valid",
          "recclass": "EH4",
          "reclat": "54.216670",
          "reclong": "-113.000000",
          "year": "1952-01-01T00:00:00.000",
          "value": 107000,
          "dateYear": 1952,
          "log2Mass": 16.707251271063235,
          "dateNormal": 0.9470486111111112,
          "massNormal": 0.004652130637049158,
          "logMassNormal": 0.6831798036703718
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              26.46667,
              -31.25
            ]
          },
          "id": "16717",
          "mass": "150",
          "name": "Molteno",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "-31.250000",
          "reclong": "26.466670",
          "year": "1953-01-01T00:00:00.000",
          "value": 150,
          "dateYear": 1953,
          "log2Mass": 7.22881869049588,
          "dateNormal": 0.9479166666666666,
          "massNormal": 0.000006478261151228746,
          "logMassNormal": 0.2955951792198911
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -67.5,
              -27.25
            ]
          },
          "id": "15467",
          "mass": "31",
          "name": "Medanitos",
          "nametype": "Valid",
          "recclass": "Eucrite-cm",
          "reclat": "-27.250000",
          "reclong": "-67.500000",
          "year": "1953-01-01T00:00:00.000",
          "value": 31,
          "dateYear": 1953,
          "log2Mass": 4.954196310386875,
          "dateNormal": 0.9479166666666666,
          "massNormal": 0.000001304347882797734,
          "logMassNormal": 0.20258310644652153
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.25,
              51.66667
            ]
          },
          "id": "18181",
          "mass": "117.8",
          "name": "Peckelsheim",
          "nametype": "Valid",
          "recclass": "Diogenite-pm",
          "reclat": "51.666670",
          "reclong": "9.250000",
          "year": "1953-01-01T00:00:00.000",
          "value": 117.8,
          "dateYear": 1953,
          "log2Mass": 6.880195728943098,
          "dateNormal": 0.9479166666666666,
          "massNormal": 0.000005078261090359178,
          "logMassNormal": 0.281339562747472
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              21.2,
              64.43333
            ]
          },
          "id": "11893",
          "mass": "305.5",
          "name": "Hökmark",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "64.433330",
          "reclong": "21.200000",
          "year": "1954-01-01T00:00:00.000",
          "value": 305.5,
          "dateYear": 1954,
          "log2Mass": 8.25502856981873,
          "dateNormal": 0.9487847222222222,
          "massNormal": 0.000013239131010397,
          "logMassNormal": 0.3375581480234221
        },
        {
          ":@computed_region_cbhk_fwbd": "29",
          ":@computed_region_nnqa_25f4": "1637",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -86.2945,
              33.18836
            ]
          },
          "id": "23773",
          "mass": "5560",
          "name": "Sylacauga",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "33.188360",
          "reclong": "-86.294500",
          "year": "1954-01-01T00:00:00.000",
          "value": 5560,
          "dateYear": 1954,
          "log2Mass": 12.44086916761087,
          "dateNormal": 0.9487847222222222,
          "massNormal": 0.0002416956626824201,
          "logMassNormal": 0.508722255834983
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -66,
              -33
            ]
          },
          "id": "2325",
          "mass": "810",
          "name": "Arbol Solo",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-33.000000",
          "reclong": "-66.000000",
          "year": "1954-01-01T00:00:00.000",
          "value": 810,
          "dateYear": 1954,
          "log2Mass": 9.661778097771988,
          "dateNormal": 0.9487847222222222,
          "massNormal": 0.000035173914572778895,
          "logMassNormal": 0.3950818454125339
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              37.33333,
              56.11667
            ]
          },
          "id": "16977",
          "mass": "6000",
          "name": "Nikolskoe",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "56.116670",
          "reclong": "37.333330",
          "year": "1954-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1954,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.9487847222222222,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              33.8,
              -8.93333
            ]
          },
          "id": "12049",
          "mass": "1300",
          "name": "Ishinga",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "-8.933330",
          "reclong": "33.800000",
          "year": "1954-01-01T00:00:00.000",
          "value": 1300,
          "dateYear": 1954,
          "log2Mass": 10.344295907915816,
          "dateNormal": 0.9487847222222222,
          "massNormal": 0.00005647826332514188,
          "logMassNormal": 0.4229908279238096
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.71667,
              26.78333
            ]
          },
          "id": "12433",
          "mass": "900",
          "name": "Lahrauli",
          "nametype": "Valid",
          "recclass": "Ureilite",
          "reclat": "26.783330",
          "reclong": "82.716670",
          "year": "1955-01-01T00:00:00.000",
          "value": 900,
          "dateYear": 1955,
          "log2Mass": 9.813781191217037,
          "dateNormal": 0.9496527777777778,
          "massNormal": 0.0000390869582211721,
          "logMassNormal": 0.401297436586226
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              71.6,
              31.58333
            ]
          },
          "id": "12263",
          "mass": "2950",
          "name": "Karloowala",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "31.583330",
          "reclong": "71.600000",
          "year": "1955-01-01T00:00:00.000",
          "value": 2950,
          "dateYear": 1955,
          "log2Mass": 11.526499239136566,
          "dateNormal": 0.9496527777777778,
          "massNormal": 0.00012821739687901725,
          "logMassNormal": 0.4713325585064282
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              15.56667,
              38.18333
            ]
          },
          "id": "15495",
          "mass": "2405",
          "name": "Messina",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "38.183330",
          "reclong": "15.566670",
          "year": "1955-01-01T00:00:00.000",
          "value": 2405,
          "dateYear": 1955,
          "log2Mass": 11.231821178657404,
          "dateNormal": 0.9496527777777778,
          "massNormal": 0.00010452174367485843,
          "logMassNormal": 0.45928281458159714
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              115.5,
              35.66667
            ]
          },
          "id": "11913",
          "mass": "180",
          "name": "Hotse",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "35.666670",
          "reclong": "115.500000",
          "year": "1956-01-01T00:00:00.000",
          "value": 180,
          "dateYear": 1956,
          "log2Mass": 7.491853096329675,
          "dateNormal": 0.9505208333333334,
          "massNormal": 0.00000778260903402648,
          "logMassNormal": 0.30635097565944797
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -71.4,
              -31.01667
            ]
          },
          "id": "23130",
          "mass": "282",
          "name": "San Pedro de Quiles",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-31.016670",
          "reclong": "-71.400000",
          "year": "1956-01-01T00:00:00.000",
          "value": 282,
          "dateYear": 1956,
          "log2Mass": 8.139551352398794,
          "dateNormal": 0.9505208333333334,
          "massNormal": 0.000012217391835538776,
          "logMassNormal": 0.3328361442990876
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -51.66667,
              -19.13333
            ]
          },
          "id": "18103",
          "mass": "100000",
          "name": "Paranaiba",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-19.133330",
          "reclong": "-51.666670",
          "year": "1956-01-01T00:00:00.000",
          "value": 100000,
          "dateYear": 1956,
          "log2Mass": 16.609640474436812,
          "dateNormal": 0.9505208333333334,
          "massNormal": 0.004347782797729687,
          "logMassNormal": 0.6791883795998638
        },
        {
          ":@computed_region_cbhk_fwbd": "21",
          ":@computed_region_nnqa_25f4": "2684",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -96.91667,
              43.2
            ]
          },
          "id": "5307",
          "mass": "45.6",
          "name": "Centerville",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.200000",
          "reclong": "-96.916670",
          "year": "1956-01-01T00:00:00.000",
          "value": 45.6,
          "dateYear": 1956,
          "log2Mass": 5.5109619192773796,
          "dateNormal": 0.9505208333333334,
          "massNormal": 0.000001939130519092631,
          "logMassNormal": 0.2253499286604801
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              28.33333,
              -32.1
            ]
          },
          "id": "12000",
          "mass": "3457",
          "name": "Idutywa",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-32.100000",
          "reclong": "28.333330",
          "year": "1956-01-01T00:00:00.000",
          "value": 3457,
          "dateYear": 1956,
          "log2Mass": 11.7553048882624,
          "dateNormal": 0.9505208333333334,
          "massNormal": 0.00015026087609829896,
          "logMassNormal": 0.4806886994964901
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.2,
              39.3
            ]
          },
          "id": "23613",
          "mass": "2000",
          "name": "Sinnai",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "39.300000",
          "reclong": "9.200000",
          "year": "1956-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1956,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.9505208333333334,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1,
              12
            ]
          },
          "id": "16889",
          "mass": "8165",
          "name": "Nadiabondi",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "12.000000",
          "reclong": "1.000000",
          "year": "1956-01-01T00:00:00.000",
          "value": 8165,
          "dateYear": 1956,
          "log2Mass": 12.995237170449057,
          "dateNormal": 0.9505208333333334,
          "massNormal": 0.00035495653717202336,
          "logMassNormal": 0.5313910370243873
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.18361,
              50.66694
            ]
          },
          "id": "5134",
          "mass": "1500",
          "name": "Breitscheid",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "50.666940",
          "reclong": "8.183610",
          "year": "1956-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1956,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.9505208333333334,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              39.51667,
              24.41667
            ]
          },
          "id": "446",
          "mass": "160",
          "name": "Al Rais",
          "nametype": "Valid",
          "recclass": "CR2-an",
          "reclat": "24.416670",
          "reclong": "39.516670",
          "year": "1957-01-01T00:00:00.000",
          "value": 160,
          "dateYear": 1957,
          "log2Mass": 7.321928094887363,
          "dateNormal": 0.9513888888888888,
          "massNormal": 0.000006913043778827991,
          "logMassNormal": 0.29940253589275145
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.83333,
              2.88333
            ]
          },
          "id": "10055",
          "mass": "500",
          "name": "Essebi",
          "nametype": "Valid",
          "recclass": "C2-ung",
          "reclat": "2.883330",
          "reclong": "30.833330",
          "year": "1957-01-01T00:00:00.000",
          "value": 500,
          "dateYear": 1957,
          "log2Mass": 8.965784284662087,
          "dateNormal": 0.9513888888888888,
          "massNormal": 0.00002169565311720231,
          "logMassNormal": 0.36662181276672356
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -65.45,
              -26.66667
            ]
          },
          "id": "22368",
          "mass": "5000",
          "name": "Raco",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-26.666670",
          "reclong": "-65.450000",
          "year": "1957-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1957,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.9513888888888888,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -45,
              -20
            ]
          },
          "id": "11993",
          "mass": "2500",
          "name": "Ibitira",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "-20.000000",
          "reclong": "-45.000000",
          "year": "1957-01-01T00:00:00.000",
          "value": 2500,
          "dateYear": 1957,
          "log2Mass": 11.287712379549449,
          "dateNormal": 0.9513888888888888,
          "massNormal": 0.00010865217863705124,
          "logMassNormal": 0.4615682736935016
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -60.46667,
              -31.88333
            ]
          },
          "id": "7649",
          "mass": "400",
          "name": "Distrito Quebracho",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-31.883330",
          "reclong": "-60.466670",
          "year": "1957-01-01T00:00:00.000",
          "value": 400,
          "dateYear": 1957,
          "log2Mass": 8.643856189774725,
          "dateNormal": 0.9513888888888888,
          "massNormal": 0.00001734782684120986,
          "logMassNormal": 0.35345778182633486
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              6.93333,
              51.88333
            ]
          },
          "id": "22386",
          "mass": "4682",
          "name": "Ramsdorf",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "51.883330",
          "reclong": "6.933330",
          "year": "1958-01-01T00:00:00.000",
          "value": 4682,
          "dateYear": 1958,
          "log2Mass": 12.192909219112012,
          "dateNormal": 0.9522569444444444,
          "massNormal": 0.00020352174797920642,
          "logMassNormal": 0.4985828722712147
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              139.21667,
              36.18333
            ]
          },
          "id": "17998",
          "mass": "194",
          "name": "Okabe",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "36.183330",
          "reclong": "139.216670",
          "year": "1958-01-01T00:00:00.000",
          "value": 194,
          "dateYear": 1958,
          "log2Mass": 7.599912842187128,
          "dateNormal": 0.9522569444444444,
          "massNormal": 0.000008391304712665422,
          "logMassNormal": 0.3107696699594151
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              14.03333,
              49.66667
            ]
          },
          "id": "18887",
          "mass": "5555",
          "name": "Pribram",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "49.666670",
          "reclong": "14.033330",
          "year": "1959-01-01T00:00:00.000",
          "value": 5555,
          "dateYear": 1959,
          "log2Mass": 12.439571196276454,
          "dateNormal": 0.953125,
          "massNormal": 0.0002414782713686205,
          "logMassNormal": 0.5086691802100923
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              2.95,
              43.43333
            ]
          },
          "id": "23097",
          "mass": "134.30000000000001",
          "name": "St.-Chinian",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "43.433330",
          "reclong": "2.950000",
          "year": "1959-01-01T00:00:00.000",
          "value": 134.3,
          "dateYear": 1959,
          "log2Mass": 7.0693154945400805,
          "dateNormal": 0.953125,
          "massNormal": 0.000005795652425897932,
          "logMassNormal": 0.28907289974196076
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              65.78333,
              31.6
            ]
          },
          "id": "12243",
          "mass": "299",
          "name": "Kandahar (Afghanistan)",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "31.600000",
          "reclong": "65.783330",
          "year": "1959-01-01T00:00:00.000",
          "value": 299,
          "dateYear": 1959,
          "log2Mass": 8.224001674198105,
          "dateNormal": 0.953125,
          "massNormal": 0.000012956522302457492,
          "logMassNormal": 0.33628942056402766
        },
        {
          ":@computed_region_cbhk_fwbd": "35",
          ":@computed_region_nnqa_25f4": "1205",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -86.6,
              41.38333
            ]
          },
          "id": "11485",
          "mass": "3710",
          "name": "Hamlet",
          "nametype": "Valid",
          "recclass": "LL4",
          "reclat": "41.383330",
          "reclong": "-86.600000",
          "year": "1959-01-01T00:00:00.000",
          "value": 3710,
          "dateYear": 1959,
          "log2Mass": 11.857203471508166,
          "dateNormal": 0.953125,
          "massNormal": 0.00016126087657655986,
          "logMassNormal": 0.4848554563714947
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.43333,
              8.91667
            ]
          },
          "id": "432",
          "mass": "3000",
          "name": "Akwanga",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "8.916670",
          "reclong": "8.433330",
          "year": "1959-01-01T00:00:00.000",
          "value": 3000,
          "dateYear": 1959,
          "log2Mass": 11.550746785383243,
          "dateNormal": 0.953125,
          "massNormal": 0.0001303913100170135,
          "logMassNormal": 0.4723240701330585
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              120.36667,
              -26.45
            ]
          },
          "id": "16643",
          "mass": "330000",
          "name": "Millbillillie",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "-26.450000",
          "reclong": "120.366670",
          "year": "1960-01-01T00:00:00.000",
          "value": 330000,
          "dateYear": 1960,
          "log2Mass": 18.3321064989079,
          "dateNormal": 0.9539930555555556,
          "massNormal": 0.014347783232512314,
          "logMassNormal": 0.7496221081249843
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              84.06667,
              27.13333
            ]
          },
          "id": "23660",
          "mass": "72.900000000000006",
          "name": "Soheria",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "27.133330",
          "reclong": "84.066670",
          "year": "1960-01-01T00:00:00.000",
          "value": 72.9,
          "dateYear": 1960,
          "log2Mass": 6.187846909439575,
          "dateNormal": 0.9539930555555556,
          "massNormal": 0.0000031260870924385693,
          "logMassNormal": 0.2530285783188689
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -112.88333,
              53.9
            ]
          },
          "id": "5156",
          "mass": "303000",
          "name": "Bruderheim",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "53.900000",
          "reclong": "-112.883330",
          "year": "1960-01-01T00:00:00.000",
          "value": 303000,
          "dateYear": 1960,
          "log2Mass": 18.20895826813504,
          "dateNormal": 0.9539930555555556,
          "massNormal": 0.013173870137994355,
          "logMassNormal": 0.7445864273444197
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "2025",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -94.51167,
              32.675
            ]
          },
          "id": "11830",
          "mass": "8360",
          "name": "Harleton",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "32.675000",
          "reclong": "-94.511670",
          "year": "1961-01-01T00:00:00.000",
          "value": 8360,
          "dateYear": 1961,
          "log2Mass": 13.029287226968245,
          "dateNormal": 0.9548611111111112,
          "massNormal": 0.00036343479841020865,
          "logMassNormal": 0.5327833852060438
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              15.05,
              12.73333
            ]
          },
          "id": "7656",
          "mass": "3950",
          "name": "Djermaia",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "12.733330",
          "reclong": "15.050000",
          "year": "1961-01-01T00:00:00.000",
          "value": 3950,
          "dateYear": 1961,
          "log2Mass": 11.947636937951827,
          "dateNormal": 0.9548611111111112,
          "massNormal": 0.00017169565963894172,
          "logMassNormal": 0.4885533906904223
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              15.83333,
              -17.3
            ]
          },
          "id": "7774",
          "mass": "2400",
          "name": "Ehole",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-17.300000",
          "reclong": "15.833330",
          "year": "1961-01-01T00:00:00.000",
          "value": 2400,
          "dateYear": 1961,
          "log2Mass": 11.228818690495881,
          "dateNormal": 0.9548611111111112,
          "massNormal": 0.0001043043523610588,
          "logMassNormal": 0.4591600391926698
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "1978",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -96.46667,
              33.6
            ]
          },
          "id": "5005",
          "mass": "375",
          "name": "Bells",
          "nametype": "Valid",
          "recclass": "C2-ung",
          "reclat": "33.600000",
          "reclong": "-96.466670",
          "year": "1961-01-01T00:00:00.000",
          "value": 375,
          "dateYear": 1961,
          "log2Mass": 8.550746785383243,
          "dateNormal": 0.9548611111111112,
          "massNormal": 0.00001626087027221175,
          "logMassNormal": 0.34965042515347444
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              50.15,
              26.66667
            ]
          },
          "id": "22395",
          "mass": "6.1",
          "name": "Ras Tanura",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "26.666670",
          "reclong": "50.150000",
          "year": "1961-01-01T00:00:00.000",
          "value": 6.1,
          "dateYear": 1961,
          "log2Mass": 2.608809242675524,
          "dateNormal": 0.9548611111111112,
          "massNormal": 2.2173914007561477e-7,
          "logMassNormal": 0.10667737961847824
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              66.80222,
              30.73111
            ]
          },
          "id": "12369",
          "mass": "453.6",
          "name": "Kulak",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "30.731110",
          "reclong": "66.802220",
          "year": "1961-01-01T00:00:00.000",
          "value": 453.6,
          "dateYear": 1961,
          "log2Mass": 8.825276830054866,
          "dateNormal": 0.9548611111111112,
          "massNormal": 0.000019678261725141814,
          "logMassNormal": 0.36087629223223316
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              31.78,
              39.26333
            ]
          },
          "id": "12268",
          "mass": "85000",
          "name": "Kayakent",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "39.263330",
          "reclong": "31.780000",
          "year": "1961-01-01T00:00:00.000",
          "value": 85000,
          "dateYear": 1961,
          "log2Mass": 16.37517522079979,
          "dateNormal": 0.9548611111111112,
          "massNormal": 0.00369560885633082,
          "logMassNormal": 0.6696008105049583
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.7,
              12.5
            ]
          },
          "id": "5097",
          "mass": "8800",
          "name": "Bogou",
          "nametype": "Valid",
          "recclass": "Iron, IAB-MG",
          "reclat": "12.500000",
          "reclong": "0.700000",
          "year": "1962-01-01T00:00:00.000",
          "value": 8800,
          "dateYear": 1962,
          "log2Mass": 13.103287808412022,
          "dateNormal": 0.9557291666666666,
          "massNormal": 0.0003825652340245754,
          "logMassNormal": 0.5358093588914827
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3.16667,
              13.05
            ]
          },
          "id": "7722",
          "mass": "1250",
          "name": "Dosso",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "13.050000",
          "reclong": "3.166670",
          "year": "1962-01-01T00:00:00.000",
          "value": 1250,
          "dateYear": 1962,
          "log2Mass": 10.287712379549449,
          "dateNormal": 0.9557291666666666,
          "massNormal": 0.00005430435018714566,
          "logMassNormal": 0.4206770587003069
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.15,
              54.4
            ]
          },
          "id": "12301",
          "mass": "737.6",
          "name": "Kiel",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "54.400000",
          "reclong": "10.150000",
          "year": "1962-01-01T00:00:00.000",
          "value": 737.6,
          "dateYear": 1962,
          "log2Mass": 9.526694845541975,
          "dateNormal": 0.9557291666666666,
          "massNormal": 0.000032026088348960365,
          "logMassNormal": 0.3895581271036165
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3,
              50.76667
            ]
          },
          "id": "23099",
          "mass": "4960",
          "name": "Ste. Marguerite",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "50.766670",
          "reclong": "3.000000",
          "year": "1962-01-01T00:00:00.000",
          "value": 4960,
          "dateYear": 1962,
          "log2Mass": 12.276124405274238,
          "dateNormal": 0.9557291666666666,
          "massNormal": 0.00021560870502646543,
          "logMassNormal": 0.501985642339273
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -49.38056,
              -20.81
            ]
          },
          "id": "23171",
          "mass": "927",
          "name": "São Jose do Rio Preto",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-20.810000",
          "reclong": "-49.380560",
          "year": "1962-01-01T00:00:00.000",
          "value": 927,
          "dateYear": 1962,
          "log2Mass": 9.85642552862553,
          "dateNormal": 0.9557291666666666,
          "massNormal": 0.00004026087131569006,
          "logMassNormal": 0.4030412153554391
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              73.61667,
              25.73333
            ]
          },
          "id": "6693",
          "mass": "25400",
          "name": "Desuri",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "25.733330",
          "reclong": "73.616670",
          "year": "1962-01-01T00:00:00.000",
          "value": 25400,
          "dateYear": 1962,
          "log2Mass": 14.63254087654689,
          "dateNormal": 0.9557291666666666,
          "massNormal": 0.0011043043958393216,
          "logMassNormal": 0.5983423748795882
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -117.93333,
              56.13333
            ]
          },
          "id": "18180",
          "mass": "45760",
          "name": "Peace River",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "56.133330",
          "reclong": "-117.933330",
          "year": "1963-01-01T00:00:00.000",
          "value": 45760,
          "dateYear": 1963,
          "log2Mass": 15.481799431665753,
          "dateNormal": 0.9565972222222222,
          "massNormal": 0.0019895218256313837,
          "logMassNormal": 0.6330695890417635
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.58333,
              -3.5
            ]
          },
          "id": "12258",
          "mass": "2220",
          "name": "Karatu",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "-3.500000",
          "reclong": "35.583330",
          "year": "1963-01-01T00:00:00.000",
          "value": 2220,
          "dateYear": 1963,
          "log2Mass": 11.116343961237469,
          "dateNormal": 0.9565972222222222,
          "massNormal": 0.00009647826506427239,
          "logMassNormal": 0.4545608108572627
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.5,
              6.75
            ]
          },
          "id": "17996",
          "mass": "7700",
          "name": "Ohuma",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "6.750000",
          "reclong": "8.500000",
          "year": "1963-01-01T00:00:00.000",
          "value": 7700,
          "dateYear": 1963,
          "log2Mass": 12.910642730469625,
          "dateNormal": 0.9565972222222222,
          "massNormal": 0.00033473914498865847,
          "logMassNormal": 0.5279318675919594
        },
        {
          ":@computed_region_cbhk_fwbd": "17",
          ":@computed_region_nnqa_25f4": "1293",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -100.45,
              39.35
            ]
          },
          "id": "11915",
          "mass": "266.10000000000002",
          "name": "Hoxie",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "39.350000",
          "reclong": "-100.450000",
          "year": "1963-01-01T00:00:00.000",
          "value": 266.1,
          "dateYear": 1963,
          "log2Mass": 8.055824700134858,
          "dateNormal": 0.9565972222222222,
          "massNormal": 0.000011526087457655978,
          "logMassNormal": 0.32941245976070255
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              112,
              41
            ]
          },
          "id": "12037",
          "mass": "3000",
          "name": "Inner Mongolia",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "41.000000",
          "reclong": "112.000000",
          "year": "1963-01-01T00:00:00.000",
          "value": 3000,
          "dateYear": 1963,
          "log2Mass": 11.550746785383243,
          "dateNormal": 0.9565972222222222,
          "massNormal": 0.0001303913100170135,
          "logMassNormal": 0.4723240701330585
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              2.25,
              42.9
            ]
          },
          "id": "10956",
          "mass": "9000",
          "name": "Granes",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "42.900000",
          "reclong": "2.250000",
          "year": "1964-01-01T00:00:00.000",
          "value": 9000,
          "dateYear": 1964,
          "log2Mass": 13.1357092861044,
          "dateNormal": 0.9574652777777778,
          "massNormal": 0.0003912608865765603,
          "logMassNormal": 0.5371351125061987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              26.6,
              39.8
            ]
          },
          "id": "5250",
          "mass": "4000",
          "name": "Çanakkale",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "39.800000",
          "reclong": "26.600000",
          "year": "1964-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1964,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.9574652777777778,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.1,
              53.7
            ]
          },
          "id": "5339",
          "mass": "6000",
          "name": "Chernyi Bor",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "53.700000",
          "reclong": "30.100000",
          "year": "1964-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1964,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.9574652777777778,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "id": "5163",
          "mass": "2250",
          "name": "Bulls Run",
          "nametype": "Valid",
          "recclass": "Iron?",
          "year": "1964-01-01T00:00:00.000",
          "value": 2250,
          "dateYear": 1964,
          "log2Mass": 11.1357092861044,
          "dateNormal": 0.9574652777777778,
          "massNormal": 0.00009778261294707013,
          "logMassNormal": 0.4553526825198094
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              85.53333,
              26.13333
            ]
          },
          "id": "16885",
          "mass": "1245",
          "name": "Muzaffarpur",
          "nametype": "Valid",
          "recclass": "Iron, IAB-sHL",
          "reclat": "26.133330",
          "reclong": "85.533330",
          "year": "1964-01-01T00:00:00.000",
          "value": 1245,
          "dateYear": 1964,
          "log2Mass": 10.281930026955443,
          "dateNormal": 0.9574652777777778,
          "massNormal": 0.00005408695887334604,
          "logMassNormal": 0.420440611277219
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              104.91667,
              31.91667
            ]
          },
          "id": "12086",
          "mass": "222",
          "name": "Jiange",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "31.916670",
          "reclong": "104.916670",
          "year": "1964-01-01T00:00:00.000",
          "value": 222,
          "dateYear": 1964,
          "log2Mass": 7.794415866350106,
          "dateNormal": 0.9574652777777778,
          "massNormal": 0.000009608696069943308,
          "logMassNormal": 0.31872313493728993
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -47.55,
              -19.85
            ]
          },
          "id": "5418",
          "mass": "20350",
          "name": "Conquista",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-19.850000",
          "reclong": "-47.550000",
          "year": "1965-01-01T00:00:00.000",
          "value": 20350,
          "dateYear": 1965,
          "log2Mass": 14.312741174040971,
          "dateNormal": 0.9583333333333334,
          "massNormal": 0.000884739168901703,
          "logMassNormal": 0.5852653764896589
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -118.95,
              51.33333
            ]
          },
          "id": "22592",
          "mass": "1",
          "name": "Revelstoke",
          "nametype": "Valid",
          "recclass": "CI1",
          "reclat": "51.333330",
          "reclong": "-118.950000",
          "year": "1965-01-01T00:00:00.000",
          "value": 1,
          "dateYear": 1965,
          "log2Mass": 0,
          "dateNormal": 0.9583333333333334,
          "massNormal": 0,
          "logMassNormal": 0
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -1.33972,
              52.56528
            ]
          },
          "id": "4954",
          "mass": "44000",
          "name": "Barwell",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "52.565280",
          "reclong": "-1.339720",
          "year": "1965-01-01T00:00:00.000",
          "value": 44000,
          "dateYear": 1965,
          "log2Mass": 15.425215903299385,
          "dateNormal": 0.9583333333333334,
          "massNormal": 0.0019130000831739167,
          "logMassNormal": 0.6307558198182608
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              122.9,
              45.4
            ]
          },
          "id": "23873",
          "mass": "3850",
          "name": "Taonan",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "45.400000",
          "reclong": "122.900000",
          "year": "1965-01-01T00:00:00.000",
          "value": 3850,
          "dateYear": 1965,
          "log2Mass": 11.910642730469625,
          "dateNormal": 0.9583333333333334,
          "massNormal": 0.00016734783336294927,
          "logMassNormal": 0.4870406525987647
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              25.51667,
              43.46667
            ]
          },
          "id": "18173",
          "mass": "2968",
          "name": "Pavel",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.466670",
          "reclong": "25.516670",
          "year": "1966-01-01T00:00:00.000",
          "value": 2968,
          "dateYear": 1966,
          "log2Mass": 11.535275376620802,
          "dateNormal": 0.9592013888888888,
          "massNormal": 0.0001290000056086959,
          "logMassNormal": 0.4716914254311059
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.23333,
              45.3
            ]
          },
          "id": "23102",
          "mass": "271000",
          "name": "Saint-Séverin",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "45.300000",
          "reclong": "0.233330",
          "year": "1966-01-01T00:00:00.000",
          "value": 271000,
          "dateYear": 1966,
          "log2Mass": 18.047933326015958,
          "dateNormal": 0.9592013888888888,
          "massNormal": 0.01178256572967677,
          "logMassNormal": 0.7380019218169617
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              79.50083,
              21.68389
            ]
          },
          "id": "23500",
          "mass": "20000",
          "name": "Seoni",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "21.683890",
          "reclong": "79.500830",
          "year": "1966-01-01T00:00:00.000",
          "value": 20000,
          "dateYear": 1966,
          "log2Mass": 14.287712379549449,
          "dateNormal": 0.9592013888888888,
          "massNormal": 0.0008695217769357295,
          "logMassNormal": 0.5842419186730856
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              43.73333,
              19.38333
            ]
          },
          "id": "23885",
          "mass": "2500",
          "name": "Tathlith",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "19.383330",
          "reclong": "43.733330",
          "year": "1967-01-01T00:00:00.000",
          "value": 2500,
          "dateYear": 1967,
          "log2Mass": 11.287712379549449,
          "dateNormal": 0.9600694444444444,
          "massNormal": 0.00010865217863705124,
          "logMassNormal": 0.4615682736935016
        },
        {
          ":@computed_region_cbhk_fwbd": "9",
          ":@computed_region_nnqa_25f4": "1444",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -104.93056,
              39.7825
            ]
          },
          "id": "6660",
          "mass": "230",
          "name": "Denver",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "39.782500",
          "reclong": "-104.930560",
          "year": "1967-01-01T00:00:00.000",
          "value": 230,
          "dateYear": 1967,
          "log2Mass": 7.845490050944375,
          "dateNormal": 0.9600694444444444,
          "massNormal": 0.000009956522172022704,
          "logMassNormal": 0.3208116204001363
        },
        {
          "fall": "Fell",
          "id": "16975",
          "mass": "3.3",
          "name": "Niger (LL6)",
          "nametype": "Valid",
          "recclass": "LL6",
          "year": "1967-01-01T00:00:00.000",
          "value": 3.3,
          "dateYear": 1967,
          "log2Mass": 1.722466024471091,
          "dateNormal": 0.9600694444444444,
          "massNormal": 1.0000000434782627e-7,
          "logMassNormal": 0.07043372852512071
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -40.7,
              -6.23333
            ]
          },
          "id": "18102",
          "mass": "2000",
          "name": "Parambu",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "-6.233330",
          "reclong": "-40.700000",
          "year": "1967-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1967,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.9600694444444444,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              24.68333,
              11.63333
            ]
          },
          "id": "12316",
          "mass": "67.400000000000006",
          "name": "Kingai",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "11.633330",
          "reclong": "24.683330",
          "year": "1967-01-01T00:00:00.000",
          "value": 67.4,
          "dateYear": 1967,
          "log2Mass": 6.074676686294496,
          "dateNormal": 0.9600694444444444,
          "massNormal": 0.000002886956647258985,
          "logMassNormal": 0.24840091039341566
        },
        {
          "fall": "Fell",
          "id": "16974",
          "mass": "3.3",
          "name": "Niger (L6)",
          "nametype": "Valid",
          "recclass": "L6",
          "year": "1967-01-01T00:00:00.000",
          "value": 3.3,
          "dateYear": 1967,
          "log2Mass": 1.722466024471091,
          "dateNormal": 0.9600694444444444,
          "massNormal": 1.0000000434782627e-7,
          "logMassNormal": 0.07043372852512071
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              32.83333,
              2.71667
            ]
          },
          "id": "4910",
          "mass": "134",
          "name": "Awere",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "2.716670",
          "reclong": "32.833330",
          "year": "1968-01-01T00:00:00.000",
          "value": 134,
          "dateYear": 1968,
          "log2Mass": 7.066089190457772,
          "dateNormal": 0.9609375,
          "massNormal": 0.000005782608947069955,
          "logMassNormal": 0.28894097224809767
        },
        {
          ":@computed_region_cbhk_fwbd": "47",
          ":@computed_region_nnqa_25f4": "2142",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -73.95028,
              42.86083
            ]
          },
          "id": "23458",
          "mass": "283.3",
          "name": "Schenectady",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "42.860830",
          "reclong": "-73.950280",
          "year": "1968-01-01T00:00:00.000",
          "value": 283.3,
          "dateYear": 1968,
          "log2Mass": 8.146186791490736,
          "dateNormal": 0.9609375,
          "massNormal": 0.000012273913577126678,
          "logMassNormal": 0.33310747546557046
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -100.65,
              19.76667
            ]
          },
          "id": "34063",
          "mass": "460",
          "name": "San Pedro Jacuaro",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "19.766670",
          "reclong": "-100.650000",
          "year": "1968-01-01T00:00:00.000",
          "value": 460,
          "dateYear": 1968,
          "log2Mass": 8.845490050944376,
          "dateNormal": 0.9609375,
          "massNormal": 0.00001995652260680533,
          "logMassNormal": 0.36170283539333103
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -7.27,
              38.74028
            ]
          },
          "id": "12213",
          "mass": "25250",
          "name": "Juromenha",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "38.740280",
          "reclong": "-7.270000",
          "year": "1968-01-01T00:00:00.000",
          "value": 25250,
          "dateYear": 1968,
          "log2Mass": 14.623995767413883,
          "dateNormal": 0.9609375,
          "massNormal": 0.001097782656425333,
          "logMassNormal": 0.59799295498489
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.50222,
              44.24417
            ]
          },
          "id": "18813",
          "mass": "13.1",
          "name": "Piancaldoli",
          "nametype": "Valid",
          "recclass": "LL3.4",
          "reclat": "44.244170",
          "reclong": "11.502220",
          "year": "1968-01-01T00:00:00.000",
          "value": 13.1,
          "dateYear": 1968,
          "log2Mass": 3.711494906650088,
          "dateNormal": 0.9609375,
          "massNormal": 5.26086979395086e-7,
          "logMassNormal": 0.15176753617397576
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -6.33333,
              54.56667
            ]
          },
          "id": "5121",
          "mass": "5460",
          "name": "Bovedy",
          "nametype": "Valid",
          "recclass": "L3",
          "reclat": "54.566670",
          "reclong": "-6.333330",
          "year": "1969-01-01T00:00:00.000",
          "value": 5460,
          "dateYear": 1969,
          "log2Mass": 12.414685235807214,
          "dateNormal": 0.9618055555555556,
          "massNormal": 0.00023734783640642768,
          "logMassNormal": 0.5076515630502325
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              82.05,
              20.93694
            ]
          },
          "id": "18112",
          "mass": "4375",
          "name": "Patora",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "20.936940",
          "reclong": "82.050000",
          "year": "1969-01-01T00:00:00.000",
          "value": 4375,
          "dateYear": 1969,
          "log2Mass": 12.095067301607054,
          "dateNormal": 0.9618055555555556,
          "massNormal": 0.00019017392131190963,
          "logMassNormal": 0.49458199738717307
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              16.26333,
              50.53806
            ]
          },
          "id": "23737",
          "mass": "815.3",
          "name": "Suchy Dul",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "50.538060",
          "reclong": "16.263330",
          "year": "1969-01-01T00:00:00.000",
          "value": 815.3,
          "dateYear": 1969,
          "log2Mass": 9.671187204791815,
          "dateNormal": 0.9618055555555556,
          "massNormal": 0.00003540434936540649,
          "logMassNormal": 0.3954665952305756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -105.31667,
              26.96667
            ]
          },
          "id": "2278",
          "mass": "2000000",
          "name": "Allende",
          "nametype": "Valid",
          "recclass": "CV3",
          "reclat": "26.966670",
          "reclong": "-105.316670",
          "year": "1969-01-01T00:00:00.000",
          "value": 2000000,
          "dateYear": 1969,
          "log2Mass": 20.931568569324174,
          "dateNormal": 0.9618055555555556,
          "massNormal": 0.08695648204158618,
          "logMassNormal": 0.8559172705130311
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              145.2,
              -36.61667
            ]
          },
          "id": "16875",
          "mass": "100000",
          "name": "Murchison",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "-36.616670",
          "reclong": "145.200000",
          "year": "1969-01-01T00:00:00.000",
          "value": 100000,
          "dateYear": 1969,
          "log2Mass": 16.609640474436812,
          "dateNormal": 0.9618055555555556,
          "massNormal": 0.004347782797729687,
          "logMassNormal": 0.6791883795998638
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              37.5,
              48.7
            ]
          },
          "id": "2296",
          "mass": "600",
          "name": "Andreevka",
          "nametype": "Valid",
          "recclass": "L3",
          "reclat": "48.700000",
          "reclong": "37.500000",
          "year": "1969-01-01T00:00:00.000",
          "value": 600,
          "dateYear": 1969,
          "log2Mass": 9.228818690495881,
          "dateNormal": 0.9618055555555556,
          "massNormal": 0.000026043479393194756,
          "logMassNormal": 0.37737760920628044
        },
        {
          ":@computed_region_cbhk_fwbd": "20",
          ":@computed_region_nnqa_25f4": "2711",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -95.15,
              36.00833
            ]
          },
          "id": "14711",
          "mass": "17000",
          "name": "Lost City",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "36.008330",
          "reclong": "-95.150000",
          "year": "1970-01-01T00:00:00.000",
          "value": 17000,
          "dateYear": 1970,
          "log2Mass": 14.053247125912426,
          "dateNormal": 0.9626736111111112,
          "massNormal": 0.0007390869886559561,
          "logMassNormal": 0.5746543495781802
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              31.75,
              9.5
            ]
          },
          "id": "15394",
          "mass": "2000",
          "name": "Malakal",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "9.500000",
          "reclong": "31.750000",
          "year": "1970-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1970,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.9626736111111112,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.33333,
              9.5
            ]
          },
          "id": "16941",
          "mass": "2450",
          "name": "Nejo",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "9.500000",
          "reclong": "35.333330",
          "year": "1970-01-01T00:00:00.000",
          "value": 2450,
          "dateYear": 1970,
          "log2Mass": 11.258566033889933,
          "dateNormal": 0.9626736111111112,
          "massNormal": 0.00010647826549905503,
          "logMassNormal": 0.46037644420687235
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -11.33333,
              16.58333
            ]
          },
          "id": "12303",
          "mass": "1500",
          "name": "Kiffa",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "16.583330",
          "reclong": "-11.333330",
          "year": "1970-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1970,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.9626736111111112,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              1.53333,
              14.25
            ]
          },
          "id": "23999",
          "mass": "3000",
          "name": "Tillaberi",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "14.250000",
          "reclong": "1.533330",
          "year": "1970-01-01T00:00:00.000",
          "value": 3000,
          "dateYear": 1970,
          "log2Mass": 11.550746785383243,
          "dateNormal": 0.9626736111111112,
          "massNormal": 0.0001303913100170135,
          "logMassNormal": 0.4723240701330585
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              120.78333,
              32.91667
            ]
          },
          "id": "7708",
          "mass": "5500",
          "name": "Dongtai",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "32.916670",
          "reclong": "120.783330",
          "year": "1970-01-01T00:00:00.000",
          "value": 5500,
          "dateYear": 1970,
          "log2Mass": 12.425215903299385,
          "dateNormal": 0.9626736111111112,
          "massNormal": 0.00023908696691682464,
          "logMassNormal": 0.5080821748386768
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              31.31667,
              -27.2
            ]
          },
          "id": "7755",
          "mass": "3230",
          "name": "Dwaleni",
          "nametype": "Valid",
          "recclass": "H4-6",
          "reclat": "-27.200000",
          "reclong": "31.316670",
          "year": "1970-01-01T00:00:00.000",
          "value": 3230,
          "dateYear": 1970,
          "log2Mass": 11.657318449581288,
          "dateNormal": 0.9626736111111112,
          "massNormal": 0.0001403913104517961,
          "logMassNormal": 0.4766819149659633
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -49.93333,
              -22.25
            ]
          },
          "id": "15422",
          "mass": "2500",
          "name": "Marilia",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-22.250000",
          "reclong": "-49.933330",
          "year": "1971-01-01T00:00:00.000",
          "value": 2500,
          "dateYear": 1971,
          "log2Mass": 11.287712379549449,
          "dateNormal": 0.9635416666666666,
          "massNormal": 0.00010865217863705124,
          "logMassNormal": 0.4615682736935016
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              105.18333,
              25.15
            ]
          },
          "id": "2305",
          "mass": "2500",
          "name": "Anlong",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "25.150000",
          "reclong": "105.183330",
          "year": "1971-01-01T00:00:00.000",
          "value": 2500,
          "dateYear": 1971,
          "log2Mass": 11.287712379549449,
          "dateNormal": 0.9635416666666666,
          "massNormal": 0.00010865217863705124,
          "logMassNormal": 0.4615682736935016
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              22.06194,
              60.24556
            ]
          },
          "id": "11859",
          "mass": "1544",
          "name": "Haverö",
          "nametype": "Valid",
          "recclass": "Ureilite",
          "reclat": "60.245560",
          "reclong": "22.061940",
          "year": "1971-01-01T00:00:00.000",
          "value": 1544,
          "dateYear": 1971,
          "log2Mass": 10.59245703726808,
          "dateNormal": 0.9635416666666666,
          "massNormal": 0.00006708695943856346,
          "logMassNormal": 0.433138438017107
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.21667,
              11.85
            ]
          },
          "id": "12220",
          "mass": "13400",
          "name": "Kabo",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "11.850000",
          "reclong": "8.216670",
          "year": "1971-01-01T00:00:00.000",
          "value": 13400,
          "dateYear": 1971,
          "log2Mass": 13.709945380232497,
          "dateNormal": 0.9635416666666666,
          "massNormal": 0.000582565242720228,
          "logMassNormal": 0.5606163240880432
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.52722,
              45.29167
            ]
          },
          "id": "17930",
          "mass": "177",
          "name": "Noventa Vicentina",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "45.291670",
          "reclong": "11.527220",
          "year": "1971-01-01T00:00:00.000",
          "value": 177,
          "dateYear": 1971,
          "log2Mass": 7.467605550082998,
          "dateNormal": 0.9635416666666666,
          "massNormal": 0.000007652174245746706,
          "logMassNormal": 0.30535946403281766
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              125.66667,
              43.5
            ]
          },
          "id": "23582",
          "mass": "3900",
          "name": "Shuangyang",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.500000",
          "reclong": "125.666670",
          "year": "1971-01-01T00:00:00.000",
          "value": 3900,
          "dateYear": 1971,
          "log2Mass": 11.929258408636972,
          "dateNormal": 0.9635416666666666,
          "massNormal": 0.0001695217465009455,
          "logMassNormal": 0.4878018702969498
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.68333,
              13.5
            ]
          },
          "id": "11442",
          "mass": "288",
          "name": "Guibga",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "13.500000",
          "reclong": "-0.683330",
          "year": "1972-01-01T00:00:00.000",
          "value": 288,
          "dateYear": 1972,
          "log2Mass": 8.169925001442312,
          "dateNormal": 0.9644097222222222,
          "massNormal": 0.000012478261412098323,
          "logMassNormal": 0.3340781597122539
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -54.5,
              -25.5
            ]
          },
          "id": "12043",
          "mass": "7000",
          "name": "Ipiranga",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-25.500000",
          "reclong": "-54.500000",
          "year": "1972-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 1972,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.9644097222222222,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              26.18333,
              -26.15
            ]
          },
          "id": "14646",
          "mass": "4000",
          "name": "Lichtenberg",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-26.150000",
          "reclong": "26.183330",
          "year": "1973-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1973,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.9652777777777778,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "id": "16923",
          "mass": "1.4",
          "name": "Natal",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "year": "1973-01-01T00:00:00.000",
          "value": 1.4,
          "dateYear": 1973,
          "log2Mass": 0.48542682717024166,
          "dateNormal": 0.9652777777777778,
          "massNormal": 1.7391305103969782e-8,
          "logMassNormal": 0.019849692753282706
        },
        {
          ":@computed_region_cbhk_fwbd": "9",
          ":@computed_region_nnqa_25f4": "1448",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -105.24139,
              38.47028
            ]
          },
          "id": "5253",
          "mass": "1400",
          "name": "Canon City",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "38.470280",
          "reclong": "-105.241390",
          "year": "1973-01-01T00:00:00.000",
          "value": 1400,
          "dateYear": 1973,
          "log2Mass": 10.451211111832329,
          "dateNormal": 0.9652777777777778,
          "massNormal": 0.00006082608960113433,
          "logMassNormal": 0.42736272051320096
        },
        {
          ":@computed_region_cbhk_fwbd": "8",
          ":@computed_region_nnqa_25f4": "1174",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -117.6625,
              33.48472
            ]
          },
          "id": "23128",
          "mass": "56",
          "name": "San Juan Capistrano",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "33.484720",
          "reclong": "-117.662500",
          "year": "1973-01-01T00:00:00.000",
          "value": 56,
          "dateYear": 1973,
          "log2Mass": 5.807354922057604,
          "dateNormal": 0.9652777777777778,
          "massNormal": 0.000002391304451795846,
          "logMassNormal": 0.2374697986596448
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              38.08333,
              48.28333
            ]
          },
          "id": "10949",
          "mass": "3618",
          "name": "Gorlovka",
          "nametype": "Valid",
          "recclass": "H3.7",
          "reclat": "48.283330",
          "reclong": "38.083330",
          "year": "1974-01-01T00:00:00.000",
          "value": 3618,
          "dateYear": 1974,
          "log2Mass": 11.82097669262124,
          "dateNormal": 0.9661458333333334,
          "massNormal": 0.0001572608764026468,
          "logMassNormal": 0.4833740993675185
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              12.08333,
              8.96667
            ]
          },
          "id": "15451",
          "mass": "4850",
          "name": "Mayo Belwa",
          "nametype": "Valid",
          "recclass": "Aubrite",
          "reclat": "8.966670",
          "reclong": "12.083330",
          "year": "1974-01-01T00:00:00.000",
          "value": 4850,
          "dateYear": 1974,
          "log2Mass": 12.243769031961852,
          "dateNormal": 0.9661458333333334,
          "massNormal": 0.00021082609612287374,
          "logMassNormal": 0.5006625918129711
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -9.57028,
              16.39806
            ]
          },
          "id": "423",
          "mass": "1000",
          "name": "Aioun el Atrouss",
          "nametype": "Valid",
          "recclass": "Diogenite-pm",
          "reclat": "16.398060",
          "reclong": "-9.570280",
          "year": "1974-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1974,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.9661458333333334,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          ":@computed_region_cbhk_fwbd": "24",
          ":@computed_region_nnqa_25f4": "1040",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -73.13333,
              41.2
            ]
          },
          "id": "23728",
          "mass": "50",
          "name": "Stratford",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "41.200000",
          "reclong": "-73.133330",
          "year": "1974-01-01T00:00:00.000",
          "value": 50,
          "dateYear": 1974,
          "log2Mass": 5.643856189774724,
          "dateNormal": 0.9661458333333334,
          "massNormal": 0.000002130434875236299,
          "logMassNormal": 0.2307841368467508
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              51.5,
              33.75
            ]
          },
          "id": "16909",
          "mass": "2700",
          "name": "Naragh",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "33.750000",
          "reclong": "51.500000",
          "year": "1974-01-01T00:00:00.000",
          "value": 2700,
          "dateYear": 1974,
          "log2Mass": 11.398743691938193,
          "dateNormal": 0.9661458333333334,
          "massNormal": 0.00011734783118903614,
          "logMassNormal": 0.4661084789593663
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              15.83333,
              -11.85
            ]
          },
          "id": "12199",
          "mass": "483",
          "name": "Jolomba",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "-11.850000",
          "reclong": "15.833330",
          "year": "1974-01-01T00:00:00.000",
          "value": 483,
          "dateYear": 1974,
          "log2Mass": 8.915879378835774,
          "dateNormal": 0.9661458333333334,
          "massNormal": 0.000020956522650283594,
          "logMassNormal": 0.36458114053336466
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              109.5,
              30.3
            ]
          },
          "id": "10038",
          "mass": "8000",
          "name": "Enshi",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "30.300000",
          "reclong": "109.500000",
          "year": "1974-01-01T00:00:00.000",
          "value": 8000,
          "dateYear": 1974,
          "log2Mass": 12.965784284662087,
          "dateNormal": 0.9661458333333334,
          "massNormal": 0.0003477826238166358,
          "logMassNormal": 0.5301866727395023
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              145.36667,
              -6.03333
            ]
          },
          "id": "12004",
          "mass": "7330",
          "name": "Ijopega",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "-6.033330",
          "reclong": "145.366670",
          "year": "1975-01-01T00:00:00.000",
          "value": 7330,
          "dateYear": 1975,
          "log2Mass": 12.839597483021175,
          "dateNormal": 0.9670138888888888,
          "massNormal": 0.0003186521877674864,
          "logMassNormal": 0.5250267411043001
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              121.48333,
              29.86667
            ]
          },
          "id": "16980",
          "mass": "14250",
          "name": "Ningbo",
          "nametype": "Valid",
          "recclass": "Iron, IVA",
          "reclat": "29.866670",
          "reclong": "121.483330",
          "year": "1975-01-01T00:00:00.000",
          "value": 14250,
          "dateYear": 1975,
          "log2Mass": 13.798674298826828,
          "dateNormal": 0.9670138888888888,
          "massNormal": 0.0006195217660661638,
          "logMassNormal": 0.5642445573743977
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              112.76667,
              -7.75
            ]
          },
          "id": "23795",
          "mass": "10500",
          "name": "Tambakwatu",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-7.750000",
          "reclong": "112.766670",
          "year": "1975-01-01T00:00:00.000",
          "value": 10500,
          "dateYear": 1975,
          "log2Mass": 13.358101707440847,
          "dateNormal": 0.9670138888888888,
          "massNormal": 0.000456478280716447,
          "logMassNormal": 0.5462290088199245
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              120.06667,
              33.65
            ]
          },
          "id": "23531",
          "mass": "605",
          "name": "Sheyang",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "33.650000",
          "reclong": "120.066670",
          "year": "1976-01-01T00:00:00.000",
          "value": 605,
          "dateYear": 1976,
          "log2Mass": 9.240791332161956,
          "dateNormal": 0.9678819444444444,
          "massNormal": 0.00002626087070699438,
          "logMassNormal": 0.3778671850706844
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              29.83333,
              -1.45
            ]
          },
          "id": "22780",
          "mass": "465.5",
          "name": "Ruhobobo",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-1.450000",
          "reclong": "29.833330",
          "year": "1976-01-01T00:00:00.000",
          "value": 465.5,
          "dateYear": 1976,
          "log2Mass": 8.862637357558794,
          "dateNormal": 0.9678819444444444,
          "massNormal": 0.000020195653051984914,
          "logMassNormal": 0.36240400959465546
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              71.42722,
              22.37778
            ]
          },
          "id": "6698",
          "mass": "45000",
          "name": "Dhajala",
          "nametype": "Valid",
          "recclass": "H3.8",
          "reclat": "22.377780",
          "reclong": "71.427220",
          "year": "1976-01-01T00:00:00.000",
          "value": 45000,
          "dateYear": 1976,
          "log2Mass": 15.45763738099176,
          "dateNormal": 0.9678819444444444,
          "massNormal": 0.0019564783459338412,
          "logMassNormal": 0.6320815734329768
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              33.91667,
              -13.66667
            ]
          },
          "id": "7725",
          "mass": "642",
          "name": "Dowa",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "-13.666670",
          "reclong": "33.916670",
          "year": "1976-01-01T00:00:00.000",
          "value": 642,
          "dateYear": 1976,
          "log2Mass": 9.326429487122303,
          "dateNormal": 0.9678819444444444,
          "massNormal": 0.000027869566429111582,
          "logMassNormal": 0.38136903327678845
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              106.46667,
              26.53333
            ]
          },
          "id": "18908",
          "mass": "2600",
          "name": "Qingzhen",
          "nametype": "Valid",
          "recclass": "EH3",
          "reclat": "26.533330",
          "reclong": "106.466670",
          "year": "1976-01-01T00:00:00.000",
          "value": 2600,
          "dateYear": 1976,
          "log2Mass": 11.344295907915816,
          "dateNormal": 0.9678819444444444,
          "massNormal": 0.0001130000049130437,
          "logMassNormal": 0.46388204291700424
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              126.16667,
              44.05
            ]
          },
          "id": "12171",
          "mass": "4000000",
          "name": "Jilin",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.050000",
          "reclong": "126.166670",
          "year": "1976-01-01T00:00:00.000",
          "value": 4000000,
          "dateYear": 1976,
          "log2Mass": 21.931568569324174,
          "dateNormal": 0.9678819444444444,
          "massNormal": 0.1739130075614351,
          "logMassNormal": 0.8968084855062258
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11,
              60.66667
            ]
          },
          "id": "11196",
          "mass": "45.5",
          "name": "Grefsheim",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "60.666670",
          "reclong": "11.000000",
          "year": "1976-01-01T00:00:00.000",
          "value": 45.5,
          "dateYear": 1976,
          "log2Mass": 5.507794640198696,
          "dateNormal": 0.9678819444444444,
          "massNormal": 0.000001934782692816639,
          "logMassNormal": 0.2252204147707302
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              118.8,
              35.2
            ]
          },
          "id": "12210",
          "mass": "950",
          "name": "Junan",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "35.200000",
          "reclong": "118.800000",
          "year": "1976-01-01T00:00:00.000",
          "value": 950,
          "dateYear": 1976,
          "log2Mass": 9.89178370321831,
          "dateNormal": 0.9678819444444444,
          "massNormal": 0.00004126087135916832,
          "logMassNormal": 0.4044870540744793
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -99.9,
              16.88333
            ]
          },
          "id": "10",
          "mass": "1914",
          "name": "Acapulco",
          "nametype": "Valid",
          "recclass": "Acapulcoite",
          "reclat": "16.883330",
          "reclong": "-99.900000",
          "year": "1976-01-01T00:00:00.000",
          "value": 1914,
          "dateYear": 1976,
          "log2Mass": 10.902375114486025,
          "dateNormal": 0.9678819444444444,
          "massNormal": 0.0000831739166597355,
          "logMassNormal": 0.4458113647429035
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -51.83333,
              -23.2
            ]
          },
          "id": "12003",
          "mass": "1200",
          "name": "Iguaracu",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-23.200000",
          "reclong": "-51.833330",
          "year": "1977-01-01T00:00:00.000",
          "value": 1200,
          "dateYear": 1977,
          "log2Mass": 10.228818690495881,
          "dateNormal": 0.96875,
          "massNormal": 0.00005213043704914944,
          "logMassNormal": 0.41826882419947514
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              39.3,
              44.51667
            ]
          },
          "id": "12383",
          "mass": "23",
          "name": "Kutais",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "44.516670",
          "reclong": "39.300000",
          "year": "1977-01-01T00:00:00.000",
          "value": 23,
          "dateYear": 1977,
          "log2Mass": 4.523561956057013,
          "dateNormal": 0.96875,
          "massNormal": 9.565217807183382e-7,
          "logMassNormal": 0.18497394448016358
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -97.37,
              25.37
            ]
          },
          "id": "45977",
          "mass": "17226",
          "name": "El Paso de Aguila",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "25.370000",
          "reclong": "-97.370000",
          "year": "1977-01-01T00:00:00.000",
          "value": 17226,
          "dateYear": 1977,
          "log2Mass": 14.072300115928337,
          "dateNormal": 0.96875,
          "massNormal": 0.000748913076039699,
          "logMassNormal": 0.5754334494891841
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              111.75,
              29.08333
            ]
          },
          "id": "5322",
          "mass": "1810",
          "name": "Changde",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "29.083330",
          "reclong": "111.750000",
          "year": "1977-01-01T00:00:00.000",
          "value": 1810,
          "dateYear": 1977,
          "log2Mass": 10.821773981970567,
          "dateNormal": 0.96875,
          "massNormal": 0.00007865217733270336,
          "logMassNormal": 0.44251548650451894
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              115.83333,
              33.83333
            ]
          },
          "id": "5090",
          "mass": "7500",
          "name": "Bo Xian",
          "nametype": "Valid",
          "recclass": "LL3.9",
          "reclat": "33.833330",
          "reclong": "115.833330",
          "year": "1977-01-01T00:00:00.000",
          "value": 7500,
          "dateYear": 1977,
          "log2Mass": 12.872674880270605,
          "dateNormal": 0.96875,
          "massNormal": 0.00032604349243667356,
          "logMassNormal": 0.5263793160666419
        },
        {
          ":@computed_region_cbhk_fwbd": "36",
          ":@computed_region_nnqa_25f4": "1327",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -85.75,
              38.25
            ]
          },
          "id": "14716",
          "mass": "1300",
          "name": "Louisville",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.250000",
          "reclong": "-85.750000",
          "year": "1977-01-01T00:00:00.000",
          "value": 1300,
          "dateYear": 1977,
          "log2Mass": 10.344295907915816,
          "dateNormal": 0.96875,
          "massNormal": 0.00005647826332514188,
          "logMassNormal": 0.4229908279238096
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -111.3375,
              53.415
            ]
          },
          "id": "12039",
          "mass": "4576",
          "name": "Innisfree",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "53.415000",
          "reclong": "-111.337500",
          "year": "1977-01-01T00:00:00.000",
          "value": 4576,
          "dateYear": 1977,
          "log2Mass": 12.159871336778389,
          "dateNormal": 0.96875,
          "massNormal": 0.00019891305212665444,
          "logMassNormal": 0.49723191312179066
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              44.21556,
              35.27333
            ]
          },
          "id": "2284",
          "mass": "6000",
          "name": "Alta'ameem",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "35.273330",
          "reclong": "44.215560",
          "year": "1977-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 1977,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.96875,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              115.9,
              32.9
            ]
          },
          "id": "10840",
          "mass": "2500",
          "name": "Fuyang",
          "nametype": "Valid",
          "recclass": "Stone-uncl",
          "reclat": "32.900000",
          "reclong": "115.900000",
          "year": "1977-01-01T00:00:00.000",
          "value": 2500,
          "dateYear": 1977,
          "log2Mass": 11.287712379549449,
          "dateNormal": 0.96875,
          "massNormal": 0.00010865217863705124,
          "logMassNormal": 0.4615682736935016
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.97667,
              47.47083
            ]
          },
          "id": "5357",
          "mass": "4000",
          "name": "Chitenay",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "47.470830",
          "reclong": "0.976670",
          "year": "1978-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 1978,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.9696180555555556,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -102.13333,
              24.3
            ]
          },
          "id": "17938",
          "mass": "50000",
          "name": "Nuevo Mercurio",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "24.300000",
          "reclong": "-102.133330",
          "year": "1978-01-01T00:00:00.000",
          "value": 50000,
          "dateYear": 1978,
          "log2Mass": 15.609640474436812,
          "dateNormal": 0.9696180555555556,
          "massNormal": 0.0021738696597334633,
          "logMassNormal": 0.6382971646066691
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              118.98333,
              31.63333
            ]
          },
          "id": "14659",
          "mass": "498",
          "name": "Lishui",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "31.633330",
          "reclong": "118.983330",
          "year": "1978-01-01T00:00:00.000",
          "value": 498,
          "dateYear": 1978,
          "log2Mass": 8.960001932068081,
          "dateNormal": 0.9696180555555556,
          "massNormal": 0.00002160869659168246,
          "logMassNormal": 0.36638536534363564
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              108.1,
              -6.95
            ]
          },
          "id": "5364",
          "mass": "1600",
          "name": "Cilimus",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "-6.950000",
          "reclong": "108.100000",
          "year": "1979-01-01T00:00:00.000",
          "value": 1600,
          "dateYear": 1979,
          "log2Mass": 10.643856189774725,
          "dateNormal": 0.9704861111111112,
          "massNormal": 0.00006952174215311922,
          "logMassNormal": 0.4352402118127242
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              105.8,
              39.7
            ]
          },
          "id": "12074",
          "mass": "20500",
          "name": "Jartai",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "39.700000",
          "reclong": "105.800000",
          "year": "1979-01-01T00:00:00.000",
          "value": 20500,
          "dateYear": 1979,
          "log2Mass": 14.32333628928017,
          "dateNormal": 0.9704861111111112,
          "massNormal": 0.0008912609083156917,
          "logMassNormal": 0.5856986236247828
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              48.3,
              15
            ]
          },
          "id": "12228",
          "mass": "2000",
          "name": "Kaidun",
          "nametype": "Valid",
          "recclass": "CR2",
          "reclat": "15.000000",
          "reclong": "48.300000",
          "year": "1980-01-01T00:00:00.000",
          "value": 2000,
          "dateYear": 1980,
          "log2Mass": 10.965784284662087,
          "dateNormal": 0.9713541666666666,
          "massNormal": 0.00008691304725708902,
          "logMassNormal": 0.4484042427531129
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "2885",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -99.03333,
              31.25
            ]
          },
          "id": "22602",
          "mass": "1900",
          "name": "Richland Springs",
          "nametype": "Valid",
          "recclass": "OC",
          "reclat": "31.250000",
          "reclong": "-99.033330",
          "year": "1980-01-01T00:00:00.000",
          "value": 1900,
          "dateYear": 1980,
          "log2Mass": 10.89178370321831,
          "dateNormal": 0.9713541666666666,
          "massNormal": 0.00008256522098109656,
          "logMassNormal": 0.445378269067674
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              111.7,
              34.8
            ]
          },
          "id": "16631",
          "mass": "1100",
          "name": "Mianchi",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "34.800000",
          "reclong": "111.700000",
          "year": "1980-01-01T00:00:00.000",
          "value": 1100,
          "dateYear": 1980,
          "log2Mass": 10.103287808412022,
          "dateNormal": 0.9713541666666666,
          "massNormal": 0.00004778261077315699,
          "logMassNormal": 0.4131357139118987
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              103.3,
              24.8
            ]
          },
          "id": "14754",
          "mass": "2520",
          "name": "Lunan",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "24.800000",
          "reclong": "103.300000",
          "year": "1980-01-01T00:00:00.000",
          "value": 2520,
          "dateYear": 1980,
          "log2Mass": 11.29920801838728,
          "dateNormal": 0.9713541666666666,
          "massNormal": 0.00010952174389224973,
          "logMassNormal": 0.46203834433270347
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              118.4,
              37.1
            ]
          },
          "id": "11437",
          "mass": "1900",
          "name": "Guangrao",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "37.100000",
          "reclong": "118.400000",
          "year": "1980-01-01T00:00:00.000",
          "value": 1900,
          "dateYear": 1980,
          "log2Mass": 10.89178370321831,
          "dateNormal": 0.9713541666666666,
          "massNormal": 0.00008256522098109656,
          "logMassNormal": 0.445378269067674
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.24222,
              -15.21222
            ]
          },
          "id": "15371",
          "mass": "93200",
          "name": "Machinga",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-15.212220",
          "reclong": "35.242220",
          "year": "1981-01-01T00:00:00.000",
          "value": 93200,
          "dateYear": 1981,
          "log2Mass": 16.508042334429003,
          "dateNormal": 0.9722222222222222,
          "massNormal": 0.0040521306109622,
          "logMassNormal": 0.6750339082138958
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              42.81667,
              39.91667
            ]
          },
          "id": "433",
          "mass": "50000",
          "name": "Akyumak",
          "nametype": "Valid",
          "recclass": "Iron, IVA",
          "reclat": "39.916670",
          "reclong": "42.816670",
          "year": "1981-01-01T00:00:00.000",
          "value": 50000,
          "dateYear": 1981,
          "log2Mass": 15.609640474436812,
          "dateNormal": 0.9722222222222222,
          "massNormal": 0.0021738696597334633,
          "logMassNormal": 0.6382971646066691
        },
        {
          ":@computed_region_cbhk_fwbd": "12",
          ":@computed_region_nnqa_25f4": "2409",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -122.96944,
              44.97917
            ]
          },
          "id": "23107",
          "mass": "61.4",
          "name": "Salem",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "44.979170",
          "reclong": "-122.969440",
          "year": "1981-01-01T00:00:00.000",
          "value": 61.4,
          "dateYear": 1981,
          "log2Mass": 5.940166750482817,
          "dateNormal": 0.9722222222222222,
          "massNormal": 0.000002626087070699438,
          "logMassNormal": 0.24290063568941947
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              42.41667,
              9.36667
            ]
          },
          "id": "11465",
          "mass": "34650",
          "name": "Gursum",
          "nametype": "Valid",
          "recclass": "H4/5",
          "reclat": "9.366670",
          "reclong": "42.416670",
          "year": "1981-01-01T00:00:00.000",
          "value": 34650,
          "dateYear": 1981,
          "log2Mass": 15.080567731911938,
          "dateNormal": 0.9722222222222222,
          "massNormal": 0.0015064783263686228,
          "logMassNormal": 0.6166627373450453
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              161.80833,
              64.02
            ]
          },
          "id": "18019",
          "mass": "250000",
          "name": "Omolon",
          "nametype": "Valid",
          "recclass": "Pallasite, PMG",
          "reclat": "64.020000",
          "reclong": "161.808330",
          "year": "1981-01-01T00:00:00.000",
          "value": 250000,
          "dateYear": 1981,
          "log2Mass": 17.931568569324174,
          "dateNormal": 0.9722222222222222,
          "massNormal": 0.010869522211718358,
          "logMassNormal": 0.7332436255334471
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              101.63333,
              17.9
            ]
          },
          "id": "5345",
          "mass": "367",
          "name": "Chiang Khan",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "17.900000",
          "reclong": "101.633330",
          "year": "1981-01-01T00:00:00.000",
          "value": 367,
          "dateYear": 1981,
          "log2Mass": 8.519636252843213,
          "dateNormal": 0.9722222222222222,
          "massNormal": 0.000015913044170132356,
          "logMassNormal": 0.34837827767882734
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              8.83333,
              35.61667
            ]
          },
          "id": "5504",
          "mass": "18000",
          "name": "Dahmani",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "35.616670",
          "reclong": "8.833330",
          "year": "1981-01-01T00:00:00.000",
          "value": 18000,
          "dateYear": 1981,
          "log2Mass": 14.1357092861044,
          "dateNormal": 0.9722222222222222,
          "massNormal": 0.0007825652514158805,
          "logMassNormal": 0.5780263274993934
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              121.5,
              32.08333
            ]
          },
          "id": "18907",
          "mass": "1275",
          "name": "Qidong",
          "nametype": "Valid",
          "recclass": "L/LL5",
          "reclat": "32.083330",
          "reclong": "121.500000",
          "year": "1982-01-01T00:00:00.000",
          "value": 1275,
          "dateYear": 1982,
          "log2Mass": 10.31628153174622,
          "dateNormal": 0.9730902777777778,
          "massNormal": 0.000055391306756143773,
          "logMassNormal": 0.4218452860449584
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.05,
              22.98333
            ]
          },
          "id": "11448",
          "mass": "2449",
          "name": "Gujargaon",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "22.983330",
          "reclong": "76.050000",
          "year": "1982-01-01T00:00:00.000",
          "value": 2449,
          "dateYear": 1982,
          "log2Mass": 11.257977058563979,
          "dateNormal": 0.9730902777777778,
          "massNormal": 0.00010643478723629509,
          "logMassNormal": 0.4603523602901931
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              105.90667,
              32.925
            ]
          },
          "id": "16981",
          "mass": "4610",
          "name": "Ningqiang",
          "nametype": "Valid",
          "recclass": "C3-ung",
          "reclat": "32.925000",
          "reclong": "105.906670",
          "year": "1983-01-01T00:00:00.000",
          "value": 4610,
          "dateYear": 1983,
          "log2Mass": 12.1705510353167,
          "dateNormal": 0.9739583333333334,
          "massNormal": 0.00020039131306049188,
          "logMassNormal": 0.4976686189707833
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              70.2,
              28.225
            ]
          },
          "id": "31302",
          "mass": "67225",
          "name": "Rahimyar Khan",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "28.225000",
          "reclong": "70.200000",
          "year": "1983-01-01T00:00:00.000",
          "value": 67225,
          "dateYear": 1983,
          "log2Mass": 16.036710229647596,
          "dateNormal": 0.9739583333333334,
          "massNormal": 0.0029227827357731625,
          "logMassNormal": 0.6557605657840843
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              28,
              14
            ]
          },
          "id": "12300",
          "mass": "100000",
          "name": "Kidairat",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "14.000000",
          "reclong": "28.000000",
          "year": "1983-01-01T00:00:00.000",
          "value": 100000,
          "dateYear": 1983,
          "log2Mass": 16.609640474436812,
          "dateNormal": 0.9739583333333334,
          "massNormal": 0.004347782797729687,
          "logMassNormal": 0.6791883795998638
        },
        {
          ":@computed_region_cbhk_fwbd": "39",
          ":@computed_region_nnqa_25f4": "2740",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -84.1,
              35.8
            ]
          },
          "id": "15436",
          "mass": "1443",
          "name": "Maryville",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "35.800000",
          "reclong": "-84.100000",
          "year": "1983-01-01T00:00:00.000",
          "value": 1443,
          "dateYear": 1983,
          "log2Mass": 10.494855584491198,
          "dateNormal": 0.9739583333333334,
          "massNormal": 0.00006269565489981108,
          "logMassNormal": 0.42914739602795937
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              111.2,
              -7.71667
            ]
          },
          "id": "12209",
          "mass": "32490",
          "name": "Jumapalo",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-7.716670",
          "reclong": "111.200000",
          "year": "1984-01-01T00:00:00.000",
          "value": 32490,
          "dateYear": 1984,
          "log2Mass": 14.987708123216846,
          "dateNormal": 0.9748263888888888,
          "massNormal": 0.001412565278807186,
          "logMassNormal": 0.6128655951217103
        },
        {
          ":@computed_region_cbhk_fwbd": "31",
          ":@computed_region_nnqa_25f4": "67",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -81.87278,
              32.1025
            ]
          },
          "id": "5374",
          "mass": "1455",
          "name": "Claxton",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "32.102500",
          "reclong": "-81.872780",
          "year": "1984-01-01T00:00:00.000",
          "value": 1455,
          "dateYear": 1984,
          "log2Mass": 10.506803437795647,
          "dateNormal": 0.9748263888888888,
          "massNormal": 0.00006321739405293018,
          "logMassNormal": 0.4296359582661387
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.03333,
              12.85
            ]
          },
          "id": "44882",
          "mass": "4162",
          "name": "Gashua",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "12.850000",
          "reclong": "11.033330",
          "year": "1984-01-01T00:00:00.000",
          "value": 4162,
          "dateYear": 1984,
          "log2Mass": 12.023061249735335,
          "dateNormal": 0.9748263888888888,
          "massNormal": 0.0001809130513440457,
          "logMassNormal": 0.49163758243927547
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              121.8,
              32.11667
            ]
          },
          "id": "16907",
          "mass": "529",
          "name": "Nantong",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "32.116670",
          "reclong": "121.800000",
          "year": "1984-01-01T00:00:00.000",
          "value": 529,
          "dateYear": 1984,
          "log2Mass": 9.047123912114026,
          "dateNormal": 0.9748263888888888,
          "massNormal": 0.00002295652273724012,
          "logMassNormal": 0.36994788896032715
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.65833,
              11.49167
            ]
          },
          "id": "11449",
          "mass": "100000",
          "name": "Gujba",
          "nametype": "Valid",
          "recclass": "CBa",
          "reclat": "11.491670",
          "reclong": "11.658330",
          "year": "1984-01-01T00:00:00.000",
          "value": 100000,
          "dateYear": 1984,
          "log2Mass": 16.609640474436812,
          "dateNormal": 0.9748263888888888,
          "massNormal": 0.004347782797729687,
          "logMassNormal": 0.6791883795998638
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              140.78556,
              40.81056
            ]
          },
          "id": "2313",
          "mass": "320",
          "name": "Aomori",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "40.810560",
          "reclong": "140.785560",
          "year": "1984-01-01T00:00:00.000",
          "value": 320,
          "dateYear": 1984,
          "log2Mass": 8.321928094887362,
          "dateNormal": 0.9748263888888888,
          "massNormal": 0.000013869565820415905,
          "logMassNormal": 0.3402937508859461
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              115.67639,
              -33.15639
            ]
          },
          "id": "5051",
          "mass": "488.1",
          "name": "Binningup",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "-33.156390",
          "reclong": "115.676390",
          "year": "1984-01-01T00:00:00.000",
          "value": 488.1,
          "dateYear": 1984,
          "log2Mass": 8.931032941506322,
          "dateNormal": 0.9748263888888888,
          "massNormal": 0.00002117826179035921,
          "logMassNormal": 0.3652007881224389
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -58.16667,
              -31.23333
            ]
          },
          "id": "12396",
          "mass": "45000",
          "name": "La Criolla",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-31.233330",
          "reclong": "-58.166670",
          "year": "1985-01-01T00:00:00.000",
          "value": 45000,
          "dateYear": 1985,
          "log2Mass": 15.45763738099176,
          "dateNormal": 0.9756944444444444,
          "massNormal": 0.0019564783459338412,
          "logMassNormal": 0.6320815734329768
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.05,
              52.75
            ]
          },
          "id": "23114",
          "mass": "43",
          "name": "Salzwedel",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "52.750000",
          "reclong": "11.050000",
          "year": "1985-01-01T00:00:00.000",
          "value": 43,
          "dateYear": 1985,
          "log2Mass": 5.426264754702098,
          "dateNormal": 0.9756944444444444,
          "massNormal": 0.0000018260870359168277,
          "logMassNormal": 0.22188655869451826
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              118.99,
              32.94667
            ]
          },
          "id": "23984",
          "mass": "2232",
          "name": "Tianzhang",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "32.946670",
          "reclong": "118.990000",
          "year": "1986-01-01T00:00:00.000",
          "value": 2232,
          "dateYear": 1986,
          "log2Mass": 11.124121311829187,
          "dateNormal": 0.9765625,
          "massNormal": 0.00009700000421739149,
          "logMassNormal": 0.4548788361723861
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              133.95,
              34.3
            ]
          },
          "id": "12342",
          "mass": "11510",
          "name": "Kokubunji",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "34.300000",
          "reclong": "133.950000",
          "year": "1986-01-01T00:00:00.000",
          "value": 11510,
          "dateYear": 1986,
          "log2Mass": 13.490600213019594,
          "dateNormal": 0.9765625,
          "massNormal": 0.0005003913261039707,
          "logMassNormal": 0.5516470336978221
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -6.57717,
              30.18
            ]
          },
          "id": "18050",
          "mass": "1215.5",
          "name": "Oued el Hadjar",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "30.180000",
          "reclong": "-6.577170",
          "year": "1986-01-01T00:00:00.000",
          "value": 1215.5,
          "dateYear": 1986,
          "log2Mass": 10.247334178028728,
          "dateNormal": 0.9765625,
          "massNormal": 0.00005280435012192827,
          "logMassNormal": 0.4190259449808846
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              126.19611,
              46.24167
            ]
          },
          "id": "12464",
          "mass": "1282",
          "name": "Lanxi",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.241670",
          "reclong": "126.196110",
          "year": "1986-01-01T00:00:00.000",
          "value": 1282,
          "dateYear": 1986,
          "log2Mass": 10.324180546618742,
          "dateNormal": 0.9765625,
          "massNormal": 0.000055695654595463244,
          "logMassNormal": 0.4221682863603451
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              113.46667,
              31.61667
            ]
          },
          "id": "23738",
          "mass": "260000",
          "name": "Suizhou",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "31.616670",
          "reclong": "113.466670",
          "year": "1986-01-01T00:00:00.000",
          "value": 260000,
          "dateYear": 1986,
          "log2Mass": 17.98815209769054,
          "dateNormal": 0.9765625,
          "massNormal": 0.011304304839317601,
          "logMassNormal": 0.7355573947569498
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.465,
              27.72528
            ]
          },
          "id": "22371",
          "mass": "10200",
          "name": "Raghunathpura",
          "nametype": "Valid",
          "recclass": "Iron, IIAB",
          "reclat": "27.725280",
          "reclong": "76.465000",
          "year": "1986-01-01T00:00:00.000",
          "value": 10200,
          "dateYear": 1986,
          "log2Mass": 13.31628153174622,
          "dateNormal": 0.9765625,
          "massNormal": 0.00044343480188846967,
          "logMassNormal": 0.5445189310245424
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              139.4,
              35.86667
            ]
          },
          "id": "23192",
          "mass": "430",
          "name": "Sayama",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "35.866670",
          "reclong": "139.400000",
          "year": "1986-01-01T00:00:00.000",
          "value": 430,
          "dateYear": 1986,
          "log2Mass": 8.74819284958946,
          "dateNormal": 0.9765625,
          "massNormal": 0.000018652174724007598,
          "logMassNormal": 0.357724234614491
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              115.16667,
              33.13333
            ]
          },
          "id": "12466",
          "mass": "14250",
          "name": "Laochenzhen",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "33.133330",
          "reclong": "115.166670",
          "year": "1987-01-01T00:00:00.000",
          "value": 14250,
          "dateYear": 1987,
          "log2Mass": 13.798674298826828,
          "dateNormal": 0.9774305555555556,
          "massNormal": 0.0006195217660661638,
          "logMassNormal": 0.5642445573743977
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              32.5,
              -3.66667
            ]
          },
          "id": "5338",
          "mass": "2936",
          "name": "Chela",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "-3.666670",
          "reclong": "32.500000",
          "year": "1988-01-01T00:00:00.000",
          "value": 2936,
          "dateYear": 1988,
          "log2Mass": 11.519636252843213,
          "dateNormal": 0.9782986111111112,
          "massNormal": 0.0001276087012003783,
          "logMassNormal": 0.47105192265841134
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              33.395,
              -10.05944
            ]
          },
          "id": "5355",
          "mass": "3920",
          "name": "Chisenga",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "-10.059440",
          "reclong": "33.395000",
          "year": "1988-01-01T00:00:00.000",
          "value": 3920,
          "dateYear": 1988,
          "log2Mass": 11.936637939002571,
          "dateNormal": 0.9782986111111112,
          "massNormal": 0.000170391311756144,
          "logMassNormal": 0.48810362825967835
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -105.23333,
              26.46667
            ]
          },
          "id": "5306",
          "mass": "1025",
          "name": "Ceniceros",
          "nametype": "Valid",
          "recclass": "L3.7",
          "reclat": "26.466670",
          "reclong": "-105.233330",
          "year": "1988-01-01T00:00:00.000",
          "value": 1025,
          "dateYear": 1988,
          "log2Mass": 10.001408194392809,
          "dateNormal": 0.9782986111111112,
          "massNormal": 0.000044521741066162655,
          "logMassNormal": 0.40896973271161535
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -65.1,
              -23.11667
            ]
          },
          "id": "18074",
          "mass": "1430",
          "name": "Palca de Aparzo",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "-23.116670",
          "reclong": "-65.100000",
          "year": "1988-01-01T00:00:00.000",
          "value": 1430,
          "dateYear": 1988,
          "log2Mass": 10.481799431665753,
          "dateNormal": 0.9782986111111112,
          "massNormal": 0.00006213043748393206,
          "logMassNormal": 0.42861351407579007
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              3.25,
              34.41667
            ]
          },
          "id": "7807",
          "mass": "10000",
          "name": "El Idrissia",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "34.416670",
          "reclong": "3.250000",
          "year": "1989-01-01T00:00:00.000",
          "value": 10000,
          "dateYear": 1989,
          "log2Mass": 13.287712379549449,
          "dateNormal": 0.9791666666666666,
          "massNormal": 0.00043473914933648476,
          "logMassNormal": 0.5433507036798909
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              36.13583,
              39.82467
            ]
          },
          "id": "23617",
          "mass": "40000",
          "name": "Sivas",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "39.824670",
          "reclong": "36.135830",
          "year": "1989-01-01T00:00:00.000",
          "value": 40000,
          "dateYear": 1989,
          "log2Mass": 15.287712379549449,
          "dateNormal": 0.9791666666666666,
          "massNormal": 0.0017390870321342187,
          "logMassNormal": 0.6251331336662803
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.71667,
              34.75
            ]
          },
          "id": "23512",
          "mass": "7000",
          "name": "Sfax",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "34.750000",
          "reclong": "10.716670",
          "year": "1989-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 1989,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.9791666666666666,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.18333,
              11.08333
            ]
          },
          "id": "4976",
          "mass": "1557",
          "name": "Bawku",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "11.083330",
          "reclong": "-0.183330",
          "year": "1989-01-01T00:00:00.000",
          "value": 1557,
          "dateYear": 1989,
          "log2Mass": 10.604553229079038,
          "dateNormal": 0.9791666666666666,
          "massNormal": 0.00006765217685444248,
          "logMassNormal": 0.43363306599704776
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              119.86667,
              32.43333
            ]
          },
          "id": "23619",
          "mass": "630",
          "name": "Sixiangkou",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "32.433330",
          "reclong": "119.866670",
          "year": "1989-01-01T00:00:00.000",
          "value": 630,
          "dateYear": 1989,
          "log2Mass": 9.29920801838728,
          "dateNormal": 0.9791666666666666,
          "massNormal": 0.00002734782727599249,
          "logMassNormal": 0.3802559143463141
        },
        {
          "fall": "Fell",
          "id": "12068",
          "mass": "700",
          "name": "Jalanash",
          "nametype": "Valid",
          "recclass": "Ureilite",
          "year": "1990-01-01T00:00:00.000",
          "value": 700,
          "dateYear": 1990,
          "log2Mass": 9.451211111832329,
          "dateNormal": 0.9800347222222222,
          "massNormal": 0.000030391305669187204,
          "logMassNormal": 0.38647150552000625
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              126.13333,
              44.61667
            ]
          },
          "id": "22361",
          "mass": "17450",
          "name": "Quija",
          "nametype": "Valid",
          "recclass": "H",
          "reclat": "44.616670",
          "reclong": "126.133330",
          "year": "1990-01-01T00:00:00.000",
          "value": 17450,
          "dateYear": 1990,
          "log2Mass": 14.090939415984376,
          "dateNormal": 0.9800347222222222,
          "massNormal": 0.000758652206897922,
          "logMassNormal": 0.5761956331150981
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              31.65,
              -19.48333
            ]
          },
          "id": "15387",
          "mass": "666.6",
          "name": "Magombedze",
          "nametype": "Valid",
          "recclass": "H3-5",
          "reclat": "-19.483330",
          "reclong": "31.650000",
          "year": "1990-01-01T00:00:00.000",
          "value": 666.6,
          "dateYear": 1990,
          "log2Mass": 9.380677507222886,
          "dateNormal": 0.9800347222222222,
          "massNormal": 0.000028939131693005725,
          "logMassNormal": 0.38358730072967656
        },
        {
          ":@computed_region_cbhk_fwbd": "36",
          ":@computed_region_nnqa_25f4": "256",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -82.23722,
              37.62194
            ]
          },
          "id": "5175",
          "mass": "1504",
          "name": "Burnwell",
          "nametype": "Valid",
          "recclass": "H4-an",
          "reclat": "37.621940",
          "reclong": "-82.237220",
          "year": "1990-01-01T00:00:00.000",
          "value": 1504,
          "dateYear": 1990,
          "log2Mass": 10.554588851677638,
          "dateNormal": 0.9800347222222222,
          "massNormal": 0.00006534782892816647,
          "logMassNormal": 0.431589961898726
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -12.95217,
              26.59083
            ]
          },
          "id": "12058",
          "mass": "4720",
          "name": "Itqiy",
          "nametype": "Valid",
          "recclass": "EH7-an",
          "reclat": "26.590830",
          "reclong": "-12.952170",
          "year": "1990-01-01T00:00:00.000",
          "value": 4720,
          "dateYear": 1990,
          "log2Mass": 12.204571144249204,
          "dateNormal": 0.9800347222222222,
          "massNormal": 0.00020517392196408356,
          "logMassNormal": 0.4990597425592342
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              6.86667,
              52.2
            ]
          },
          "id": "10923",
          "mass": "670",
          "name": "Glanerbrug",
          "nametype": "Valid",
          "recclass": "L/LL5",
          "reclat": "52.200000",
          "reclong": "6.866670",
          "year": "1990-01-01T00:00:00.000",
          "value": 670,
          "dateYear": 1990,
          "log2Mass": 9.388017285345136,
          "dateNormal": 0.9800347222222222,
          "massNormal": 0.000029086957786389468,
          "logMassNormal": 0.3838874331748758
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              55.98333,
              53.66667
            ]
          },
          "id": "23724",
          "mass": "325000",
          "name": "Sterlitamak",
          "nametype": "Valid",
          "recclass": "Iron, IIIAB",
          "reclat": "53.666670",
          "reclong": "55.983330",
          "year": "1990-01-01T00:00:00.000",
          "value": 325000,
          "dateYear": 1990,
          "log2Mass": 18.310080192577903,
          "dateNormal": 0.9800347222222222,
          "massNormal": 0.014130391918712692,
          "logMassNormal": 0.7487214256973385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.3,
              52.45972
            ]
          },
          "id": "10930",
          "mass": "767",
          "name": "Glatton",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "52.459720",
          "reclong": "-0.300000",
          "year": "1991-01-01T00:00:00.000",
          "value": 767,
          "dateYear": 1991,
          "log2Mass": 9.583082767502933,
          "dateNormal": 0.9809027777777778,
          "massNormal": 0.000033304349274102145,
          "logMassNormal": 0.39186389774354147
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              137.305,
              34.72
            ]
          },
          "id": "23784",
          "mass": "1000",
          "name": "Tahara",
          "nametype": "Valid",
          "recclass": "H4/5",
          "reclat": "34.720000",
          "reclong": "137.305000",
          "year": "1991-01-01T00:00:00.000",
          "value": 1000,
          "dateYear": 1991,
          "log2Mass": 9.965784284662087,
          "dateNormal": 0.9809027777777778,
          "massNormal": 0.00004343478449716454,
          "logMassNormal": 0.4075130277599182
        },
        {
          ":@computed_region_cbhk_fwbd": "35",
          ":@computed_region_nnqa_25f4": "2238",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -86.055,
              40.08528
            ]
          },
          "id": "16985",
          "mass": "483.7",
          "name": "Noblesville",
          "nametype": "Valid",
          "recclass": "H4-6",
          "reclat": "40.085280",
          "reclong": "-86.055000",
          "year": "1991-01-01T00:00:00.000",
          "value": 483.7,
          "dateYear": 1991,
          "log2Mass": 8.9179687275585,
          "dateNormal": 0.9809027777777778,
          "massNormal": 0.00002098695743421554,
          "logMassNormal": 0.36466657654118145
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              4.8,
              18.7
            ]
          },
          "id": "16804",
          "mass": "110000",
          "name": "Mount Tazerzait",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "18.700000",
          "reclong": "4.800000",
          "year": "1991-01-01T00:00:00.000",
          "value": 110000,
          "dateYear": 1991,
          "log2Mass": 16.747143998186747,
          "dateNormal": 0.9809027777777778,
          "massNormal": 0.004782565425328932,
          "logMassNormal": 0.6848110657518441
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -40.16667,
              -7.03333
            ]
          },
          "id": "5249",
          "mass": "23680",
          "name": "Campos Sales",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "-7.033330",
          "reclong": "-40.166670",
          "year": "1991-01-01T00:00:00.000",
          "value": 23680,
          "dateYear": 1991,
          "log2Mass": 14.531381460516313,
          "dateNormal": 0.9809027777777778,
          "massNormal": 0.0010295217838922515,
          "logMassNormal": 0.5942058434500959
        },
        {
          ":@computed_region_cbhk_fwbd": "47",
          ":@computed_region_nnqa_25f4": "2185",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -73.91667,
              41.28333
            ]
          },
          "id": "18782",
          "mass": "12570",
          "name": "Peekskill",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "41.283330",
          "reclong": "-73.916670",
          "year": "1992-01-01T00:00:00.000",
          "value": 12570,
          "dateYear": 1992,
          "log2Mass": 13.61769702930787,
          "dateNormal": 0.9817708333333334,
          "massNormal": 0.0005464782846294906,
          "logMassNormal": 0.5568441769376166
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              34.16667,
              1.06667
            ]
          },
          "id": "15455",
          "mass": "150000",
          "name": "Mbale",
          "nametype": "Valid",
          "recclass": "L5/6",
          "reclat": "1.066670",
          "reclong": "34.166670",
          "year": "1992-01-01T00:00:00.000",
          "value": 150000,
          "dateYear": 1992,
          "log2Mass": 17.194602975157967,
          "dateNormal": 0.9817708333333334,
          "massNormal": 0.00652169593572591,
          "logMassNormal": 0.7031082069798092
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              133.22,
              35.56833
            ]
          },
          "id": "16635",
          "mass": "6380",
          "name": "Mihonoseki",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "35.568330",
          "reclong": "133.220000",
          "year": "1992-01-01T00:00:00.000",
          "value": 6380,
          "dateYear": 1992,
          "log2Mass": 12.639340708652231,
          "dateNormal": 0.9817708333333334,
          "massNormal": 0.00027734783814555817,
          "logMassNormal": 0.516837998289736
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -103.05167,
              19.96722
            ]
          },
          "id": "7819",
          "mass": "5000",
          "name": "El Tigre",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "19.967220",
          "reclong": "-103.051670",
          "year": "1993-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1993,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.9826388888888888,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              101.18333,
              16.66667
            ]
          },
          "id": "4934",
          "mass": "16700",
          "name": "Ban Rong Du",
          "nametype": "Valid",
          "recclass": "Iron, ungrouped",
          "reclat": "16.666670",
          "reclong": "101.183330",
          "year": "1993-01-01T00:00:00.000",
          "value": 16700,
          "dateYear": 1993,
          "log2Mass": 14.027560482248777,
          "dateNormal": 0.9826388888888888,
          "massNormal": 0.0007260435098279787,
          "logMassNormal": 0.5736039915096763
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              125,
              45.25
            ]
          },
          "id": "23668",
          "mass": "36900",
          "name": "Songyuan",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "45.250000",
          "reclong": "125.000000",
          "year": "1993-01-01T00:00:00.000",
          "value": 36900,
          "dateYear": 1993,
          "log2Mass": 15.171333195835121,
          "dateNormal": 0.9826388888888888,
          "massNormal": 0.001604304417578453,
          "logMassNormal": 0.6203742474442853
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              140.51167,
              39.43833
            ]
          },
          "id": "23496",
          "mass": "866",
          "name": "Senboku",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "39.438330",
          "reclong": "140.511670",
          "year": "1993-01-01T00:00:00.000",
          "value": 866,
          "dateYear": 1993,
          "log2Mass": 9.758223214726724,
          "dateNormal": 0.9826388888888888,
          "massNormal": 0.000037608697287334667,
          "logMassNormal": 0.3990256034249738
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              35.68333,
              15.36667
            ]
          },
          "id": "16954",
          "mass": "12000",
          "name": "New Halfa",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "15.366670",
          "reclong": "35.683330",
          "year": "1994-01-01T00:00:00.000",
          "value": 12000,
          "dateYear": 1994,
          "log2Mass": 13.550746785383243,
          "dateNormal": 0.9835069444444444,
          "massNormal": 0.0005216956748563337,
          "logMassNormal": 0.5541065001194478
        },
        {
          ":@computed_region_cbhk_fwbd": "50",
          ":@computed_region_nnqa_25f4": "356",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -84.50778,
              43.76111
            ]
          },
          "id": "5401",
          "mass": "469",
          "name": "Coleman",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "43.761110",
          "reclong": "-84.507780",
          "year": "1994-01-01T00:00:00.000",
          "value": 469,
          "dateYear": 1994,
          "log2Mass": 8.873444112515376,
          "dateNormal": 0.9835069444444444,
          "massNormal": 0.00002034782697164465,
          "logMassNormal": 0.36284591093496377
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              20.93583,
              52.03333
            ]
          },
          "id": "4957",
          "mass": "15500",
          "name": "Baszkówka",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "52.033330",
          "reclong": "20.935830",
          "year": "1994-01-01T00:00:00.000",
          "value": 15500,
          "dateYear": 1994,
          "log2Mass": 13.919980595048962,
          "dateNormal": 0.9835069444444444,
          "massNormal": 0.0006738695945160693,
          "logMassNormal": 0.5692049192132451
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -72.97806,
              45.96861
            ]
          },
          "id": "23733",
          "mass": "25400",
          "name": "St-Robert",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "45.968610",
          "reclong": "-72.978060",
          "year": "1994-01-01T00:00:00.000",
          "value": 25400,
          "dateYear": 1994,
          "log2Mass": 14.63254087654689,
          "dateNormal": 0.9835069444444444,
          "massNormal": 0.0011043043958393216,
          "logMassNormal": 0.5983423748795882
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              72.62667,
              26.96556
            ]
          },
          "id": "14678",
          "mass": "40000",
          "name": "Lohawat",
          "nametype": "Valid",
          "recclass": "Howardite",
          "reclat": "26.965560",
          "reclong": "72.626670",
          "year": "1994-01-01T00:00:00.000",
          "value": 40000,
          "dateYear": 1994,
          "log2Mass": 15.287712379549449,
          "dateNormal": 0.9835069444444444,
          "massNormal": 0.0017390870321342187,
          "logMassNormal": 0.6251331336662803
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              76.525,
              24.225
            ]
          },
          "id": "6696",
          "mass": "1140",
          "name": "Devri-Khera",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "24.225000",
          "reclong": "76.525000",
          "year": "1994-01-01T00:00:00.000",
          "value": 1140,
          "dateYear": 1994,
          "log2Mass": 10.154818109052105,
          "dateNormal": 0.9835069444444444,
          "massNormal": 0.00004952174128355397,
          "logMassNormal": 0.41524285051403625
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              30.78333,
              51.68333
            ]
          },
          "id": "10850",
          "mass": "5000",
          "name": "Galkiv",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "51.683330",
          "reclong": "30.783330",
          "year": "1995-01-01T00:00:00.000",
          "value": 5000,
          "dateYear": 1995,
          "log2Mass": 12.287712379549449,
          "dateNormal": 0.984375,
          "massNormal": 0.0002173478355368624,
          "logMassNormal": 0.5024594886866963
        },
        {
          "fall": "Fell",
          "id": "23791",
          "mass": "1421",
          "name": "Talampaya",
          "nametype": "Valid",
          "recclass": "Eucrite-cm",
          "year": "1995-01-01T00:00:00.000",
          "value": 1421,
          "dateYear": 1995,
          "log2Mass": 10.47269083924278,
          "dateNormal": 0.984375,
          "massNormal": 0.00006173913311909275,
          "logMassNormal": 0.42824105266473694
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -101.38333,
              20.93333
            ]
          },
          "id": "23594",
          "mass": "1710",
          "name": "Silao",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "20.933330",
          "reclong": "-101.383330",
          "year": "1995-01-01T00:00:00.000",
          "value": 1710,
          "dateYear": 1995,
          "log2Mass": 10.73978060977326,
          "dateNormal": 0.984375,
          "massNormal": 0.00007430435105671092,
          "logMassNormal": 0.43916267789398183
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              136.46528,
              36.44917
            ]
          },
          "id": "16934",
          "mass": "420",
          "name": "Neagari",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "36.449170",
          "reclong": "136.465280",
          "year": "1995-01-01T00:00:00.000",
          "value": 420,
          "dateYear": 1995,
          "log2Mass": 8.714245517666123,
          "dateNormal": 0.984375,
          "massNormal": 0.000018217392096408352,
          "logMassNormal": 0.3563360869663685
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.42,
              14.052
            ]
          },
          "id": "18800",
          "mass": "189",
          "name": "Pétèlkolé",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "14.052000",
          "reclong": "0.420000",
          "year": "1995-01-01T00:00:00.000",
          "value": 189,
          "dateYear": 1995,
          "log2Mass": 7.562242424221073,
          "dateNormal": 0.984375,
          "massNormal": 0.0000081739133988658,
          "logMassNormal": 0.3092292807994816
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              119.03333,
              45.5
            ]
          },
          "id": "7706",
          "mass": "128800",
          "name": "Dong Ujimqin Qi",
          "nametype": "Valid",
          "recclass": "Mesosiderite",
          "reclat": "45.500000",
          "reclong": "119.033330",
          "year": "1995-01-01T00:00:00.000",
          "value": 128800,
          "dateYear": 1995,
          "log2Mass": 16.97477306788934,
          "dateNormal": 0.984375,
          "massNormal": 0.005599956765215511,
          "logMassNormal": 0.6941190949797539
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13.75333,
              43.18111
            ]
          },
          "id": "10091",
          "mass": "10200",
          "name": "Fermo",
          "nametype": "Valid",
          "recclass": "H3-5",
          "reclat": "43.181110",
          "reclong": "13.753330",
          "year": "1996-01-01T00:00:00.000",
          "value": 10200,
          "dateYear": 1996,
          "log2Mass": 13.31628153174622,
          "dateNormal": 0.9852430555555556,
          "massNormal": 0.00044343480188846967,
          "logMassNormal": 0.5445189310245424
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              122.76389,
              39.80417
            ]
          },
          "id": "11435",
          "mass": "2910",
          "name": "Guangmingshan",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "39.804170",
          "reclong": "122.763890",
          "year": "1996-01-01T00:00:00.000",
          "value": 2910,
          "dateYear": 1996,
          "log2Mass": 11.506803437795647,
          "dateNormal": 0.9852430555555556,
          "massNormal": 0.00012647826636862027,
          "logMassNormal": 0.4705271732593334
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              73.94167,
              26.03472
            ]
          },
          "id": "18831",
          "mass": "42000",
          "name": "Piplia Kalan",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "26.034720",
          "reclong": "73.941670",
          "year": "1996-01-01T00:00:00.000",
          "value": 42000,
          "dateYear": 1996,
          "log2Mass": 15.358101707440847,
          "dateNormal": 0.9852430555555556,
          "massNormal": 0.0018260435576540677,
          "logMassNormal": 0.6280114388063139
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              115.41667,
              35.5
            ]
          },
          "id": "12203",
          "mass": "100000",
          "name": "Juancheng",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "35.500000",
          "reclong": "115.416670",
          "year": "1997-01-01T00:00:00.000",
          "value": 100000,
          "dateYear": 1997,
          "log2Mass": 16.609640474436812,
          "dateNormal": 0.9861111111111112,
          "massNormal": 0.004347782797729687,
          "logMassNormal": 0.6791883795998638
        },
        {
          ":@computed_region_cbhk_fwbd": "9",
          ":@computed_region_nnqa_25f4": "88",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -104.58817,
              39.24667
            ]
          },
          "id": "7822",
          "mass": "680.5",
          "name": "Elbert",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "39.246670",
          "reclong": "-104.588170",
          "year": "1998-01-01T00:00:00.000",
          "value": 680.5,
          "dateYear": 1998,
          "log2Mass": 9.410451351503994,
          "dateNormal": 0.9869791666666666,
          "massNormal": 0.000029543479545368677,
          "logMassNormal": 0.38480478939734925
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -8.28,
              37.60833
            ]
          },
          "id": "18052",
          "mass": "20000",
          "name": "Ourique",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "37.608330",
          "reclong": "-8.280000",
          "year": "1998-01-01T00:00:00.000",
          "value": 20000,
          "dateYear": 1998,
          "log2Mass": 14.287712379549449,
          "dateNormal": 0.9869791666666666,
          "massNormal": 0.0008695217769357295,
          "logMassNormal": 0.5842419186730856
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              59.2,
              42.25
            ]
          },
          "id": "12379",
          "mass": "1100000",
          "name": "Kunya-Urgench",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "42.250000",
          "reclong": "59.200000",
          "year": "1998-01-01T00:00:00.000",
          "value": 1100000,
          "dateYear": 1998,
          "log2Mass": 20.06907209307411,
          "dateNormal": 0.9869791666666666,
          "massNormal": 0.04782604555765416,
          "logMassNormal": 0.8206487416718169
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              109.31667,
              28.53333
            ]
          },
          "id": "5313",
          "mass": "3700",
          "name": "Chadong",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "28.533330",
          "reclong": "109.316670",
          "year": "1998-01-01T00:00:00.000",
          "value": 3700,
          "dateYear": 1998,
          "log2Mass": 11.853309555403674,
          "dateNormal": 0.9869791666666666,
          "massNormal": 0.0001608260939489606,
          "logMassNormal": 0.48469622941090046
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              59.685,
              41.98444
            ]
          },
          "id": "6604",
          "mass": "7000",
          "name": "Dashoguz",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "41.984440",
          "reclong": "59.685000",
          "year": "1998-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 1998,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.9869791666666666,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -80.38333,
              43.38333
            ]
          },
          "id": "12326",
          "mass": "202.6",
          "name": "Kitchener",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "43.383330",
          "reclong": "-80.383330",
          "year": "1998-01-01T00:00:00.000",
          "value": 202.6,
          "dateYear": 1998,
          "log2Mass": 7.662490363913776,
          "dateNormal": 0.9869791666666666,
          "massNormal": 0.000008765217772400773,
          "logMassNormal": 0.31332854085408074
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "2957",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -102.85833,
              31.60833
            ]
          },
          "id": "16719",
          "mass": "2587",
          "name": "Monahans (1998)",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "31.608330",
          "reclong": "-102.858330",
          "year": "1998-01-01T00:00:00.000",
          "value": 2587,
          "dateYear": 1998,
          "log2Mass": 11.33706433868474,
          "dateNormal": 0.9869791666666666,
          "massNormal": 0.00011243478749716467,
          "logMassNormal": 0.46358633526483817
        },
        {
          ":@computed_region_cbhk_fwbd": "11",
          ":@computed_region_nnqa_25f4": "1987",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -103.295,
              34.175
            ]
          },
          "id": "18874",
          "mass": "71400",
          "name": "Portales Valley",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "34.175000",
          "reclong": "-103.295000",
          "year": "1998-01-01T00:00:00.000",
          "value": 71400,
          "dateYear": 1998,
          "log2Mass": 16.123636453803826,
          "dateNormal": 0.9869791666666666,
          "massNormal": 0.003104304482795847,
          "logMassNormal": 0.6593150847046033
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              135.16667,
              34.73333
            ]
          },
          "id": "12336",
          "mass": "136",
          "name": "Kobe",
          "nametype": "Valid",
          "recclass": "CK4",
          "reclat": "34.733330",
          "reclong": "135.166670",
          "year": "1999-01-01T00:00:00.000",
          "value": 136,
          "dateYear": 1999,
          "log2Mass": 7.087462841250339,
          "dateNormal": 0.9878472222222222,
          "massNormal": 0.000005869565472589803,
          "logMassNormal": 0.289814966797846
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -0.08333,
              12.45
            ]
          },
          "id": "5045",
          "mass": "25000",
          "name": "Bilanga",
          "nametype": "Valid",
          "recclass": "Diogenite",
          "reclat": "12.450000",
          "reclong": "-0.083330",
          "year": "1999-01-01T00:00:00.000",
          "value": 25000,
          "dateYear": 1999,
          "log2Mass": 14.609640474436812,
          "dateNormal": 0.9878472222222222,
          "massNormal": 0.0010869130907353519,
          "logMassNormal": 0.5974059496134744
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              91.66667,
              23.08333
            ]
          },
          "id": "22793",
          "mass": "478",
          "name": "Sabrum",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "23.083330",
          "reclong": "91.666670",
          "year": "1999-01-01T00:00:00.000",
          "value": 478,
          "dateYear": 1999,
          "log2Mass": 8.900866807980748,
          "dateNormal": 0.9878472222222222,
          "massNormal": 0.00002073913133648397,
          "logMassNormal": 0.3639672582709312
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              152.83333,
              -31.66667
            ]
          },
          "id": "7743",
          "mass": "30",
          "name": "Dunbogan",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-31.666670",
          "reclong": "152.833330",
          "year": "1999-01-01T00:00:00.000",
          "value": 30,
          "dateYear": 1999,
          "log2Mass": 4.906890595608519,
          "dateNormal": 0.9878472222222222,
          "massNormal": 0.0000012608696200378096,
          "logMassNormal": 0.200648718293113
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -6.96667,
              52.66667
            ]
          },
          "id": "12759",
          "mass": "271.39999999999998",
          "name": "Leighlinbridge",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "52.666670",
          "reclong": "-6.966670",
          "year": "1999-01-01T00:00:00.000",
          "value": 271.4,
          "dateYear": 1999,
          "log2Mass": 8.084276910531491,
          "dateNormal": 0.9878472222222222,
          "massNormal": 0.000011756522250283576,
          "logMassNormal": 0.33057590521306285
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.08333,
              11.33333
            ]
          },
          "id": "35465",
          "mass": "1500",
          "name": "Katagum",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "11.333330",
          "reclong": "10.083330",
          "year": "1999-01-01T00:00:00.000",
          "value": 1500,
          "dateYear": 1999,
          "log2Mass": 10.550746785383243,
          "dateNormal": 0.9878472222222222,
          "massNormal": 0.00006517391587712678,
          "logMassNormal": 0.43143285513986385
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.55,
              36.95
            ]
          },
          "id": "7657",
          "mass": "10000",
          "name": "Djoumine",
          "nametype": "Valid",
          "recclass": "H5-6",
          "reclat": "36.950000",
          "reclong": "9.550000",
          "year": "1999-01-01T00:00:00.000",
          "value": 10000,
          "dateYear": 1999,
          "log2Mass": 13.287712379549449,
          "dateNormal": 0.9878472222222222,
          "massNormal": 0.00043473914933648476,
          "logMassNormal": 0.5433507036798909
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -134.20139,
              59.70444
            ]
          },
          "id": "23782",
          "mass": "10000",
          "name": "Tagish Lake",
          "nametype": "Valid",
          "recclass": "C2-ung",
          "reclat": "59.704440",
          "reclong": "-134.201390",
          "year": "2000-01-01T00:00:00.000",
          "value": 10000,
          "dateYear": 2000,
          "log2Mass": 13.287712379549449,
          "dateNormal": 0.9887152777777778,
          "massNormal": 0.00043473914933648476,
          "logMassNormal": 0.5433507036798909
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              18.53333,
              49.6
            ]
          },
          "id": "16742",
          "mass": "633",
          "name": "Morávka",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "49.600000",
          "reclong": "18.533330",
          "year": "2000-01-01T00:00:00.000",
          "value": 633,
          "dateYear": 2000,
          "log2Mass": 9.306061689428342,
          "dateNormal": 0.9887152777777778,
          "massNormal": 0.000027478262064272264,
          "logMassNormal": 0.3805361692823468
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.8,
              32.86667
            ]
          },
          "id": "5018",
          "mass": "19000",
          "name": "Beni M'hira",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "32.866670",
          "reclong": "10.800000",
          "year": "2001-01-01T00:00:00.000",
          "value": 19000,
          "dateYear": 2001,
          "log2Mass": 14.213711798105672,
          "dateNormal": 0.9895833333333334,
          "massNormal": 0.000826043514175805,
          "logMassNormal": 0.5812159449876467
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              64.60035,
              39.77978
            ]
          },
          "id": "30448",
          "mass": "5300",
          "name": "Bukhara",
          "nametype": "Valid",
          "recclass": "CV3",
          "reclat": "39.779780",
          "reclong": "64.600350",
          "year": "2001-01-01T00:00:00.000",
          "value": 5300,
          "dateYear": 2001,
          "log2Mass": 12.371776644337924,
          "dateNormal": 0.9895833333333334,
          "massNormal": 0.00023039131436483975,
          "logMassNormal": 0.5058969786114067
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              28.96,
              13.66033
            ]
          },
          "id": "447",
          "mass": "700",
          "name": "Al Zarnkh",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "13.660330",
          "reclong": "28.960000",
          "year": "2001-01-01T00:00:00.000",
          "value": 700,
          "dateYear": 2001,
          "log2Mass": 9.451211111832329,
          "dateNormal": 0.9895833333333334,
          "massNormal": 0.000030391305669187204,
          "logMassNormal": 0.38647150552000625
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              81,
              19
            ]
          },
          "id": "6694",
          "mass": "12000",
          "name": "Devgaon",
          "nametype": "Valid",
          "recclass": "H3.8",
          "reclat": "19.000000",
          "reclong": "81.000000",
          "year": "2001-01-01T00:00:00.000",
          "value": 12000,
          "dateYear": 2001,
          "log2Mass": 13.550746785383243,
          "dateNormal": 0.9895833333333334,
          "massNormal": 0.0005216956748563337,
          "logMassNormal": 0.5541065001194478
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              93.86667,
              26.68333
            ]
          },
          "id": "6664",
          "mass": "12500",
          "name": "Dergaon",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "26.683330",
          "reclong": "93.866670",
          "year": "2001-01-01T00:00:00.000",
          "value": 12500,
          "dateYear": 2001,
          "log2Mass": 13.609640474436812,
          "dateNormal": 0.9895833333333334,
          "massNormal": 0.0005434348062362959,
          "logMassNormal": 0.5565147346202797
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.8,
              12.76667
            ]
          },
          "id": "12307",
          "mass": "19000",
          "name": "Kilabo",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "12.766670",
          "reclong": "9.800000",
          "year": "2002-01-01T00:00:00.000",
          "value": 19000,
          "dateYear": 2002,
          "log2Mass": 14.213711798105672,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.000826043514175805,
          "logMassNormal": 0.5812159449876467
        },
        {
          "fall": "Found",
          "id": "32592",
          "mass": "290.89999999999998",
          "name": "Dominion Range 03240",
          "nametype": "Valid",
          "recclass": "LL5",
          "year": "2002-01-01T00:00:00.000",
          "value": 290.9,
          "dateYear": 2002,
          "log2Mass": 8.184379486212944,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.000012604348374102101,
          "logMassNormal": 0.3346692211566257
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27.58333,
              -29.33333
            ]
          },
          "id": "23976",
          "mass": "45300",
          "name": "Thuathe",
          "nametype": "Valid",
          "recclass": "H4/5",
          "reclat": "-29.333330",
          "reclong": "27.583330",
          "year": "2002-01-01T00:00:00.000",
          "value": 45300,
          "dateYear": 2002,
          "log2Mass": 15.46722342982096,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.0019695218247618184,
          "logMassNormal": 0.6324735586165868
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.80833,
              47.525
            ]
          },
          "id": "16950",
          "mass": "6189",
          "name": "Neuschwanstein",
          "nametype": "Valid",
          "recclass": "EL6",
          "reclat": "47.525000",
          "reclong": "10.808330",
          "year": "2002-01-01T00:00:00.000",
          "value": 6189,
          "dateYear": 2002,
          "log2Mass": 12.59549060660764,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.0002690434899584126,
          "logMassNormal": 0.5150449143395571
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              48.1,
              -14.2
            ]
          },
          "id": "15430",
          "mass": "6000",
          "name": "Maromandia",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-14.200000",
          "reclong": "48.100000",
          "year": "2002-01-01T00:00:00.000",
          "value": 6000,
          "dateYear": 2002,
          "log2Mass": 12.550746785383243,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.00026082609829678686,
          "logMassNormal": 0.5132152851262531
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              73.11528,
              26.50833
            ]
          },
          "id": "36591",
          "mass": "678",
          "name": "Bhawad",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "26.508330",
          "reclong": "73.115280",
          "year": "2002-01-01T00:00:00.000",
          "value": 678,
          "dateYear": 2002,
          "log2Mass": 9.405141463136344,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.000029434783888468866,
          "logMassNormal": 0.3845876616105178
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              6.01533,
              45.82133
            ]
          },
          "id": "458",
          "mass": "252",
          "name": "Alby sur Chéran",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "45.821330",
          "reclong": "6.015330",
          "year": "2002-01-01T00:00:00.000",
          "value": 252,
          "dateYear": 2002,
          "log2Mass": 7.977279923499917,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.000010913043952741041,
          "logMassNormal": 0.3262006684127307
        },
        {
          "fall": "Found",
          "id": "32591",
          "mass": "69.5",
          "name": "Dominion Range 03239",
          "nametype": "Valid",
          "recclass": "L6",
          "year": "2002-01-01T00:00:00.000",
          "value": 69.5,
          "dateYear": 2002,
          "log2Mass": 6.118941072723508,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.000002978260999054826,
          "logMassNormal": 0.25021093493542623
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              13,
              43.66667
            ]
          },
          "id": "31315",
          "mass": "237",
          "name": "San Michele",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "43.666670",
          "reclong": "13.000000",
          "year": "2002-01-01T00:00:00.000",
          "value": 237,
          "dateYear": 2002,
          "log2Mass": 7.888743248898259,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.000010260870011342174,
          "logMassNormal": 0.3225802962168118
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -7,
              30
            ]
          },
          "id": "5024",
          "mass": "45000",
          "name": "Bensour",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "30.000000",
          "reclong": "-7.000000",
          "year": "2002-01-01T00:00:00.000",
          "value": 45000,
          "dateYear": 2002,
          "log2Mass": 15.45763738099176,
          "dateNormal": 0.9904513888888888,
          "massNormal": 0.0019564783459338412,
          "logMassNormal": 0.6320815734329768
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -13.1,
              24.3
            ]
          },
          "id": "31282",
          "mass": "17000",
          "name": "Oum Dreyga",
          "nametype": "Valid",
          "recclass": "H3-5",
          "reclat": "24.300000",
          "reclong": "-13.100000",
          "year": "2003-01-01T00:00:00.000",
          "value": 17000,
          "dateYear": 2003,
          "log2Mass": 14.053247125912426,
          "dateNormal": 0.9913194444444444,
          "massNormal": 0.0007390869886559561,
          "logMassNormal": 0.5746543495781802
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              31.47278,
              1.345
            ]
          },
          "id": "44714",
          "mass": "167.7",
          "name": "Hoima",
          "nametype": "Valid",
          "recclass": "H6",
          "reclat": "1.345000",
          "reclong": "31.472780",
          "year": "2003-01-01T00:00:00.000",
          "value": 167.7,
          "dateYear": 2003,
          "log2Mass": 7.389738878676984,
          "dateNormal": 0.9913194444444444,
          "massNormal": 0.000007247826402079409,
          "logMassNormal": 0.3021754012315499
        },
        {
          ":@computed_region_cbhk_fwbd": "22",
          ":@computed_region_nnqa_25f4": "1667",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -90.10976,
              29.94718
            ]
          },
          "id": "16960",
          "mass": "19256",
          "name": "New Orleans",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "29.947180",
          "reclong": "-90.109760",
          "year": "2003-01-01T00:00:00.000",
          "value": 19256,
          "dateYear": 2003,
          "log2Mass": 14.233020426474496,
          "dateNormal": 0.9913194444444444,
          "massNormal": 0.0008371739494423456,
          "logMassNormal": 0.5820054982615
        },
        {
          "fall": "Found",
          "id": "32531",
          "mass": "9.6",
          "name": "Cumulus Hills 04075",
          "nametype": "Valid",
          "recclass": "Pallasite",
          "year": "2003-01-01T00:00:00.000",
          "value": 9.6,
          "dateYear": 2003,
          "log2Mass": 3.263034405833794,
          "dateNormal": 0.9913194444444444,
          "massNormal": 3.739130597353504e-7,
          "logMassNormal": 0.13342944141914093
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              86.70278,
              20.4625
            ]
          },
          "id": "12276",
          "mass": "6669.2",
          "name": "Kendrapara",
          "nametype": "Valid",
          "recclass": "H4-5",
          "reclat": "20.462500",
          "reclong": "86.702780",
          "year": "2003-01-01T00:00:00.000",
          "value": 6669.2,
          "dateYear": 2003,
          "log2Mass": 12.70329799880763,
          "dateNormal": 0.9913194444444444,
          "massNormal": 0.0002899217517357283,
          "logMassNormal": 0.5194532895918625
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              77.58333,
              29.58333
            ]
          },
          "id": "30740",
          "mass": "16820",
          "name": "Kasauli",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "29.583330",
          "reclong": "77.583330",
          "year": "2003-01-01T00:00:00.000",
          "value": 16820,
          "dateYear": 2003,
          "log2Mass": 14.037890085142507,
          "dateNormal": 0.9913194444444444,
          "massNormal": 0.0007312609013591697,
          "logMassNormal": 0.5740263815223982
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0.08,
              12.9
            ]
          },
          "id": "56729",
          "mass": "4440",
          "name": "Ouadangou",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "12.900000",
          "reclong": "0.080000",
          "year": "2003-01-01T00:00:00.000",
          "value": 4440,
          "dateYear": 2003,
          "log2Mass": 12.116343961237469,
          "dateNormal": 0.9913194444444444,
          "massNormal": 0.00019300000839130472,
          "logMassNormal": 0.4954520258504574
        },
        {
          ":@computed_region_cbhk_fwbd": "34",
          ":@computed_region_nnqa_25f4": "1863",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -87.67917,
              41.48472
            ]
          },
          "id": "18106",
          "mass": "18000",
          "name": "Park Forest",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "41.484720",
          "reclong": "-87.679170",
          "year": "2003-01-01T00:00:00.000",
          "value": 18000,
          "dateYear": 2003,
          "log2Mass": 14.1357092861044,
          "dateNormal": 0.9913194444444444,
          "massNormal": 0.0007825652514158805,
          "logMassNormal": 0.5780263274993934
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              132.38333,
              34.45
            ]
          },
          "id": "11889",
          "mass": "414",
          "name": "Hiroshima",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "34.450000",
          "reclong": "132.383330",
          "year": "2003-01-01T00:00:00.000",
          "value": 414,
          "dateYear": 2003,
          "log2Mass": 8.693486957499326,
          "dateNormal": 0.9913194444444444,
          "massNormal": 0.000017956522519848806,
          "logMassNormal": 0.35548724421963884
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -11.3715,
              17.71067
            ]
          },
          "id": "57168",
          "mass": "190",
          "name": "Boumdeid (2003)",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "17.710670",
          "reclong": "-11.371500",
          "year": "2003-01-01T00:00:00.000",
          "value": 190,
          "dateYear": 2003,
          "log2Mass": 7.569855608330948,
          "dateNormal": 0.9913194444444444,
          "massNormal": 0.000008217391661625725,
          "logMassNormal": 0.30954059314770127
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              73.22329,
              20.33916
            ]
          },
          "id": "47357",
          "mass": "1600",
          "name": "Kaprada",
          "nametype": "Valid",
          "recclass": "L5/6",
          "reclat": "20.339160",
          "reclong": "73.223290",
          "year": "2004-01-01T00:00:00.000",
          "value": 1600,
          "dateYear": 2004,
          "log2Mass": 10.643856189774725,
          "dateNormal": 0.9921875,
          "massNormal": 0.00006952174215311922,
          "logMassNormal": 0.4352402118127242
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              9.38333,
              12.83333
            ]
          },
          "id": "30751",
          "mass": "4629",
          "name": "Maigatari-Danduma",
          "nametype": "Valid",
          "recclass": "H5/6",
          "reclat": "12.833330",
          "reclong": "9.383330",
          "year": "2004-01-01T00:00:00.000",
          "value": 4629,
          "dateYear": 2004,
          "log2Mass": 12.17648484729189,
          "dateNormal": 0.9921875,
          "massNormal": 0.00020121740005293043,
          "logMassNormal": 0.49791125975198997
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -8.15,
              32.25
            ]
          },
          "id": "30443",
          "mass": "25000",
          "name": "Benguerir",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "32.250000",
          "reclong": "-8.150000",
          "year": "2004-01-01T00:00:00.000",
          "value": 25000,
          "dateYear": 2004,
          "log2Mass": 14.609640474436812,
          "dateNormal": 0.9921875,
          "massNormal": 0.0010869130907353519,
          "logMassNormal": 0.5974059496134744
        },
        {
          ":@computed_region_cbhk_fwbd": "9",
          ":@computed_region_nnqa_25f4": "1072",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -105.02325,
              40.30583
            ]
          },
          "id": "47355",
          "mass": "960",
          "name": "Berthoud",
          "nametype": "Valid",
          "recclass": "Eucrite-mmict",
          "reclat": "40.305830",
          "reclong": "-105.023250",
          "year": "2004-01-01T00:00:00.000",
          "value": 960,
          "dateYear": 2004,
          "log2Mass": 9.906890595608518,
          "dateNormal": 0.9921875,
          "massNormal": 0.000041695653986767565,
          "logMassNormal": 0.4051047932590864
        },
        {
          ":@computed_region_cbhk_fwbd": "30",
          ":@computed_region_nnqa_25f4": "1078",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -81.36222,
              28.5475
            ]
          },
          "id": "34489",
          "mass": "180",
          "name": "Orlando",
          "nametype": "Valid",
          "recclass": "Eucrite",
          "reclat": "28.547500",
          "reclong": "-81.362220",
          "year": "2004-01-01T00:00:00.000",
          "value": 180,
          "dateYear": 2004,
          "log2Mass": 7.491853096329675,
          "dateNormal": 0.9921875,
          "massNormal": 0.00000778260903402648,
          "logMassNormal": 0.30635097565944797
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              10.7,
              59.43333
            ]
          },
          "id": "36592",
          "mass": "3763",
          "name": "Moss",
          "nametype": "Valid",
          "recclass": "CO3.6",
          "reclat": "59.433330",
          "reclong": "10.700000",
          "year": "2006-01-01T00:00:00.000",
          "value": 3763,
          "dateYear": 2006,
          "log2Mass": 11.877667574067882,
          "dateNormal": 0.9939236111111112,
          "massNormal": 0.00016356522450283585,
          "logMassNormal": 0.48569225838890684
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -5.9,
              15.78333
            ]
          },
          "id": "44876",
          "mass": "29560",
          "name": "Bassikounou",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "15.783330",
          "reclong": "-5.900000",
          "year": "2006-01-01T00:00:00.000",
          "value": 29560,
          "dateYear": 2006,
          "log2Mass": 14.851358649033513,
          "dateNormal": 0.9939236111111112,
          "massNormal": 0.0012851739689206073,
          "logMassNormal": 0.6072900994586706
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              70.31333,
              22.68
            ]
          },
          "id": "47362",
          "mass": "100",
          "name": "Jodiya",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "22.680000",
          "reclong": "70.313330",
          "year": "2006-01-01T00:00:00.000",
          "value": 100,
          "dateYear": 2006,
          "log2Mass": 6.643856189774724,
          "dateNormal": 0.9939236111111112,
          "massNormal": 0.000004304348013232522,
          "logMassNormal": 0.27167535183994546
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              75.81333,
              25.14333
            ]
          },
          "id": "47351",
          "mass": "6800",
          "name": "Kavarpura",
          "nametype": "Valid",
          "recclass": "Iron, IIE-an",
          "reclat": "25.143330",
          "reclong": "75.813330",
          "year": "2006-01-01T00:00:00.000",
          "value": 6800,
          "dateYear": 2006,
          "log2Mass": 12.731319031025064,
          "dateNormal": 0.9939236111111112,
          "massNormal": 0.00029560870850472645,
          "logMassNormal": 0.5205991036445968
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -3.51667,
              39.35
            ]
          },
          "id": "45984",
          "mass": "500",
          "name": "Puerto Lápice",
          "nametype": "Valid",
          "recclass": "Eucrite-br",
          "reclat": "39.350000",
          "reclong": "-3.516670",
          "year": "2007-01-01T00:00:00.000",
          "value": 500,
          "dateYear": 2007,
          "log2Mass": 8.965784284662087,
          "dateNormal": 0.9947916666666666,
          "massNormal": 0.00002169565311720231,
          "logMassNormal": 0.36662181276672356
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              27.32997,
              37.35172
            ]
          },
          "id": "47350",
          "mass": "3396",
          "name": "Didim",
          "nametype": "Valid",
          "recclass": "H3-5",
          "reclat": "37.351720",
          "reclong": "27.329970",
          "year": "2007-01-01T00:00:00.000",
          "value": 3396,
          "dateYear": 2007,
          "log2Mass": 11.729620743553038,
          "dateNormal": 0.9947916666666666,
          "massNormal": 0.00014760870206994358,
          "logMassNormal": 0.4796384436132633
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -69.04389,
              -16.66444
            ]
          },
          "id": "45817",
          "mass": "342",
          "name": "Carancas",
          "nametype": "Valid",
          "recclass": "H4-5",
          "reclat": "-16.664440",
          "reclong": "-69.043890",
          "year": "2007-01-01T00:00:00.000",
          "value": 342,
          "dateYear": 2007,
          "log2Mass": 8.417852514885897,
          "dateNormal": 0.9947916666666666,
          "massNormal": 0.000014826087601134244,
          "logMassNormal": 0.3442162169672037
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              129.19,
              -31.35
            ]
          },
          "id": "48653",
          "mass": "324",
          "name": "Bunburra Rockhole",
          "nametype": "Valid",
          "recclass": "Eucrite",
          "reclat": "-31.350000",
          "reclong": "129.190000",
          "year": "2007-01-01T00:00:00.000",
          "value": 324,
          "dateYear": 2007,
          "log2Mass": 8.339850002884624,
          "dateNormal": 0.9947916666666666,
          "massNormal": 0.000014043478871455603,
          "logMassNormal": 0.3410265994789504
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -5.01472,
              23.69639
            ]
          },
          "id": "47347",
          "mass": "100000",
          "name": "Chergach ",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "23.696390",
          "reclong": "-5.014720",
          "year": "2007-01-01T00:00:00.000",
          "value": 100000,
          "dateYear": 2007,
          "log2Mass": 16.609640474436812,
          "dateNormal": 0.9947916666666666,
          "massNormal": 0.004347782797729687,
          "logMassNormal": 0.6791883795998638
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              95.78333,
              27.66667
            ]
          },
          "id": "47361",
          "mass": "70500",
          "name": "Mahadevpur",
          "nametype": "Valid",
          "recclass": "H4/5",
          "reclat": "27.666670",
          "reclong": "95.783330",
          "year": "2007-01-01T00:00:00.000",
          "value": 70500,
          "dateYear": 2007,
          "log2Mass": 16.10533563706088,
          "dateNormal": 0.9947916666666666,
          "massNormal": 0.003065174046311915,
          "logMassNormal": 0.6585667420726163
        },
        {
          ":@computed_region_cbhk_fwbd": "8",
          ":@computed_region_nnqa_25f4": "1391",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -119.75812,
              38.13742
            ]
          },
          "id": "53502",
          "mass": "18.41",
          "name": "Red Canyon Lake",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "38.137420",
          "reclong": "-119.758120",
          "year": "2007-01-01T00:00:00.000",
          "value": 18.41,
          "dateYear": 2007,
          "log2Mass": 4.2024177215751815,
          "dateNormal": 0.9947916666666666,
          "massNormal": 7.569565546502849e-7,
          "logMassNormal": 0.17184196654414208
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -76.51,
              3.405
            ]
          },
          "id": "45976",
          "mass": "478",
          "name": "Cali",
          "nametype": "Valid",
          "recclass": "H/L4",
          "reclat": "3.405000",
          "reclong": "-76.510000",
          "year": "2007-01-01T00:00:00.000",
          "value": 478,
          "dateYear": 2007,
          "log2Mass": 8.900866807980748,
          "dateNormal": 0.9947916666666666,
          "massNormal": 0.00002073913133648397,
          "logMassNormal": 0.3639672582709312
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -58.32833,
              -31.91
            ]
          },
          "id": "48975",
          "mass": "270",
          "name": "Berduc",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-31.910000",
          "reclong": "-58.328330",
          "year": "2008-01-01T00:00:00.000",
          "value": 270,
          "dateYear": 2008,
          "log2Mass": 8.076815597050832,
          "dateNormal": 0.9956597222222222,
          "massNormal": 0.000011695652682419683,
          "logMassNormal": 0.3302708030393936
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -109.84817,
              52.996
            ]
          },
          "id": "48654",
          "mass": "41000",
          "name": "Buzzard Coulee",
          "nametype": "Valid",
          "recclass": "H4",
          "reclat": "52.996000",
          "reclong": "-109.848170",
          "year": "2008-01-01T00:00:00.000",
          "value": 41000,
          "dateYear": 2008,
          "log2Mass": 15.32333628928017,
          "dateNormal": 0.9956597222222222,
          "massNormal": 0.0017825652948941432,
          "logMassNormal": 0.6265898386179775
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -79.95756,
              -1.87089
            ]
          },
          "id": "51559",
          "mass": "6580",
          "name": "Daule",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "-1.870890",
          "reclong": "-79.957560",
          "year": "2008-01-01T00:00:00.000",
          "value": 6580,
          "dateYear": 2008,
          "log2Mass": 12.683871868622603,
          "dateNormal": 0.9956597222222222,
          "massNormal": 0.0002860434906975431,
          "logMassNormal": 0.5186589315259807
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              32.41275,
              20.74575
            ]
          },
          "id": "48915",
          "mass": "3950",
          "name": "Almahata Sitta",
          "nametype": "Valid",
          "recclass": "Ureilite-an",
          "reclat": "20.745750",
          "reclong": "32.412750",
          "year": "2008-01-01T00:00:00.000",
          "value": 3950,
          "dateYear": 2008,
          "log2Mass": 11.947636937951827,
          "dateNormal": 0.9956597222222222,
          "massNormal": 0.00017169565963894172,
          "logMassNormal": 0.4885533906904223
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              78.03333,
              12.66667
            ]
          },
          "id": "48951",
          "mass": "110000",
          "name": "Sulagiri",
          "nametype": "Valid",
          "recclass": "LL6",
          "reclat": "12.666670",
          "reclong": "78.033330",
          "year": "2008-01-01T00:00:00.000",
          "value": 110000,
          "dateYear": 2008,
          "log2Mass": 16.747143998186747,
          "dateNormal": 0.9956597222222222,
          "massNormal": 0.004782565425328932,
          "logMassNormal": 0.6848110657518441
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -68.489444,
              -31.535556
            ]
          },
          "id": "50909",
          "mass": "4000",
          "name": "Santa Lucia (2008)",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-31.535556",
          "reclong": "-68.489444",
          "year": "2008-01-01T00:00:00.000",
          "value": 4000,
          "dateYear": 2008,
          "log2Mass": 11.965784284662087,
          "dateNormal": 0.9956597222222222,
          "massNormal": 0.00017386957277693794,
          "logMassNormal": 0.48929545774630756
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -7.015,
              31.16333
            ]
          },
          "id": "48691",
          "mass": "100000",
          "name": "Tamdakht",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "31.163330",
          "reclong": "-7.015000",
          "year": "2008-01-01T00:00:00.000",
          "value": 100000,
          "dateYear": 2008,
          "log2Mass": 16.609640474436812,
          "dateNormal": 0.9956597222222222,
          "massNormal": 0.004347782797729687,
          "logMassNormal": 0.6791883795998638
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              29.41822,
              36.54194
            ]
          },
          "id": "53654",
          "mass": "5760",
          "name": "Kemer",
          "nametype": "Valid",
          "recclass": "L4",
          "reclat": "36.541940",
          "reclong": "29.418220",
          "year": "2008-01-01T00:00:00.000",
          "value": 5760,
          "dateYear": 2008,
          "log2Mass": 12.491853096329674,
          "dateNormal": 0.9956597222222222,
          "massNormal": 0.000250391315234405,
          "logMassNormal": 0.5108070506254213
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              26.70972,
              45.275
            ]
          },
          "id": "51706",
          "mass": "6913",
          "name": "Pleşcoi",
          "nametype": "Valid",
          "recclass": "L5-6",
          "reclat": "45.275000",
          "reclong": "26.709720",
          "year": "2008-01-01T00:00:00.000",
          "value": 6913,
          "dateYear": 2008,
          "log2Mass": 12.75509621030718,
          "dateNormal": 0.9956597222222222,
          "massNormal": 0.0003005217521965979,
          "logMassNormal": 0.5215713813945536
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -79.61667,
              43.2
            ]
          },
          "id": "50911",
          "mass": "215",
          "name": "Grimsby",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "43.200000",
          "reclong": "-79.616670",
          "year": "2009-01-01T00:00:00.000",
          "value": 215,
          "dateYear": 2009,
          "log2Mass": 7.7481928495894605,
          "dateNormal": 0.9965277777777778,
          "massNormal": 0.000009304348230623835,
          "logMassNormal": 0.31683301962129634
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              14.05217,
              46.42137
            ]
          },
          "id": "51589",
          "mass": "3667",
          "name": "Jesenice",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "46.421370",
          "reclong": "14.052170",
          "year": "2009-01-01T00:00:00.000",
          "value": 3667,
          "dateYear": 2009,
          "log2Mass": 11.840384550711667,
          "dateNormal": 0.9965277777777778,
          "massNormal": 0.0001593913112778831,
          "logMassNormal": 0.4841677102652515
        },
        {
          ":@computed_region_cbhk_fwbd": "23",
          ":@computed_region_nnqa_25f4": "774",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -97.01,
              31.805
            ]
          },
          "id": "48954",
          "mass": "9500",
          "name": "Ash Creek",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "31.805000",
          "reclong": "-97.010000",
          "year": "2009-01-01T00:00:00.000",
          "value": 9500,
          "dateYear": 2009,
          "log2Mass": 13.213711798105672,
          "dateNormal": 0.9965277777777778,
          "massNormal": 0.0004130000179565225,
          "logMassNormal": 0.540324729994452
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              11.46745,
              54.76183
            ]
          },
          "id": "48973",
          "mass": "25.81",
          "name": "Maribo",
          "nametype": "Valid",
          "recclass": "CM2",
          "reclat": "54.761830",
          "reclong": "11.467450",
          "year": "2009-01-01T00:00:00.000",
          "value": 25.81,
          "dateYear": 2009,
          "log2Mass": 4.689858236319245,
          "dateNormal": 0.9965277777777778,
          "massNormal": 0.000001078695699073726,
          "logMassNormal": 0.19177400142893505
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              106.63241,
              26.46469
            ]
          },
          "id": "54719",
          "mass": "1600",
          "name": "Huaxi",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "26.464690",
          "reclong": "106.632410",
          "year": "2010-01-01T00:00:00.000",
          "value": 1600,
          "dateYear": 2010,
          "log2Mass": 10.643856189774725,
          "dateNormal": 0.9973958333333334,
          "massNormal": 0.00006952174215311922,
          "logMassNormal": 0.4352402118127242
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              0,
              0
            ]
          },
          "id": "53653",
          "mass": "24.54",
          "name": "Mason Gully",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "0.000000",
          "reclong": "0.000000",
          "year": "2010-01-01T00:00:00.000",
          "value": 24.54,
          "dateYear": 2010,
          "log2Mass": 4.61706334388818,
          "dateNormal": 0.9973958333333334,
          "massNormal": 0.000001023478305368622,
          "logMassNormal": 0.1887973298321299
        },
        {
          ":@computed_region_cbhk_fwbd": "40",
          ":@computed_region_nnqa_25f4": "2770",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -77.21163,
              38.70066
            ]
          },
          "id": "52843",
          "mass": "329.7",
          "name": "Lorton",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "38.700660",
          "reclong": "-77.211630",
          "year": "2010-01-01T00:00:00.000",
          "value": 329.7,
          "dateYear": 2010,
          "log2Mass": 8.365010076783024,
          "dateNormal": 0.9973958333333334,
          "massNormal": 0.000014291304969187173,
          "logMassNormal": 0.3420554254699746
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              21.17633,
              48.76367
            ]
          },
          "id": "53810",
          "mass": "4300",
          "name": "Košice",
          "nametype": "Valid",
          "recclass": "H5",
          "reclat": "48.763670",
          "reclong": "21.176330",
          "year": "2010-01-01T00:00:00.000",
          "value": 4300,
          "dateYear": 2010,
          "log2Mass": 12.070120944476823,
          "dateNormal": 0.9973958333333334,
          "massNormal": 0.00018691305160491528,
          "logMassNormal": 0.4935619105344638
        },
        {
          ":@computed_region_cbhk_fwbd": "41",
          ":@computed_region_nnqa_25f4": "2996",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -90.36556,
              42.9075
            ]
          },
          "id": "52090",
          "mass": "3584",
          "name": "Mifflin",
          "nametype": "Valid",
          "recclass": "L5",
          "reclat": "42.907500",
          "reclong": "-90.365560",
          "year": "2010-01-01T00:00:00.000",
          "value": 3584,
          "dateYear": 2010,
          "log2Mass": 11.807354922057604,
          "dateNormal": 0.9973958333333334,
          "massNormal": 0.00015578261546880936,
          "logMassNormal": 0.48281708861881284
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              37.15028,
              -1.00278
            ]
          },
          "id": "54493",
          "mass": "14200",
          "name": "Thika",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "-1.002780",
          "reclong": "37.150280",
          "year": "2011-01-01T00:00:00.000",
          "value": 14200,
          "dateYear": 2011,
          "log2Mass": 13.793603309279407,
          "dateNormal": 0.9982638888888888,
          "massNormal": 0.0006173478529281675,
          "logMassNormal": 0.5640371984505858
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -7.61123,
              29.48195
            ]
          },
          "id": "54823",
          "mass": "7000",
          "name": "Tissint",
          "nametype": "Valid",
          "recclass": "Martian (shergottite)",
          "reclat": "29.481950",
          "reclong": "-7.611230",
          "year": "2011-01-01T00:00:00.000",
          "value": 7000,
          "dateYear": 2011,
          "log2Mass": 12.77313920671969,
          "dateNormal": 0.9982638888888888,
          "massNormal": 0.00030430436105671136,
          "logMassNormal": 0.522309181439979
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -11.34133,
              17.17493
            ]
          },
          "id": "57167",
          "mass": "3599",
          "name": "Boumdeid (2011)",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "17.174930",
          "reclong": "-11.341330",
          "year": "2011-01-01T00:00:00.000",
          "value": 3599,
          "dateYear": 2011,
          "log2Mass": 11.813380386924727,
          "dateNormal": 0.9982638888888888,
          "massNormal": 0.00015643478941020824,
          "logMassNormal": 0.48306347719812837
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              22.005,
              54.00883
            ]
          },
          "id": "53829",
          "mass": "1066",
          "name": "Sołtmany",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "54.008830",
          "reclong": "22.005000",
          "year": "2011-01-01T00:00:00.000",
          "value": 1066,
          "dateYear": 2011,
          "log2Mass": 10.057991722759176,
          "dateNormal": 0.9982638888888888,
          "massNormal": 0.00004630434983931956,
          "logMassNormal": 0.411283501935118
        },
        {
          ":@computed_region_cbhk_fwbd": "8",
          ":@computed_region_nnqa_25f4": "1187",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -120.90806,
              38.80389
            ]
          },
          "id": "55529",
          "mass": "992.5",
          "name": "Sutter's Mill",
          "nametype": "Valid",
          "recclass": "C",
          "reclat": "38.803890",
          "reclong": "-120.908060",
          "year": "2012-01-01T00:00:00.000",
          "value": 992.5,
          "dateYear": 2012,
          "log2Mass": 9.95492329203032,
          "dateNormal": 0.9991319444444444,
          "massNormal": 0.00004310869752646511,
          "logMassNormal": 0.4070689085751732
        },
        {
          ":@computed_region_cbhk_fwbd": "10",
          ":@computed_region_nnqa_25f4": "2397",
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              -117.18913,
              40.66813
            ]
          },
          "id": "56133",
          "mass": "2900",
          "name": "Battle Mountain",
          "nametype": "Valid",
          "recclass": "L6",
          "reclat": "40.668130",
          "reclong": "-117.189130",
          "year": "2012-01-01T00:00:00.000",
          "value": 2900,
          "dateYear": 2012,
          "log2Mass": 11.501837184902296,
          "dateNormal": 0.9991319444444444,
          "massNormal": 0.00012604348374102103,
          "logMassNormal": 0.47032409714456086
        },
        {
          "fall": "Fell",
          "geolocation": {
            "type": "Point",
            "coordinates": [
              61.11667,
              54.81667
            ]
          },
          "id": "57165",
          "mass": "100000",
          "name": "Chelyabinsk",
          "nametype": "Valid",
          "recclass": "LL5",
          "reclat": "54.816670",
          "reclong": "61.116670",
          "year": "2013-01-01T00:00:00.000",
          "value": 100000,
          "dateYear": 2013,
          "log2Mass": 16.609640474436812,
          "dateNormal": 1,
          "massNormal": 0.004347782797729687,
          "logMassNormal": 0.6791883795998638
        }
      ];
    
    
    return {
        meteorites
    };
})();