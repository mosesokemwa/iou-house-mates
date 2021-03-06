define({ "api": [
  {
    "type": "post",
    "url": "/iou",
    "title": "POST a new iou entry",
    "name": "PostIOU",
    "group": "IOU",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "lender",
            "description": "<p>Username - Unique.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "borrower",
            "description": "<p>Username - Unique.</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount float</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 OK\n {\n   \"name\": \"Adam\",\n   \"owes\": {\n     \"Bob\": 12.0,\n     \"Chuck\": 4.0,\n     \"Dan\": 9.5\n   },\n   \"owed_by\": {\n      \"Bob\": 6.5,\n      \"Dan\": 2.75,\n   },\n   \"balance\": \"<(total owed by other users) - (total owed to other users)>\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/routes.js",
    "groupTitle": "IOU",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/iou"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users",
    "title": "GET users",
    "name": "GetUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>Username - Unique.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n \"users\": [\"Adam\", \"Bob\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"users\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/routes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/add",
    "title": "POST a new user",
    "name": "PostUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Username - Unique.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"users\": {\n       \"username\": \"me\",\n       \"createdAt\": \"2021-02-07T22:30:20.492Z\",\n       \"updatedAt\": \"2021-02-07T22:30:20.492Z\",\n       \"id\": \"IsB_9W4AABY\",\n        \"lastSeen\": null,\n        \"metadata\": null\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"errors\": \"A user with that name already exists, try using a different name\"\n }",
          "type": "json"
        },
        {
          "title": "NotFoundError:",
          "content": "Error 404: Not Found\n{\n   \"status\": 404,\n    \"message\": \"No user data provided\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/routes.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/add"
      }
    ]
  }
] });
