---
title: "Guide to Adding Comments in Frontmatter"
# This file demonstrates how to add comments in YAML frontmatter
date: 2023-06-15 # Current date
layout: page # Using the page layout
published: false
---

# Guide to Adding Comments in Frontmatter

Frontmatter is the YAML section at the top of markdown files in Jekyll, enclosed between triple dashes (`---`). This guide explains how to add comments within the frontmatter section.

## Basic Syntax

In YAML (the language used for frontmatter), comments are added using the hash symbol (`#`). There are two main ways to add comments:

1. **Standalone comments** - Full lines that are entirely comments
2. **Inline comments** - Comments that appear after a property on the same line

## Examples

### Standalone Comments

```yaml
---
# This is a standalone comment
# Another standalone comment
title: "My Page Title"
# Comments can appear between properties
layout: default
---
```

### Inline Comments

```yaml
---
title: "My Page Title" # This comment explains the title
layout: default # This explains the layout
date: 2023-06-15 # Publication date in YYYY-MM-DD format
---
```

### Combining Both Styles

```yaml
---
# Page configuration
title: "My Page Title" # The title that appears in the browser tab
# The layout determines which template is used
layout: default # Using the default template
# Additional metadata
author: John Doe # Content creator
categories: [tutorial, yaml] # For categorization
---
```

## Best Practices

1. **Be concise** - Keep comments short and to the point
2. **Document non-obvious settings** - Focus on explaining complex or custom settings
3. **Use comments for reminders** - Comment out properties you might need later
4. **Maintain consistent style** - Choose a comment style and stick with it
5. **Don't over-comment** - Avoid commenting obvious properties

## Using Comments for Temporary Settings

You can comment out properties you might want to use later:

```yaml
---
title: "My Draft Post"
date: 2023-06-15
# draft: true # Uncomment to mark as draft
# categories: [news, announcement] # Uncomment when ready to categorize
---
```

## Limitations

- Comments must start with `#` and cannot be added in the middle of a value
- Multi-line comments require `#` at the beginning of each line
- Comments are not rendered in the final HTML output

## Real-World Example

Here's a comprehensive example showing various comment styles:

```yaml
---
# Post metadata - Last updated: 2023-06-15
title: "Complete Guide to YAML Frontmatter" # Main article title
date: 2023-06-15 # Publication date
author: John Doe # Content author
layout: post # Using blog post layout
# SEO and social media settings
description: "Learn how to use YAML frontmatter in Jekyll" # For search engines
# image: /assets/images/yaml-guide.jpg # Uncomment when image is ready
# Categories and tags for organization
categories: 
  - Tutorials # Primary category
  - Jekyll # Secondary category
tags: [yaml, frontmatter, jekyll, markdown] # Related topics
# Publication settings
# draft: true # Uncomment to prevent publication
published: true # This post is ready to publish
---
```