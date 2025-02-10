import {expect, test} from "vitest";
import {client} from "../graphql-client";
import {HelloWorldDocument} from "../_generated-graphql-types";

test("hello world", async () => {
	const result = await client.query({query: HelloWorldDocument});
	expect(result.data).toBe("World")
})