import { expect, test } from "vitest";
import { client } from "../graphql-client";
import {
  G_StoryOrderBy,
  GetStoriesDocument,
} from "../_generated-graphql-types";

test("Mein GraphQL Query funktioniert", async () => {
  const result = await client.query({
    query: GetStoriesDocument,
    variables: {
      pageNo: 1,
      o: G_StoryOrderBy.Category,
    },
  });

  console.log("TITLE", result.data.stories.results[0].title);
  console.log("LIKES", result.data.stories.results[0].likes);
  console.log("IMAGE", result.data.stories.results[0].image.uri);

	const eineStory = result.data.stories.results[0];

	logStory(eineStory)

});

type Title = {
	id: string,
	title: string,
}

function logStory(t: Title) {
	//7 ....
	console.log(t.id);

}


