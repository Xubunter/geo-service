```
GET /countries
  req: {
    ?q: string,
    ?limit: number,
    ?offset: number,
  }
  res: [
    count: number,
    items: {
      id: number,
      name: string,
    }
  ]

GET /cities
  req: {
    country_id: number,
    ?q: string,
    ?limit: number,
    ?offset: number,
  }
  res: [
    count: number,
    items: {
      id: number,
      country_id: number,
      name: string,
      ?region: string,
      ?area: string,
    }
  ]
```
