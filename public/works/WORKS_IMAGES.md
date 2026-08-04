# Works images – where to add your images

Add images under `public/works/` so they are served at `/works/...`.

## Recent Projects (development)

Create these **folders** and add **JPEG/PNG** files as listed. Use any size; **16:9 or 4:3** works well for section images; **square (1:1)** is fine for card/hero.

| Project                         | Folder                                    | Files to add       | Used for               |
| ------------------------------- | ----------------------------------------- | ------------------ | ---------------------- |
| **sandwiches**                        | `public/works/sandwiches/`                      | `1.jpeg`, `2.jpeg` | Card + detail sections |
| **AI Research Paper Gen Agent** | `public/works/ai-research-paper-gen/`     | `1.jpeg`, `2.jpeg` | Card + detail sections |
| **Talk to your database**       | `public/works/talk-to-your-db/`           | `1.jpeg`, `2.jpeg` | Card + detail sections |
| **akankshaML**                     | `public/works/akankshaml/`                   | `1.jpeg`, `2.jpeg` | Card + detail sections |
| **Event Workflow Automation**   | `public/works/event-workflow-automation/` | `1.jpeg`, `2.jpeg` | Card + detail sections |
| **gre**                | `public/works/gre/`              | `1.jpeg`, `2.jpeg` | Card + detail sections |
| **gre**                   | `public/works/gre/`                 | `1.jpeg`, `2.jpeg` | Card + detail sections |

## Per project

- **`1.jpeg`** – Main/hero image (used on the Works grid card and top of the detail page).
- **`2.jpeg`** – Second section image on the detail page (and more if you add sections).

You can use `.png` or `.webp` instead of `.jpeg`; if you do, rename the file in the folder and update the path in the component (e.g. `1.png` → use `/works/sandwiches/1.png` in the code).

## Example structure

```
public/works/
├── sandwiches/
│   ├── 1.jpeg    ← card + hero
│   └── 2.jpeg    ← section 2
├── ai-research-paper-gen/
│   ├── 1.jpeg
│   └── 2.jpeg
├── talk-to-your-db/
│   ├── 1.jpeg
│   └── 2.jpeg
├── akankshaml/
│   ├── 1.jpeg
│   └── 2.jpeg
├── event-workflow-automation/
│   ├── 1.jpeg
│   └── 2.jpeg
├── gre/
│   ├── 1.jpeg
│   └── 2.jpeg
└── gre/
    ├── 1.jpeg
    └── 2.jpeg
```

Until these files exist, the detail pages will show broken image placeholders; adding the images will fix them.
