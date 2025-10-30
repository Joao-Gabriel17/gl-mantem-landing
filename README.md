# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0d75c86a-f6cc-4bd6-8c1c-c296d7a9a15c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0d75c86a-f6cc-4bd6-8c1c-c296d7a9a15c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0d75c86a-f6cc-4bd6-8c1c-c296d7a9a15c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Builder preview & network troubleshooting checklist

Follow this checklist to make sure Builder can load your models without network interference:

1. Temporarily disable any VPN, corporate proxy, or traffic-filtering browser extensions.
2. At the operating system, antivirus, and DNS/firewall layers, allow outbound access to the following wildcard domains:
   - `*.builder.io`
   - `*.builder.my`
   - `*.builder.codes`
3. Re-enable security tooling once the allow-lists are in place.

### Configure the Builder model preview

- Set the **Preview URL** in the Builder model documentation to your site domain:
  - Development: `http://localhost:5173`
  - Production (deployed): use the full `https://` URL of your live site.
- Update the preview instructions to read: `Open in new tab (use site domain)` so editors always launch the Builder preview using your own origin.

### Browser cache reset

- In the browser devtools, open **Application → Clear storage** and click **Clear site data** for your domain.
- Retry loading the Builder preview in an **incognito/private window** to rule out cached credentials or extensions.

### Current status

- The application loads without runtime errors on our side; observed blocking happens before Builder loads, indicating a network or proxy filtering issue.
