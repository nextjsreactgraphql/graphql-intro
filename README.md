# Vorbereitung GraphQL Training Workspace

## Schritt 1: Klonen des Repositories

* `git clone https://github.com/nextjsreactgraphql/graphql-intro.git`
* Dieses Workspace enthält den Source-Code für unsere Übungen
  * Das soll der Ersatz für einen "echten" React/Next.js-Client sein
  * Das **GraphQL Backend** läuft in der Cloud (Link gebe ich euch)

## Schritt 2: Installation der Client-Packages

* Im Root-Verzeichnisses dieses Workspaces die benötigten Packages installieren:
* ```bash
  npm install
  ```

## Schritt 3: Hello-World-Test ausführen

* Im Root-Verzeichnis des Workspaces einmal den Hello-World-Test ausführen:
* ```bash
  npm run hello-world-test
  ```
  
## Schritt 4: (Optional) IntelliJ GraphQL Plug-in installieren

* Für IntelliJ und Webstorm gibt es ein sehr nützliches GraphQL Plug-in, das du installieren kannst, wenn du möchtest:
  * https://plugins.jetbrains.com/plugin/8097-graphql
* Falls du auch Backend-seitig mit GraphQL (und Java und Spring Boot) arbeitest, empfehle ich dir außerdem das "Spring GraphQL" Plug-in (für unseren Workshop _nicht_ benötigt):
  * https://plugins.jetbrains.com/plugin/22807-spring-graphql

# Übungen zum Apollo GraphQL Client

* Für die Übungen mit dem Apollo Client:
  * die genaue Beschreibung gebe ich dir jeweils bei der Übung
  * den GraphQL-Query musst du in einer Datei ablegen, die die Endung `.graphql` trägt und im `src`-Verzeichnis liegt
  * Die Queries brauchen alle einen Operationsnamen (zum Beispiel `query GetStory { ... }`)
  * Nach dem Anlegen oder Ändern einer `.graphql`-Datei kannst du den Code-Generator ausführen, in dem du das Script `graphql:codegen` aus der `package.json`-Datei ausführst.
    * Das Ergebnis wird in die Datei `_generated-graphl-types.ts` geschrieben
  * Den Code zum Ausführen und Testen des Clients schreibst du am besten jeweils in eine neue TypeScript-Datei im `src`-Verzeichnis.
    * Wichtig: Die Datei muss die Endung `.test.ts` haben.
  * Das fertige Apollo `client`-Objekt bekommst du aus der Datei `graphql-client.ts`. 
  * Du kannst das Ergebnis des Queries zum Überprüfen einfach mit console.log ausgeben, oder du verwendest die [expect-Funktion von Vitest](https://vitest.dev/api/expect), um das Ergebnis zu überprüfen
  * Du findest eine Vorlage in `src/test-template.test.ts`. Am besten diese Datei für jede Übung kopieren und dann darin deinen Code schreiben.
