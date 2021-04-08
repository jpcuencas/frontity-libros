const settings = {
  "name": "donalibros",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/home"
            ],
            [
              "Libros",
              "/libros/"
            ],
            [
              "Terror",
              "/genero/terror/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "Sample",
              "/pagina-ejemplo/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost/jaime_prueba_wordpress/",
          "postTypes": [
            {
              type: "libros",
              endpoint: "libros",
              archive: "/libros"
            }
          ],
          "taxonomies": [
            {
              taxonomy: "genero",
              endpoint: "genero",
              postTypeEndpoint: "libros",
              params: {
                per_page: 5,
                _embed: true
              }
            }
          ]
        },
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
