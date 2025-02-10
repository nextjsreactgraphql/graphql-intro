import {expect, test} from "vitest";
import {client} from "../graphql-client";

// DIESE DATEI KANNST DU ALS VORLAGE FÜR EIGENE TESTS
// IN DEN ÜBUNGEN VERWENDEN
//
// KOPIERE DIR DIE DATEI FÜR JEDE ÜBUNG UND SCHREIB
// DEN CODE IN DIE 'test'-FUNKTION
//
// Du kannst den Test aus IntelliJ/Webstorm ausführen
// oder von der Kommandozeile:
//   pnpm vitest NAME_DER_TEST_DATEI

test("Mein GraphQL Query funktioniert", async () => {
	// ... hier den "client" verwenden, um den Query auszuführen
	//
	// ... dann das Ergebnis mit expect überprüfen
	//     und/oder das Ergebnis nur mit console.log ausgeben
	//     und überprüfen
	//
	// Wenn Du expect verwenden möchtest, sieht so die API aus
	//
	//   expect(zuPruefenderWert).toXyz(erwarteterWert)
	//
	// Es gibt viele Funktionen, die du zum prüfen des Wertes verwenden
	// kannst, insb.:
	//  - https://vitest.dev/api/expect#tobe
	//  - https://vitest.dev/api/expect#tobedefined
	//  - https://vitest.dev/api/expect#tobetruthy
	//  - https://vitest.dev/api/expect#tobenull
	//  - https://vitest.dev/api/expect#toequal
	//  - https://vitest.dev/api/expect#tostrictequal
	//  - https://vitest.dev/api/expect#tohavelength
	//  - https://vitest.dev/api/expect#tohaveproperty
	//  Mit 'not' kannst du die Bedingung umdrehen:
	//  - https://vitest.dev/api/expect#not
	//
	// BEISPIEL:
	expect("hello").toBe("hello");
	expect({greeting: "Hello"}).not.toBe({greeting: "Hello"})
	expect("hello").not.toBe("moin")

	// Bei Objekten ist meistens toEqual/toStrictEqual eine gute Wahl,
	//  weil toBe per Referenz vergleicht:
	expect({greeting: "Hello"}).toEqual({greeting: "Hello"})
	expect({greeting: "Hello"}).toStrictEqual({greeting: "Hello"})
	// zwei Unterschiedliche Referenzen:
	expect({greeting: "Hello"}).not.toBe({greeting: "Hello"})

})