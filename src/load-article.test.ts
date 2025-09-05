import {expect, test} from "vitest";
import {client} from "../graphql-client";
import {HelloWorldDocument, LoadArticlesDocument} from "../_generated-graphql-types";

test("load article", async () => {

	const result = await client.query({
		query: LoadArticlesDocument,
		variables: {
			ps: 2
		}
	})

	console.log(
		result.data.articles
	)

})