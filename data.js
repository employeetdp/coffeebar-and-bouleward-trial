var APP_DATA = {
  "scenes": [
    {
      "id": "0-coffee-bar-zoom",
      "name": "COFFEE BAR ZOOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.058462687147560644,
        "pitch": -0.04563585158419414,
        "fov": 1.2681200091521299
      },
      "linkHotspots": [
        {
          "yaw": -3.019651426163737,
          "pitch": 0.1717972951060922,
          "rotation": 0,
          "target": "1-bouleward"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bouleward",
      "name": "BOULEWARD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5637661763872392,
          "pitch": 0.16954669904012576,
          "rotation": 0,
          "target": "0-coffee-bar-zoom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "COFFEE BAR AND BOULEWARD STREEET VIEW ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
