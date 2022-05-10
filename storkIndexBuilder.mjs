// A Node script that builds an index file for Stork dynamically.

import toml from "@iarna/toml"
import fs from "fs"
import { globby } from "globby"
import matter from "gray-matter"
import { spawn } from "child_process"

const POSTS_PATH = "posts"
const URL_PREFIX = POSTS_PATH + "/"
const CONFIG_NAME = "stork-config"

// Get the paths of all files in the directory
let postFilePaths = await globby([`${POSTS_PATH}/*.mdx`])

// Strip the paths of /posts
postFilePaths = postFilePaths.map(p => p.split("/")[1])

// Remove .mdx to obtain the url
const postFileURLs = postFilePaths.map(filePath => filePath.split(".")[0])

// Get the title of all files in the directory by parsing their frontmatter
const postTitles = postFilePaths.map(filePath => {
  const source = fs.readFileSync("posts/" + filePath)
  const { content, data } = matter(source)
  return data.title
})

// Return the above in an array of objects with props path, url and title
const indexData = postFilePaths.map((filePath, i) => ({
  path: filePath,
  url: postFileURLs[i],
  title: postTitles[i],
  filetype: "Markdown"
}))

const storkConfig = {
  input: {
    base_directory: POSTS_PATH,
    url_prefix: URL_PREFIX,
    frontmatter_handling: "Omit",
    files: indexData
  }
}

const tomlConfig = toml.stringify(storkConfig)

try {
  fs.writeFileSync(`${CONFIG_NAME}.toml`, tomlConfig)
  console.log("✅  Stork config generated successfully!")
} catch (err) {
  console.error(err)
}
