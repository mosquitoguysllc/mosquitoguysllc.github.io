# Mosquito Guys Website

The website for Mosquito Guys, a family-owned mosquito and tick control business in Saint Michael, Minnesota.
Phone: **612-707-1770**

## What is in this folder

| File | What it is |
|------|------------|
| `index.html` | The **Home** page |
| `services.html` | The **Our Services** page |
| `about.html` | The **About Us** page |
| `contact.html` | The **Contact Us** page with the quote request form |
| `styles.css` | The colors, text sizes and layout for every page |
| `script.js` | Makes the quote form work and keeps the footer year current |
| `images/` | Put your photos in this folder |

You can open any `.html` file and change the words. Everything you are meant to change is marked
with a note that starts with `<!--` (for example `<!-- PHOTO: ... -->`). Those notes do not show on the website.

## Your live website

**https://mosquitoguysmn.com** (also reachable at https://mosquitoguysllc.github.io)

GitHub hosts the site for free. Any change saved to this project shows up on the live site
within a few minutes.

**To make a change:** ask Claude, or on github.com open the file (for example `services.html`),
tap the pencil icon, change the words, and tap **Commit changes**.

If the site ever stops showing: open this project on github.com, tap **Settings**, then **Pages**,
and make sure **Branch** is set to **main** and **/ (root)**.

The address mosquitoguysmn.com was bought through Cloudflare. The `CNAME` file in this project tells
GitHub to use it. In Cloudflare, the DNS records for mosquitoguysmn.com point to GitHub:
four **A** records for `@` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
and a **CNAME** record for `www` pointing to `mosquitoguysllc.github.io`, all set to **DNS only** (gray cloud).

## The quote form

Online quote requests are emailed to **mosquitoguysllc@gmail.com** using a free service called FormSubmit.

**One-time setup after the website is live:**

1. Fill out the quote form on your live website once yourself.
2. Check the mosquitoguysllc@gmail.com inbox (and the Spam folder) for an email from **FormSubmit**.
3. Click **Activate Form** in that email.

After that, every quote request goes straight to that inbox.

**Getting a phone alert for each request:** install the Gmail app on the phone (612-205-5085),
sign in as mosquitoguysllc@gmail.com, and turn on notifications. The phone will buzz each time a request arrives.

## Changing the cover

The top of the Home page shows `images/cover-trees-lawn.jpg`, a photo of green trees and lawn under a blue sky.
To use a photo instead (a wide, sideways photo of a green yard works best):

1. Put your photo in the `images` folder, for example `images/cover.jpg`.
2. Open `styles.css` and search for `hero-cover`.
3. Replace the lines inside `background: ... ;` with:
   `background: url("images/cover.jpg") center / cover no-repeat;`

## Adding photos

1. Put the photo in the `images` folder (for example `images/hero.jpg`). Photos taken on a phone work fine.
2. In the page, find the note like `<!-- PHOTO: ... -->`.
3. Replace the `<div class="photo-slot" ...> ... </div>` box below the note with:

```html
<img src="images/hero.jpg" alt="Our team treating a backyard in Saint Michael">
```

The `alt` words describe the picture for people who cannot see it, and help Google too.

## Customer reviews

The Home and About Us pages show three real 5-star Google reviews, copied word for word.
To add or change one, look for `<!-- REVIEW 1 -->` (and 2, 3) in `index.html` and `about.html`,
change the words inside the quote marks and the name below it.
Use the customer's first name and last initial, and always copy reviews exactly as written.

## Other things to fill in

- **Your story** on the About Us page (look for `<!-- STORY -->`). Tell it in your own words.
- Read every page once and make sure everything we say about your service is true for your business.
