# Übung 1:
* Versuche einen Query auszuführen, der die Stories zurückliefert und folgende Felder abfragt:
* Id, Titel, Excerpt (mit maximal Länge 125), Veröffentlichungsdatum, Likes, Image und den Kommentaren?
* Kannst Du den Query so erweitern, dass er nur die ersten fünf Stories zurückliefert, sortiert nach Likes?

# Referenz

- Operationen (query, mutation, subscription): https://spec.graphql.org/October2021/#sec-Language.Operations
- Felder auswählen: https://spec.graphql.org/October2021/#sec-Language.Fields
- Argumente: https://spec.graphql.org/October2021/#sec-Language.Arguments


# Lösung

```graphql
query {
    stories {
        results {
            id
            title
            excerpt(maxLength:125)
            likes
            image { uri }
            comments { id text }
        }
    }
}
```

* Kannst Du den Query so erweitern, dass er nur die ersten fünf Stories zurückliefert, sortiert nach Likes??

```graphql
query {
  stories(orderBy: LIKES, pageSize: 5) {
    results {
      id
      title
      excerpt(maxLength:125)
      likes
      image { uri }
      comments { id text }
    }
  }
}
```



